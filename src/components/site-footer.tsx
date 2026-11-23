import Link from "next/link";
import { Brand } from "./brand";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="site-container">
          <div className="footer-top">
            <div>
              <Link
                className="logo"
                href="/"
                aria-label="Bitstack Solutions home"
              >
                <Brand />
              </Link>
              <p>
                Website development, workflow automation, and API integrations.
                Project contact: Shamas Rajput.
              </p>
              <a className="footer-email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
            <div>
              <h4>// navigate</h4>
              <div className="footer-links">
                {[
                  ["Home", "/"],
                  ["Services", "/services"],
                  ["Work", "/work"],
                  ["Resources", "/resources"],
                  ["About", "/about"],
                ].map(([label, href]) => (
                  <Link href={href} key={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4>// get started</h4>
              <div className="footer-links">
                {[
                  ["Start a project ↗", "/contact"],
                  ["AI automation", "/automation"],
                  ["Web development", "/web-development"],
                  ["Integrations", "/integrations"],
                ].map(([label, href]) => (
                  <Link href={href} key={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Bitstack Solutions. All rights
              reserved.
            </span>
            <span>Web development · Automation · Integrations</span>
          </div>
        </div>
      </footer>
      <Link className="mobile-cta" href="/contact">
        Start a project ↗
      </Link>
    </>
  );
}
