import Link from "next/link";
import { PageSchema } from "@/components/structured-data";
import { pageMetadata } from "@/lib/seo";

const title = "Building the Bitstack Solutions website with Next.js";
const description =
  "A first-party case study of the Bitstack Solutions website: migrating static designs, validating project briefs, accessible motion, search metadata, and hosting limitations.";
export const metadata = pageMetadata(
  title,
  description,
  "/work/bitstack-website",
  true,
);

export default function CaseStudyPage() {
  return (
    <>
      <PageSchema
        title={title}
        description={description}
        path="/work/bitstack-website"
        parents={[{ name: "Work", path: "/work" }]}
        article={{
          published: "2026-11-24T00:00:00+05:00",
          section: "Implementation case study",
        }}
      />
      <article>
        <header className="page-hero">
          <div className="site-container article-width">
            <nav aria-label="Breadcrumb" className="article-breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/work">Work</Link>
            </nav>
            <span className="eyebrow">
              FIRST-PARTY PROJECT · IMPLEMENTATION CASE STUDY
            </span>
            <h1>{title}</h1>
            <p className="lead">
              A static agency design became a React application with a guided
              intake form, typed validation, and a public content structure.
            </p>
            <p className="article-byline">
              By <Link href="/about#shamas-rajput">Shamas Rajput</Link> ·
              Published <time dateTime="2026-11-24">24 November 2026</time>
            </p>
          </div>
        </header>
        <div className="site-container article-width article-body">
          <p className="article-intro">
            This is the website you are using. The project owner is Bitstack
            Solutions. It is presented as an inspectable example of
            implementation decisions, not as a client endorsement or evidence of
            sales results.
          </p>
          <section className="article-section">
            <h2>The starting point</h2>
            <p>
              The original design consisted of eight HTML pages with shared CSS
              and browser JavaScript. It included a home page, a services
              overview, three service pages, Work, About, and Contact. The
              contact experience prepared a copyable brief rather than sending
              it through an application API.
            </p>
            <p>
              The migration kept the warm clay and cream palette and the
              supplied Bitstack logo. Repeated page elements moved into shared
              React components, while the old .html addresses gained permanent
              redirects to clean routes.
            </p>
          </section>
          <section className="article-section">
            <h2>Architecture and page rendering</h2>
            <p>
              The application uses Next.js App Router with TypeScript. Marketing
              content is rendered on the server and prerendered at build time.
              Tailwind handles utility styling alongside the existing design
              styles. Client components are used for the menu, guided form, and
              optional motion.
            </p>
            <p>
              Keeping the core content in HTML means visitors and crawlers can
              read the service descriptions without running a terminal animation
              or waiting for a client-side content fetch. Canonical links
              identify each public page; the sitemap lists the public routes.
            </p>
            <ul>
              <li>
                <code>src/app/</code>: page routes, metadata, sitemap, and API
                route
              </li>
              <li>
                <code>src/components/</code>: shared branding, navigation, form,
                and motion
              </li>
              <li>
                <code>src/lib/inquiry-schema.ts</code>: validation shared by the
                form and server
              </li>
              <li>
                <code>test/</code>: API and browser checks
              </li>
            </ul>
          </section>
          <section className="article-section">
            <h2>Following a brief from the form to storage</h2>
            <p>
              The Contact page asks for a service, project description, optional
              context, and contact details across four steps. Back navigation
              keeps the answers in React state. When submitted, the form sends
              JSON to <code>POST /api/inquiries</code>.
            </p>
            <p>
              The route checks the request origin and content type, limits body
              size, validates the data with Zod, and saves an accepted record
              with a UUID and timestamp. The UI shows a saved confirmation only
              after a successful server response. A failed connection leaves the
              answers in place so the visitor can retry.
            </p>
            <p>
              Files are written outside the public asset directory. There is no
              API endpoint for downloading submissions. This is a small
              file-based intake implementation; it is not a CRM or an email
              delivery service.
            </p>
            <Link href="/contact" className="inline-link">
              Inspect the guided project brief ↗
            </Link>
          </section>
          <section className="article-section">
            <h2>Motion and accessibility</h2>
            <p>
              Framer Motion provides page entrances and section reveals. Lenis
              adds smooth wheel scrolling. Reduced-motion preferences disable
              the smooth scrolling and spatial transitions. The mobile menu
              exposes its expanded state and closes with Escape; the page
              includes a skip-to-content link.
            </p>
            <p>
              Content remains visible in server-rendered HTML. Animation is an
              enhancement rather than a prerequisite for seeing the work or
              contacting the business.
            </p>
          </section>
          <section className="article-section">
            <h2>Checks and evidence</h2>
            <p>
              The repository includes automated checks for form validation,
              successful storage, oversized requests, origin validation, rate
              limiting, and storage failures. Browser checks exercise page
              rendering at desktop and mobile widths, menu navigation, failed
              submissions, successful submission and reset, and normal and
              reduced motion.
            </p>
            <p>
              These are implementation checks. They do not establish a
              Lighthouse score, accessibility certification, search ranking, or
              client conversion improvement. No such result is claimed here.
            </p>
            <p>
              <a
                href="https://github.com/ShamasRajput/bitstack-sol"
                className="inline-link"
              >
                Inspect the source repository and tests on GitHub ↗
              </a>
            </p>
          </section>
          <section className="article-section">
            <h2>Known limitations and deployment requirements</h2>
            <p>
              The intake endpoint needs a persistent writable storage location.
              The default project directory is not a durable database on an
              ephemeral or read-only serverless host. A serverless deployment
              needs an appropriate database or external storage before relying
              on the form for real inquiries.
            </p>
            <p>
              Email and CRM delivery are not configured. The in-memory rate
              limiter applies to one application instance and requires a trusted
              proxy configuration for per-IP limits. Duplicate-request handling
              and a shared queue would be separate additions for a larger
              workflow.
            </p>
            <p>
              For a direct project conversation, the Contact page also provides
              Shamas Rajput’s email. That channel does not depend on the form’s
              storage configuration.
            </p>
          </section>
          <aside className="article-contact">
            <h2>Have a similar website or workflow to build?</h2>
            <p>
              Describe what the visitor needs to do and where the submitted
              information should go.
            </p>
            <Link href="/contact" className="button mt-5">
              Discuss your project ↗
            </Link>
          </aside>
        </div>
      </article>
    </>
  );
}
