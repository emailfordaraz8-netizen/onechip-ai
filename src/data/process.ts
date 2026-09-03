export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, workflow and bottlenecks.",
    details: [
      "In-depth discovery sessions",
      "Workflow and process mapping",
      "Pain point identification",
      "Opportunity assessment",
      "Technical audit of existing tools",
    ],
  },
  {
    number: "02",
    title: "Map",
    description:
      "Document every workflow, connection and data flow in the system.",
    details: [
      "Process flow documentation",
      "Tool and integration mapping",
      "Data source identification",
      "Stakeholder input sessions",
      "Priority ranking of automations",
    ],
  },
  {
    number: "03",
    title: "Architect",
    description:
      "Design the system around the actual operation.",
    details: [
      "System architecture design",
      "AI model selection and scoping",
      "Integration planning",
      "Security and data flow review",
      "Phased delivery roadmap",
    ],
  },
  {
    number: "04",
    title: "Build",
    description:
      "Develop, integrate and test the system.",
    details: [
      "Agile development in phases",
      "Integration builds and testing",
      "AI training and fine-tuning",
      "Quality assurance cycles",
      "Stakeholder review and feedback",
    ],
  },
  {
    number: "05",
    title: "Integrate",
    description:
      "Connect the system to every relevant tool and data source.",
    details: [
      "API and connector development",
      "Data pipeline configuration",
      "Tool-by-tool integration",
      "End-to-end workflow testing",
      "Edge case and error handling",
    ],
  },
  {
    number: "06",
    title: "Test",
    description:
      "Validate the system against real business conditions.",
    details: [
      "User acceptance testing",
      "Load and stress testing",
      "AI response quality review",
      "Workflow edge case testing",
      "Performance benchmarking",
    ],
  },
  {
    number: "07",
    title: "Deploy",
    description:
      "Launch the system into the live business environment.",
    details: [
      "Staged production rollout",
      "Team onboarding and training",
      "Live monitoring setup",
      "Documentation delivery",
      "Hypercare period support",
    ],
  },
  {
    number: "08",
    title: "Evolve",
    description:
      "Launch, improve and expand as the business grows.",
    details: [
      "Ongoing performance monitoring",
      "System iteration and improvement",
      "Capability expansion planning",
      "Monthly review and reporting",
      "Long-term evolution roadmap",
    ],
  },
];
