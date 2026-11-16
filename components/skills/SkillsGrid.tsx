"use client";

import { useState } from "react";
import { skillsData } from "@/data/skills";

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const displayedCategories =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#121316] border-b border-[#262930]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#262930]">
          <div>
            <div className="text-xs font-mono text-amber mb-2">
              [SKILLS // TECHNICAL CAPABILITIES]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engineering Competencies
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
              Grouped by functional systems domain. No arbitrary percentage bars; focused on production tools and research experience.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-1 p-1 rounded bg-[#181a1f] border border-[#262930]">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                selectedCategory === "All"
                  ? "bg-[#22252c] text-amber border border-amber/40 font-medium"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Domains
            </button>
            {skillsData.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  selectedCategory === cat.title
                    ? "bg-[#22252c] text-amber border border-amber/40 font-medium"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {displayedCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-4 rounded bg-[#181a1f] border border-[#262930] flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#262930]">
                  <h3 className="text-xs font-semibold text-white">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400">
                    {cat.skills.length} tools
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                  {cat.description}
                </p>

                <div className="space-y-1.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2 rounded bg-[#121316] border border-[#262930] flex items-center justify-between text-xs"
                    >
                      <span className="font-semibold text-slate-200">
                        {skill.name}
                      </span>
                      {skill.context && (
                        <span className="text-[10px] font-mono text-slate-400 truncate max-w-[140px]">
                          {skill.context}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}