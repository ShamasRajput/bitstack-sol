import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  article = false,
): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  const image = {
    url: absoluteUrl("/social-image"),
    width: 1200,
    height: 630,
    alt: "Bitstack Solutions — web development, automation and integrations",
  };
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      type: article ? "article" : "website",
      siteName: site.name,
      locale: "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
