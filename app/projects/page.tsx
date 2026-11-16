import { Metadata } from "next";
import ProjectsClientView from "@/components/projects/ProjectsClientView";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Architecture",
  description:
    "Engineering systems across multi-agent AI, RAG, deterministic compute engines, safety guardrails, and computer vision analytics.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#121316] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-[#262930]">
          <div className="text-xs font-mono text-amber mb-2">
            [PROJECTS // DETAILED ARCHITECTURES]
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Systems & Engineering Projects
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
            Detailed breakdowns of 6 projects covering neuro-symbolic AI, deterministic computation, multi-agent state machines, and enterprise automation.
          </p>
        </div>

        {/* Client View with Filter & Search */}
        <ProjectsClientView projects={projectsData} />
      </div>
    </div>
  );
}