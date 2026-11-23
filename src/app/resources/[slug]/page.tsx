import Link from "next/link";
import { notFound } from "next/navigation";
import { PageSchema } from "@/components/structured-data";
import { resources } from "@/lib/resources";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) notFound();
  return pageMetadata(
    resource.title,
    resource.description,
    `/resources/${slug}`,
    true,
  );
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) notFound();
  return (
    <>
      <PageSchema
        title={resource.title}
        description={resource.description}
        path={`/resources/${slug}`}
        parents={[{ name: "Resources", path: "/resources" }]}
        article={{ published: resource.published, section: resource.category }}
      />
      <article>
        <header className="page-hero">
          <div className="site-container article-width">
            <nav aria-label="Breadcrumb" className="article-breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/resources">Resources</Link>
            </nav>
            <span className="eyebrow">{resource.category}</span>
            <h1>{resource.title}</h1>
            <p className="lead">{resource.description}</p>
            <p className="article-byline">
              By <Link href="/about#shamas-rajput">Shamas Rajput</Link> ·{" "}
              <time dateTime={resource.published}>24 November 2026</time>
            </p>
          </div>
        </header>
        <div className="site-container article-width article-body">
          <p className="article-intro">{resource.introduction}</p>
          <nav aria-label="In this guide" className="article-contents">
            <strong>In this guide</strong>
            <ol>
              {resource.sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#section-${index + 1}`}>
                    {section.title.replace(/^\d+\. /, "")}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          {resource.sections.map((section, index) => (
            <section
              className="article-section"
              id={`section-${index + 1}`}
              key={section.title}
            >
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.checklist && (
                <ul>
                  {section.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section className="article-section">
            <h2>Technical references</h2>
            <p>
              These primary references support the implementation details
              discussed above.
            </p>
            <ul>
              {resource.sources.map((source) => (
                <li key={source.url}>
                  <a className="inline-link" href={source.url}>
                    {source.title} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <aside className="article-contact">
            <h2>Discuss your project with Shamas.</h2>
            <p>
              Share the process, pages, and tools involved. We can use those
              details to define a scope.
            </p>
            <Link href="/contact" className="button mt-5">
              Send a project brief ↗
            </Link>
          </aside>
        </div>
      </article>
    </>
  );
}
