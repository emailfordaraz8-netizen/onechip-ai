// Chat service layer — structured for future AI API connection
// Currently uses mock responses

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ChatSuggestion {
  id: string;
  label: string;
  message: string;
}

export const initialSuggestions: ChatSuggestion[] = [
  {
    id: "1",
    label: "What can you automate?",
    message: "What can you automate?",
  },
  {
    id: "2",
    label: "Tell me about AI agents",
    message: "Tell me about AI agents",
  },
  {
    id: "3",
    label: "How does the process work?",
    message: "How does the process work?",
  },
  {
    id: "4",
    label: "I want to start a project",
    message: "I want to start a project",
  },
];

const mockResponses: Record<string, string> = {
  default:
    "That's a great question. Onechip.ai specialises in building intelligent systems for businesses — AI agents, automation workflows, chatbots and custom integrations. Would you like to explore a specific area?",
  automate:
    "We can automate a wide range of business processes — lead qualification and follow-up, customer support, appointment booking, data entry, report generation, invoice processing, internal approvals and more. The best place to start is identifying where your team spends the most repetitive time. What does your team currently do manually?",
  agent:
    "AI agents are intelligent software systems that can understand context, make decisions and take actions autonomously. Unlike a chatbot that just responds, an agent can execute tasks — like qualifying a lead, booking an appointment, updating your CRM, or sending a follow-up — all without human instruction. They're designed to handle complex, multi-step workflows.",
  process:
    "Our process has four core phases: Discover (we understand your business and bottlenecks), Architect (we design the system around your actual workflows), Build (we develop and integrate everything), and Evolve (we launch and continuously improve). Most projects take between 4 and 12 weeks depending on complexity.",
  project:
    "Great — we'd love to help. To get started, it helps to know: What industry are you in? What's the biggest manual bottleneck in your business right now? You can also reach us directly at onechipai@gmail.com or fill in the project form on our Contact page. We'll respond within 24 hours.",
  cost:
    "Costs vary depending on the complexity of the system, the number of integrations and the scope of AI capabilities required. We structure projects to deliver value early and can work across different budget ranges. Contact us for a specific proposal.",
  whatsapp:
    "Yes. AI agents and chatbots can be deployed directly on WhatsApp Business via the official API. This means your customers can interact with your business through WhatsApp — for support, bookings, lead qualification and more — while everything is handled automatically in the background.",
  crm: "Absolutely. We regularly integrate AI with CRM platforms — this includes automatic data entry, intelligent lead scoring, follow-up sequence automation, pipeline updates and more. The goal is to make your CRM actively work for you rather than just store data.",
  chatbot:
    "An AI chatbot is a conversational interface that can handle customer questions, capture leads, guide users and provide support — on your website, WhatsApp, or other channels. Modern AI chatbots understand natural language and context, not just keywords.",
};

function findBestResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("automat") || lower.includes("manual")) {
    return mockResponses.automate;
  }
  if (lower.includes("agent")) {
    return mockResponses.agent;
  }
  if (lower.includes("process") || lower.includes("how does") || lower.includes("work")) {
    return mockResponses.process;
  }
  if (
    lower.includes("start") ||
    lower.includes("project") ||
    lower.includes("begin") ||
    lower.includes("hire")
  ) {
    return mockResponses.project;
  }
  if (lower.includes("cost") || lower.includes("price") || lower.includes("much")) {
    return mockResponses.cost;
  }
  if (lower.includes("whatsapp") || lower.includes("whats app")) {
    return mockResponses.whatsapp;
  }
  if (lower.includes("crm") || lower.includes("salesforce") || lower.includes("hubspot")) {
    return mockResponses.crm;
  }
  if (lower.includes("chatbot") || lower.includes("chat bot")) {
    return mockResponses.chatbot;
  }

  return mockResponses.default;
}

// Service layer — replace this function body to connect a real AI API
export async function sendMessage(
  message: string,
  _history: ChatMessage[]
): Promise<string> {
  // Simulate network delay
  await new Promise((resolve) =>
    setTimeout(resolve, 800 + Math.random() * 600)
  );

  return findBestResponse(message);

  // Future: replace with actual API call
  // const response = await fetch('/api/chat', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ message, history }),
  // });
  // const data = await response.json();
  // return data.response;
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}
