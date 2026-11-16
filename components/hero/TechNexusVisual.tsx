"use client";

import { useState } from "react";

interface PipelineStage {
  id: string;
  name: string;
  category: string;
  inputs: string;
  coreTech: string;
  outputs: string;
  architecturePrinciple: string;
}

export default function TechNexusVisual() {
  const [activeStageId, setActiveStageId] = useState<string>("guardrails");

  const stages: PipelineStage[] = [
    {
      id: "ingestion",
      name: "01 // Ingestion & Extraction",
      category: "Multi-Source Intake",
      inputs: "Enterprise chat logs (MS Teams), tax PDFs (Form 16/26AS), sports video footage",
      coreTech: "Microsoft Graph API, PyMuPDF, OpenCV VideoCapture",
      outputs: "Sanitized JSON streams & normalized text tokens",
      architecturePrinciple: "Extract entities and normalize schema before any downstream reasoning.",
    },
    {
      id: "guardrails",
      name: "02 // Safety & Guardrails",
      category: "Boundary Enforcement",
      inputs: "Normalized user queries & prompt templates",
      coreTech: "LlamaGuard, Guardrails AI, regex PII scrubbers",
      outputs: "Verified safe prompts or sub-second policy drops",
      architecturePrinciple: "Dual-phase defense: regex pre-filter before LLM inference, schema validation on output.",
    },
    {
      id: "deterministic",
      name: "03 // Deterministic Compute",
      category: "Zero-Hallucination Core",
      inputs: "Parsed variables, structured parameters, AST syntax trees",
      coreTech: "Rule-based tax engine, Python AST, Google Test compiler",
      outputs: "100% mathematically verified balances & compiled test suites",
      architecturePrinciple: "Never let probabilistic models calculate math or compliance rules directly.",
    },
    {
      id: "sync",
      name: "04 // Execution & Sync",
      category: "Enterprise Action",
      inputs: "Validated artifacts, optimal regime calculations, action items",
      coreTech: "Microsoft To Do API, Pydantic Schema Exporter, FastAPI",
      outputs: "Automated task lists, official ITR-1 JSON schemas",
      architecturePrinciple: "Idempotent, audit-logged actions pushed directly to business destinations.",
    },
  ];

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[1];

  return (
    <div className="w-full max-w-lg mx-auto bg-[#181a1f] border border-[#262930] rounded p-5 space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#262930] text-[11px] font-mono text-slate-400">
        <span className="text-slate-300 font-semibold">[SYSTEM ARCHITECTURE BUS]</span>
        <span className="text-amber">4 STAGES</span>
      </div>

      {/* Schematic Pipeline Flow (4 Connected Blocks) */}
      <div className="space-y-1.5">
        {stages.map((st) => {
          const isSelected = activeStageId === st.id;
          return (
            <button
              key={st.id}
              onClick={() => setActiveStageId(st.id)}
              className={`w-full text-left p-3 rounded border transition-colors flex items-center justify-between ${
                isSelected
                  ? "bg-[#22252c] border-amber text-white"
                  : "bg-[#121316] border-[#262930] text-slate-400 hover:text-slate-200 hover:border-slate-600"
              }`}
            >
              <div className="space-y-0.5">
                <div className={`text-xs font-semibold ${isSelected ? "text-amber" : "text-slate-300"}`}>
                  {st.name}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  {st.coreTech}
                </div>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                isSelected
                  ? "border-amber text-amber"
                  : "border-[#262930] text-slate-400"
              }`}>
                {isSelected ? "INSPECTING" : "SELECT"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stage Inspection Sub-panel */}
      <div className="p-3.5 rounded bg-[#121316] border border-[#262930] text-xs space-y-2">
        <div className="flex items-center justify-between font-mono text-[11px] pb-1.5 border-b border-[#262930]">
          <span className="text-amber font-semibold">{activeStage.category}</span>
          <span className="text-slate-400">Architecture Rule</span>
        </div>

        <p className="text-slate-300 text-xs leading-relaxed italic">
          &ldquo;{activeStage.architecturePrinciple}&rdquo;
        </p>

        <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[10px]">
          <div className="p-2 rounded bg-[#181a1f] border border-[#262930]">
            <span className="text-slate-400 block uppercase">Inputs</span>
            <span className="text-slate-300 mt-0.5 block truncate">{activeStage.inputs}</span>
          </div>
          <div className="p-2 rounded bg-[#181a1f] border border-[#262930]">
            <span className="text-slate-400 block uppercase">Outputs</span>
            <span className="text-slate-300 mt-0.5 block truncate">{activeStage.outputs}</span>
          </div>
        </div>
      </div>
    </div>
  );
}