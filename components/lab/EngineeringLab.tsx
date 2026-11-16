"use client";

import { useState } from "react";
import { 
  Sparkles, 
  Workflow, 
  Bot, 
  BarChart3, 
  Layers, 
  Cpu, 
  Info,
  Terminal
} from "lucide-react";
import RagVisualizer from "./RagVisualizer";
import AgentWorkflowSimulator from "./AgentWorkflowSimulator";
import DataScienceExplorer from "./DataScienceExplorer";

export default function EngineeringLab() {
  const [activeTab, setActiveTab] = useState<"rag" | "agent" | "datascience">("rag");

  return (
    <section id="lab" className="py-20 relative bg-[#070b14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>TECHNICAL DIFFERENTIATOR &bull; LIVE SANDBOX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              Inside My Engineering Lab
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-mono">
              Interactive demonstrations exposing the underlying mechanics of retrieval-augmented generation, multi-agent state machines, and predictive data clustering.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#0c1220] border border-white/[0.08]">
            <button
              onClick={() => setActiveTab("rag")}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === "rag"
                  ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>Demo A: RAG Pipeline</span>
            </button>

            <button
              onClick={() => setActiveTab("agent")}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === "agent"
                  ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Demo B: AI Agent Workflow</span>
            </button>

            <button
              onClick={() => setActiveTab("datascience")}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === "datascience"
                  ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Demo C: Data Science Explorer</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="transition-all duration-300">
          {activeTab === "rag" && <RagVisualizer />}
          {activeTab === "agent" && <AgentWorkflowSimulator />}
          {activeTab === "datascience" && <DataScienceExplorer />}
        </div>
      </div>
    </section>
  );
}
