import Link from "next/link";
import { ServiceCards, CallToAction } from "@/components/editorial";
import { PageSchema } from "@/components/structured-data";
import { pageMetadata } from "@/lib/seo";

const description =
  "Explore Bitstack Solutions services: business websites, workflow and AI automation, and API integrations. See example scopes, deliverables, dependencies, and checks.";
export const metadata = pageMetadata(
  "Website, automation and integration services",
  description,
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageSchema
        title="Website, automation and integration services"
        description={description}
        path="/services"
        type="CollectionPage"
      />
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">// services</span>
          <h1>Build a website. Automate a task. Connect your tools.</h1>
          <p className="lead">
            Choose the work that matches your current problem. A project can
            combine these services, but each part needs a defined result and a
            way to test it.
          </p>
        </div>
      </section>
      <section>
        <div className="site-container">
          <ServiceCards />
        </div>
      </section>
      <section className="bg-cream">
        <div className="site-container">
          <div className="section-head">
            <div>
              <span className="eyebrow">// choosing a starting point</span>
              <h2>Start with the task that needs to change.</h2>
            </div>
          </div>
          <div className="service-comparison">
            <table>
              <caption>Common starting points for a project discussion</caption>
              <thead>
                <tr>
                  <th scope="col">Your situation</th>
                  <th scope="col">Likely starting point</th>
                  <th scope="col">Bring to the conversation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Visitors cannot understand your services or make an inquiry.
                  </td>
                  <td>
                    <Link href="/web-development">Web development</Link>
                  </td>
                  <td>
                    Current site, page list, content, and intended visitor
                    action.
                  </td>
                </tr>
                <tr>
                  <td>
                    Someone repeatedly copies, classifies, or routes
                    information.
                  </td>
                  <td>
                    <Link href="/automation">Workflow automation</Link>
                  </td>
                  <td>A sample input, desired result, and known exceptions.</td>
                </tr>
                <tr>
                  <td>Two systems need to exchange the same records.</td>
                  <td>
                    <Link href="/integrations">API integration</Link>
                  </td>
                  <td>
                    System names, API access, field mapping, and account owner.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="small-muted mt-6">
            Scope, timing, and cost depend on those details. No fixed package is
            assumed before the requirements are clear.
          </p>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
