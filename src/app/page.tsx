import Link from "next/link";
import { Reveal } from "@/components/animations";
import { ServiceCards, CallToAction } from "@/components/editorial";
import { PageSchema } from "@/components/structured-data";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const description =
  "Bitstack Solutions builds business websites, automates repetitive workflows, and connects tools through APIs. Discuss your project with Shamas Rajput.";
export const metadata = pageMetadata(
  "Web development, automation & integrations",
  description,
  "/",
);

export default function HomePage() {
  return (
    <>
      <PageSchema
        title="Bitstack Solutions: web development, automation and integrations"
        description={description}
        path="/"
      />
      <section className="hero">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Bitstack Solutions · Shamas Rajput</span>
            <h1>
              Web development,
              <br />
              <span className="highlight">automation &amp; integrations.</span>
            </h1>
            <p className="lead">
              We build business websites, automate repeatable tasks, and connect
              the tools you already use. Start with the specific thing your
              business needs to do.
            </p>
            <div className="action-row">
              <Link href="/contact" className="button">
                Describe your project ↗
              </Link>
              <Link href="/work/bitstack-website" className="button secondary">
                See this website’s build ↗
              </Link>
            </div>
            <p className="hero-note">
              <a href={`mailto:${site.email}`}>Talk to Shamas: {site.email}</a>
            </p>
          </div>
          <aside
            className="project-start"
            aria-labelledby="project-start-title"
          >
            <span className="eyebrow">// where to start</span>
            <h2 id="project-start-title">Which problem sounds familiar?</h2>
            <ul className="project-start-list">
              <li>
                <Link href="/web-development">
                  <strong>“Our website needs a rebuild.”</strong>
                  <span>
                    Service pages, application features, forms, and deployment.
                    ↗
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/automation">
                  <strong>“We keep copying the same information.”</strong>
                  <span>
                    A rule-based workflow, with AI only where it helps. ↗
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/integrations">
                  <strong>“These tools should share data.”</strong>
                  <span>API connections, webhooks, and field mapping. ↗</span>
                </Link>
              </li>
            </ul>
            <p className="small-muted">
              Not sure which service fits? Explain the process in your own
              words.
            </p>
          </aside>
        </div>
      </section>
      <section>
        <div className="site-container">
          <div className="section-head">
            <div>
              <span className="eyebrow">// services</span>
              <h2>What Bitstack Solutions builds.</h2>
            </div>
            <p>
              Each project starts with a written scope: the pages or workflows
              included, the systems involved, and how the finished work will be
              checked.
            </p>
          </div>
          <ServiceCards />
        </div>
      </section>
      <section className="dark">
        <div className="site-container editorial-grid">
          <div>
            <span className="eyebrow">// a build you can inspect</span>
            <h2 className="my-6">This website is a working example.</h2>
            <p className="lead">
              The Bitstack Solutions site uses Next.js, TypeScript, and Tailwind
              CSS. Its four-step project form submits to a server-side route
              with input validation and explicit failure states.
            </p>
            <Link href="/work/bitstack-website" className="button yellow mt-7">
              Read the implementation case study ↗
            </Link>
          </div>
          <div className="evidence-panel">
            <h3>Included in the build</h3>
            <ul>
              <li>Server-rendered service pages and clean URLs</li>
              <li>A responsive menu and reduced-motion support</li>
              <li>Shared form validation in the browser and API</li>
              <li>Canonical links, a social image, and structured data</li>
              <li>Automated API and desktop/mobile browser checks</li>
            </ul>
            <p>
              This is our own site, not a client endorsement. The case study
              also explains the current storage and notification limitations.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="site-container">
          <div className="section-head">
            <div>
              <span className="eyebrow">// how a project is scoped</span>
              <h2>Decide what “done” means before building.</h2>
            </div>
            <p>
              A new page, an API connection, and an AI workflow need different
              checks. These are the questions we start with.
            </p>
          </div>
          <div className="process-list">
            <div className="process-step">
              <span className="mono">01 / THE TASK</span>
              <h3>What happens today?</h3>
              <p>
                Describe the user journey or repetitive process, including who
                handles it and which tools hold the information.
              </p>
            </div>
            <div className="process-step">
              <span className="mono">02 / THE SCOPE</span>
              <h3>What changes?</h3>
              <p>
                Agree on pages, fields, integrations, permissions, and anything
                that is outside the project.
              </p>
            </div>
            <div className="process-step">
              <span className="mono">03 / THE CHECKS</span>
              <h3>What can go wrong?</h3>
              <p>
                Include invalid inputs, failed requests, duplicate events,
                mobile layouts, and any step that needs a human decision.
              </p>
            </div>
            <div className="process-step">
              <span className="mono">04 / THE HANDOFF</span>
              <h3>Who runs it?</h3>
              <p>
                Document hosting, accounts, recurring costs, credentials, and
                how someone will notice a failure after launch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cream">
        <div className="site-container">
          <div className="section-head">
            <div>
              <span className="eyebrow">// practical reading</span>
              <h2>Planning notes for your next build.</h2>
            </div>
            <Link href="/resources" className="inline-link">
              All technical guides ↗
            </Link>
          </div>
          <div className="resource-grid">
            <Reveal as="article" className="reading-card">
              <span className="project-meta">
                WEBSITE PLANNING · BY SHAMAS RAJPUT
              </span>
              <h3>
                <Link href="/resources/website-project-brief">
                  What to include in a website project brief
                </Link>
              </h3>
              <p>
                A checklist for pages, content, integrations, access, and
                acceptance criteria before you request a quote.
              </p>
              <Link
                href="/resources/website-project-brief"
                className="inline-link"
              >
                Read the checklist ↗
              </Link>
            </Reveal>
            <Reveal as="article" className="reading-card">
              <span className="project-meta">
                AUTOMATION · BY SHAMAS RAJPUT
              </span>
              <h3>
                <Link href="/resources/reliable-lead-intake">
                  Design a lead-intake workflow that handles failure
                </Link>
              </h3>
              <p>
                Validation, duplicate submissions, CRM outages, and when a
                workflow needs a person rather than AI.
              </p>
              <Link
                href="/resources/reliable-lead-intake"
                className="inline-link"
              >
                Read the workflow guide ↗
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
      <section>
        <div className="site-container">
          <div className="section-head">
            <div>
              <span className="eyebrow">// common questions</span>
              <h2>Before you get in touch.</h2>
            </div>
          </div>
          <div className="faq">
            <details>
              <summary>Who will I contact at Bitstack Solutions?</summary>
              <p>
                Shamas Rajput is the project contact. Email{" "}
                <a className="inline-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>{" "}
                or use the{" "}
                <Link className="inline-link" href="/contact">
                  project brief
                </Link>{" "}
                to describe the work.
              </p>
            </details>
            <details>
              <summary>Do you need to replace our existing tools?</summary>
              <p>
                That depends on their API access, permissions, and the work you
                need to automate. Share the tools and a sample process first; a
                connection may be sufficient.
              </p>
            </details>
            <details>
              <summary>Does every automation need AI?</summary>
              <p>
                No. Routing a form by service type or copying a known field is
                usually a rules problem. AI may help interpret free text, but
                sensitive decisions still need validation and human review.
              </p>
            </details>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
