import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Cpu, 
  Sparkles,
  Info,
  Terminal,
  ShieldCheck,
  Bot
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import TaxMateArchitecture from "@/components/projects/TaxMateArchitecture";
import TeamsAgentArchitecture from "@/components/projects/TeamsAgentArchitecture";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 bg-[#080c14] min-h-screen text-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back navigation */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; Return to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30 font-semibold">
              {project.roleBadge}
            </span>
            <span className="font-mono text-xs text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg font-mono text-sky-300">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl pt-2">
            {project.summary}
          </p>

          {project.githubUrl && (
            <div className="pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs font-mono border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4 text-sky-400" />
                <span>View GitHub Repository</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          )}
        </div>

        {/* Evaluation Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.resultsAndEvaluation.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0c1220] border border-white/[0.08]"
            >
              <span className="text-xs font-mono text-slate-400 block truncate">
                {m.label}
              </span>
              <span className="text-2xl sm:text-3xl font-mono font-bold text-sky-400 block mt-1">
                {m.value}
              </span>
              <span className="text-xs text-slate-400 block mt-1">
                {m.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Neuro-symbolic or Key Architecture Callout */}
        {project.neuroSymbolicHighlight && (
          <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-500/30 text-xs sm:text-sm font-mono text-sky-300 flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-white uppercase text-xs block">
                CORE SYSTEM PRINCIPLE
              </span>
              <span>{project.neuroSymbolicHighlight}</span>
            </div>
          </div>
        )}

        {/* Problem Statement & Proposed Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#0b101c] border border-white/[0.08] space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              The Problem Statement
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b101c] border border-white/[0.08] space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              The Proposed Solution
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Interactive Architecture Blueprint */}
        <div className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-sky-400" />
            <span>{project.architectureDiagramTitle || "System Architecture & Execution Flow"}</span>
          </h2>

          {project.id === "taxmate" ? (
            <TaxMateArchitecture />
          ) : project.id === "teams-agent" ? (
            <TeamsAgentArchitecture />
          ) : (
            <div className="p-6 rounded-2xl bg-[#0a0f1d] border border-white/10 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.architectureSteps.map((st) => (
                  <div
                    key={st.step}
                    className="p-4 rounded-xl bg-[#0e1628] border border-white/[0.06] space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-sky-400 font-bold">
                        Stage 0{st.step}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] text-slate-400">
                        {st.type}
                      </span>
                    </div>
                    <div className="font-bold text-white">{st.title}</div>
                    <p className="text-slate-300 text-xs leading-relaxed">{st.description}</p>
                    <div className="text-[10px] font-mono text-sky-400/80 pt-1">
                      {st.tech}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Technologies Breakdown */}
        <div className="p-6 rounded-2xl bg-[#0b101c] border border-white/[0.08] space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-400" />
            <span>Complete Technology Stack</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            {project.technologies.map((cat) => (
              <div key={cat.category} className="space-y-2">
                <span className="text-xs font-bold text-white font-mono block">
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
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
        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-sky-400" />
            <span>Key Implementation Details</span>
          </h2>
          <div className="p-6 rounded-2xl bg-[#0b101c] border border-white/[0.08] space-y-3">
            <ul className="space-y-2.5">
              {project.implementationDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Challenges & Resolutions */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Engineering Challenges & Resolutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.challenges.map((c, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0c1220] border border-white/[0.06] space-y-3"
              >
                <h3 className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  {c.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {c.description}
                </p>
                <div className="p-3 rounded-xl bg-[#080d18] border border-white/[0.05] text-xs font-mono text-sky-300">
                  <strong>Resolution:</strong> {c.resolution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Honest Metric Governance */}
        <div className="p-6 rounded-2xl bg-[#090d18] border border-white/[0.08] space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Results, Evaluation & Metric Governance
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            All system evaluation figures are benchmarked honestly in accordance with stated experimental environments and sample test sets.
          </p>
          {project.resultsAndEvaluation.honestDisclaimer && (
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-slate-400">
              <strong className="text-slate-300">Note:</strong> {project.resultsAndEvaluation.honestDisclaimer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
