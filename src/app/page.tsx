import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations";
import { Terminal } from "@/components/terminal";

export const metadata: Metadata = {
  title: "Home | Bitstack Solutions",
  description:
    "Bitstack Solutions builds thoughtful websites, AI automations, and connected business systems. Your technical partner from idea to launch.",
  openGraph: {
    title: "Home | Bitstack Solutions",
    description:
      "Bitstack Solutions builds thoughtful websites, AI automations, and connected business systems. Your technical partner from idea to launch.",
  },
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{"// a digital engineering studio"}</span>
            <h1>
              {"Your business."}
              <br />
              <span className="highlight">{"Better engineered."}</span>
            </h1>
            <p className="lead">
              {
                "We build websites, connect your tools, and automate the work that slows your business down."
              }
            </p>
            <div className="action-row">
              <Link href="/contact" className="button">
                {"Build my solution "}
                <span className="arr">{"↗"}</span>
              </Link>
              <Link href="/services" className="button secondary">
                {"Explore what we do "}
                <span className="arr">{"↓"}</span>
              </Link>
            </div>
            <div className="hero-note">
              <span></span>
              {" thoughtful systems. fewer moving parts."}
            </div>
          </div>
          <div className="hero-art">
            <div className="terminal">
              <div className="term-top">
                <i className="dot"></i>
                <i className="dot"></i>
                <i className="dot"></i>
                <span className="term-file">{"/workspace/your-business"}</span>
              </div>
              <div className="term-body">
                <div className="term-head">
                  {"$ initialize_business_presence"}
                </div>
                <Terminal />
                <span className="caret" aria-hidden="true"></span>
              </div>
            </div>
            <div className="status-chip">{"●   status: connected"}</div>
          </div>
        </div>
      </section>
      <div className="strip">
        <div className="site-container strip-inner">
          <span>{"WEBSITE DEVELOPMENT"}</span>
          <span>{"AI AUTOMATION"}</span>
          <span>{"CONNECTED SYSTEMS"}</span>
          <strong>{"One technical partner.   ↗"}</strong>
        </div>
      </div>
      <section>
        <div className="site-container">
          <div className="section-head">
            {" "}
            <div>
              <span className="eyebrow">{"// what we build"}</span>
              <h2>
                {"Less friction."}
                <br />
                {"More "}
                <span className="highlight">{"possibility."}</span>
              </h2>
            </div>
            <p>
              {
                "Whether you're launching something new or untangling what's already there, we make the technology work together."
              }
            </p>
          </div>
          <div className="services-grid">
            <Reveal as="article" className="service-card">
              <span className="card-number">{"01 / 03 — MODULE"}</span>
              <div className="service-icon">
                <svg
                  width="110"
                  height="95"
                  viewBox="0 0 110 95"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="8" y="13" width="39" height="29" rx="5"></rect>
                  <rect x="65" y="13" width="37" height="29" rx="5"></rect>
                  <rect x="37" y="60" width="37" height="29" rx="5"></rect>
                  <path
                    strokeDasharray="4 4"
                    d="M27 42v9h28v9m28-18v9H55"
                  ></path>
                  <circle cx="27" cy="27" r="4" fill="#FFF1A6"></circle>
                  <path d="M75 27h18M83 20v14M45 74h20"></path>
                </svg>
              </div>
              <h3>{"AI & automation"}</h3>
              <p>
                {
                  "Turn busywork into a system that runs itself. Custom agents, smart document flows, and reliable automations."
                }
              </p>
              <Link href="/automation">
                {"Explore service "}
                <span>{"↗"}</span>
              </Link>
            </Reveal>
            <Reveal as="article" className="service-card">
              <span className="card-number">{"02 / 03 — MODULE"}</span>
              <div className="service-icon">
                <svg
                  width="120"
                  height="94"
                  viewBox="0 0 120 94"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="10" y="7" width="102" height="80" rx="7"></rect>
                  <path d="M10 25h102M19 16h5m5 0h5m5 0h5"></path>
                  <rect
                    x="20"
                    y="36"
                    width="34"
                    height="41"
                    fill="#FFF1A6"
                  ></rect>
                  <path d="M64 40h35M64 53h29M64 66h35"></path>
                </svg>
              </div>
              <h3>{"Web development"}</h3>
              <p>
                {
                  "Fast, thoughtful websites and applications built for real business needs, not just the launch day."
                }
              </p>
              <Link href="/web-development">
                {"Explore service "}
                <span>{"↗"}</span>
              </Link>
            </Reveal>
            <Reveal as="article" className="service-card">
              <span className="card-number">{"03 / 03 — MODULE"}</span>
              <div className="service-icon">
                <svg
                  width="120"
                  height="94"
                  viewBox="0 0 120 94"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="8" y="30" width="30" height="31" rx="5"></rect>
                  <rect x="82" y="30" width="30" height="31" rx="5"></rect>
                  <rect x="45" y="5" width="30" height="31" rx="5"></rect>
                  <rect x="45" y="59" width="30" height="31" rx="5"></rect>
                  <path strokeDasharray="4 4" d="M38 45h44M60 36v23"></path>
                  <circle cx="60" cy="46" r="7" fill="#FFF1A6"></circle>
                </svg>
              </div>
              <h3>{"Systems & integrations"}</h3>
              <p>
                {
                  "Connect your CRM, tools, and data into one clear operational workflow."
                }
              </p>
              <Link href="/integrations">
                {"Explore service "}
                <span>{"↗"}</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="dark">
        <div className="site-container editorial-grid">
          <Reveal className="">
            <span className="eyebrow">{"// the problem → the solution"}</span>
            <h2
              style={{
                marginTop: "20px",
                marginRight: "0px",
                marginBottom: "20px",
                marginLeft: "0px",
              }}
            >
              {"Your tools should "}
              <em>{"talk to each other."}</em>
            </h2>
            <p className="lead">
              {
                "A website here. A spreadsheet there. Leads falling through the cracks. It doesn't have to work this way."
              }
            </p>
            <div className="issue-list">
              <div className="issue">
                <span className="mono">{"01"}</span>
                <strong>{"Disconnected business tools"}</strong>
              </div>
              <div className="issue">
                <span className="mono">{"02"}</span>
                <strong>{"Repetitive manual tasks"}</strong>
              </div>
              <div className="issue">
                <span className="mono">{"03"}</span>
                <strong>{"Websites that don't do enough"}</strong>
              </div>
            </div>
          </Reveal>
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
          <div className="section-head">
            <div>
              <span className="eyebrow">{"// selected possibilities"}</span>
              <h2>
                {"Good technology."}
                <br />
                {"Visible outcomes."}
              </h2>
            </div>
            <p>
              {
                "Explore sample project directions for connected operations and a stronger web presence. Each is a concept example."
              }
            </p>
          </div>
          <div className="project-grid">
            <Reveal as="article" className="project-card">
              <div className="project-art">
                <div className="mock-window">
                  <div className="mock-top">{"● ● ●   /sample/1/preview"}</div>
                  <div className="mock-body">
                    <div className="mock-bar"></div>
                    <div className="mock-bar"></div>
                    <div className="mock-bar"></div>
                    <div className="mock-bar"></div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <span className="project-meta">
                  {"CONCEPT EXAMPLE · AUTOMATION / INTEGRATIONS"}
                </span>
                <h3>{"Connected operations"}</h3>
                <p>
                  {
                    "An illustrative intake-to-CRM flow that routes leads, organizes data, and reduces manual handoffs."
                  }
                </p>
                <Link href="/contact">{"Discuss something similar ↗"}</Link>
              </div>
            </Reveal>
            <Reveal as="article" className="project-card">
              <div className="project-art">
                <div className="mock-window">
                  <div className="mock-top">{"● ● ●   /sample/2/preview"}</div>
                  <div className="mock-body">
                    <div className="mock-bar"></div>
                    <div className="mock-bar"></div>
                    <div className="mock-bar"></div>
                    <div className="mock-bar"></div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <span className="project-meta">
                  {"CONCEPT EXAMPLE · WEB DESIGN / DEVELOPMENT"}
                </span>
                <h3>{"A sharper web presence"}</h3>
                <p>
                  {
                    "An illustrative responsive site with clear service journeys and a simple inquiry experience."
                  }
                </p>
                <Link href="/contact">{"Discuss something similar ↗"}</Link>
              </div>
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
          <span className="eyebrow">{"// our process"}</span>
          <div className="section-head">
            <h2>
              {"From “what if”"}
              <br />
              {"to "}
              <span className="highlight">{"it works."}</span>
            </h2>
            <p>
              {
                "Clear communication. Practical decisions. A process you can follow without learning a new language."
              }
            </p>
          </div>
          <div className="process-list">
            <Reveal className="process-step">
              <span className="mono">{"01 / 04"}</span>
              <h3>{"Discover"}</h3>
              <p>
                {
                  "We listen, map your current setup, and identify what really needs fixing."
                }
              </p>
            </Reveal>
            <Reveal className="process-step">
              <span className="mono">{"02 / 04"}</span>
              <h3>{"Architect"}</h3>
              <p>
                {
                  "We design a practical solution that fits your team, tools, and goals."
                }
              </p>
            </Reveal>
            <Reveal className="process-step">
              <span className="mono">{"03 / 04"}</span>
              <h3>{"Build"}</h3>
              <p>
                {
                  "We develop, connect, test, and refine the parts that make it work."
                }
              </p>
            </Reveal>
            <Reveal className="process-step">
              <span className="mono">{"04 / 04"}</span>
              <h3>{"Support"}</h3>
              <p>
                {
                  "We hand it over clearly and help keep your systems running smoothly."
                }
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section>
        <div className="site-container editorial-grid">
          <div>
            <div className="page-aside">
              <span className="eyebrow">{"// why this approach"}</span> <br />
              <br />
              {" ENGINEERED FOR THE LONG RUN"}
            </div>
            <h2
              style={{
                marginTop: "26px",
                marginRight: "0px",
                marginBottom: "26px",
                marginLeft: "0px",
              }}
            >
              {"Small details."}
              <br />
              {"Big difference."}
            </h2>
            <p className="lead">
              {
                "We care about what happens after launch: whether the system makes sense, your team can use it, and it keeps doing its job."
              }
            </p>
            <Link
              href="/about"
              className="button secondary"
              style={{ marginTop: "28px" }}
            >
              {"Meet our approach ↗"}
            </Link>
          </div>
          <div>
            <div
              className="feature-boxes"
              style={{ gridTemplateColumns: "1fr 1fr" }}
            >
              <div className="feature-box">
                <span className="mono">{"01 / CLARITY"}</span>
                <h3>{"Plain English"}</h3>
                <p>{"No mysterious jargon. Just direct answers."}</p>
              </div>
              <div className="feature-box">
                <span className="mono">{"02 / CARE"}</span>
                <h3>{"Made to fit"}</h3>
                <p>
                  {"Solutions that reflect how your business actually works."}
                </p>
              </div>
              <div className="feature-box">
                <span className="mono">{"03 / CRAFT"}</span>
                <h3>{"Well built"}</h3>
                <p>{"Clean interfaces and maintainable systems."}</p>
              </div>
              <div className="feature-box">
                <span className="mono">{"04 / SUPPORT"}</span>
                <h3>{"Beyond launch"}</h3>
                <p>{"Thoughtful handoff and continued technical help."}</p>
              </div>
            </div>
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
          <span className="eyebrow">{"// good questions"}</span>
          <h2
            style={{
              marginTop: "17px",
              marginRight: "0px",
              marginBottom: "38px",
              marginLeft: "0px",
            }}
          >
            {"Before we begin."}
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
          <p style={{ textAlign: "center", marginTop: "32px" }}>
            <Link className="inline-link" href="/contact">
              {"Still have a question? Let's talk ↗"}
            </Link>
          </p>
        </div>
      </section>
      <section className="cta-band">
        <div className="site-container cta-wrap">
          <span className="eyebrow">{"// ready when you are"}</span>
          <h2>{"Your next chapter, engineered."}</h2>
          <p>
            {
              "Tell us what you’re building. We’ll figure out the right technical approach together."
            }
          </p>
          <Link href="/contact" className="button yellow">
            {"Tell us about your project "}
            <span className="arr">{"↗"}</span>
          </Link>
        </div>
      </section>
    </>
  );
}
