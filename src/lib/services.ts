export const serviceDetails = [
  {
    number: "01",
    title: "Web development",
    path: "/web-development",
    description:
      "Business websites and web applications with service pages, responsive layouts, validated forms, and search metadata.",
    deliverable:
      "A working website, its source code, and deployment instructions.",
  },
  {
    number: "02",
    title: "Workflow automation",
    path: "/automation",
    description:
      "Move repeatable work out of inboxes and spreadsheets. Start with clear rules; add AI where reading or classifying text requires it.",
    deliverable:
      "A documented workflow with validation, error handling, and human review where needed.",
  },
  {
    number: "03",
    title: "API integrations",
    path: "/integrations",
    description:
      "Connect a website, CRM, or internal tool so the same information does not need to be entered twice.",
    deliverable:
      "A tested connection with field mapping, permissions, and a way to identify failed transfers.",
  },
] as const;
