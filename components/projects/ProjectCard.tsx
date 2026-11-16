"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ShieldCheck,
  Bot
} from "lucide-react";
import { ProjectItem } from "@/data/projects";
import TaxMateArchitecture from "./TaxMateArchitecture";
import TeamsAgentArchitecture from "./TeamsAgentArchitecture";

interface ProjectCardProps {
  project: ProjectItem;
  featuredMode?: boolean;
}

export default function ProjectCard({ project, featuredMode = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-2xl bg-[#0c1220] border transition-all ${
        project.featured
          ? "border-sky-500/30 shadow-xl shadow-sky-500/5 hover:border-sky-500/50"
          : "border-white/[0.08] hover:border-white/20"
      } p-6 sm:p-8 flex flex-col justify-between`}
    >
      <div className="space-y-5">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30 font-semibold">
              {project.roleBadge}
            </span>
            <span className="font-mono text-xs text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
              {project.category}
            </span>
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1"
              title="View GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-sky-300/90 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Summary Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {project.summary}
        </p>

        {/* Neuro-symbolic or Key Architecture Highlight */}
        {project.neuroSymbolicHighlight && (
          <div className="p-3.5 rounded-xl bg-sky-950/20 border border-sky-500/30 text-xs font-mono text-sky-300 flex items-start space-x-2.5">
            <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <span>{project.neuroSymbolicHighlight}</span>
          </div>
        )}

        {/* Metrics Highlight Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
          {project.resultsAndEvaluation.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-[#090e1a] border border-white/[0.06] text-left"
            >
              <span className="text-[10px] font-mono text-slate-400 block truncate">
                {m.label}
              </span>
              <span className="text-base sm:text-lg font-mono font-bold text-sky-400 block mt-0.5">
                {m.value}
              </span>
              <span className="text-[9px] text-slate-400 block mt-0.5 truncate">
                {m.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Inline Interactive Architecture for Flagship projects when expanded */}
        {expanded && (
          <div className="pt-4 space-y-6 border-t border-white/[0.08] animate-in fade-in duration-300">
            {project.id === "taxmate" && <TaxMateArchitecture />}
            {project.id === "teams-agent" && <TeamsAgentArchitecture />}

            {/* Problem & Solution Accordion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#090e1b] border border-white/[0.06] space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  The Problem
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#090e1b] border border-white/[0.06] space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  The Engineered Solution
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Technical Challenges & Solutions */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Engineering Challenges Overcome
              </h4>
              <div className="space-y-2.5">
                {project.challenges.map((c, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#080d18] border border-white/[0.05] text-xs space-y-1.5"
                  >
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                      {c.title}
                    </div>
                    <p className="text-slate-400">{c.description}</p>
                    <p className="text-sky-300 font-mono text-[11px] bg-sky-950/30 p-2 rounded border border-sky-900/40">
                      <strong>Resolution:</strong> {c.resolution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Honest Disclaimer */}
            {project.resultsAndEvaluation.honestDisclaimer && (
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] font-mono text-slate-400">
                <strong className="text-slate-300">Metric Governance:</strong>{" "}
                {project.resultsAndEvaluation.honestDisclaimer}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card Footer Actions */}
      <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
            >
              {t}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08] transition-colors"
          >
            <span>{expanded ? "Quick Collapse" : "Interactive Blueprint"}</span>
            {expanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>

          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 transition-all group"
          >
            <span>Deep Dive</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
