import Link from "next/link";
import { Brand } from "./site-header";

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
                Thoughtful websites, connected systems, and smarter workflows.
                The technical side of your business, handled.
              </p>
            </div>
            <div>
              <h4>// navigate</h4>
              <div className="footer-links">
                {[
                  ["Home", "/"],
                  ["Services", "/services"],
                  ["Work", "/work"],
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
            <span>Built with care. Not with buzzwords. {"</>"}</span>
          </div>
        </div>
      </footer>
      <Link className="mobile-cta" href="/contact">
        Start a project ↗
      </Link>
    </>
  );
}
