import {
  ServicePage,
  type ServicePageContent,
} from "@/components/service-page";
import { pageMetadata } from "@/lib/seo";

const content: ServicePageContent = {
  path: "/integrations",
  service: "API and business systems integration",
  preset: "integrations",
  title: "Connect the tools that need to share information.",
  description:
    "Connect websites, CRMs, and internal tools with Bitstack Solutions. Scope API access, field mapping, webhooks, duplicate handling, and failure recovery.",
  introduction:
    "An integration should specify which system owns each record, what information moves, and how failures are found. The API connection is one part of that operating plan.",
  examples: [
    {
      title: "Website to CRM",
      text: "Map validated inquiry fields to a CRM record, attach a stable source reference, and separate intake success from downstream delivery.",
    },
    {
      title: "Webhook processing",
      text: "Receive supported events, verify their authenticity using the provider’s mechanism, and decide how repeated or delayed events are handled.",
    },
    {
      title: "Internal data synchronization",
      text: "Transfer agreed records between tools with a defined source of truth, conflict policy, schedule, and error report.",
    },
  ],
  dependencies:
    "Share the systems, the business process, and the relevant API documentation. Confirm that your subscription includes API access and that an account owner can grant the required permissions.",
  deliverables: [
    "A field map and source-of-truth decision for each record type",
    "Authentication and permission requirements for each system",
    "A trigger or schedule for transfers",
    "Rate-limit handling, duplicate policy, and bounded retries",
    "Logs or alerts that help an operator find failed transfers",
  ],
  checks: [
    "A representative record arrives with the agreed field values.",
    "Expired credentials and rejected permissions produce an actionable error.",
    "Repeated events do not create unintended duplicate work.",
    "Temporary outages and provider rate limits follow a defined recovery path.",
    "Credentials are kept in server-side configuration rather than exposed in the browser.",
  ],
  boundary:
    "Availability depends on the systems you use and the access they provide. A connection cannot guarantee synchronization when a provider has no supported way to read or update the required data.",
  guide: {
    title: "Design a lead-intake workflow that handles failure",
    path: "/resources/reliable-lead-intake",
  },
};
export const metadata = pageMetadata(
  "API and business systems integration",
  content.description,
  content.path,
);
export default function IntegrationsPage() {
  return <ServicePage content={content} />;
}
