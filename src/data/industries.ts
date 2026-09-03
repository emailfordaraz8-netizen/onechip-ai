export interface Industry {
  id: string;
  name: string;
  useCases: string[];
  description: string;
}

export const industries: Industry[] = [
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Intelligent systems for property businesses",
    useCases: [
      "Lead qualification",
      "Property enquiries",
      "Automated follow-ups",
      "Appointment scheduling",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Smart workflows for healthcare providers",
    useCases: [
      "Patient intake automation",
      "Appointment reminders",
      "FAQ handling",
      "Record management",
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Automated commerce operations",
    useCases: [
      "Order tracking automation",
      "Customer support AI",
      "Product recommendations",
      "Returns processing",
    ],
  },
  {
    id: "restaurants",
    name: "Restaurants",
    description: "Reservation and service automation",
    useCases: [
      "Reservation handling",
      "Menu enquiries",
      "Order automation",
      "Review management",
    ],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    description: "Intelligent workflows for service firms",
    useCases: [
      "Client onboarding",
      "Project tracking",
      "Document automation",
      "Billing workflows",
    ],
  },
  {
    id: "education",
    name: "Education",
    description: "AI for learning institutions",
    useCases: [
      "Student enquiries",
      "Enrollment automation",
      "Course information",
      "Support automation",
    ],
  },
  {
    id: "saas",
    name: "SaaS",
    description: "AI-enhanced software products",
    useCases: [
      "User onboarding AI",
      "Support automation",
      "Usage analytics",
      "Churn prediction",
    ],
  },
  {
    id: "local-businesses",
    name: "Local Businesses",
    description: "Practical automation for local operations",
    useCases: [
      "Appointment booking",
      "Customer messaging",
      "Review automation",
      "Lead capture",
    ],
  },
];
