export interface ArchitectureStep {
  step: number;
  title: string;
  type: "deterministic" | "probabilistic" | "hybrid" | "integration";
  description: string;
  tech: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  featured: boolean;
  roleBadge: "Flagship Project" | "Enterprise Innovation" | "Research & Safety" | "Computer Vision" | "Data Science" | "Multimodal AI";
  summary: string;
  problemStatement: string;
  solution: string;
  neuroSymbolicHighlight?: string;
  architectureDiagramTitle?: string;
  architectureSteps: ArchitectureStep[];
  technologies: {
    category: string;
    items: string[];
  }[];
  implementationDetails: string[];
  challenges: {
    title: string;
    description: string;
    resolution: string;
  }[];
  resultsAndEvaluation: {
    metrics: {
      label: string;
      value: string;
      detail: string;
    }[];
    honestDisclaimer?: string;
  };
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "taxmate",
    slug: "taxmate-ai-tax-automation",
    title: "TaxMate",
    subtitle: "AI-Powered Tax File Automation & Personal Tax Advisor",
    category: "Agentic AI | RAG | FinTech",
    tags: ["Agentic AI", "RAG", "FastAPI", "Next.js", "LangGraph", "Python", "MongoDB", "FinTech"],
    featured: true,
    roleBadge: "Flagship Project",
    summary:
      "An intelligent tax assistance system designed to simplify Indian income tax filing by combining Generative AI with deterministic, rule-based computation.",
    problemStatement:
      "Indian personal income tax filing is notoriously convoluted. Taxpayers must navigate complex tax slabs across both Old and New Tax Regimes, cross-verify disparate financial documents (Form 16 from employers, Annual Information Statement [AIS], and Form 26AS from the tax portal), and calculate deductions under Chapter VI-A. Pure LLM-based solutions suffer from hallucinations and numerical inaccuracy on strict mathematical balances, while legacy tax portals are rigid, confusing, and lack conversational clarity.",
    solution:
      "TaxMate implements a Neuro-Symbolic AI architecture. It rigorously separates probabilistic natural language understanding (LLM-driven document extraction, semantic query parsing, and conversational tax guidance via RAG) from deterministic financial computing engines (hardcoded, rule-based tax slab calculators that guarantee 100% mathematical precision). LangGraph coordinates multi-agent workflows across document parsing, validation, tax calculation, advisory, and ITR JSON schema compilation.",
    neuroSymbolicHighlight:
      "Core Architectural Rule: Probabilistic LLMs are never allowed to perform raw arithmetic on taxes. The LLM extracts entities and queries tax laws; a deterministic Python engine computes slabs, cess, 87A rebates, and Chapter VI-A deductions with zero-tolerance for mathematical hallucination.",
    architectureDiagramTitle: "TaxMate Neuro-Symbolic Multi-Agent Pipeline",
    architectureSteps: [
      {
        step: 1,
        title: "Document Ingestion",
        type: "integration",
        description: "Secure upload and pre-flight validation of Form 16 Part A/B, AIS, and Form 26AS PDFs.",
        tech: "FastAPI / PyMuPDF",
      },
      {
        step: 2,
        title: "Intelligent Extraction",
        type: "probabilistic",
        description: "Multi-agent document parser extracts gross salary, exemptions (HRA, LTA), TDS deductions, and interest income.",
        tech: "LLMs / Structured JSON Parsing",
      },
      {
        step: 3,
        title: "Cross-Reconciliation",
        type: "deterministic",
        description: "Deterministic cross-checking between Form 16 employer deductions and Form 26AS tax credits to spot mismatches.",
        tech: "Deterministic Python Rules",
      },
      {
        step: 4,
        title: "Dual Regime Computation",
        type: "deterministic",
        description: "Strict mathematical calculation of tax liabilities under both Old and New regimes with optimal selection.",
        tech: "Rule-Based Indian Tax Engine",
      },
      {
        step: 5,
        title: "RAG Advisory Engine",
        type: "probabilistic",
        description: "LangGraph-powered tax advisor retrieving statutory provisions (Sec 80C, 80D, 80CCD, 24b) to recommend optimizations.",
        tech: "LangGraph / FAISS / RAG",
      },
      {
        step: 6,
        title: "ITR JSON Synthesis",
        type: "deterministic",
        description: "Compiles validated tax returns into the official schema-compliant ITR-1 / ITR-2 JSON format ready for portal upload.",
        tech: "Pydantic Schema Validator",
      },
    ],
    technologies: [
      { category: "Agentic AI & Orchestration", items: ["LangGraph", "LangChain", "RAG Pipeline", "Prompt Engineering"] },
      { category: "Backend & Systems", items: ["Python", "FastAPI", "Pydantic", "PyMuPDF", "FAISS Vector Store"] },
      { category: "Frontend & Interface", items: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Data Storage", items: ["MongoDB", "Encrypted Document Store"] },
    ],
    implementationDetails: [
      "Engineered multi-agent state machines in LangGraph with explicit state boundaries to prevent context pollution between extraction and advisory steps.",
      "Built deterministic rule engines for Indian Income Tax sections (Sec 115BAC new tax regime vs Section 80C, 80D, 80G under old regime).",
      "Constructed a high-recall vector search index over Indian Income Tax Act guidelines and official circulars using sentence transformers and FAISS.",
      "Implemented automated fallback mechanisms for scanned or partially corrupted financial PDF formats.",
    ],
    challenges: [
      {
        title: "Preventing LLM Numerical Hallucination",
        description: "Early prototypes had the LLM calculating net payable tax directly, occasionally rounding incorrectly or hallucinating rebate limits.",
        resolution: "Adopted a strict Neuro-Symbolic boundary: LLMs only extract structured variables; all calculations run through pure deterministic Python mathematical functions with unit test assertions.",
      },
      {
        title: "Format Variances in Form 16 and 26AS",
        description: "Employers and TRACES generate Form 16s with vastly different layout structures, tables, and page splits.",
        resolution: "Developed a dual extraction strategy combining spatial coordinate text extraction with an LLM-guided schema normalizer enforcing Pydantic models.",
      },
    ],
    resultsAndEvaluation: {
      metrics: [
        { label: "Calculation Precision", value: "100%", detail: "Guaranteed by isolated deterministic tax rule engine" },
        { label: "Document Processing", value: "< 4.2s", detail: "End-to-end ingestion and structured schema extraction" },
        { label: "Regime Optimization", value: "Dual Analysis", detail: "Automated side-by-side Old vs New tax liability comparison" },
      ],
      honestDisclaimer: "Tax calculations are validated against official Indian Income Tax Department sample tables for AY 2025-26 and AY 2026-27.",
    },
    githubUrl: "https://github.com/AKASHPR715",
  },
  {
    id: "teams-agent",
    slug: "microsoft-teams-intelligence-agent",
    title: "Microsoft Teams Intelligence Agent",
    subtitle: "Autonomous Enterprise Communication to Task Extraction Agent",
    category: "Agentic AI | Enterprise Automation",
    tags: ["Agentic AI", "Microsoft Graph API", "Enterprise Automation", "Python", "FastAPI", "Microsoft To Do"],
    featured: true,
    roleBadge: "Enterprise Innovation",
    summary:
      "An AI-powered enterprise agent that transforms organizational conversations into structured, actionable tasks and synchronizes them directly into Microsoft To Do.",
    problemStatement:
      "In high-velocity engineering organizations, critical action items, deadlines, bug reports, and delegated tasks get buried inside fast-scrolling Microsoft Teams channel threads and direct chats. Knowledge workers spend substantial cognitive overhead manually parsing previous-day discussions, leading to missed deliverables and fragmented task tracking.",
    solution:
      "Developed during the AI Research Internship at Acsia Technologies, this intelligent agent connects directly to organizational conversations via the Microsoft Graph API. It automatically retrieves prior-day channel messages, filters conversational noise, applies semantic LLM summarization, identifies actionable commitments with assigned owners and deadlines, and creates prioritized tasks in Microsoft To Do without human friction.",
    architectureDiagramTitle: "Enterprise Teams to Task Synchronization Flow",
    architectureSteps: [
      {
        step: 1,
        title: "Teams Ingestion",
        type: "integration",
        description: "Authenticated retrieval of previous-day chat messages and channel discussions via Microsoft Graph API.",
        tech: "Microsoft Graph API / OAuth 2.0",
      },
      {
        step: 2,
        title: "Thread Sanitization",
        type: "deterministic",
        description: "Strips emojis, noise, duplicate conversational chatter, and formats chronological thread sequences.",
        tech: "Python Thread Parser",
      },
      {
        step: 3,
        title: "Semantic Summarization",
        type: "probabilistic",
        description: "Synthesizes concise executive conversation summaries segmented by project topic and stakeholder.",
        tech: "LLMs / Prompt Engineering",
      },
      {
        step: 4,
        title: "Task Extraction",
        type: "probabilistic",
        description: "Identifies explicit commitments, assignees, priorities, and implicit deadlines from thread context.",
        tech: "Structured JSON Output Parser",
      },
      {
        step: 5,
        title: "Microsoft To Do Sync",
        type: "integration",
        description: "Creates prioritized task cards with reference deep-links and due dates in Microsoft To Do lists.",
        tech: "Graph API / Microsoft To Do",
      },
    ],
    technologies: [
      { category: "Integration & APIs", items: ["Microsoft Graph API", "Azure AD OAuth", "Microsoft To Do API", "Swagger"] },
      { category: "AI & NLP", items: ["LangChain", "LLMs", "Context Extraction", "Task Classification"] },
      { category: "Backend Infrastructure", items: ["Python", "FastAPI", "Scheduled Cron Workers"] },
    ],
    implementationDetails: [
      "Configured secure enterprise application permissions in Microsoft Graph API with least-privilege delegated scopes.",
      "Built resilient conversation chunking that respects token boundaries while keeping complete message reply trees intact.",
      "Created structured output schemas enforcing task title, description, assignee, priority (Urgent/Medium/Low), and suggested due date.",
      "Engineered automated deduplication logic to prevent repeatedly adding previously tracked tasks from ongoing multi-day threads.",
    ],
    challenges: [
      {
        title: "Conversational Ambiguity",
        description: "Informal statements like 'I will look into this tomorrow' needed to be separated from actual firm task assignments.",
        resolution: "Designed few-shot prompt templates with explicit distinction criteria between conversational acknowledgments and genuine action items.",
      },
      {
        title: "Rate Limiting on Enterprise Graph API",
        description: "Querying multiple high-volume channel histories triggered Graph API 429 throttling.",
        resolution: "Implemented exponential backoff with jitter and delta queries to only fetch new message deltas since the last synchronization timestamp.",
      },
    ],
    resultsAndEvaluation: {
      metrics: [
        { label: "Sync Latency", value: "< 8s", detail: "Full day message retrieval and task extraction per channel" },
        { label: "Action Item Recall", value: "High Precision", detail: "Filters out banter and non-actionable chatter" },
        { label: "Workflow Integration", value: "Direct Sync", detail: "Zero-click push into Microsoft To Do" },
      ],
      honestDisclaimer: "Engineered as an internal enterprise automation solution during internship at Acsia Technologies.",
    },
  },
  {
    id: "ai-guardrails",
    slug: "ai-guardrails-and-risk-analysis",
    title: "AI Guardrails and Risk Analysis",
    subtitle: "Enterprise LLM Safety, Input/Output Validation & Risk Mitigation",
    category: "AI Safety | LLM Security",
    tags: ["AI Safety", "LlamaGuard", "Guardrails AI", "LLM Security", "Swagger", "Python"],
    featured: true,
    roleBadge: "Research & Safety",
    summary:
      "An AI safety and risk analysis solution focused on identifying potential vulnerabilities, preventing adversarial injections, and controlling unsafe LLM interactions in enterprise workflows.",
    problemStatement:
      "Enterprise deployment of Large Language Models introduces severe attack surfaces: prompt injection, jailbreaking, PII leakage, toxic completions, and compliance violations. Without deterministic, low-latency safety guardrails at both input and output boundaries, production LLM systems pose intolerable compliance and operational risks.",
    solution:
      "Researched and implemented an enterprise safety pipeline during internship at Acsia Technologies using LlamaGuard and Guardrails AI. The framework intercepts incoming user prompts to filter jailbreak attempts and toxic directives before model inference, and verifies LLM output completions against enterprise risk policies and PII leak constraints before delivering responses to end users.",
    architectureDiagramTitle: "Bidirectional LLM Safety & Risk Mitigation Architecture",
    architectureSteps: [
      {
        step: 1,
        title: "Input Interception",
        type: "integration",
        description: "Incoming user query received through API gateway with metadata logging.",
        tech: "FastAPI / Swagger",
      },
      {
        step: 2,
        title: "Input Guardrails",
        type: "hybrid",
        description: "LlamaGuard and regex pattern evaluators analyze prompt for injection attacks, jailbreaks, and toxicity.",
        tech: "LlamaGuard / Guardrails AI",
      },
      {
        step: 3,
        title: "Risk Scoring & Decision",
        type: "deterministic",
        description: "If input violates safety thresholds, request is immediately rejected with sanitized guidance.",
        tech: "Deterministic Policy Engine",
      },
      {
        step: 4,
        title: "Target LLM Inference",
        type: "probabilistic",
        description: "Safe inputs are forwarded to the primary enterprise LLM for task processing.",
        tech: "Enterprise LLM",
      },
      {
        step: 5,
        title: "Output Verification",
        type: "hybrid",
        description: "Model output is vetted for hallucinations, PII leakage, and toxic content before client dispatch.",
        tech: "Guardrails AI / PII Scanners",
      },
    ],
    technologies: [
      { category: "Safety & Governance", items: ["LlamaGuard", "Guardrails AI", "Responsible AI Guidelines", "Content Moderation"] },
      { category: "Testing & APIs", items: ["Swagger / OpenAPI", "Postman", "FastAPI", "Python"] },
      { category: "Security Techniques", items: ["Prompt Injection Defense", "PII Redaction", "Output Schema Enforcement"] },
    ],
    implementationDetails: [
      "Benchmarked and configured LlamaGuard category taxonomies (violence, self-harm, sexual content, hate speech, malware generation).",
      "Created programmable Guardrails AI validators to verify JSON schemas and redact sensitive enterprise identifiers.",
      "Authored automated Swagger test collections covering adversarial prompt injection suites to validate boundary behavior.",
      "Designed graceful fallback messaging to maintain positive user experience when queries are intercepted.",
    ],
    challenges: [
      {
        title: "Latency Overhead of Safety Auditing",
        description: "Running multiple guardrail models in series added perceptible latency to real-time chat interactions.",
        resolution: "Optimized the pipeline by running lightweight deterministic regex/PII pattern filters first, and invoking LlamaGuard asynchronously where applicable.",
      },
      {
        title: "False Positives on Benign Technical Terminology",
        description: "Standard toxicity models flagged legitimate cybersecurity and code debugging prompts as dangerous.",
        resolution: "Tuned taxonomy sensitivity thresholds and applied context-aware allowlists for internal enterprise programming keywords.",
      },
    ],
    resultsAndEvaluation: {
      metrics: [
        { label: "Policy Coverage", value: "Multi-Taxonomy", detail: "Injections, PII leakage, toxic completions, and schema drift" },
        { label: "API Validation", value: "Swagger Tested", detail: "Verified across automated boundary test suites" },
        { label: "Interception Speed", value: "Sub-Second", detail: "Early-exit filtering on high-confidence adversarial inputs" },
      ],
      honestDisclaimer: "Evaluated on internal enterprise benchmark test suites at Acsia Technologies without claiming unsupported public leaderboard percentages.",
    },
  },
  {
    id: "badminton-vision",
    slug: "badminton-analytics-and-point-detection",
    title: "Badminton Analytics & Point Detection",
    subtitle: "High-Speed Computer Vision Tracking & Sports Biomechanics",
    category: "Computer Vision | Sports Analytics",
    tags: ["Computer Vision", "TrackNet", "YOLO", "OpenCV", "Deep Learning", "Sports Analytics"],
    featured: false,
    roleBadge: "Computer Vision",
    summary:
      "A computer vision-based badminton analytics system designed to track high-speed shuttlecock movement, identify court boundaries and analyze match dynamics from video footage.",
    problemStatement:
      "Badminton is the fastest racket sport in the world, with shuttlecock speeds exceeding 400 km/h. Broadcast video often suffers from severe motion blur, low contrast between the white shuttlecock and background spectator areas, and occlusion by players or the net. Tracking the shuttlecock and detecting point events automatically from standard single-camera video is a formidable computer vision challenge.",
    solution:
      "Built during internship at Icore Pioneer Pvt. Ltd. using TrackNet, YOLO, and OpenCV. The system models temporal heatmaps across sequential video frames to detect and track the shuttlecock with high accuracy. The pipeline also detects court line intersections to map 2D pixel coordinates into standardized 3D court space, facilitating player pose estimation and rally event analysis.",
    architectureDiagramTitle: "Badminton Video Processing & Trajectory Pipeline",
    architectureSteps: [
      {
        step: 1,
        title: "Video Ingestion & Frame Normalization",
        type: "deterministic",
        description: "Decodes 30/60 fps match footage and extracts sequential multi-frame batches.",
        tech: "OpenCV / VideoCapture",
      },
      {
        step: 2,
        title: "Court Homography & Boundary Detection",
        type: "deterministic",
        description: "Detects line intersections to calculate perspective transformation matrix for the court.",
        tech: "Hough Lines / Homography",
      },
      {
        step: 3,
        title: "Shuttlecock Trajectory Detection",
        type: "hybrid",
        description: "TrackNet deep neural network generates probability heatmaps across consecutive frames to pinpoint shuttlecock coordinates.",
        tech: "TrackNet / PyTorch",
      },
      {
        step: 4,
        title: "Player Localization & Pose Estimation",
        type: "probabilistic",
        description: "YOLO detects players while pose estimation models map joint kinematics and court coverage.",
        tech: "YOLO / Pose Estimation",
      },
      {
        step: 5,
        title: "Rally Analytics & Event Modeling",
        type: "deterministic",
        description: "Trajectory curvature and velocity changes indicate hits, net crossings, and out-of-bounds landings.",
        tech: "Kinematic Trajectory Algorithms",
      },
    ],
    technologies: [
      { category: "Vision Models", items: ["TrackNet", "YOLO", "Pose Estimation", "PyTorch"] },
      { category: "Image Processing", items: ["OpenCV", "Homography Transformation", "Motion Heatmaps"] },
      { category: "Analytics & Core", items: ["Python", "NumPy", "Sports Kinematics"] },
    ],
    implementationDetails: [
      "Trained TrackNet on consecutive 3-frame sequences to overcome motion blur and temporal flicker.",
      "Implemented a Kalman filter trajectory interpolator to smooth shuttlecock flight paths during momentary player occlusions.",
      "Mapped court boundary intersections using perspective transform to normalize camera angles across different tournament venues.",
      "Extracted player movement vectors to calculate court dominance heatmaps.",
    ],
    challenges: [
      {
        title: "Shuttlecock Occlusion and Motion Blur",
        description: "At smash velocities, the shuttlecock elongates across pixels, resembling background noise or white lines.",
        resolution: "Combined TrackNet heatmap temporal integration with Kalman trajectory filtering to maintain track continuity across missing frames.",
      },
      {
        title: "Differentiating Point Detection from Tracking",
        description: "High tracking accuracy does not automatically equate to infallible automated point-awarding, which requires complex line-in/line-out decisions.",
        resolution: "Clearly delineated shuttlecock tracking accuracy as an independent metric from event/point outcome detection in analytics reports.",
      },
    ],
    resultsAndEvaluation: {
      metrics: [
        { label: "Shuttlecock Tracking Accuracy", value: "> 90%", detail: "Consistent coordinate localization across test match clips" },
        { label: "Court Calibration", value: "Automated", detail: "Perspective transform aligns camera footage to standard dimensions" },
        { label: "Processing Pipeline", value: "Modular", detail: "Separated tracking, pose estimation, and match outcome modeling" },
      ],
      honestDisclaimer: "Note: The >90% accuracy metric applies specifically to shuttlecock tracking under evaluated match clips, clearly distinguished from overall match point detection.",
    },
  },
  {
    id: "whatsapp-analysis",
    slug: "whatsapp-chat-analysis",
    title: "WhatsApp Chat Analysis",
    subtitle: "Data Science, Communication Patterns & Engagement Clustering",
    category: "Data Science | Machine Learning",
    tags: ["Data Science", "Machine Learning", "Random Forest", "K-Means", "Pandas", "Scikit-Learn", "EDA"],
    featured: false,
    roleBadge: "Data Science",
    summary:
      "A data analysis and machine learning project that extracts communication patterns, sentiment trends, and engagement insights from exported WhatsApp group and peer chat archives.",
    problemStatement:
      "Unstructured messaging logs contain rich sociological and behavioral signals regarding member engagement, active interaction windows, response latencies, and conversational leadership. However, raw chat exports are unstructured text files with irregular timestamp formatting, media attachment placeholders, and noisy linguistic artifacts.",
    solution:
      "Constructed a comprehensive end-to-end data science pipeline. The system cleans raw text exports using regex tokenizers, conducts exploratory data analysis (message distributions, temporal trends, word frequency), and trains machine learning models (Random Forest for engagement classification and K-Means for user clustering based on activity metrics).",
    architectureDiagramTitle: "Text Pipeline & Clustering Architecture",
    architectureSteps: [
      {
        step: 1,
        title: "Raw Export Ingestion",
        type: "deterministic",
        description: "Parses Android / iOS export text files and normalizes disparate timestamp formats.",
        tech: "Python Regex / Pandas",
      },
      {
        step: 2,
        title: "Feature Engineering",
        type: "deterministic",
        description: "Derives message counts, response delays, emoji density, word counts, and hour-of-day distributions.",
        tech: "NumPy / Scikit-Learn Preprocessing",
      },
      {
        step: 3,
        title: "Exploratory Data Analysis",
        type: "deterministic",
        description: "Computes active hours, most frequent contributors, and message velocity patterns.",
        tech: "Matplotlib / Seaborn",
      },
      {
        step: 4,
        title: "Engagement Classification",
        type: "probabilistic",
        description: "Random Forest classifier categorizes participants into high vs low engagement tiers.",
        tech: "Scikit-Learn (Random Forest)",
      },
      {
        step: 5,
        title: "Behavioral Clustering",
        type: "probabilistic",
        description: "K-Means algorithm clusters communicators into natural personas (initiators, responders, lurkers).",
        tech: "K-Means / PCA",
      },
    ],
    technologies: [
      { category: "Data Science & ML", items: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Random Forest", "K-Means"] },
      { category: "Visualizations", items: ["Matplotlib", "Seaborn", "WordCloud"] },
      { category: "Preprocessing", items: ["Regex", "NLTK", "Feature Scaling"] },
    ],
    implementationDetails: [
      "Engineered flexible regex parsers capable of handling 12-hour and 24-hour timestamp patterns across differing localized mobile OS exports.",
      "Formulated synthetic engagement features: Average Response Time (ART), Message-to-Initiation Ratio (MIR), and Lexical Diversity.",
      "Optimized K-Means clustering using Elbow Method and Silhouette Analysis to identify optimal cluster count (k=3).",
      "Evaluated Random Forest classifier using cross-validation and feature importance analysis.",
    ],
    challenges: [
      {
        title: "Data Leakage and Small Sample Bias",
        description: "Initial model iterations on closed group cohorts exhibited near-perfect classification metrics due to tight cohort characteristics.",
        resolution: "Documented the 100% accuracy metric strictly as an empirical outcome of the specific experimental dataset rather than a generalized real-world guarantee.",
      },
      {
        title: "Privacy and PII Scrubbing",
        description: "Direct chat logs contain personal phone numbers, names, and sensitive mentions.",
        resolution: "Built an automated anonymization pipeline that hashes phone numbers and replaces proper names with participant tokens prior to EDA.",
      },
    ],
    resultsAndEvaluation: {
      metrics: [
        { label: "Experiment Accuracy", value: "100%", detail: "Engagement classification on original project experiment dataset" },
        { label: "Clustering Silhouette", value: "0.6019", detail: "Silhouette score indicating robust cluster separation" },
        { label: "Feature Granularity", value: "15+ Features", detail: "Engineered behavioral and temporal communication metrics" },
      ],
      honestDisclaimer: "The 100% classification accuracy and 0.6019 silhouette score represent findings from the original project dataset experiment, not a generalized claim for all communication networks.",
    },
    githubUrl: "https://github.com/AKASHPR715",
  },
  {
    id: "learning-assistant",
    slug: "ai-learning-assistant-engagement-detection",
    title: "AI Learning Assistant with Engagement Detection",
    subtitle: "Multimodal Conversational Tutoring & Real-Time Student Attentiveness",
    category: "AI | NLP | Computer Vision",
    tags: ["Multimodal AI", "LLaMA", "OpenRouter", "Computer Vision", "OpenCV", "SpeechRecognition", "gTTS", "Streamlit"],
    featured: false,
    roleBadge: "Multimodal AI",
    summary:
      "An interactive learning assistant that combines conversational AI, speech interaction, and real-time engagement detection to create an adaptive educational experience.",
    problemStatement:
      "Remote and self-paced digital education frequently suffers from disengagement. Traditional e-learning platforms cannot perceive when a student is confused, distracted, or looking away from the screen, leading to passive consumption and diminished knowledge retention.",
    solution:
      "Developed during the Intel Unnati Industrial Training Programme. The system integrates conversational tutoring powered by LLaMA (via OpenRouter), hands-free voice interactions using SpeechRecognition and gTTS, and a real-time computer vision subsystem using OpenCV and Facial Expression Recognition. When the vision model detects fatigue or sustained inattention, the assistant proactively adapts its pedagogy.",
    architectureDiagramTitle: "Multimodal Tutoring & Attentiveness Feedback Loop",
    architectureSteps: [
      {
        step: 1,
        title: "Multimodal Input Capture",
        type: "integration",
        description: "Simultaneous capture of user microphone audio and webcam video stream.",
        tech: "SpeechRecognition / OpenCV",
      },
      {
        step: 2,
        title: "Speech-to-Text Transcription",
        type: "probabilistic",
        description: "Converts spoken student queries into formatted text strings.",
        tech: "Google SpeechRecognition API",
      },
      {
        step: 3,
        title: "Facial & Engagement Analysis",
        type: "probabilistic",
        description: "Detects face presence, head pose, eye-gaze direction, and facial emotion categories in real-time.",
        tech: "OpenCV / FER Model",
      },
      {
        step: 4,
        title: "Adaptive Tutoring Inference",
        type: "probabilistic",
        description: "LLaMA model processes question while factoring student attentiveness context into response style.",
        tech: "LLaMA (OpenRouter)",
      },
      {
        step: 5,
        title: "Audio Synthesis & UI Update",
        type: "hybrid",
        description: "Converts tutor explanation to natural speech while displaying visual concepts on Streamlit.",
        tech: "gTTS / Streamlit",
      },
    ],
    technologies: [
      { category: "Generative AI & LLMs", items: ["LLaMA", "OpenRouter API", "Prompt Templating"] },
      { category: "Computer Vision", items: ["OpenCV", "Facial Expression Recognition (FER)", "Head Pose Tracking"] },
      { category: "Audio & Speech", items: ["SpeechRecognition", "gTTS (Google Text-to-Speech)", "PyAudio"] },
      { category: "User Interface", items: ["Streamlit", "Python"] },
    ],
    implementationDetails: [
      "Interfaced with LLaMA models via OpenRouter with custom system prompts calibrated for Socratic pedagogical guidance.",
      "Constructed a multi-threaded Streamlit application preventing video stream processing from locking audio I/O.",
      "Implemented attentiveness metric combining eye aspect ratio, head tilt angle, and positive engagement expressions.",
      "Engineered automated fallback to text chat when microphone or camera hardware is unavailable.",
    ],
    challenges: [
      {
        title: "Threading in Streamlit with Real-Time Video",
        description: "Streamlit's script-rerun execution model causes video capture to stutter when handling conversational state updates.",
        resolution: "Employed background threading and OpenCV frame buffer queues to decouple real-time vision inference from conversational updates.",
      },
      {
        title: "Ambient Lighting and Occlusion",
        description: "Facial expression detection accuracy dropped significantly under low-light or partial face coverage conditions.",
        resolution: "Added adaptive contrast histogram equalization to preprocessed frames and graceful threshold degradation.",
      },
    ],
    resultsAndEvaluation: {
      metrics: [
        { label: "Multimodal Flow", value: "Voice + Vision", detail: "Synchronized speech dialogue with continuous attentiveness tracking" },
        { label: "Interface", value: "Interactive", detail: "Built on Streamlit for live interactive demonstration" },
        { label: "Inference Stack", value: "Zero Local GPU", detail: "Leveraged OpenRouter API for lightweight edge deployment" },
      ],
      honestDisclaimer: "Developed as a functional educational prototype during the Intel Unnati Industrial Training Programme.",
    },
  },
];
