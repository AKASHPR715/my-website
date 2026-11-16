"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp, Github, AlertCircle, CheckCircle2 } from "lucide-react";
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
      className={`rounded bg-[#181a1f] border p-5 sm:p-6 transition-colors flex flex-col justify-between ${
        project.featured
          ? "border-[#373c47]"
          : "border-[#262930]"
      }`}
    >
      <div className="space-y-4">
        {/* Top Identification Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#262930]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#121316] text-amber border border-amber/30">
              {project.roleBadge}
            </span>
            <span className="font-mono text-[11px] text-slate-400 bg-[#121316] px-2 py-0.5 rounded border border-[#262930]">
              {project.category}
            </span>
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="View GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-slate-400 mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Summary Description */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {project.summary}
        </p>

        {/* Neuro-symbolic or Key Architecture Highlight */}
        {project.neuroSymbolicHighlight && (
          <div className="p-3 rounded bg-[#121316] border border-amber/30 text-xs font-mono text-amber">
            <strong>Architecture Boundary:</strong> {project.neuroSymbolicHighlight}
          </div>
        )}

        {/* Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 font-mono">
          {project.resultsAndEvaluation.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded bg-[#121316] border border-[#262930] text-left"
            >
              <span className="text-[10px] text-slate-400 block truncate uppercase">
                {m.label}
              </span>
              <span className="text-base font-semibold text-white block mt-0.5">
                {m.value}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5 truncate">
                {m.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Expanded Blueprint Details */}
        {expanded && (
          <div className="pt-4 space-y-4 border-t border-[#262930]">
            {project.id === "taxmate" && <TaxMateArchitecture />}
            {project.id === "teams-agent" && <TeamsAgentArchitecture />}

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded bg-[#121316] border border-[#262930] space-y-1.5">
                <div className="font-mono text-[11px] text-amber uppercase font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Problem Statement</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-3.5 rounded bg-[#121316] border border-[#262930] space-y-1.5">
                <div className="font-mono text-[11px] text-signal-green uppercase font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Engineered Solution</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Challenges */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase text-slate-400">
                Key Engineering Challenges Overcome
              </div>
              <div className="space-y-2">
                {project.challenges.map((c, i) => (
                  <div
                    key={i}
                    className="p-3 rounded bg-[#121316] border border-[#262930] text-xs space-y-1"
                  >
                    <div className="font-semibold text-slate-200">
                      {c.title}
                    </div>
                    <p className="text-slate-400">{c.description}</p>
                    <div className="text-amber font-mono text-[11px] pt-1">
                      <strong>Resolution:</strong> {c.resolution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {project.resultsAndEvaluation.honestDisclaimer && (
              <div className="p-2.5 rounded bg-[#121316] border border-[#262930] text-[11px] font-mono text-slate-400">
                <span className="text-slate-300 font-semibold">Validation Context:</span>{" "}
                {project.resultsAndEvaluation.honestDisclaimer}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card Footer Actions */}
      <div className="pt-4 mt-4 border-t border-[#262930] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121316] text-slate-300 border border-[#262930]"
            >
              {t}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[10px] font-mono px-1 py-0.5 text-slate-400">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2 shrink-0 text-xs">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center space-x-1 px-3 py-1.5 rounded bg-[#121316] hover:bg-[#22252c] text-slate-300 border border-[#262930] transition-colors"
          >
            <span>{expanded ? "Collapse" : "Blueprint"}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-amber hover:bg-amber-dark text-[#121316] font-semibold transition-colors"
          >
            <span>Deep Dive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}