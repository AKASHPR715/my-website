export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: "Full-time" | "Internship" | "Industrial Training";
  current?: boolean;
  statusBadge?: string;
  description: string;
  responsibilities: string[];
  keyProjects?: {
    name: string;
    description: string;
    technologies: string[];
  }[];
  skills: string[];
  isProductionStarted?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "equifax",
    role: "Automation Engineer",
    company: "Equifax",
    location: "India",
    period: "July 1, 2026 – Present",
    type: "Full-time",
    current: true,
    statusBadge: "Foundational Phase",
    description:
      "Joined Equifax as an Automation Engineer and completed a three-month foundational training programme before being assigned to a team.",
    responsibilities: [
      "Completed comprehensive foundational enterprise engineering and automation training curriculum.",
      "Assigned to engineering team to prepare for production workflow alignment.",
      "Engaged in technical onboarding and enterprise system architectural review.",
    ],
    skills: ["Automation Architecture", "Enterprise Systems", "Python", "Software Engineering"],
    isProductionStarted: false,
  },
  {
    id: "acsia",
    role: "AI Research Intern",
    company: "Acsia Technologies",
    location: "Kerala, India",
    period: "September 2025 – June 30, 2026",
    type: "Internship",
    statusBadge: "10-Month Intensive",
    description:
      "Worked on enterprise-focused Generative AI and automation solutions, exploring how LLMs and intelligent agents can improve organizational workflows.",
    responsibilities: [
      "Implemented LLM safety guardrails using LlamaGuard and Guardrails AI to validate input prompts and output generations against enterprise policies.",
      "Tested and verified backend AI microservice APIs using Swagger documentation and test suites.",
      "Developed an AI-powered risk prediction system to evaluate vulnerabilities in business processes.",
      "Engineered an automated AI dashboard insight generator transforming raw metric streams into natural language summaries.",
      "Developed a Microsoft Teams agent integrating Microsoft Graph API to summarize prior-day organizational chats, extract actionable action items, and sync to Microsoft To Do.",
      "Engineered automated code-commenting and documentation tools leveraging Python Abstract Syntax Trees (AST) and automated Doxygen comment generators.",
      "Built an automated unit-testing agent that parses C++ source code to synthesize robust Google Test suites.",
    ],
    keyProjects: [
      {
        name: "LLM Guardrails & Safety Pipeline",
        description:
          "Enforced strict safety boundaries on enterprise LLM interactions using LlamaGuard and Guardrails AI, preventing jailbreaks and policy infractions.",
        technologies: ["LlamaGuard", "Guardrails AI", "Python", "Swagger"],
      },
      {
        name: "Microsoft Teams Intelligence Agent",
        description:
          "Autonomous workplace assistant interacting with Microsoft Graph API to extract action items from daily channel logs and schedule tasks into Microsoft To Do.",
        technologies: ["Microsoft Graph API", "LangChain", "Python", "FastAPI"],
      },
      {
        name: "Automated Code Analysis & Documentation",
        description:
          "AST-driven tools for auto-generating Doxygen syntax comments and Google Test unit suites directly from source code structures.",
        technologies: ["Python AST", "Google Test", "Doxygen", "C++"],
      },
      {
        name: "AI Risk Prediction & Dashboard Insight Generator",
        description:
          "Predictive AI pipeline identifying workflow risks and generating executive natural language insights from complex enterprise dashboards.",
        technologies: ["Python", "Machine Learning", "Prompt Engineering"],
      },
    ],
    skills: [
      "LlamaGuard",
      "Guardrails AI",
      "Microsoft Graph API",
      "Python AST",
      "Google Test",
      "Swagger",
      "FastAPI",
      "LangChain",
    ],
  },
  {
    id: "icore-pioneer",
    role: "AI/ML Intern",
    company: "Icore Pioneer Pvt. Ltd.",
    location: "India",
    period: "December 2024 – January 2025",
    type: "Internship",
    description:
      "Researched and implemented computer vision algorithms and sports analytics pipelines for professional badminton footage.",
    responsibilities: [
      "Developed deep learning models for high-speed badminton shuttlecock detection and tracking across dynamic broadcast video frames.",
      "Utilized TrackNet and YOLO architectures to localize small, fast-moving objects with high temporal consistency.",
      "Implemented player pose estimation using computer vision to evaluate movement biomechanics and court positioning.",
      "Contributed to match outcome prediction models based on point-by-point rally trajectory data.",
    ],
    skills: ["Computer Vision", "TrackNet", "YOLO", "OpenCV", "Pose Estimation", "Python"],
  },
  {
    id: "nestsoft",
    role: "NLP Intern",
    company: "Nestsoft Technologies",
    location: "Kerala, India",
    period: "December 2024 – January 2025",
    type: "Internship",
    description:
      "Deepened foundational Natural Language Processing engineering with a focus on text preprocessing, vectorization, and summarization pipelines.",
    responsibilities: [
      "Constructed linguistic preprocessing workflows including custom tokenization, stop-word filtering, and lemmatization.",
      "Implemented extractive and abstractive text summarization techniques on unstructured document corpora.",
      "Evaluated text representation methods including TF-IDF and word embeddings for downstream text classification.",
    ],
    skills: ["Natural Language Processing", "NLTK", "Text Preprocessing", "Summarization", "Python"],
  },
  {
    id: "intel-unnati",
    role: "AI Trainee",
    company: "Intel Unnati Industrial Training Programme",
    location: "India",
    period: "May 2025 – June 2025",
    type: "Industrial Training",
    description:
      "Participated in rigorous industrial training focused on deploying multimodal AI systems for educational technology.",
    responsibilities: [
      "Engineered an adaptive AI learning assistant featuring student engagement detection using real-time computer vision.",
      "Integrated facial expression recognition models with OpenCV to measure learner attentiveness.",
      "Connected speech-to-text (SpeechRecognition) and text-to-speech (gTTS) modules with LLaMA models via OpenRouter.",
    ],
    skills: ["Multimodal AI", "OpenCV", "Facial Expression Recognition", "LLaMA", "SpeechRecognition"],
  },
];
