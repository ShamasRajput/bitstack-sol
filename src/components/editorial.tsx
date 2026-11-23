import Link from "next/link";
import { Reveal } from "./animations";
import { serviceDetails } from "@/lib/services";

export function ServiceCards() {
  return (
    <div className="services-grid">
      {serviceDetails.map((service) => (
        <Reveal as="article" className="service-card" key={service.path}>
          <span className="card-number">{service.number} / SERVICE</span>
          <h3 className="mt-7!">{service.title}</h3>
          <p>{service.description}</p>
          <p className="mt-5 text-sm">
            <strong>What you get:</strong> {service.deliverable}
          </p>
          <Link href={service.path}>
            Scope and examples <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function CallToAction() {
  return (
    <section className="cta-band">
      <div className="site-container cta-wrap">
        <span className="eyebrow">// discuss a project</span>
        <h2>What do you need to build or connect?</h2>
        <p>
          Describe the current process, the tools involved, and the result you
          need. Shamas Rajput is your contact at Bitstack Solutions.
        </p>
        <Link href="/contact" className="button yellow">
          Send a project brief ↗
        </Link>
      </div>
    </section>
  );
}
