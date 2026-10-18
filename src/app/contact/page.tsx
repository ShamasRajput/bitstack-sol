import type { Metadata } from "next";
import { ProjectForm } from "@/components/project-form";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your project with Bitstack Solutions. Share your goals through our guided project brief.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">// start a project</span>
          <h1>
            Tell us what you
            <br />
            <span className="highlight">have in mind.</span>
          </h1>
          <p className="lead">
            You don&apos;t need a complete technical spec. A few details are
            enough to start the conversation.
          </p>
        </div>
      </section>
      <section>
        <div className="site-container contact-layout">
          <Reveal>
            <span className="eyebrow">// project intake</span>
            <h2 className="my-[22px] text-[3.1rem]">
              Let’s work it out together.
            </h2>
            <p className="lead">
              A guided brief to help us understand your business, your goals,
              and where you need a hand.
            </p>
            <div className="page-aside mt-[37px]">
              01 &nbsp; Tell us the challenge
              <br />
              <br />
              02 &nbsp; Share the context
              <br />
              <br />
              03 &nbsp; Choose your timeline
              <br />
              <br />
              04 &nbsp; Leave your details
            </div>
            <p className="small-muted mt-5">
              Share a few details to create your project brief. You can keep a
              copy after submitting.
            </p>
          </Reveal>
          <ProjectForm />
        </div>
      </section>
    </>
  );
}
