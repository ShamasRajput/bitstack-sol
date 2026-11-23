import { absoluteUrl, site } from "@/lib/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": absoluteUrl("/#organization"),
            name: site.name,
            url: site.url,
            description: site.description,
            email: site.email,
            logo: {
              "@type": "ImageObject",
              url: absoluteUrl("/assets/bitstack-logo.png"),
              width: 2172,
              height: 724,
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "project inquiries",
              email: site.email,
              availableLanguage: "English",
            },
          },
          {
            "@type": "Person",
            "@id": absoluteUrl("/about#shamas-rajput"),
            name: site.owner,
            url: absoluteUrl("/about"),
            email: site.email,
            worksFor: { "@id": absoluteUrl("/#organization") },
          },
          {
            "@type": "WebSite",
            "@id": absoluteUrl("/#website"),
            name: site.name,
            url: site.url,
            publisher: { "@id": absoluteUrl("/#organization") },
            inLanguage: "en",
          },
        ],
      }}
    />
  );
}

type PageSchemaProps = {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  service?: string;
  article?: { published: string; section: string };
  parents?: { name: string; path: string }[];
};
export function PageSchema({
  title,
  description,
  path,
  type = "WebPage",
  service,
  article,
  parents = [],
}: PageSchemaProps) {
  const url = absoluteUrl(path);
  const mainEntity = service
    ? { "@id": `${url}#service` }
    : article
      ? { "@id": `${url}#article` }
      : undefined;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": type,
            "@id": `${url}#webpage`,
            url,
            name: title,
            description,
            isPartOf: { "@id": absoluteUrl("/#website") },
            about: { "@id": absoluteUrl("/#organization") },
            mainEntity,
            inLanguage: "en",
            breadcrumb:
              path === "/" ? undefined : { "@id": `${url}#breadcrumb` },
          },
          ...(path === "/"
            ? []
            : [
                {
                  "@type": "BreadcrumbList",
                  "@id": `${url}#breadcrumb`,
                  itemListElement: [
                    { name: "Home", path: "/" },
                    ...parents,
                    { name: title, path },
                  ].map((item, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: item.name,
                    item: absoluteUrl(item.path),
                  })),
                },
              ]),
          ...(service
            ? [
                {
                  "@type": "Service",
                  "@id": `${url}#service`,
                  name: service,
                  serviceType: service,
                  description,
                  url,
                  provider: { "@id": absoluteUrl("/#organization") },
                },
              ]
            : []),
          ...(article
            ? [
                {
                  "@type": "Article",
                  "@id": `${url}#article`,
                  headline: title,
                  description,
                  url,
                  mainEntityOfPage: { "@id": `${url}#webpage` },
                  image: absoluteUrl("/social-image"),
                  author: {
                    "@id": absoluteUrl("/about#shamas-rajput"),
                    "@type": "Person",
                    name: site.owner,
                    url: absoluteUrl("/about"),
                  },
                  publisher: { "@id": absoluteUrl("/#organization") },
                  datePublished: article.published,
                  dateModified: article.published,
                  articleSection: article.section,
                  inLanguage: "en",
                },
              ]
            : []),
        ],
      }}
    />
  );
}
