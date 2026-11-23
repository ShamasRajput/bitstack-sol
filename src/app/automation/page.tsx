import {
  ServicePage,
  type ServicePageContent,
} from "@/components/service-page";
import { pageMetadata } from "@/lib/seo";

const content: ServicePageContent = {
  path: "/automation",
  service: "Workflow and AI automation",
  preset: "automation",
  title: "Automate repeatable tasks. Keep people in control.",
  description:
    "Scope workflow and AI automation with Bitstack Solutions: intake routing, document processing, validation, error recovery, and human review.",
  introduction:
    "Start with a repeated task and a clear example of a correct result. Use rules for predictable steps; consider AI when the task involves interpreting unstructured information.",
  examples: [
    {
      title: "Inquiry routing",
      text: "Validate an incoming brief, save the record, and route it by the selected service. Define what happens if a destination is unavailable.",
    },
    {
      title: "Document processing",
      text: "Extract agreed fields from a supported document format, validate the result, and send uncertain or incomplete records for review.",
    },
    {
      title: "Text classification",
      text: "Suggest a category for a free-text request from an allowed list, with a human fallback for ambiguous or sensitive cases.",
    },
  ],
  dependencies:
    "Provide a small set of representative inputs, the desired outputs, the tools involved, access constraints, and the person who will handle exceptions. Do not include production secrets in a project brief.",
  deliverables: [
    "A documented trigger, input, transformation, and output",
    "Field validation and agreed rules for routing",
    "A decision on whether AI is needed and which data may leave your systems",
    "Error handling, retry boundaries, and an operator notification plan",
    "Test cases and handoff instructions for the person running the workflow",
  ],
  checks: [
    "Missing or invalid fields cannot silently continue through the workflow.",
    "A failed destination has a defined retry or manual recovery path.",
    "Duplicate-event behavior is specified and tested.",
    "Generated classifications are limited to accepted values.",
    "Sensitive or irreversible actions have the agreed human review step.",
  ],
  boundary:
    "AI output is not treated as automatically correct. Model costs, external data handling, queueing, and operational monitoring need to be agreed for the specific workflow.",
  guide: {
    title: "Design a lead-intake workflow that handles failure",
    path: "/resources/reliable-lead-intake",
  },
};
export const metadata = pageMetadata(
  "Workflow and AI automation",
  content.description,
  content.path,
);
export default function AutomationPage() {
  return <ServicePage content={content} />;
}
