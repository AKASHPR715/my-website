import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { projectsData } from "@/data/projects";
import TaxMateArchitecture from "@/components/projects/TaxMateArchitecture";
import TeamsAgentArchitecture from "@/components/projects/TeamsAgentArchitecture";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — System Architecture`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 bg-[#121316] min-h-screen text-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Back navigation */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-amber transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; Return to Index</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4 border-b border-[#262930] pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#181a1f] text-amber border border-amber/30">
              {project.roleBadge}
            </span>
            <span className="font-mono text-[11px] text-slate-400 bg-[#181a1f] px-2 py-0.5 rounded border border-[#262930]">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {project.title}
          </h1>
          <p className="text-sm font-mono text-slate-400">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl pt-1">
            {project.summary}
          </p>

          {project.githubUrl && (
            <div className="pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded bg-[#181a1f] hover:bg-[#22252c] text-slate-200 text-xs border border-[#262930] hover:border-amber transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-amber" />
                <span>View GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          )}
        </div>

        {/* Evaluation Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.resultsAndEvaluation.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-4 rounded bg-[#181a1f] border border-[#262930]"
            >
              <span className="text-[10px] font-mono text-slate-400 block truncate uppercase">
                {m.label}
              </span>
              <span className="text-2xl font-mono font-semibold text-white block mt-0.5">
                {m.value}
              </span>
              <span className="text-xs text-slate-400 block mt-0.5">
                {m.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Core System Principle */}
        {project.neuroSymbolicHighlight && (
          <div className="p-4 rounded bg-[#181a1f] border border-amber/30 text-xs font-mono text-amber space-y-1">
            <span className="font-semibold block uppercase">
              Core Architecture Principle:
            </span>
            <span className="text-slate-300 leading-relaxed block">
              {project.neuroSymbolicHighlight}
            </span>
          </div>
        )}

        {/* Problem Statement & Proposed Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded bg-[#181a1f] border border-[#262930] space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-amber font-semibold flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Problem Statement</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-5 rounded bg-[#181a1f] border border-[#262930] space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-signal-green font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Engineered Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Blueprint Section */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase text-slate-400">
            {project.architectureDiagramTitle || "System Architecture & Execution Flow"}
          </div>

          {project.id === "taxmate" ? (
            <TaxMateArchitecture />
          ) : project.id === "teams-agent" ? (
            <TeamsAgentArchitecture />
          ) : (
            <div className="p-4 rounded bg-[#181a1f] border border-[#262930]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {project.architectureSteps.map((st) => (
                  <div
                    key={st.step}
                    className="p-3.5 rounded bg-[#121316] border border-[#262930] space-y-1.5 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-amber font-semibold">
                        Stage 0{st.step}
                      </span>
                      <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-[#181a1f] text-slate-400 border border-[#262930]">
                        {st.type}
                      </span>
                    </div>
                    <div className="font-semibold text-white">{st.title}</div>
                    <p className="text-slate-400 text-xs leading-relaxed">{st.description}</p>
                    <div className="text-[10px] font-mono text-slate-400 pt-1 border-t border-[#262930]">
                      {st.tech}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Technologies Breakdown */}
        <div className="p-5 rounded bg-[#181a1f] border border-[#262930] space-y-3">
          <div className="text-xs font-mono uppercase text-slate-400">
            Complete Technology Stack
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            {project.technologies.map((cat) => (
              <div key={cat.category} className="space-y-1.5">
                <span className="text-xs font-semibold text-white block">
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-1">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121316] text-slate-300 border border-[#262930]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Details */}
        <div className="space-y-2.5">
          <div className="text-xs font-mono uppercase text-slate-400">
            Key Implementation Details
          </div>
          <div className="p-5 rounded bg-[#181a1f] border border-[#262930]">
            <ul className="space-y-2">
              {project.implementationDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-sm bg-amber shrink-0 mt-2" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Challenges & Resolutions */}
        <div className="space-y-2.5">
          <div className="text-xs font-mono uppercase text-slate-400">
            Engineering Challenges & Resolutions
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.challenges.map((c, idx) => (
              <div
                key={idx}
                className="p-4 rounded bg-[#181a1f] border border-[#262930] space-y-2"
              >
                <h3 className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-sm bg-amber"></span>
                  {c.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {c.description}
                </p>
                <div className="p-2.5 rounded bg-[#121316] border border-[#262930] text-xs font-mono text-slate-300">
                  <strong className="text-amber">Resolution:</strong> {c.resolution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metric Governance */}
        {project.resultsAndEvaluation.honestDisclaimer && (
          <div className="p-4 rounded bg-[#181a1f] border border-[#262930] text-xs font-mono text-slate-400">
            <span className="text-slate-300 font-semibold">Validation Context:</span>{" "}
            {project.resultsAndEvaluation.honestDisclaimer}
          </div>
        )}
      </div>
    </div>
  );
}