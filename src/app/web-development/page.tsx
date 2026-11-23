import {
  ServicePage,
  type ServicePageContent,
} from "@/components/service-page";
import { pageMetadata } from "@/lib/seo";

const content: ServicePageContent = {
  path: "/web-development",
  service: "Web development",
  preset: "web-development",
  title: "Business websites and web applications.",
  description:
    "Website development from Bitstack Solutions: responsive service pages, web applications, validated forms, API connections, and documented deployment.",
  introduction:
    "Build a new website, migrate an existing design, or add a feature your current site cannot support. Define the visitor’s task first, then scope the pages and application behavior around it.",
  examples: [
    {
      title: "A service business website",
      text: "A home page, detailed service pages, an identifiable About page, direct contact options, and an inquiry form with a defined destination.",
    },
    {
      title: "A design-to-code migration",
      text: "Convert approved layouts into reusable React components and responsive pages, preserving important existing URLs with redirects.",
    },
    {
      title: "A business web application",
      text: "A scoped interface for an internal process or customer task, with authentication and data access requirements defined before development.",
    },
  ],
  dependencies:
    "Share your page list, approved content, brand assets, domain and hosting arrangements, and any systems the site needs to connect to. Scope includes identifying who owns each account.",
  deliverables: [
    "Page routes, reusable components, and responsive layouts",
    "Content and image responsibilities for each page",
    "Form fields, server validation, storage, and notification requirements",
    "Page titles, canonical URLs, share metadata, and a sitemap",
    "Source code, deployment steps, environment settings, and handoff notes",
  ],
  checks: [
    "The primary visitor task works on representative mobile and desktop widths.",
    "Keyboard users can reach navigation and form controls.",
    "Invalid data is rejected at the server; failed submissions do not produce a success screen.",
    "Redirects and internal links reach the intended pages.",
    "Hosting supports the data storage and server behavior the application requires.",
  ],
  boundary:
    "Hosting, copywriting, ongoing support, and third-party service fees need an explicit place in the scope. A launch does not by itself establish search rankings or conversion improvements.",
  guide: {
    title: "What to include in a website project brief",
    path: "/resources/website-project-brief",
  },
};
export const metadata = pageMetadata(
  "Business website and web application development",
  content.description,
  content.path,
);
export default function WebDevelopmentPage() {
  return <ServicePage content={content} />;
}
