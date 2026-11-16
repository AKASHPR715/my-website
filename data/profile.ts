export interface ProfileData {
  name: string;
  tagline: string;
  headline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  seeking: string;
  currentRole: {
    title: string;
    company: string;
    status: string;
    note: string;
  };
  education: {
    degree: string;
    specialization: string;
    institution: string;
    graduationDate: string;
    status: string;
  };
  hero: {
    headline: string;
    description: string;
    identityTags: string[];
  };
  quickIntro: {
    text: string;
    bioParagraphs: string[];
    corePillars: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

export const profileData: ProfileData = {
  name: "Akash PR",
  tagline: "Deterministic automation, practical AI agents, and data pipelines.",
  headline: "Automation Engineer | AI Engineer | Data Science",
  location: "Kerala, India",
  email: "akashpr715@gmail.com",
  github: "https://github.com/AKASHPR715",
  linkedin: "https://www.linkedin.com/in/akashpr715/",
  seeking: "Automation Engineer, AI Engineer, or Data Science roles · India (Bangalore / Kerala / Remote)",
  currentRole: {
    title: "Automation Engineer",
    company: "Equifax",
    status: "Joined July 1, 2026",
    note: "Completed foundational engineering training. Currently assigned to an automation team; production contributions have not started yet.",
  },
  education: {
    degree: "B.Tech",
    specialization: "Computer Science & Engineering (Artificial Intelligence)",
    institution: "Mar Baselios College of Engineering and Technology (Autonomous)",
    graduationDate: "May 2026",
    status: "Graduated",
  },
  hero: {
    headline: "Automation Engineer building deterministic pipelines, AI agents, and practical systems.",
    description:
      "I work at the boundary where software automation meets applied AI. 10 months of enterprise AI research at Acsia Technologies (Teams agents, LlamaGuard safety, AST tools), computer vision sports analytics at Icore Pioneer, and currently an Automation Engineer at Equifax.",
    identityTags: [
      "Automation Engineering",
      "Agentic AI & RAG",
      "Data Science & Computer Vision",
    ],
  },
  quickIntro: {
    text: "I build software that removes manual friction from complex processes. Whether that means isolating mathematical calculations from probabilistic LLMs, orchestrating multi-agent state machines, or tracking high-speed objects in video feeds, I focus on systems that run predictably.",
    bioParagraphs: [
      "I am an Automation Engineer at Equifax and a Computer Science graduate specializing in Artificial Intelligence (B.Tech 2026).",
      "During my 10-month AI research internship at Acsia Technologies, I built enterprise workflow automation tools: a Microsoft Teams agent extracting action items into Microsoft To Do, AST-based C++ comment and unit test generators, and input/output guardrails using LlamaGuard.",
      "Before that, I worked on computer vision for sports analytics at Icore Pioneer (high-speed shuttlecock tracking using TrackNet and YOLO), and completed multimodal AI training with the Intel Unnati programme.",
      "I value deterministic architecture over hype: probabilistic models for parsing and language, rule-based engines for math and compliance, and clean interfaces between them.",
    ],
    corePillars: [
      {
        title: "Deterministic Automation",
        description: "Hardcoded rule engines and state machines where math, money, or compliance cannot tolerate hallucinations.",
        icon: "Cpu",
      },
      {
        title: "Agentic Systems & Guardrails",
        description: "LangGraph state graphs, RAG pipelines, and dual-phase input/output validation with LlamaGuard and Guardrails AI.",
        icon: "Bot",
      },
      {
        title: "Data & Computer Vision",
        description: "Frame-by-frame object tracking (TrackNet/YOLO), feature engineering, and statistical clustering (Random Forest, K-Means).",
        icon: "BarChart3",
      },
    ],
  },
};