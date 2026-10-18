import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, readdir, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createInquiryHandler } from '../src/lib/inquiries';

const brief = { service: 'Web development', description: 'Build a responsive agency website.', name: 'Test Person', email: 'test@example.com' };
const request = (body: unknown, headers: Record<string, string> = {}) => new Request('http://localhost:3000/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) });

test('valid submissions persist privately and discard unknown fields', async t => {
  const dataDir = await mkdtemp(path.join(os.tmpdir(), 'bitstack-api-'));
  t.after(() => rm(dataDir, { recursive: true, force: true }));
  const handler = createInquiryHandler({ dataDir });
  const response = await handler(request({ ...brief, name: '  Test Person  ', unexpected: 'discard' }));
  assert.equal(response.status, 201);
  const { id } = await response.json();
  const saved = JSON.parse(await readFile(path.join(dataDir, `${id}.json`), 'utf8'));
  assert.equal(saved.name, brief.name);
  assert.equal(saved.email, brief.email);
  assert.equal(saved.unexpected, undefined);
  assert.ok(saved.submittedAt);
  assert.equal(response.headers.get('cache-control'), 'no-store');
});

test('invalid input, cross-origin requests, and oversized bodies do not persist', async t => {
  const dataDir = await mkdtemp(path.join(os.tmpdir(), 'bitstack-api-'));
  t.after(() => rm(dataDir, { recursive: true, force: true }));
  const handler = createInquiryHandler({ dataDir, rateLimit: 30 });
  for (const input of [null, [], {}, { ...brief, email: 'bad' }, { ...brief, service: 'other' }, { ...brief, name: 42 }, { ...brief, website: 'javascript:alert(1)' }, { ...brief, description: 'a'.repeat(5001) }]) {
    assert.equal((await handler(request(input))).status, 400);
  }
  assert.equal((await handler(request(brief, { origin: 'https://other.example' }))).status, 403);
  assert.equal((await handler(request(brief, { origin: 'invalid' }))).status, 403);
  assert.equal((await handler(request(brief, { 'sec-fetch-site': 'cross-site' }))).status, 403);
  assert.equal((await handler(request(brief, { 'content-type': 'text/plain' }))).status, 415);
  assert.equal((await handler(request({ ...brief, description: 'a'.repeat(40000) }))).status, 413);
  assert.equal((await handler(new Request('http://localhost:3000/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{broken' }))).status, 400);
  assert.deepEqual(await readdir(dataDir), []);
});

test('repeated requests are limited with a retry header', async t => {
  const dataDir = await mkdtemp(path.join(os.tmpdir(), 'bitstack-api-'));
  t.after(() => rm(dataDir, { recursive: true, force: true }));
  const handler = createInquiryHandler({ dataDir, rateLimit: 1 });
  assert.equal((await handler(request(brief))).status, 201);
  const limited = await handler(request(brief));
  assert.equal(limited.status, 429);
  assert.ok(limited.headers.get('retry-after'));
});

test('storage failure is reported without a false success', async () => {
  const handler = createInquiryHandler({ dataDir: '\u0000' });
  const response = await handler(request(brief));
  assert.equal(response.status, 500);
  assert.match((await response.json()).error, /could not save/);
});

test('origin uses the browser-facing Host header when Next normalizes its internal URL', async t => {
  const dataDir = await mkdtemp(path.join(os.tmpdir(), 'bitstack-api-'));
  t.after(() => rm(dataDir, { recursive: true, force: true }));
  const handler = createInquiryHandler({ dataDir });
  const response = await handler(request(brief, { host: '127.0.0.1:3000', origin: 'http://127.0.0.1:3000' }));
  assert.equal(response.status, 201);
});
