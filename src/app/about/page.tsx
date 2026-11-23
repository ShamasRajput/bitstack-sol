import Link from "next/link";
import { PageSchema } from "@/components/structured-data";
import { CallToAction } from "@/components/editorial";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const description =
  "Meet Shamas Rajput, the person behind Bitstack Solutions. Learn what the business builds, how projects are scoped, and how to get in touch.";
export const metadata = pageMetadata(
  "About Shamas Rajput and Bitstack Solutions",
  description,
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageSchema
        title="About Bitstack Solutions"
        description={description}
        path="/about"
        type="AboutPage"
      />
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">// about Bitstack Solutions</span>
          <h1>Meet Shamas Rajput.</h1>
          <p className="lead">
            I’m the person behind Bitstack Solutions and your contact for
            website, automation, and API integration projects.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-link mt-6 inline-block"
          >
            {site.email} ↗
          </a>
        </div>
      </section>
      <section id="shamas-rajput">
        <div className="site-container editorial-grid">
          <div>
            <span className="eyebrow">// the work</span>
            <h2>Websites and the processes behind them.</h2>
          </div>
          <div className="prose-copy">
            <p>
              Bitstack Solutions focuses on three connected services: building
              business websites and web applications, automating repeatable
              workflows, and connecting tools through APIs. A project might be a
              new service website, an intake form that feeds another system, or
              a workflow that removes repeated data entry.
            </p>
            <p>
              We begin with the task and its constraints. Who uses the result?
              Where does the information live? What happens when a request
              fails? Those answers shape the scope before choosing tools.
            </p>
            <p>
              You can inspect a current example in the{" "}
              <Link href="/work/bitstack-website" className="inline-link">
                case study for this website
              </Link>
              . It explains the implementation and its limitations, rather than
              presenting sample designs as client results.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-cream">
        <div className="site-container">
          <div className="section-head">
            <div>
              <span className="eyebrow">// working together</span>
              <h2>What to establish before a project starts.</h2>
            </div>
          </div>
          <div className="feature-boxes">
            <div className="feature-box">
              <span className="mono">01 / SCOPE</span>
              <h3>A written list of deliverables.</h3>
              <p>
                Pages, workflows, integrations, content responsibilities, and
                work that is outside the estimate.
              </p>
            </div>
            <div className="feature-box">
              <span className="mono">02 / ACCEPTANCE</span>
              <h3>Checks tied to actual use.</h3>
              <p>
                Examples of a successful result, plus the error cases and device
                sizes that need to work.
              </p>
            </div>
            <div className="feature-box">
              <span className="mono">03 / OWNERSHIP</span>
              <h3>A clear operating plan.</h3>
              <p>
                Who owns the accounts and code, what hosting or services cost,
                and who maintains the result.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="site-container prose-copy">
          <span className="eyebrow">// get in touch</span>
          <h2>Bring the problem, not a technical specification.</h2>
          <p>
            Email Shamas Rajput at{" "}
            <a href={`mailto:${site.email}`} className="inline-link">
              {site.email}
            </a>
            . Include your current website or tools, what you want to change,
            and any deadline you need to work around.
          </p>
          <p>
            If you are preparing a brief, the{" "}
            <Link
              href="/resources/website-project-brief"
              className="inline-link"
            >
              website planning checklist
            </Link>{" "}
            can help you gather the details.
          </p>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
