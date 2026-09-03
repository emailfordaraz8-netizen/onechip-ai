export interface Service {
  id: string;
  number: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  capabilities: string[];
  useCases: string[];
  howItWorks: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: "ai-agents",
    number: "01",
    slug: "ai-agents",
    title: "AI Agents",
    shortDescription:
      "AI systems that can understand context, make decisions and perform business tasks.",
    description:
      "AI Agents are intelligent software entities that perceive their environment, make autonomous decisions, and take actions to achieve defined goals — without constant human instruction.",
    icon: "agent",
    capabilities: [
      "Context-aware decision making",
      "Multi-step task execution",
      "Natural language understanding",
      "Tool and API usage",
      "Memory and learning loops",
      "Escalation and handoff logic",
    ],
    useCases: [
      "Lead qualification and follow-up",
      "Customer support resolution",
      "Internal request handling",
      "Data research and summarization",
      "Booking and scheduling management",
    ],
    howItWorks: [
      "Define the agent's role and goals",
      "Connect it to your tools and data sources",
      "Set decision rules and boundaries",
      "Deploy and monitor in real workflows",
    ],
    faqs: [
      {
        question: "What makes an AI agent different from a regular chatbot?",
        answer: "An AI agent can take actions, not just respond. It can access tools, execute tasks, and make multi-step decisions based on context.",
      },
      {
        question: "Can AI agents work with our existing software?",
        answer: "Yes. Agents can be connected to CRMs, calendars, databases, email systems and more through APIs and integrations.",
      },
    ],
  },
  {
    id: "ai-automation",
    number: "02",
    slug: "ai-automation",
    title: "AI Automation",
    shortDescription:
      "Automate repetitive processes and remove manual work from everyday operations.",
    description:
      "AI Automation goes beyond simple rule-based automation. It applies intelligent processing to handle exceptions, understand unstructured data, and adapt to changing conditions.",
    icon: "automation",
    capabilities: [
      "Intelligent process automation",
      "Document and data extraction",
      "Exception handling",
      "Cross-system orchestration",
      "Adaptive workflow routing",
      "Audit trails and logging",
    ],
    useCases: [
      "Invoice and document processing",
      "Lead routing and nurturing",
      "Report generation",
      "Inventory and order management",
      "Employee onboarding flows",
    ],
    howItWorks: [
      "Map existing manual processes",
      "Identify automation opportunities",
      "Design intelligent workflow logic",
      "Build, test and deploy automation",
    ],
    faqs: [
      {
        question: "What types of tasks can be automated with AI?",
        answer: "Any repetitive, rule-based, or data-driven task is a candidate — data entry, routing, notifications, reporting, follow-ups and more.",
      },
      {
        question: "Do we need to replace our existing tools?",
        answer: "No. AI automation works with your existing stack. We integrate with what you already use.",
      },
    ],
  },
  {
    id: "ai-chatbots",
    number: "03",
    slug: "ai-chatbots",
    title: "AI Chatbots",
    shortDescription:
      "Human-friendly AI experiences for websites, customer support and business communication.",
    description:
      "Modern AI chatbots are conversational interfaces powered by large language models. They understand intent, maintain context, and deliver helpful, natural responses across any channel.",
    icon: "chatbot",
    capabilities: [
      "Natural language conversations",
      "Multi-channel deployment",
      "Knowledge base integration",
      "Lead capture and qualification",
      "Escalation to human agents",
      "Conversation analytics",
    ],
    useCases: [
      "Website visitor assistance",
      "FAQ and support automation",
      "Product and service discovery",
      "Appointment booking",
      "WhatsApp and social messaging",
    ],
    howItWorks: [
      "Define conversation goals and tone",
      "Train on your business knowledge",
      "Integrate with your channels",
      "Monitor and continuously improve",
    ],
    faqs: [
      {
        question: "Can a chatbot handle complex customer questions?",
        answer: "Yes. Modern AI chatbots understand nuance and context. They can handle complex queries and escalate when needed.",
      },
      {
        question: "Which platforms can the chatbot be deployed on?",
        answer: "Website, WhatsApp, Instagram, email, SMS and more. We build for the channels your customers actually use.",
      },
    ],
  },
  {
    id: "workflow-automation",
    number: "04",
    slug: "workflow-automation",
    title: "Workflow Automation",
    shortDescription:
      "Connect your tools, data and processes into intelligent workflows.",
    description:
      "Workflow automation creates seamless pipelines between the tools, data and people in your business — eliminating the manual steps that slow everything down.",
    icon: "workflow",
    capabilities: [
      "Multi-tool integration",
      "Trigger-based automation",
      "Conditional logic and branching",
      "Data transformation",
      "Notifications and alerts",
      "Scheduling and time-based flows",
    ],
    useCases: [
      "Sales pipeline automation",
      "Customer onboarding sequences",
      "Internal approval workflows",
      "Data sync between platforms",
      "Automated reporting pipelines",
    ],
    howItWorks: [
      "Document existing workflow steps",
      "Identify friction and manual handoffs",
      "Design automated flow logic",
      "Integrate, test, and activate",
    ],
    faqs: [
      {
        question: "How is workflow automation different from AI automation?",
        answer: "Workflow automation focuses on connecting steps and tools. AI automation adds intelligent processing within those flows.",
      },
      {
        question: "What tools do you integrate with?",
        answer: "We integrate with most major business tools — CRMs, email platforms, calendar systems, databases, messaging apps and more.",
      },
    ],
  },
  {
    id: "ai-integrations",
    number: "05",
    slug: "ai-integrations",
    title: "AI Integrations",
    shortDescription:
      "Connect AI with the software your business already uses.",
    description:
      "AI integrations embed intelligent capabilities directly into your existing tools and workflows — no need to replace what's already working.",
    icon: "integration",
    capabilities: [
      "CRM AI enhancement",
      "Email and communication AI",
      "Analytics and reporting AI",
      "Document intelligence",
      "Custom API connectors",
      "Real-time data processing",
    ],
    useCases: [
      "AI inside your CRM",
      "Smart email categorization",
      "Automated meeting summaries",
      "Intelligent document analysis",
      "AI-powered search and discovery",
    ],
    howItWorks: [
      "Audit your current tool stack",
      "Identify integration points",
      "Build AI connectors and middleware",
      "Deploy and validate in production",
    ],
    faqs: [
      {
        question: "Can you integrate AI with legacy systems?",
        answer: "Yes. We build custom connectors and middleware that allow AI to work with older or proprietary systems.",
      },
      {
        question: "Is data security maintained during integration?",
        answer: "Absolutely. We follow best practices for data handling, and integrations are designed with security and privacy in mind.",
      },
    ],
  },
  {
    id: "custom-ai-systems",
    number: "06",
    slug: "custom-ai-systems",
    title: "Custom AI Systems",
    shortDescription:
      "Purpose-built intelligent systems designed around your business.",
    description:
      "When off-the-shelf solutions aren't enough, we architect custom AI systems from the ground up — designed specifically for how your business operates.",
    icon: "custom",
    capabilities: [
      "End-to-end system architecture",
      "Custom AI model fine-tuning",
      "Bespoke workflow design",
      "Proprietary data integration",
      "Scalable infrastructure planning",
      "Ongoing system evolution",
    ],
    useCases: [
      "Industry-specific AI platforms",
      "Internal intelligence layers",
      "Automated decision systems",
      "Multi-agent business networks",
      "AI-powered products and services",
    ],
    howItWorks: [
      "Deep-dive discovery and scoping",
      "System architecture design",
      "Phased build and integration",
      "Launch, monitor and evolve",
    ],
    faqs: [
      {
        question: "How long does a custom AI system take to build?",
        answer: "It depends on complexity. Simple systems can launch in 4–6 weeks. Complex platforms may take 3–6 months.",
      },
      {
        question: "Can we own the system you build for us?",
        answer: "Yes. Custom systems are built for you and you retain full ownership of the output.",
      },
    ],
  },
];
