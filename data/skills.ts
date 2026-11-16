export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  badgeColor: string;
  skills: {
    name: string;
    level: "Core Competency" | "Proficient" | "Applied Experience";
    context?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Artificial Intelligence & Generative AI",
    description: "Architecting agentic workflows, RAG systems, and safety guardrails.",
    icon: "Brain",
    badgeColor: "border-sky-500/30 text-sky-400 bg-sky-950/20",
    skills: [
      { name: "Large Language Models (LLMs)", level: "Core Competency", context: "Prompt engineering, evaluation & fine-tuning" },
      { name: "LangChain & LangGraph", level: "Core Competency", context: "Multi-agent graph orchestration & state machines" },
      { name: "AI Agents", level: "Core Competency", context: "Autonomous workflows & tool execution" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Core Competency", context: "Vector embeddings, semantic retrieval & reranking" },
      { name: "LlamaGuard", level: "Proficient", context: "Input/output safety moderation taxonomies" },
      { name: "Guardrails AI", level: "Proficient", context: "Schema enforcement & PII redacting" },
      { name: "Prompt Engineering", level: "Core Competency", context: "Few-shot, chain-of-thought & structured JSON" },
      { name: "Sentence Transformers", level: "Proficient", context: "High-density vector embeddings" },
    ],
  },
  {
    title: "Automation & Integration",
    description: "Connecting enterprise APIs, AST static analysis, and programmatic workflows.",
    icon: "Workflow",
    badgeColor: "border-indigo-500/30 text-indigo-400 bg-indigo-950/20",
    skills: [
      { name: "Python Automation", level: "Core Competency", context: "Scripting, file ETL & system automation" },
      { name: "Microsoft Graph API", level: "Proficient", context: "Teams messages, channel delta sync & MS To Do" },
      { name: "REST APIs & Microservices", level: "Core Competency", context: "FastAPI endpoints & service design" },
      { name: "Swagger / OpenAPI", level: "Proficient", context: "Interactive documentation & API testing" },
      { name: "AST-based Code Analysis", level: "Applied Experience", context: "Python AST parsing for comment & test generation" },
      { name: "Google Test & Doxygen", level: "Applied Experience", context: "Automated unit test and doc generators" },
    ],
  },
  {
    title: "Data Science & Machine Learning",
    description: "Statistical modeling, predictive algorithms, clustering, and data pipelines.",
    icon: "BarChart2",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-950/20",
    skills: [
      { name: "Scikit-Learn", level: "Core Competency", context: "Supervised and unsupervised ML models" },
      { name: "Pandas & NumPy", level: "Core Competency", context: "Vectorized data cleaning and manipulation" },
      { name: "Exploratory Data Analysis (EDA)", level: "Core Competency", context: "Feature extraction & trend visualization" },
      { name: "Classification & Regression", level: "Core Competency", context: "Random Forest, Logistic Regression, Linear Models" },
      { name: "Clustering Algorithms", level: "Proficient", context: "K-Means, PCA & Silhouette analysis" },
      { name: "Model Evaluation", level: "Core Competency", context: "ROC-AUC, Precision-Recall, Cross-validation" },
      { name: "Matplotlib & Seaborn", level: "Proficient", context: "Statistical charting & publication plots" },
    ],
  },
  {
    title: "Computer Vision",
    description: "Tracking high-velocity objects, pose estimation, and facial emotion analysis.",
    icon: "Eye",
    badgeColor: "border-violet-500/30 text-violet-400 bg-violet-950/20",
    skills: [
      { name: "OpenCV", level: "Core Competency", context: "Frame preprocessing, homography & color filtering" },
      { name: "YOLO (You Only Look Once)", level: "Proficient", context: "Real-time object detection & player bounding" },
      { name: "TrackNet", level: "Applied Experience", context: "High-speed trajectory tracking from heatmaps" },
      { name: "Pose Estimation", level: "Applied Experience", context: "Keypoint detection & athletic kinematics" },
      { name: "Facial Expression Recognition", level: "Applied Experience", context: "Real-time engagement & attentiveness modeling" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Strong foundational and systems programming skills across multiple paradigms.",
    icon: "Code2",
    badgeColor: "border-blue-500/30 text-blue-400 bg-blue-950/20",
    skills: [
      { name: "Python", level: "Core Competency", context: "Primary language for AI, data science & automation" },
      { name: "SQL", level: "Core Competency", context: "Relational queries, aggregations & schemas" },
      { name: "Java", level: "Proficient", context: "Object-oriented software principles" },
      { name: "C", level: "Proficient", context: "Systems programming & algorithms" },
    ],
  },
  {
    title: "Databases & Infrastructure",
    description: "Scalable data stores, vector indices, and backend deployment tooling.",
    icon: "Database",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-950/20",
    skills: [
      { name: "MongoDB", level: "Proficient", context: "NoSQL document storage for tax & app schemas" },
      { name: "MySQL", level: "Proficient", context: "Structured relational databases" },
      { name: "FAISS", level: "Proficient", context: "Vector similarity search for RAG embeddings" },
      { name: "FastAPI", level: "Core Competency", context: "High-throughput asynchronous Python web APIs" },
    ],
  },
];
