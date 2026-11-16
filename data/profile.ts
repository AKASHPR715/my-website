export interface ProfileData {
  name: string;
  tagline: string;
  headline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
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
    smallIntro: string;
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
  tagline: "Building intelligent systems that automate, analyze and solve real-world problems.",
  headline: "Automation Engineer | AI Engineer | Data Science",
  location: "Kerala, India",
  email: "akashpr715@gmail.com",
  github: "https://github.com/AKASHPR715",
  linkedin: "https://www.linkedin.com/in/akashpr715/",
  currentRole: {
    title: "Automation Engineer",
    company: "Equifax",
    status: "Active Employee (Joined July 1, 2026)",
    note: "Completed a three-month foundational training programme and currently assigned to a team. Project responsibilities and production contributions have not yet started.",
  },
  education: {
    degree: "Bachelor of Technology",
    specialization: "Computer Science and Engineering (Artificial Intelligence)",
    institution: "Mar Baselios College of Engineering and Technology (Autonomous)",
    graduationDate: "May 2026",
    status: "Graduated",
  },
  hero: {
    smallIntro: "HELLO, I'M AKASH PR",
    headline: "I build intelligent systems that automate, analyze and solve real-world problems.",
    description:
      "I'm an Automation Engineer with a background in Artificial Intelligence and Data Science. I enjoy building intelligent automation workflows, AI-powered applications and data-driven solutions that turn complex problems into practical systems.",
    identityTags: [
      "Automation Engineering",
      "Generative AI & Agentic Systems",
      "Data Science & Machine Learning",
    ],
  },
  quickIntro: {
    text: "I'm interested in the intersection of automation, artificial intelligence and data science. From developing LLM-powered agents and computer vision systems to building intelligent workflows, I enjoy exploring how technology can make complex processes simpler and more efficient.",
    bioParagraphs: [
      "I'm a Computer Science graduate specializing in Artificial Intelligence, currently working as an Automation Engineer at Equifax.",
      "My experience includes developing Generative AI applications, agentic workflows, LLM guardrails, retrieval-augmented generation systems, machine learning models and computer vision applications.",
      "During my time at Acsia Technologies, I worked on enterprise-oriented AI solutions, including Microsoft Teams automation agents, AI-powered risk analysis and automated code documentation.",
      "I enjoy understanding how systems work, identifying repetitive or complex processes and developing practical solutions using software, automation and AI.",
    ],
    corePillars: [
      {
        title: "Intelligent Automation",
        description: "Designing deterministic and agentic pipelines that streamline multi-system workflows and eliminate manual overhead.",
        icon: "Cpu",
      },
      {
        title: "Generative & Agentic AI",
        description: "Architecting multi-agent orchestrations, RAG pipelines, and strict safety guardrails using LlamaGuard and Guardrails AI.",
        icon: "Bot",
      },
      {
        title: "Data Science & Vision",
        description: "Deriving actionable insights through statistical modeling, clustering, and deep learning-based visual tracking systems.",
        icon: "BarChart3",
      },
    ],
  },
};
