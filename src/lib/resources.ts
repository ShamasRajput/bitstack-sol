export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  introduction: string;
  sections: { title: string; paragraphs: string[]; checklist?: string[] }[];
  sources: { title: string; url: string }[];
};

export const resources: Resource[] = [
  {
    slug: "website-project-brief",
    title: "What to include in a website project brief",
    description:
      "A practical website brief checklist covering users, page content, forms, integrations, account ownership, and acceptance criteria before requesting a quote.",
    category: "Website planning",
    published: "2026-11-24T00:00:00+05:00",
    introduction:
      "A useful website brief describes the decisions a developer needs to make. It does not need to prescribe a framework or contain a finished design. It needs to explain who uses the site, what they need to do, and what the business will be responsible for after launch. Use the following checklist to turn a broad request into work that can be scoped.",
    sections: [
      {
        title: "1. Describe the user and the main task",
        paragraphs: [
          "Start with one sentence about the visitor and the action they should be able to complete. For a service business, that might be: a prospective customer should understand whether a service fits, see how to contact the business, and send enough information to start a useful conversation.",
          "That is more actionable than asking for a modern website. It helps decide which pages, content, and form fields are necessary. If the site serves several audiences, write a task for each audience and identify the one that matters most.",
        ],
        checklist: [
          "Who is the primary visitor?",
          "What question should the first page answer?",
          "What action should the visitor take next?",
          "What would count as a useful inquiry or completed task?",
        ],
      },
      {
        title: "2. List pages and who supplies their content",
        paragraphs: [
          "Write a page list with a short purpose beside each entry. Home introduces the business and points to the main services. A service page explains the work, its deliverables, and its limits. About identifies the people behind the business. Contact provides a reachable channel and any information required for an inquiry.",
          "Separate existing content from material that still needs to be written or approved. Include the logo, photography, service descriptions, portfolio permissions, and any legal text. A project can be technically complete and still miss its deadline because nobody owns the content review.",
        ],
        checklist: [
          "Required pages and their purpose",
          "Draft copy, brand assets, and image permissions",
          "The person who approves content",
          "Existing URLs that need redirects",
        ],
      },
      {
        title: "3. Define what happens after a form is submitted",
        paragraphs: [
          "A form is a small workflow, not only a collection of fields. Specify required information, where it is stored, who receives it, and what the visitor sees if the request fails. Browser validation improves the experience, but the server still needs to validate the request independently.",
          "For example: a project brief asks for a service, description, name, and email. The server validates those values and saves the record before returning success. Email notification is a separate capability; a success screen should not imply that a message was emailed if the system only saved a file.",
        ],
        checklist: [
          "Required and optional fields",
          "Storage destination and notification recipient",
          "Success, validation, and connection-failure messages",
          "Retention period and access permissions",
        ],
      },
      {
        title: "4. Identify accounts, integrations, and recurring costs",
        paragraphs: [
          "List the services the website must connect to: hosting, domain registration, email delivery, a CRM, a booking tool, or a payment provider. Identify who owns each account and whether the required API access is included in its plan. Do not put passwords or secret keys into the brief.",
          "Hosting also affects the architecture. A form that writes files needs a persistent writable directory. A serverless deployment may need a database or external storage instead. Treat that choice as part of the scope, alongside backups and access control, rather than assuming all hosting works the same way.",
        ],
        checklist: [
          "Account owner for each service",
          "Existing API documentation and plan restrictions",
          "Expected recurring costs",
          "Who handles renewals, backups, and incident reports",
        ],
      },
      {
        title: "5. Agree on acceptance checks before estimating",
        paragraphs: [
          "Acceptance criteria describe observable behavior. Examples include: a visitor can reach every service from the mobile menu; an invalid email cannot create a submission; a failed request preserves the visitor’s answers; old service URLs redirect to the replacement pages.",
          "Search basics belong here too: descriptive page titles, canonical URLs, a sitemap, and a share image. These make a site easier to describe and crawl, but they do not promise a particular ranking or AI answer citation. Prioritize useful public content and a clear business identity over a checklist score.",
        ],
        checklist: [
          "Representative desktop and mobile widths",
          "Keyboard navigation and reduced-motion behavior",
          "Form success and failure scenarios",
          "Titles, canonical URLs, social previews, and redirects",
        ],
      },
      {
        title: "A short brief you can send",
        paragraphs: [
          "Our business serves [audience]. We need visitors to [main task]. We need [pages or features], and we already have [content and assets]. The site should connect to [tools]. [Person] will approve the content and own the hosting accounts. Our target deadline is [date or flexibility]. We will consider the project ready when [observable checks] pass.",
          "If some of those answers are unknown, say so. Identifying an unanswered question early is more useful than hiding it inside a request for a complete solution. Send the draft to Shamas Rajput at Bitstack Solutions to discuss the scope.",
        ],
      },
    ],
    sources: [
      {
        title: "OWASP: Input Validation Cheat Sheet",
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html",
      },
      {
        title: "Next.js: Metadata and Open Graph images",
        url: "https://nextjs.org/docs/app/getting-started/metadata-and-og-images",
      },
    ],
  },
  {
    slug: "reliable-lead-intake",
    title: "Design a lead-intake workflow that handles failure",
    description:
      "Plan validation, durable storage, duplicate protection, CRM retries, and human review before automating a lead-intake process.",
    category: "Workflow automation",
    published: "2026-11-24T00:00:00+05:00",
    introduction:
      "A lead-intake automation often starts with a simple diagram: form, CRM, notification. The diagram hides the difficult questions. What if the visitor presses submit twice? What if the record saves but the email service is unavailable? What if a field is missing or an AI classifier picks the wrong service? Design those cases before connecting the happy path.",
    sections: [
      {
        title: "1. Separate receiving a request from processing it",
        paragraphs: [
          "The first job of an intake endpoint is to decide whether the request is acceptable and preserve it somewhere appropriate. Moving it to a CRM, classifying free text, and sending notifications are separate steps with separate failure modes.",
          "A durable record gives you something to recover from if a downstream service fails. Choose storage that fits the hosting environment and the sensitivity of the information. A local file can serve a small deployment with persistent storage; a serverless application generally needs another persistence layer. A temporary filesystem should not be treated as an inquiry database.",
        ],
        checklist: [
          "Validate the request before storing it",
          "Assign a stable reference to the accepted record",
          "Store only the fields the workflow needs",
          "Return success only after the promised storage step completes",
        ],
      },
      {
        title: "2. Validate at the server boundary",
        paragraphs: [
          "Client-side checks help people correct mistakes, but requests can reach an endpoint without using its form. Enforce the required fields, accepted service values, field lengths, email shape, and supported URL protocols on the server. Limit request size before doing expensive processing.",
          "Validation should also clarify what it does not prove. An address can have a valid email format without belonging to the sender. A URL can use HTTPS without being safe to fetch. If a later step opens user-supplied URLs, that step needs its own network and access controls.",
        ],
        checklist: [
          "Allowlisted field names and service values",
          "Required fields and maximum lengths",
          "Payload size and request-rate limits",
          "A policy for sensitive or unnecessary information",
        ],
      },
      {
        title: "3. Decide how duplicate submissions are recognized",
        paragraphs: [
          "Disabling the submit button helps prevent accidental double clicks in a single browser. It does not cover a retry after a timeout, two tabs, or another client sending the same request. An idempotency key lets the receiver recognize a repeat of the same operation.",
          "Generate the key for a submission attempt and keep it stable for retries of that attempt. The server should associate it with the saved result and check that the payload matches. Do not assume that POST requests are inherently idempotent. If two identical-looking inquiries may be legitimate, use an operation identifier rather than deleting records based only on their text.",
        ],
        checklist: [
          "A stable key across retries of one submission",
          "A unique storage constraint or equivalent atomic check",
          "A defined expiry period for repeat detection",
          "The original result returned for a recognized retry",
        ],
      },
      {
        title: "4. Treat delivery to a CRM as a recoverable step",
        paragraphs: [
          "A timeout does not always mean the CRM rejected the request. The remote service may have created a record before the connection closed. Keep the intake reference with the CRM operation where the service allows it, and check the provider’s duplicate-handling or idempotency support.",
          "Retry temporary errors with a bounded schedule. Authentication failures, invalid field mappings, and rejected permissions usually require a change rather than endless retries. Preserve the error category and the next action in an internal log without exposing credentials or the full inquiry to public responses.",
        ],
        checklist: [
          "Field mapping agreed before connection",
          "A stable reference carried into downstream operations",
          "Bounded retries for temporary failures",
          "A visible queue or alert for work that needs manual attention",
        ],
      },
      {
        title: "5. Use rules before adding AI",
        paragraphs: [
          "A selected service can usually route an inquiry without a language model. If the task is to interpret a paragraph and propose a category, AI may be useful, but its output should be constrained to the categories the system accepts.",
          "Keep uncertain or sensitive cases available for human review. Do not allow a generated classification to silently discard an inquiry or authorize an irreversible action. Decide whether the content may be sent to an external model provider before adding that provider to the workflow.",
        ],
      },
      {
        title: "6. Test the failures you expect to support",
        paragraphs: [
          "Send missing fields, invalid values, oversized bodies, and repeated requests to the endpoint. Simulate a lost connection and verify that the form preserves answers. Make storage fail and confirm the API returns an error instead of a success screen. Then test a downstream timeout separately from an intake failure.",
          "The Bitstack Solutions website currently validates and saves project briefs, but it does not implement the full CRM pipeline or idempotency design described here. Those are decisions to scope for a production integration, not features to assume from a workflow illustration.",
        ],
        checklist: [
          "Invalid input cannot create a record",
          "The UI does not report success after a failed save",
          "Retries have a defined duplicate policy",
          "An operator can find and recover failed downstream work",
        ],
      },
    ],
    sources: [
      {
        title: "MDN: Idempotent HTTP methods",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent",
      },
      {
        title: "OWASP: Input Validation Cheat Sheet",
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html",
      },
    ],
  },
];
