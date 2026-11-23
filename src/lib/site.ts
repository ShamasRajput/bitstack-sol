const configuredUrl = new URL(
  process.env.SITE_URL || "https://bitstack-sol.vercel.app",
);
if (!["https:", "http:"].includes(configuredUrl.protocol))
  throw new Error("SITE_URL must use HTTP or HTTPS.");

export const site = {
  name: "Bitstack Solutions",
  url: configuredUrl.origin,
  owner: "Shamas Rajput",
  email: "shamasrajput18@gmail.com",
  description:
    "Bitstack Solutions develops business websites, automates repetitive workflows, and connects business tools through APIs. Contact Shamas Rajput about your project.",
};

export const publicPaths = [
  "/",
  "/services",
  "/web-development",
  "/automation",
  "/integrations",
  "/work",
  "/work/bitstack-website",
  "/about",
  "/contact",
  "/resources",
  "/resources/website-project-brief",
  "/resources/reliable-lead-intake",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
