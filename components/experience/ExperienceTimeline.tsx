"use client";

import { useState } from "react";
import { 
  Briefcase, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  ArrowUpRight,
  ShieldCheck,
  Bot,
  Eye,
  FileCode2,
  Workflow
} from "lucide-react";
import { experienceData, ExperienceItem } from "@/data/experience";

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string>("acsia");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="experience" className="py-20 relative bg-[#080c14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PROFESSIONAL TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Work Experience & Research Roles
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-mono">
            Chronological engineering path across full-time automation, enterprise AI research, and computer vision internships.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-4 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-4 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-sky-500/60 before:via-indigo-500/30 before:to-slate-800">
          {experienceData.map((item) => {
            const isExpanded = expandedId === item.id;
            const isCurrent = item.current;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCurrent
                      ? "bg-sky-500 border-sky-300 ring-4 ring-sky-500/20 shadow-lg shadow-sky-500/40"
                      : "bg-[#0c1220] border-slate-600 group-hover:border-sky-400"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isCurrent ? "bg-slate-950 animate-ping" : "bg-sky-400"
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div className="bg-[#0c1220] border border-white/[0.08] hover:border-white/15 rounded-2xl p-5 sm:p-7 transition-all shadow-xl">
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
                          {item.company}
                        </span>
                        {item.statusBadge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
                            {item.statusBadge}
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-heading font-bold text-white">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                        <Calendar className="w-3.5 h-3.5 text-sky-400" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <div className="mt-4">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Honest notice for Equifax entry */}
                    {item.id === "equifax" && (
                      <div className="mt-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs font-mono text-amber-300/90 flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>
                          <strong>Professional Transparency:</strong> Joined Equifax on July 1, 2026. Completed three-month foundational training programme and currently assigned to a team. Project responsibilities and production contributions have not yet started.
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Expandable Section */}
                  {item.responsibilities.length > 0 && (
                    <div className="mt-4">
                      {isExpanded ? (
                        <div className="space-y-4 pt-3 border-t border-white/[0.06] animate-in fade-in duration-200">
                          {/* Highlighted Projects within Experience */}
                          {item.keyProjects && item.keyProjects.length > 0 && (
                            <div className="space-y-3">
                              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                                <Layers className="w-3.5 h-3.5 text-sky-400" />
                                <span>Highlighted Systems Engineered</span>
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {item.keyProjects.map((p) => (
                                  <div
                                    key={p.name}
                                    className="p-3.5 rounded-xl bg-[#090e1a] border border-white/[0.06] space-y-2"
                                  >
                                    <div className="font-bold text-xs text-white">
                                      {p.name}
                                    </div>
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                      {p.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1 pt-1">
                                      {p.technologies.map((t) => (
                                        <span
                                          key={t}
                                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20"
                                        >
                                          {t}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Specific Responsibilities List */}
                          <div className="space-y-2">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                              Core Responsibilities & Technical Work
                            </h4>
                            <ul className="space-y-2">
                              {item.responsibilities.map((resp, i) => (
                                <li
                                  key={i}
                                  className="text-xs text-slate-300 flex items-start space-x-2.5 leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : null}

                      {/* Expand / Collapse Button */}
                      <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/[0.04]">
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="flex items-center space-x-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
                        >
                          <span>{isExpanded ? "Collapse Details" : "Expand Technical Deep-Dive"}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {/* Technology tags */}
                        <div className="hidden sm:flex flex-wrap gap-1.5">
                          {item.skills.slice(0, 4).map((skill) => (
                            <span
                              key={skill}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                            >
                              {skill}
                            </span>
                          ))}
                          {item.skills.length > 4 && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
                              +{item.skills.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
