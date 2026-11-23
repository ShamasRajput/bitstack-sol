import Link from "next/link";
import { PageSchema } from "./structured-data";
import { CallToAction } from "./editorial";

export type ServicePageContent = {
  path: string;
  service: string;
  title: string;
  description: string;
  introduction: string;
  examples: { title: string; text: string }[];
  deliverables: string[];
  checks: string[];
  dependencies: string;
  boundary: string;
  guide: { title: string; path: string };
  preset: string;
};

export function ServicePage({ content }: { content: ServicePageContent }) {
  return (
    <>
      <PageSchema
        title={content.service}
        description={content.description}
        path={content.path}
        service={content.service}
        parents={[{ name: "Services", path: "/services" }]}
      />
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">// {content.service}</span>
          <h1>{content.title}</h1>
          <p className="lead">{content.introduction}</p>
          <div className="action-row">
            <Link
              href={`/contact?service=${content.preset}`}
              className="button"
            >
              Discuss this service ↗
            </Link>
            <Link href="/services" className="button secondary">
              All services ←
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="site-container">
          <div className="section-head">
            <div>
              <span className="eyebrow">// example scopes</span>
              <h2>What a project could include.</h2>
            </div>
            <p>
              These describe possible deliverables, not completed client
              engagements or guaranteed outcomes.
            </p>
          </div>
          <div className="feature-boxes">
            {content.examples.map((example, index) => (
              <article className="feature-box" key={example.title}>
                <span className="mono">0{index + 1} / EXAMPLE</span>
                <h3>{example.title}</h3>
                <p>{example.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cream">
        <div className="site-container editorial-grid">
          <div>
            <span className="eyebrow">// deliverables</span>
            <h2 className="my-6">Agree on what is included.</h2>
            <p className="lead">{content.dependencies}</p>
          </div>
          <div className="scope-list">
            <h3>Items to define in the scope</h3>
            <ul>
              {content.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="site-container editorial-grid">
          <div>
            <span className="eyebrow">// acceptance checks</span>
            <h2>Test the behavior, including the errors.</h2>
          </div>
          <div className="scope-list">
            <ul>
              {content.checks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6">{content.boundary}</p>
          </div>
        </div>
      </section>
      <section className="bg-cream">
        <div className="site-container prose-copy">
          <span className="eyebrow">// prepare your project</span>
          <h2>{content.guide.title}</h2>
          <p>
            Use the guide to gather the information needed for a scope
            discussion.
          </p>
          <Link href={content.guide.path} className="inline-link">
            Read the guide ↗
          </Link>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
