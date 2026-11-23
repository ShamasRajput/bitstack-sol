import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/services",
  "/automation",
  "/web-development",
  "/integrations",
  "/work",
  "/work/bitstack-website",
  "/about",
  "/contact",
  "/resources",
  "/resources/website-project-brief",
  "/resources/reliable-lead-intake",
];
const origin = (
  process.env.SITE_URL || "https://bitstack-sol.vercel.app"
).replace(/\/$/, "");

test("public pages expose correct canonical URLs, share metadata, and parseable structured data without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  try {
    const titles = new Set();
    for (const route of routes) {
      await page.goto(`http://127.0.0.1:3100${route}`);
      await expect(page.locator("main h1")).toHaveCount(1);
      await expect(page.locator("main h1")).toBeVisible();
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
      expect(new URL(canonical).href).toBe(new URL(route, origin).href);
      expect(new URL(ogUrl).href).toBe(new URL(route, origin).href);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        "content",
        `${origin}/social-image`,
      );
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
        "content",
        "summary_large_image",
      );
      const title = await page.title();
      expect(titles.has(title), `duplicate title: ${title}`).toBe(false);
      titles.add(title);
      const nodes = (
        await page
          .locator('script[type="application/ld+json"]')
          .allTextContents()
      ).flatMap((text) => JSON.parse(text)["@graph"] || []);
      expect(nodes.find((node) => node["@type"] === "Organization")?.name).toBe(
        "Bitstack Solutions",
      );
      expect(nodes.find((node) => node["@type"] === "Person")?.name).toBe(
        "Shamas Rajput",
      );
      if (route !== "/")
        expect(nodes.some((node) => node["@type"] === "BreadcrumbList")).toBe(
          true,
        );
      if (["/automation", "/web-development", "/integrations"].includes(route))
        expect(nodes.some((node) => node["@type"] === "Service")).toBe(true);
      if (
        route.startsWith("/resources/") ||
        route === "/work/bitstack-website"
      ) {
        expect(
          nodes.find((node) => node["@type"] === "Article")?.author.name,
        ).toBe("Shamas Rajput");
        expect(
          (await page.locator("main article").innerText()).split(/\s+/).length,
        ).toBeGreaterThan(500);
      }
    }
  } finally {
    await context.close();
  }
});

test("canonical URLs strip tracking parameters and the contact person is reachable", async ({
  page,
}) => {
  await page.goto("/contact?service=automation&utm_source=example");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${origin}/contact`,
  );
  await expect(
    page.locator('main a[href="mailto:shamasrajput18@gmail.com"]'),
  ).toBeVisible();
  await page.goto("/about");
  await expect(page.locator("#shamas-rajput")).toContainText(
    "Bitstack Solutions",
  );
});

test("sitemap, robots, and the branded social image are served successfully", async ({
  request,
}) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  expect(new Set(urls).size).toBe(routes.length);
  for (const route of routes) expect(urls).toContain(`${origin}${route}`);
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${origin}/sitemap.xml`);
  const image = await request.get("/social-image");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
  const png = await image.body();
  expect(png.readUInt32BE(16)).toBe(1200);
  expect(png.readUInt32BE(20)).toBe(630);
});
