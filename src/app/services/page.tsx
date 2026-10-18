import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore web development, AI automation, and systems integration services from Bitstack Solutions.",
  openGraph: {
    title: "Services | Bitstack Solutions",
    description:
      "Explore web development, AI automation, and systems integration services from Bitstack Solutions.",
  },
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">{"// what we do"}</span>
          <h1>
            {"Technology that "}
            <span className="highlight">{"works for you."}</span>
          </h1>
          <p className="lead">
            {
              "From the first website to the systems behind it, we design and build the technology your business needs to run with less friction."
            }
          </p>
        </div>
      </section>
      <section>
        <div className="site-container">
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
      <section className="">
        <div className="site-container editorial-grid">
          <div>
            <span className="eyebrow">{"// 01 / service"}</span>
            <h2
              style={{
                marginTop: "25px",
                marginRight: "0px",
                marginBottom: "25px",
                marginLeft: "0px",
              }}
            >
              {"AI & automation"}
            </h2>
            <p className="lead">
              {
                "Turn busywork into a system that runs itself. Custom agents, smart document flows, and reliable automations."
              }
            </p>
            <Link
              className="button "
              style={{ marginTop: "25px" }}
              href="/automation"
            >
              {"See how it works ↗"}
            </Link>
          </div>
          <div
            className="feature-box"
            style={{
              paddingTop: "30px",
              paddingRight: "30px",
              paddingBottom: "30px",
              paddingLeft: "30px",
            }}
          >
            <div
              className="mono"
              style={{ fontSize: "12px", marginBottom: "30px" }}
            >
              {"// examples of what we can build"}
            </div>
            <p style={{ marginBottom: "20px" }}>
              {"↗   Turn inquiries into organized CRM records"}
            </p>
            <p style={{ marginBottom: "20px" }}>
              {"↗   Summarize incoming documents for review"}
            </p>
            <p style={{ marginBottom: "20px" }}>
              {"↗   Move approved data between business tools"}
            </p>
          </div>
        </div>
      </section>
      <section className="dark">
        <div className="site-container editorial-grid">
          <div>
            <span className="eyebrow">{"// 02 / service"}</span>
            <h2
              style={{
                marginTop: "25px",
                marginRight: "0px",
                marginBottom: "25px",
                marginLeft: "0px",
              }}
            >
              {"Web development"}
            </h2>
            <p className="lead">
              {
                "Fast, thoughtful websites and applications built for real business needs, not just the launch day."
              }
            </p>
            <Link
              className="button yellow"
              style={{ marginTop: "25px" }}
              href="/web-development"
            >
              {"See how it works ↗"}
            </Link>
          </div>
          <div
            className="workflow"
            style={{
              paddingTop: "30px",
              paddingRight: "30px",
              paddingBottom: "30px",
              paddingLeft: "30px",
            }}
          >
            <div
              className="mono"
              style={{ fontSize: "12px", marginBottom: "30px" }}
            >
              {"// examples of what we can build"}
            </div>
            <p style={{ marginBottom: "20px" }}>
              {"↗   Launch a polished, responsive business website"}
            </p>
            <p style={{ marginBottom: "20px" }}>
              {"↗   Build an internal dashboard or client portal"}
            </p>
            <p style={{ marginBottom: "20px" }}>
              {"↗   Create a custom app for an operational need"}
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="site-container editorial-grid">
          <div>
            <span className="eyebrow">{"// 03 / service"}</span>
            <h2
              style={{
                marginTop: "25px",
                marginRight: "0px",
                marginBottom: "25px",
                marginLeft: "0px",
              }}
            >
              {"Systems & integrations"}
            </h2>
            <p className="lead">
              {
                "Connect your CRM, tools, and data into one clear operational workflow."
              }
            </p>
            <Link
              className="button "
              style={{ marginTop: "25px" }}
              href="/integrations"
            >
              {"See how it works ↗"}
            </Link>
          </div>
          <div
            className="feature-box"
            style={{
              paddingTop: "30px",
              paddingRight: "30px",
              paddingBottom: "30px",
              paddingLeft: "30px",
            }}
          >
            <div
              className="mono"
              style={{ fontSize: "12px", marginBottom: "30px" }}
            >
              {"// examples of what we can build"}
            </div>
            <p style={{ marginBottom: "20px" }}>
              {"↗   Connect a contact form to the right CRM pipeline"}
            </p>
            <p style={{ marginBottom: "20px" }}>
              {"↗   Sync information between platforms via APIs"}
            </p>
            <p style={{ marginBottom: "20px" }}>
              {"↗   Create a reliable back-office process"}
            </p>
          </div>
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
