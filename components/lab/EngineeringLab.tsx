"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import RagVisualizer from "./RagVisualizer";
import AgentWorkflowSimulator from "./AgentWorkflowSimulator";
import DataScienceExplorer from "./DataScienceExplorer";

export default function EngineeringLab() {
  const [activeTab, setActiveTab] = useState<"rag" | "agent" | "datascience">("rag");

  return (
    <section id="lab" className="py-16 sm:py-20 border-t border-[#262930] bg-[#121316]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#262930]">
          <div>
            <div className="text-xs font-mono text-amber tracking-tight mb-2">
              [LABORATORY // INTERACTIVE DEMONSTRATIONS]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Three things I built to understand how this stuff actually works
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
              Real code architecture broken down into interactive components: retrieval-augmented generation, multi-agent state machines, and feature-driven classification.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap gap-1 p-1 bg-[#181a1f] border border-[#262930] rounded">
            <button
              onClick={() => setActiveTab("rag")}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                activeTab === "rag"
                  ? "bg-[#22252c] text-amber border border-amber/40"
                  : "text-slate-400 hover:text-white hover:bg-[#22252c]"
              }`}
            >
              01 // RAG Pipeline
            </button>

            <button
              onClick={() => setActiveTab("agent")}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                activeTab === "agent"
                  ? "bg-[#22252c] text-amber border border-amber/40"
                  : "text-slate-400 hover:text-white hover:bg-[#22252c]"
              }`}
            >
              02 // Multi-Agent State Machine
            </button>

            <button
              onClick={() => setActiveTab("datascience")}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                activeTab === "datascience"
                  ? "bg-[#22252c] text-amber border border-amber/40"
                  : "text-slate-400 hover:text-white hover:bg-[#22252c]"
              }`}
            >
              03 // Data Science Predictor
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div>
          {activeTab === "rag" && <RagVisualizer />}
          {activeTab === "agent" && <AgentWorkflowSimulator />}
          {activeTab === "datascience" && <DataScienceExplorer />}
        </div>
      </div>
    </section>
  );
}