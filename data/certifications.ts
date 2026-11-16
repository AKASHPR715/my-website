export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerLogoText: string;
  category: "Generative AI" | "AI Ethics & Fundamentals" | "Python & Programming" | "Prompt Engineering";
  issueDate?: string;
  skillsAcquired: string[];
  credentialNotice: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "gcp-genai-leader",
    title: "Generative AI Leader",
    issuer: "Google Cloud",
    issuerLogoText: "GCP",
    category: "Generative AI",
    skillsAcquired: ["Generative AI Principles", "Enterprise GenAI Architecture", "Cloud AI Infrastructure"],
    credentialNotice: "Official Google Cloud Certificate",
  },
  {
    id: "microsoft-career-essentials-genai",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn Learning",
    issuerLogoText: "MSFT",
    category: "Generative AI",
    skillsAcquired: ["Generative AI Workflow", "Responsible AI", "Copilot Ecosystem"],
    credentialNotice: "Joint Microsoft & LinkedIn Learning Credential",
  },
  {
    id: "microsoft-evolution-search",
    title: "Generative AI: The Evolution of Thoughtful Online Search",
    issuer: "Microsoft",
    issuerLogoText: "MSFT",
    category: "Generative AI",
    skillsAcquired: ["Semantic Search", "Neural Retrieval", "Information Synthesis"],
    credentialNotice: "Microsoft Certified Training",
  },
  {
    id: "microsoft-ethics-genai",
    title: "Ethics in the Age of Generative AI",
    issuer: "Microsoft",
    issuerLogoText: "MSFT",
    category: "AI Ethics & Fundamentals",
    skillsAcquired: ["Responsible AI Principles", "Bias Mitigation", "Data Privacy & Governance"],
    credentialNotice: "Microsoft Ethics Credential",
  },
  {
    id: "microsoft-intro-ai",
    title: "Introduction to Artificial Intelligence",
    issuer: "Microsoft",
    issuerLogoText: "MSFT",
    category: "AI Ethics & Fundamentals",
    skillsAcquired: ["Machine Learning Fundamentals", "Cognitive Services", "AI Problem Formulation"],
    credentialNotice: "Microsoft AI Fundamentals",
  },
  {
    id: "iiht-infosys-python",
    title: "Learn Python Programming (Python 3)",
    issuer: "IIHT in collaboration with Infosys",
    issuerLogoText: "INFY",
    category: "Python & Programming",
    skillsAcquired: ["Core Python 3", "Data Structures", "Functional & OOP Programming"],
    credentialNotice: "Industry Collaborative Credential",
  },
  {
    id: "udemy-prompt-engineering",
    title: "Prompt Engineering",
    issuer: "Udemy",
    issuerLogoText: "UDMY",
    category: "Prompt Engineering",
    skillsAcquired: ["Few-Shot Prompting", "Chain-of-Thought (CoT)", "Role Formulation", "Output Structuring"],
    credentialNotice: "Udemy Verified Course Completion",
  },
];
