"use client";

import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projects";
import { Code2, Search, Filter } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Agentic AI",
    "Enterprise Automation",
    "AI Safety",
    "Computer Vision",
    "Data Science",
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ||
      project.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()));

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>SYSTEM ARCHITECTURES & PROTOTYPES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Engineering Projects & Research
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-mono">
            Detailed technical breakdowns of intelligent systems across multi-agent AI, RAG, safety guardrails, computer vision kinematics, and machine learning telemetry.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0c1220] border border-white/[0.08] mb-10">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                    : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search tech, title, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 rounded-xl bg-[#080d18] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>
        </div>

        {/* Project Cards Stream */}
        <div className="space-y-8">
          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-[#0c1220] border border-white/[0.08] text-slate-400 font-mono text-xs">
              No projects matched your filter query. Resetting filters might help.
            </div>
          ) : (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featuredMode={project.featured} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
