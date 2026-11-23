import Link from "next/link";
import { PageSchema } from "@/components/structured-data";
import { pageMetadata } from "@/lib/seo";
import { resources } from "@/lib/resources";

const description =
  "Technical guides from Shamas Rajput at Bitstack Solutions: planning a website project and designing a reliable lead-intake automation.";
export const metadata = pageMetadata(
  "Website and automation guides",
  description,
  "/resources",
);

export default function ResourcesPage() {
  return (
    <>
      <PageSchema
        title="Website and automation guides"
        description={description}
        path="/resources"
        type="CollectionPage"
      />
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">// resources</span>
          <h1>Notes for planning the actual work.</h1>
          <p className="lead">
            Checklists and technical explanations by Shamas Rajput. Use them to
            ask better questions before a website or automation project starts.
          </p>
        </div>
      </section>
      <section>
        <div className="site-container resource-grid">
          {resources.map((resource) => (
            <article className="reading-card" key={resource.slug}>
              <span className="project-meta">
                {resource.category} · 24 November 2026
              </span>
              <h2>
                <Link href={`/resources/${resource.slug}`}>
                  {resource.title}
                </Link>
              </h2>
              <p>{resource.description}</p>
              <p className="small-muted">
                By Shamas Rajput · Bitstack Solutions
              </p>
              <Link
                href={`/resources/${resource.slug}`}
                className="inline-link"
              >
                Read the guide ↗
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
