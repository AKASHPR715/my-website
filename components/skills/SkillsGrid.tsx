"use client";

import { useState } from "react";
import { 
  Brain, 
  Workflow, 
  BarChart2, 
  Eye, 
  Code2, 
  Database, 
  CheckCircle2, 
  Sparkles,
  Layers
} from "lucide-react";
import { skillsData, SkillCategory } from "@/data/skills";

const iconMap: Record<string, any> = {
  Brain,
  Workflow,
  BarChart2,
  Eye,
  Code2,
  Database,
};

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const displayedCategories =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-[#080c14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Skills & Engineering Competencies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-mono">
              Grouped by domain expertise without arbitrary percentage bars. Focused on practical production systems and research experience.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0c1220] border border-white/[0.08]">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === "All"
                  ? "bg-sky-500 text-slate-950 font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Domains
            </button>
            {skillsData.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat.title
                    ? "bg-sky-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Brain;

            return (
              <div
                key={cat.title}
                className="p-6 rounded-2xl bg-[#0c1220] border border-white/[0.08] hover:border-sky-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-sky-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-mono">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4 pt-4 border-t border-white/[0.06]">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-[#090d18] border border-white/[0.04] flex flex-col justify-between gap-1 group hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-200 group-hover:text-sky-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                            {skill.level}
                          </span>
                        </div>

                        {skill.context && (
                          <span className="text-[10px] text-slate-400 font-mono">
                            {skill.context}
                          </span>
                        )}
                      </div>
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
