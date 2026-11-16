"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import { experienceData } from "@/data/experience";

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string>("acsia");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#121316] border-b border-[#262930]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-[#262930]">
          <div className="text-xs font-mono text-amber mb-2">
            [EXPERIENCE // PROFESSIONAL TIMELINE]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Work Experience & Research
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
            Chronological engineering background spanning full-time automation engineering, enterprise Generative AI research, and computer vision analytics.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="space-y-4">
          {experienceData.map((item) => {
            const isExpanded = expandedId === item.id;
            const isCurrent = item.current;

            return (
              <div
                key={item.id}
                className="bg-[#181a1f] border border-[#262930] rounded p-5 sm:p-6 space-y-4 transition-colors"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#262930]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-semibold text-white">
                        {item.company}
                      </span>
                      {isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber/10 text-amber border border-amber/30">
                          CURRENT
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#121316] text-slate-400 border border-[#262930]">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {item.role}
                    </h3>
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    {item.period} · {item.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Equifax Disclosure Notice */}
                {item.id === "equifax" && (
                  <div className="p-3 rounded bg-[#121316] border border-amber/30 text-xs font-mono text-slate-300 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber">Status:</strong> Completed three-month foundational training programme. Currently assigned to an automation team; production contributions have not started yet.
                    </span>
                  </div>
                )}

                {/* Expandable Details */}
                {isExpanded && (
                  <div className="pt-3 border-t border-[#262930] space-y-4">
                    {/* Projects within Role */}
                    {item.keyProjects && item.keyProjects.length > 0 && (
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono uppercase text-slate-400">
                          Highlighted Systems Engineered
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {item.keyProjects.map((p) => (
                            <div
                              key={p.name}
                              className="p-3 rounded bg-[#121316] border border-[#262930] space-y-1.5 text-xs"
                            >
                              <div className="font-semibold text-white">
                                {p.name}
                              </div>
                              <p className="text-slate-400 leading-relaxed">
                                {p.description}
                              </p>
                              {p.metric && (
                                <div className="text-amber font-mono text-[11px] pt-1">
                                  <strong>Metric:</strong> {p.metric}
                                </div>
                              )}
                              <div className="flex flex-wrap gap-1 pt-1">
                                {p.technologies.map((t) => (
                                  <span
                                    key={t}
                                    className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#181a1f] text-slate-300 border border-[#262930]"
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

                    {/* Responsibilities */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-mono uppercase text-slate-400">
                        Key Engineering Responsibilities
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {item.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start space-x-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-sm bg-amber shrink-0 mt-1.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[#262930] text-xs">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="flex items-center space-x-1 font-mono text-amber hover:underline"
                  >
                    <span>{isExpanded ? "Collapse Details" : "Expand Breakdown"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <div className="hidden sm:flex flex-wrap gap-1">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121316] text-slate-400 border border-[#262930]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}