"use client";

import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { ProjectItem } from "@/data/projects";
import { Search } from "lucide-react";

interface ProjectsClientViewProps {
  projects: ProjectItem[];
}

export default function ProjectsClientView({ projects }: ProjectsClientViewProps) {
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

  const filteredProjects = projects.filter((project) => {
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
    <div className="space-y-6">
      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-3.5 rounded bg-[#181a1f] border border-[#262930]">
        {/* Category Chips */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded text-xs transition-colors ${
                selectedCategory === cat
                  ? "bg-[#22252c] text-amber border border-amber/40 font-medium"
                  : "bg-[#121316] text-slate-400 hover:text-white border border-[#262930]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Filter by keyword or stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded bg-[#121316] border border-[#262930] text-white text-xs focus:outline-none focus:border-amber transition-colors"
          />
        </div>
      </div>

      {/* Project Cards Stream */}
      <div className="space-y-6">
        {filteredProjects.length === 0 ? (
          <div className="p-10 text-center rounded bg-[#181a1f] border border-[#262930] text-slate-400 font-mono text-xs">
            No projects matched your criteria.
          </div>
        ) : (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featuredMode={project.featured} />
          ))
        )}
      </div>
    </div>
  );
}