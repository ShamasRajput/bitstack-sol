import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect your CRM, business tools, and data with systems integration from Bitstack Solutions.",
  openGraph: {
    title: "Integrations | Bitstack Solutions",
    description:
      "Connect your CRM, business tools, and data with systems integration from Bitstack Solutions.",
  },
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">{"// Integrations & infrastructure"}</span>
          <h1>{"Make the systems behind your business work together."}</h1>
          <p className="lead">
            {
              "Connect your existing tools and build dependable technical workflows, from lead capture and CRM to APIs and internal operations."
            }
          </p>
          <div className="action-row">
            <Link className="button" href="/contact?service=integrations">
              {"Discuss this service ↗"}
            </Link>
            <Link className="button secondary" href="/services">
              {"All services ←"}
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="site-container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{"// sound familiar?"}</span>
              <h2>{"The friction we fix."}</h2>
            </div>
          </div>
          <div className="feature-boxes">
            <Reveal className="feature-box">
              <span className="mono">{"PROBLEM / 01"}</span>
              <h3>{"Customer information living in too many places"}</h3>
            </Reveal>
            <Reveal className="feature-box">
              <span className="mono">{"PROBLEM / 02"}</span>
              <h3>{"Handoffs lost between applications"}</h3>
            </Reveal>
            <Reveal className="feature-box">
              <span className="mono">{"PROBLEM / 03"}</span>
              <h3>{"Teams repeating updates across systems"}</h3>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="dark">
        <div className="site-container editorial-grid">
          <div>
            <span className="eyebrow">{"// how it works"}</span>
            <h2
              style={{
                marginTop: "24px",
                marginRight: "0px",
                marginBottom: "24px",
                marginLeft: "0px",
              }}
            >
              {"From moving pieces to "}
              <em>{"one clear flow."}</em>
            </h2>
            <p className="lead">
              {
                "The right architecture is useful when it's invisible to the people who depend on it."
              }
            </p>
          </div>
          <Reveal className="workflow">
            <div className="workflow-head">
              <span>{"workflow.config"}</span>
              <span>{"● LIVE PREVIEW"}</span>
            </div>
            <div className="flow-node">
              <span className="sq">{"↗"}</span>
              <div>
                <small>{"01 — INPUT"}</small>
                <strong>{"Customer submits a request"}</strong>
              </div>
            </div>
            <div className="flow-connector"></div>
            <div className="flow-node">
              <span className="sq">{"{ }"}</span>
              <div>
                <small>{"02 — LOGIC"}</small>
                <strong>{"System routes and processes it"}</strong>
              </div>
            </div>
            <div className="flow-connector"></div>
            <div className="flow-node">
              <span className="sq">{"✓"}</span>
              <div>
                <small>{"03 — OUTPUT"}</small>
                <strong>{"CRM updated. Team notified."}</strong>
              </div>
            </div>
            <div className="workflow-foot">
              {"✓ task.complete()   // illustrative workflow"}
            </div>
          </Reveal>
        </div>
      </section>
      <section>
        <div className="site-container">
          <span className="eyebrow">{"// illustrative use cases"}</span>
          <h2
            style={{
              marginTop: "18px",
              marginRight: "0px",
              marginBottom: "45px",
              marginLeft: "0px",
            }}
          >
            {"What this could look like."}
          </h2>
          <div className="feature-boxes">
            <Reveal className="feature-box">
              <span className="mono">{"USE CASE / 01"}</span>
              <h3>{"CRM setup and contact-form integration"}</h3>
              <p>
                {
                  "Illustrative example — scope depends on your existing systems and business goals."
                }
              </p>
            </Reveal>
            <Reveal className="feature-box">
              <span className="mono">{"USE CASE / 02"}</span>
              <h3>{"API-powered synchronization between tools"}</h3>
              <p>
                {
                  "Illustrative example — scope depends on your existing systems and business goals."
                }
              </p>
            </Reveal>
            <Reveal className="feature-box">
              <span className="mono">{"USE CASE / 03"}</span>
              <h3>{"Backend workflows and operational connections"}</h3>
              <p>
                {
                  "Illustrative example — scope depends on your existing systems and business goals."
                }
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: "",
          backgroundPositionX: "",
          backgroundPositionY: "",
          backgroundSize: "",
          backgroundRepeat: "",
          backgroundAttachment: "",
          backgroundOrigin: "",
          backgroundClip: "",
          backgroundColor: "",
        }}
      >
        <div className="site-container">
          <span className="eyebrow">{"// implementation"}</span>
          <h2
            style={{
              marginTop: "17px",
              marginRight: "0px",
              marginBottom: "40px",
              marginLeft: "0px",
            }}
          >
            {"Clear steps, no guesswork."}
          </h2>
          <div
            className="process-list"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            <div className="process-step">
              <span className="mono">{"01 / 03"}</span>
              <h3>{"Understand"}</h3>
              <p>{"We audit the tools, data, and handoffs involved."}</p>
            </div>
            <div className="process-step">
              <span className="mono">{"02 / 03"}</span>
              <h3>{"Build & test"}</h3>
              <p>
                {
                  "We choose stable integration paths and define error handling."
                }
              </p>
            </div>
            <div className="process-step">
              <span className="mono">{"03 / 03"}</span>
              <h3>{"Launch & support"}</h3>
              <p>
                {
                  "We test real scenarios, document the setup, and support rollout."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="site-container">
          <span className="eyebrow">{"// questions"}</span>
          <h2
            style={{
              marginTop: "18px",
              marginRight: "0px",
              marginBottom: "36px",
              marginLeft: "0px",
            }}
          >
            {"Worth knowing."}
          </h2>
          <div className="faq">
            <details>
              <summary>{"Do I need to know exactly what to build?"}</summary>
              <p>
                {
                  "Not at all. Tell us what feels slow, disconnected, or difficult. We can translate that into practical technical options."
                }
              </p>
            </details>
            <details>
              <summary>
                {"Can you work with the tools we already have?"}
              </summary>
              <p>
                {
                  "Usually, yes. We start by understanding your existing tools and whether an integration is appropriate before recommending replacements."
                }
              </p>
            </details>
            <details>
              <summary>
                {"Do you offer marketing or social media management?"}
              </summary>
              <p>
                {
                  "No. We focus on websites, software, integrations, automation, and technical infrastructure rather than advertising or social media campaigns."
                }
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="site-container cta-wrap">
          <span className="eyebrow">{"// ready when you are"}</span>
          <h2>{"Let’s make your systems simpler."}</h2>
          <p>
            {
              "Tell us what you’re building. We’ll figure out the right technical approach together."
            }
          </p>
          <Link href="/contact?service=integrations" className="button yellow">
            {"Tell us about your project "}
            <span className="arr">{"↗"}</span>
          </Link>
        </div>
      </section>
    </>
  );
}
