export interface CaseStudy {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  workflow: string[];
  outcome: string[];
  tags: string[];
  status: "DEMO SYSTEM";
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ai-lead-system",
    number: "01",
    category: "REAL ESTATE / DEMO",
    title: "AI Lead System",
    description:
      "AI-powered lead qualification, property matching and automated follow-up that converts enquiries into appointments.",
    challenge:
      "A real estate team was spending hours manually qualifying leads, sending follow-up emails and matching prospects to available listings — much of which happened too slowly to capture serious buyers.",
    solution:
      "We designed an AI Lead System that automatically qualifies incoming leads, matches them to relevant listings, and sends personalised follow-up messages via WhatsApp and email — all without manual input.",
    features: [
      "Instant lead qualification via AI conversation",
      "Automated property matching based on criteria",
      "Multi-channel follow-up sequences",
      "CRM synchronisation and pipeline updates",
      "Appointment scheduling integration",
      "Lead scoring and prioritisation",
    ],
    workflow: [
      "Lead enquiry arrives via website or WhatsApp",
      "AI agent initiates qualification conversation",
      "System matches lead to relevant listings",
      "Automated follow-up sequence activates",
      "Appointment booked and added to calendar",
      "Agent notified with full lead context",
    ],
    outcome: [
      "Faster initial response to every lead",
      "More consistent qualification process",
      "Reduced manual workload for sales team",
      "Better lead-to-appointment conversion",
    ],
    tags: ["AI Agents", "WhatsApp", "CRM Integration", "Automation", "NLP"],
    status: "DEMO SYSTEM",
  },
  {
    id: "smart-reservation-system",
    number: "02",
    category: "HOSPITALITY / DEMO",
    title: "Smart Reservation System",
    description:
      "Automated customer conversations, booking workflows and real-time notifications for hospitality businesses.",
    challenge:
      "A hospitality business was handling reservation requests manually across multiple channels — phone, email and Instagram — leading to missed bookings, slow responses and inconsistent customer experience.",
    solution:
      "An intelligent reservation system that handles incoming booking requests through a conversational AI interface, confirms availability in real time, processes reservations and sends confirmation and reminder sequences automatically.",
    features: [
      "Conversational booking via chat and WhatsApp",
      "Real-time availability checking",
      "Automated confirmation and reminder sequences",
      "Cancellation and rescheduling handling",
      "Group booking management",
      "Waitlist intelligence",
    ],
    workflow: [
      "Customer initiates booking via any channel",
      "AI assistant gathers booking details",
      "Availability checked against live system",
      "Reservation confirmed and recorded",
      "Confirmation sent to customer",
      "Automated reminders sent before appointment",
    ],
    outcome: [
      "Zero missed enquiries across channels",
      "Consistent booking experience at any hour",
      "Reduced staff time on reservation management",
      "Higher customer satisfaction from fast responses",
    ],
    tags: [
      "AI Chatbot",
      "Workflow Automation",
      "Multi-channel",
      "Booking Logic",
      "Notifications",
    ],
    status: "DEMO SYSTEM",
  },
  {
    id: "business-automation-core",
    number: "03",
    category: "OPERATIONS / DEMO",
    title: "Business Automation Core",
    description:
      "Connected workflows that move information between business tools automatically, eliminating copy-paste and manual data management.",
    challenge:
      "A growing business was operating across five different tools with no connection between them — causing data duplication, manual transfers and constant context-switching that consumed hours of team time daily.",
    solution:
      "A Business Automation Core that creates intelligent pipelines between all key tools — automatically routing data, triggering actions based on events, and maintaining consistency across the entire operation without manual intervention.",
    features: [
      "Multi-tool data synchronisation",
      "Event-triggered automation chains",
      "Intelligent data transformation",
      "Error handling and fallback logic",
      "Real-time monitoring dashboard",
      "Custom reporting automation",
    ],
    workflow: [
      "Event occurs in any connected tool",
      "Automation core receives and processes trigger",
      "Data transformed and validated",
      "Information routed to target systems",
      "Dependent automations activated",
      "Team notified of key events",
    ],
    outcome: [
      "Hours of manual work eliminated daily",
      "Single source of truth across all tools",
      "Faster team decision-making with accurate data",
      "Scalable foundation for business growth",
    ],
    tags: [
      "Workflow Automation",
      "API Integration",
      "Data Pipeline",
      "Multi-tool",
      "Operations",
    ],
    status: "DEMO SYSTEM",
  },
];
