import { pageMetadata } from "@/lib/seo";
import { PageSchema } from "@/components/structured-data";
import { site } from "@/lib/site";
import { ProjectForm } from "@/components/project-form";
import { Reveal } from "@/components/animations";

const description =
  "Contact Shamas Rajput at Bitstack Solutions by email or a guided project brief about website development, automation, or API integration.";
export const metadata = pageMetadata(
  "Contact Shamas Rajput",
  description,
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageSchema
        title="Contact Bitstack Solutions"
        description={description}
        path="/contact"
        type="ContactPage"
      />
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
            <h2 className="my-[22px] text-[3.1rem]">Talk to Shamas Rajput.</h2>
            <p className="lead">
              Email me directly, or use the brief to describe your current
              website, tools, and the task you want to change.
            </p>
            <a href={`mailto:${site.email}`} className="contact-email">
              {site.email}
            </a>
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
              Email is a separate contact option if you prefer not to use the
              form. Avoid sending passwords, API keys, or sensitive customer
              records.
            </p>
          </Reveal>
          <ProjectForm />
        </div>
      </section>
    </>
  );
}
