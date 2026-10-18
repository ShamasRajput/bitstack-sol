import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore sample project directions for websites, automation, and connected operations at Bitstack Solutions.",
  openGraph: {
    title: "Work | Bitstack Solutions",
    description:
      "Explore sample project directions for websites, automation, and connected operations at Bitstack Solutions.",
  },
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">{"// our work"}</span>
          <h1>
            {"Thoughtful solutions."}
            <br />
            <span className="highlight">{"Tangible direction."}</span>
          </h1>
          <p className="lead">
            {
              "A few sample project directions to show how we think. These are concept examples, not real client work or claimed results."
            }
          </p>
        </div>
      </section>
      <section>
        <div className="site-container">
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
            <Reveal as="article" className="project-card">
              <div className="project-art">
                <div className="mock-window">
                  <div className="mock-top">{"● ● ●   /sample/3/preview"}</div>
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
                  {"CONCEPT EXAMPLE · WEB APP / INTERNAL TOOLS"}
                </span>
                <h3>{"An internal command center"}</h3>
                <p>
                  {
                    "An illustrative operations dashboard that brings scattered business information into one view."
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
        <div className="site-container editorial-grid">
          <div>
            <span className="eyebrow">{"// your project belongs here"}</span>
            <h2
              style={{
                marginTop: "23px",
                marginRight: "0px",
                marginBottom: "23px",
                marginLeft: "0px",
              }}
            >
              {"Different problems."}
              <br />
              {"Tailored builds."}
            </h2>
          </div>
          <div>
            <p className="lead">
              {
                "Every business has its own moving parts. We begin with what your team actually needs, then work backward to the simplest sensible solution."
              }
            </p>
            <Link
              href="/contact"
              className="button"
              style={{ marginTop: "25px" }}
            >
              {"Describe your project ↗"}
            </Link>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="site-container cta-wrap">
          <span className="eyebrow">{"// ready when you are"}</span>
          <h2>{"Let’s build something useful."}</h2>
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
