import type { MetadataRoute } from "next";
import { absoluteUrl, publicPaths } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({ url: absoluteUrl(path) }));
}
