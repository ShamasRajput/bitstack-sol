import { mkdir, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { inquirySchema, type SavedInquiry } from "./inquiry-schema";

type Options = { dataDir?: string; rateLimit?: number };
const MAX_BYTES = 32_768;

export function createInquiryHandler({
  dataDir,
  rateLimit = 10,
}: Options = {}) {
  const attempts = new Map<string, { count: number; until: number }>();
  return async function handleInquiry(request: Request): Promise<Response> {
    const json = (
      status: number,
      body: object,
      headers: Record<string, string> = {},
    ) =>
      Response.json(body, {
        status,
        headers: { "Cache-Control": "no-store", ...headers },
      });
    try {
      const origin = request.headers.get("origin");
      if (request.headers.get("sec-fetch-site") === "cross-site")
        return json(403, { error: "Please submit from this website." });
      if (origin) {
        try {
          if (
            new URL(origin).host !==
            (request.headers.get("host") || new URL(request.url).host)
          )
            return json(403, { error: "Please submit from this website." });
        } catch {
          return json(403, { error: "Invalid request origin." });
        }
      }
      if (
        request.headers.get("content-type")?.split(";")[0].trim() !==
        "application/json"
      )
        return json(415, { error: "Expected JSON." });
      const now = Date.now();
      for (const [key, entry] of attempts)
        if (now > entry.until) attempts.delete(key);
      // Only trust a forwarded address when the hosting proxy overwrites it.
      const key =
        process.env.TRUST_PROXY === "1"
          ? request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
            "direct"
          : "direct";
      const entry = attempts.get(key) || { count: 0, until: now + 900_000 };
      attempts.set(key, entry);
      if (++entry.count > rateLimit)
        return json(
          429,
          { error: "Too many submissions. Please try again in 15 minutes." },
          { "Retry-After": String(Math.ceil((entry.until - now) / 1000)) },
        );
      if (Number(request.headers.get("content-length")) > MAX_BYTES)
        return json(413, { error: "Your brief is too large." });
      const reader = request.body?.getReader();
      if (!reader) return json(400, { error: "A project brief is required." });
      const chunks: Uint8Array[] = [];
      let size = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > MAX_BYTES) {
          await reader.cancel();
          return json(413, { error: "Your brief is too large." });
        }
        chunks.push(value);
      }
      let input: unknown;
      try {
        input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
      } catch {
        return json(400, { error: "Invalid JSON." });
      }
      const parsed = inquirySchema.safeParse(input);
      if (!parsed.success)
        return json(400, {
          error: parsed.error.issues[0]?.message || "Invalid project brief.",
        });
      const record: SavedInquiry = {
        ...parsed.data,
        id: randomUUID(),
        submittedAt: new Date().toISOString(),
      };
      const directory =
        dataDir ?? process.env.DATA_DIR ?? path.join(process.cwd(), ".data");
      await mkdir(directory, { recursive: true });
      await writeFile(
        path.join(directory, `${record.id}.json`),
        JSON.stringify(record, null, 2),
        { flag: "wx", mode: 0o600 },
      );
      return json(201, { id: record.id });
    } catch (error) {
      console.error(
        "Inquiry save failed:",
        error instanceof Error ? error.name : "Unknown error",
      );
      return json(500, {
        error: "We could not save your brief. Please try again.",
      });
    }
  };
}
