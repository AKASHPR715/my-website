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
    metric?: string;
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
      "Joined Equifax as an Automation Engineer. Completed foundational enterprise engineering curriculum and assigned to an automation team. Production contributions have not yet started.",
    responsibilities: [
      "Completed 3-month foundational enterprise automation and software engineering training.",
      "Assigned to engineering team to prepare for production workflow alignment.",
      "Engaged in technical onboarding and enterprise system architecture review.",
      "[TODO: Akash — add production team name, test suite framework, or CI/CD metrics once assigned to live sprints]",
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
    statusBadge: "10-Month Internship",
    description:
      "Researched and developed enterprise Generative AI and automation solutions, focusing on workplace agents, safety guardrails, and AST-driven developer tools.",
    responsibilities: [
      "Implemented LLM safety guardrails using LlamaGuard and Guardrails AI to validate input queries and sanitize completions against policy.",
      "Tested and verified backend AI microservice endpoints using Swagger specifications.",
      "Developed an AI-powered risk prediction system to evaluate potential vulnerabilities in business workflows.",
      "Built an AI dashboard insight generator transforming raw metric streams into natural language summaries.",
      "Developed a Microsoft Teams agent integrating Microsoft Graph API to parse previous-day channel messages, extract actionable tasks, and push them to Microsoft To Do.",
      "Built automated code-commenting and documentation tools leveraging Python Abstract Syntax Trees (AST) and automated Doxygen comment generators.",
      "Developed an automated unit-testing agent that parses C++ source code to synthesize Google Test test cases.",
    ],
    keyProjects: [
      {
        name: "Microsoft Teams Task Extraction Agent",
        description:
          "Workplace automation connecting to Microsoft Graph API to extract action items from daily channel logs and schedule tasks into Microsoft To Do.",
        technologies: ["Microsoft Graph API", "LangChain", "Python", "FastAPI"],
        metric: "Sub-8s per-channel extraction latency [TODO: Akash — confirm channel message batch size]",
      },
      {
        name: "Enterprise LLM Guardrails & Safety Pipeline",
        description:
          "Two-phase safety gateway using regex PII scrubbers and LlamaGuard classification across 12 risk taxonomies with automated early-exit on violations.",
        technologies: ["LlamaGuard", "Guardrails AI", "Python", "Swagger"],
        metric: "Sub-second regex pre-filter + LlamaGuard classification",
      },
      {
        name: "AST-Driven Code Analysis & Google Test Generator",
        description:
          "Python AST parser evaluating C++ function signatures to generate structured Doxygen comments and stubbed Google Test test fixtures.",
        technologies: ["Python AST", "Google Test", "Doxygen", "C++"],
        metric: "[TODO: Akash — insert approximate number of functions/files tested]",
      },
      {
        name: "AI Risk Prediction & Dashboard Insight Generator",
        description:
          "Predictive AI pipeline identifying workflow risks and generating natural language summaries from enterprise telemetry streams.",
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
      "Implemented computer vision tracking algorithms and sports analytics pipelines for professional badminton match footage.",
    responsibilities: [
      "Trained and evaluated deep learning models for high-speed badminton shuttlecock detection and tracking across video frames.",
      "Applied TrackNet and YOLO architectures to localize small, fast-moving objects under severe motion blur.",
      "Implemented player pose estimation using computer vision to evaluate court positioning and biomechanics.",
      "Contributed to match outcome modeling based on rally trajectory data.",
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
      "Built foundational NLP workflows focusing on text preprocessing, tokenization, vectorization, and summarization techniques.",
    responsibilities: [
      "Constructed linguistic preprocessing workflows including custom tokenization, stop-word filtering, and lemmatization.",
      "Implemented extractive and abstractive text summarization algorithms on unstructured document corpora.",
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
      "Completed hands-on industrial training focused on deploying multimodal AI systems for educational technology.",
    responsibilities: [
      "Developed an adaptive AI learning assistant featuring student engagement detection using real-time computer vision.",
      "Integrated facial expression recognition models with OpenCV to estimate learner attentiveness.",
      "Connected speech-to-text (SpeechRecognition) and text-to-speech (gTTS) modules with LLaMA models via OpenRouter.",
    ],
    skills: ["Multimodal AI", "OpenCV", "Facial Expression Recognition", "LLaMA", "SpeechRecognition"],
  },
];