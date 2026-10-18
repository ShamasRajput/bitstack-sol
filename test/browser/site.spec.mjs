import { test, expect } from '@playwright/test';

test('pages render without errors or horizontal overflow on desktop and mobile', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const width of [1440, 900, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/', '/services', '/automation', '/web-development', '/integrations', '/work', '/about', '/contact']) {
      await page.goto(route);
      await expect(page).toHaveTitle(/Bitstack Solutions/);
      await expect(page.locator('h1')).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${route} overflows at ${width}px`).toBe(true);
    }
  }
  expect(errors).toEqual([]);
});

test('mobile menu opens, closes with Escape, and navigates', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.locator('.menu-toggle');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await menu.click();
  await page.getByRole('navigation').getByRole('link', { name: 'Services', exact: true }).click();
  await expect(page).toHaveURL(/services/);
});

test('brief validates, preserves answers after server failure, submits, and resets', async ({ page }) => {
  await page.goto('/contact');
  const next = page.locator('#next-step');
  await next.click();
  await expect(page.locator('#form-error')).toContainText('Choose a service');
  await page.getByRole('button', { name: 'Web development' }).click();
  await next.click();
  await next.click();
  await expect(page.locator('#form-error')).toContainText('describe the project');
  await page.locator('#project-description').fill('Browser test: build a business website.');
  await page.locator('#website').fill('invalid-url');
  await next.click();
  await expect(page.locator('#form-error')).toContainText('complete URL');
  await page.locator('#website').fill('https://example.com');
  await next.click();
  await page.locator('#prev-step').click();
  await expect(page.locator('#project-description')).toHaveValue('Browser test: build a business website.');
  await next.click();
  await next.click();
  await next.click();
  await expect(page.locator('#form-error')).toContainText('enter your name');
  await page.locator('#person-name').fill('Browser Test');
  await page.locator('#email').fill('invalid');
  await next.click();
  await expect(page.locator('#form-error')).toContainText('valid email');
  await page.locator('#email').fill('browser@example.com');
  await page.route('**/api/inquiries', route => route.abort());
  await next.click();
  await expect(page.locator('#form-error')).toContainText('could not reach the server');
  await expect(page.locator('#email')).toHaveValue('browser@example.com');
  await page.unroute('**/api/inquiries');
  const response = page.waitForResponse(response => response.url().endsWith('/api/inquiries') && response.status() === 201);
  await next.click();
  await response;
  await expect(page.locator('#success-panel')).toBeVisible();
  await expect(page.locator('#project-form')).toBeHidden();
  await page.getByRole('button', { name: 'Start again' }).click();
  await expect(page.locator('#success-panel')).toBeHidden();
  await expect(page.locator('#step-index')).toHaveText('STEP 01 / 04');
  await expect(page.locator('[data-service][aria-pressed="true"]')).toHaveCount(0);
});

test('service links preselect the brief and FAQs expand', async ({ page }) => {
  await page.goto('/contact?service=automation');
  await expect(page.locator('[data-service="AI automation"]')).toHaveAttribute('aria-pressed', 'true');
  await page.goto('/');
  const faq = page.locator('details').first();
  await faq.locator('summary').click();
  await expect(faq).toHaveAttribute('open', '');
  await expect(faq.locator('p')).toBeVisible();
});

test('Next API and legacy redirects work without exposing private files', async ({ request }) => {
  const legacy = await request.get('/web-development.html', { maxRedirects: 0 });
  expect(legacy.status()).toBe(308);
  expect(legacy.headers().location).toBe('/web-development');
  expect((await request.get('/api/inquiries')).status()).toBe(405);
  const response = await request.post('/api/inquiries', { data: { service: 'Web development', description: 'Integration test brief', name: 'API Test', email: 'api@example.com' } });
  expect(response.status()).toBe(201);
  const { id } = await response.json();
  for (const route of [`/.data/${id}.json`, '/server.mjs', '/package.json', '/.env']) {
    expect((await request.get(route)).status()).toBe(404);
  }
  const bad = await request.post('/api/inquiries', { data: { service: 'Web development' } });
  expect(bad.status()).toBe(400);
});

test('Lenis and motion run with normal motion preferences', async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: 'no-preference' });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  try {
    await page.goto('http://127.0.0.1:3100');
    await expect(page.locator('html')).toHaveClass(/lenis/);
    await expect(page.locator('[data-reveal]').first()).toHaveCSS('opacity', '1');
    await page.locator('.services-grid').scrollIntoViewIfNeeded();
    await expect(page.locator('.service-card').first()).toHaveCSS('opacity', '1');
    await page.getByRole('navigation').getByRole('link', { name: 'About', exact: true }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.locator('h1')).toContainText('Human by design.');
    expect(errors).toEqual([]);
  } finally { await context.close(); }
});
