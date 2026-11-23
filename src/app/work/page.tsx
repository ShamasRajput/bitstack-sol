import Link from "next/link";
import { PageSchema } from "@/components/structured-data";
import { CallToAction } from "@/components/editorial";
import { pageMetadata } from "@/lib/seo";

const description =
  "Inspect the Bitstack Solutions website as a first-party implementation case study, with architecture, form validation, accessibility checks, and known limitations.";
export const metadata = pageMetadata(
  "Work and implementation notes",
  description,
  "/work",
);

export default function WorkPage() {
  return (
    <>
      <PageSchema
        title="Work and implementation notes"
        description={description}
        path="/work"
        type="CollectionPage"
      />
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">// work</span>
          <h1>A build you can inspect.</h1>
          <p className="lead">
            Start with the website you are using. This is a first-party project
            for Bitstack Solutions, not a client case study or a claim about
            client revenue.
          </p>
        </div>
      </section>
      <section>
        <div className="site-container">
          <article className="case-study-preview">
            <div>
              <span className="project-meta">
                FIRST-PARTY PROJECT · NEXT.JS / TYPESCRIPT / TAILWIND
              </span>
              <h2>
                Bitstack Solutions: from static design to a Next.js website.
              </h2>
              <p>
                Eight original pages migrated to React, a guided project brief
                connected to a validated API, responsive branding, and motion
                that respects user preferences.
              </p>
              <Link href="/work/bitstack-website" className="button mt-6">
                Read the technical case study ↗
              </Link>
            </div>
            <dl className="project-facts">
              <div>
                <dt>Project owner</dt>
                <dd>Bitstack Solutions</dd>
              </div>
              <div>
                <dt>Project contact</dt>
                <dd>Shamas Rajput</dd>
              </div>
              <div>
                <dt>Evidence</dt>
                <dd>Live pages, source repository, and automated checks</dd>
              </div>
              <div>
                <dt>Limitations</dt>
                <dd>
                  No client outcome metrics; file-based intake storage needs
                  persistent hosting
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
