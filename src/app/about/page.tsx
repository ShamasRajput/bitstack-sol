import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know the engineering approach behind Bitstack Solutions: clarity, craftsmanship, and practical technology.",
  openGraph: {
    title: "About | Bitstack Solutions",
    description:
      "Get to know the engineering approach behind Bitstack Solutions: clarity, craftsmanship, and practical technology.",
  },
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">{"// about our approach"}</span>
          <h1>
            {"Engineers in mindset."}
            <br />
            <span className="highlight">{"Human by design."}</span>
          </h1>
          <p className="lead">
            {
              "We believe technology should feel easier to use, easier to understand, and easier to manage when the project is done."
            }
          </p>
        </div>
      </section>
      <section>
        <div className="site-container max-w-[850px]">
          <div>
            <span className="eyebrow">{"// a note from the workspace"}</span>
            <p className="about-quote" style={{ marginTop: "25px" }}>
              {
                "“The best technology quietly gets out of the way and lets people do their best work.”"
              }
            </p>
            <p className="small-muted" style={{ marginTop: "25px" }}>
              {"A guiding design philosophy, not a client testimonial."}
            </p>
          </div>
        </div>
      </section>
      <section className="dark">
        <div className="site-container">
          <span className="eyebrow">{"// what matters here"}</span>
          <h2
            style={{
              marginTop: "20px",
              marginRight: "0px",
              marginBottom: "48px",
              marginLeft: "0px",
            }}
          >
            {"How we think about the work."}
          </h2>
          <div className="feature-boxes">
            <div
              className="feature-box"
              style={{
                backgroundImage: "initial",
                backgroundPositionX: "initial",
                backgroundPositionY: "initial",
                backgroundSize: "initial",
                backgroundRepeat: "initial",
                backgroundAttachment: "initial",
                backgroundOrigin: "initial",
                backgroundClip: "initial",
                backgroundColor: "rgb(56, 38, 32)",
                borderTopColor: "rgb(111, 84, 73)",
                borderRightColor: "rgb(111, 84, 73)",
                borderBottomColor: "rgb(111, 84, 73)",
                borderLeftColor: "rgb(111, 84, 73)",
                color: "white",
              }}
            >
              <span className="mono" style={{ color: "var(--butter)" }}>
                {"01 / SIMPLICITY"}
              </span>
              <h3>{"Clarity first."}</h3>
              <p style={{ color: "rgb(207, 189, 177)" }}>
                {
                  "Explain the idea in language that makes sense to everyone in the room."
                }
              </p>
            </div>
            <div
              className="feature-box"
              style={{
                backgroundImage: "initial",
                backgroundPositionX: "initial",
                backgroundPositionY: "initial",
                backgroundSize: "initial",
                backgroundRepeat: "initial",
                backgroundAttachment: "initial",
                backgroundOrigin: "initial",
                backgroundClip: "initial",
                backgroundColor: "rgb(56, 38, 32)",
                borderTopColor: "rgb(111, 84, 73)",
                borderRightColor: "rgb(111, 84, 73)",
                borderBottomColor: "rgb(111, 84, 73)",
                borderLeftColor: "rgb(111, 84, 73)",
                color: "white",
              }}
            >
              <span className="mono" style={{ color: "var(--butter)" }}>
                {"02 / ENGINEERING"}
              </span>
              <h3>{"Build to last."}</h3>
              <p style={{ color: "rgb(207, 189, 177)" }}>
                {
                  "Think beyond launch day: quality, maintainability, and everyday use."
                }
              </p>
            </div>
            <div
              className="feature-box"
              style={{
                backgroundImage: "initial",
                backgroundPositionX: "initial",
                backgroundPositionY: "initial",
                backgroundSize: "initial",
                backgroundRepeat: "initial",
                backgroundAttachment: "initial",
                backgroundOrigin: "initial",
                backgroundClip: "initial",
                backgroundColor: "rgb(56, 38, 32)",
                borderTopColor: "rgb(111, 84, 73)",
                borderRightColor: "rgb(111, 84, 73)",
                borderBottomColor: "rgb(111, 84, 73)",
                borderLeftColor: "rgb(111, 84, 73)",
                color: "white",
              }}
            >
              <span className="mono" style={{ color: "var(--butter)" }}>
                {"03 / PARTNERSHIP"}
              </span>
              <h3>{"Work together."}</h3>
              <p style={{ color: "rgb(207, 189, 177)" }}>
                {
                  "Listen first. Communicate clearly. Create with business realities in mind."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="site-container editorial-grid">
          <div>
            <span className="eyebrow">{"// not another agency promise"}</span>
            <h2
              style={{
                marginTop: "21px",
                marginRight: "0px",
                marginBottom: "21px",
                marginLeft: "0px",
              }}
            >
              {"The right tool."}
              <br />
              {"For the right reason."}
            </h2>
          </div>
          <div>
            <p className="lead">
              {
                "Not every process needs AI. Not every business needs a custom app. We start with the actual problem and recommend technology only when it makes sense."
              }
            </p>
            <p className="small-muted" style={{ marginTop: "20px" }}>
              {
                "At Bitstack Solutions, we bring websites, workflows, and business tools together with a clear plan and a thoughtful handoff."
              }
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
