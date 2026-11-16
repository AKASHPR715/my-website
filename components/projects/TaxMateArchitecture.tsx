"use client";

import { useState } from "react";
import { 
  FileUp, 
  Binary, 
  ShieldCheck, 
  Calculator, 
  Bot, 
  FileCheck, 
  Info 
} from "lucide-react";

export default function TaxMateArchitecture() {
  const [activeStep, setActiveStep] = useState<number>(4);

  const steps = [
    {
      id: 1,
      title: "Document Upload",
      type: "Integration",
      isDeterministic: true,
      icon: FileUp,
      tech: "FastAPI / PyMuPDF",
      description: "Secure intake of Form 16 (Part A & B), AIS, and Form 26AS statements in PDF format.",
      details: "Performs checksum verification, MIME-type assertions, and DPI text stream normalization.",
    },
    {
      id: 2,
      title: "Document Extraction",
      type: "Probabilistic Parser",
      isDeterministic: false,
      icon: Binary,
      tech: "Pydantic / LLM Schema Normalizer",
      description: "Extracts gross salary, exemptions under Sec 10, employer TDS, and interest income into structured schema.",
      details: "Translates varying employer layout tables into validated Pydantic models with graceful fallbacks.",
    },
    {
      id: 3,
      title: "Cross-Reconciliation",
      type: "Deterministic Rule",
      isDeterministic: true,
      icon: ShieldCheck,
      tech: "Python Reconciliation Engine",
      description: "Cross-references TDS reported in Form 16 against actual tax credits deposited in Form 26AS.",
      details: "Flags discrepancy mismatches before calculation to prevent ITD defective return notices under Sec 139(9).",
    },
    {
      id: 4,
      title: "Tax Computation Engine",
      type: "Deterministic Math",
      isDeterministic: true,
      icon: Calculator,
      tech: "Rule-Based Python Slab Calculator",
      description: "Computes exact tax liability under Old Regime vs New Regime (Sec 115BAC), Chapter VI-A deductions, and 4% cess.",
      details: "Probabilistic LLMs are banned from running arithmetic. Pure Python mathematical functions guarantee 100% precision.",
    },
    {
      id: 5,
      title: "RAG Advisory Engine",
      type: "Probabilistic RAG",
      isDeterministic: false,
      icon: Bot,
      tech: "LangGraph / FAISS / Tax Index",
      description: "Conversational advisor explains regime differences and recommends unutilized 80C/80D avenues.",
      details: "Retrieves statutory provisions from the official Income Tax Act circulars index.",
    },
    {
      id: 6,
      title: "ITR Schema Compiler",
      type: "Deterministic Compiler",
      isDeterministic: true,
      icon: FileCheck,
      tech: "Pydantic / Official ITR-1 Schema",
      description: "Compiles validated tax return into schema-compliant JSON format ready for portal upload.",
      details: "Asserts against official ITD e-filing JSON specifications.",
    },
  ];

  const currentStep = steps.find((s) => s.id === activeStep) || steps[3];

  return (
    <div className="p-4 sm:p-5 rounded bg-[#181a1f] border border-[#262930] space-y-4">
      {/* Diagram Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#262930] gap-2">
        <div>
          <div className="text-[11px] font-mono text-amber">
            [INTERACTIVE BLUEPRINT // TAXMATE ARCHITECTURE]
          </div>
          <div className="text-xs font-semibold text-white mt-0.5">
            Neuro-Symbolic Boundary: Probabilistic Extraction &rarr; Deterministic Slabs
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-3 text-[10px] font-mono">
          <span className="flex items-center gap-1 text-slate-300">
            <span className="w-2 h-2 rounded-sm bg-signal-green inline-block"></span> Deterministic
          </span>
          <span className="flex items-center gap-1 text-amber">
            <span className="w-2 h-2 rounded-sm bg-amber inline-block"></span> Probabilistic
          </span>
        </div>
      </div>

      {/* 6-Stage Stepper Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5">
        {steps.map((st) => {
          const isSelected = activeStep === st.id;
          return (
            <button
              key={st.id}
              onClick={() => setActiveStep(st.id)}
              className={`p-2.5 rounded border text-left transition-colors flex flex-col justify-between min-h-[95px] ${
                isSelected
                  ? "bg-[#22252c] border-amber text-white"
                  : "bg-[#121316] border-[#262930] text-slate-400 hover:text-slate-200 hover:border-slate-600"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono ${isSelected ? "text-amber font-semibold" : "text-slate-400"}`}>
                  0{st.id}
                </span>
                <span
                  className={`text-[8px] font-mono px-1 py-0.5 rounded border ${
                    st.isDeterministic
                      ? "text-signal-green border-signal-greenBorder bg-signal-greenSubtle"
                      : "text-amber border-amber-border bg-amber-subtle"
                  }`}
                >
                  {st.isDeterministic ? "DET" : "PROB"}
                </span>
              </div>

              <div className={`text-xs font-semibold leading-tight line-clamp-1 ${isSelected ? "text-white" : "text-slate-300"}`}>
                {st.title}
              </div>

              <span className="text-[9px] font-mono text-slate-400 truncate mt-1">
                {st.tech}
              </span>
            </button>
          );
        })}
      </div>

      {/* Step Inspector Panel */}
      <div className="p-4 rounded bg-[#121316] border border-[#262930] space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-[#262930]">
          <div className="text-xs font-semibold text-white">
            Stage 0{currentStep.id}: {currentStep.title} ({currentStep.tech})
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            Execution Class: {currentStep.type}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          {currentStep.description}
        </p>

        <div className="p-2.5 rounded bg-[#181a1f] border border-[#262930] text-[11px] font-mono text-slate-400">
          <strong className="text-slate-300">Technical Assertion:</strong> {currentStep.details}
        </div>
      </div>
    </div>
  );
}