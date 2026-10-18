import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-container min-h-[60vh] py-[var(--section-space)]">
      <span className="eyebrow">// 404</span>
      <h1 className="my-6">Page not found.</h1>
      <p className="lead mb-8">Let’s get you back on track.</p>
      <Link className="button" href="/">
        Back to home ↗
      </Link>
    </section>
  );
}
