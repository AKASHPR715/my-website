"use client";

import { useState } from "react";
import { 
  FileUp, 
  Binary, 
  ShieldCheck, 
  Calculator, 
  Bot, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Info
} from "lucide-react";

export default function TaxMateArchitecture() {
  const [activeStep, setActiveStep] = useState<number>(4);

  const steps = [
    {
      id: 1,
      title: "Document Upload",
      type: "Integration",
      typeClass: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      isDeterministic: true,
      icon: FileUp,
      tech: "FastAPI / PyMuPDF",
      description: "Secure intake of Form 16 (Part A & B), AIS (Annual Information Statement), and Form 26AS tax credit statements in PDF format.",
      details: "Performs cryptographic checksums, checks MIME types, verifies uncorrupted text streams, and normalizes DPI resolution.",
    },
    {
      id: 2,
      title: "Document Extraction",
      type: "Probabilistic LLM",
      typeClass: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      isDeterministic: false,
      icon: Binary,
      tech: "Structured JSON Parsing / LLMs",
      description: "Extracts gross salary, allowances under Section 10, employer TDS, and bank savings interest into structured schema.",
      details: "Translates unstructured employer table variations into standardized JSON entities, handling multi-employer transitions gracefully.",
    },
    {
      id: 3,
      title: "Validation & Cross-Check",
      type: "Deterministic Rule",
      typeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      isDeterministic: true,
      icon: ShieldCheck,
      tech: "Cross-Reconciliation Engine",
      description: "Cross-references TDS reported in Form 16 against actual tax credits deposited in Form 26AS with 0% tolerance for mismatch.",
      details: "Flags discrepancy notices before submission to prevent defective return notices under Section 139(9).",
    },
    {
      id: 4,
      title: "Tax Computation Engine",
      type: "Pure Deterministic Math",
      typeClass: "bg-sky-500/10 text-sky-400 border-sky-500/30",
      isDeterministic: true,
      icon: Calculator,
      tech: "Indian Tax Slab Rule Engine (Python)",
      description: "Computes exact tax liability under Old Regime vs New Regime (Sec 115BAC), Chapter VI-A deductions, Sec 87A rebate, and 4% cess.",
      details: "Probabilistic LLMs are banned from running arithmetic. Hardcoded Python functions guarantee 100% mathematical precision.",
    },
    {
      id: 5,
      title: "RAG Advisory Engine",
      type: "Probabilistic AI / RAG",
      typeClass: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      isDeterministic: false,
      icon: Bot,
      tech: "LangGraph / FAISS / Tax Law Index",
      description: "Conversational advisor explains the Old vs New regime decision, recommends unutilized 80C/80D avenues, and answers user queries.",
      details: "Grounds conversational responses in statutory IT department circulars, preventing regulatory hallucinations.",
    },
    {
      id: 6,
      title: "ITR Schema Generation",
      type: "Deterministic Compilation",
      typeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      isDeterministic: true,
      icon: FileCheck,
      tech: "Pydantic / Official ITR-1 Schema",
      description: "Generates official, schema-validated JSON payload compliant with the Income Tax Department e-filing utility.",
      details: "Passes JSON schema assertion tests, ensuring immediate acceptance by government filing gateways.",
    },
  ];

  const currentStep = steps.find((s) => s.id === activeStep) || steps[3];

  return (
    <div className="p-6 rounded-2xl bg-[#0a0f1d] border border-white/10 shadow-2xl my-6">
      {/* Diagram Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/[0.08] gap-2">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Interactive System Architecture
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 font-mono">
            Neuro-Symbolic Pipeline: Click any stage to inspect deterministic vs probabilistic boundary
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-3 text-[10px] font-mono">
          <span className="flex items-center gap-1.5 text-sky-400">
            <span className="w-2 h-2 rounded bg-sky-500"></span> Deterministic Rule
          </span>
          <span className="flex items-center gap-1.5 text-purple-400">
            <span className="w-2 h-2 rounded bg-purple-500"></span> Probabilistic LLM
          </span>
        </div>
      </div>

      {/* Horizontal Pipeline Sequence */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
        {steps.map((st, idx) => {
          const Icon = st.icon;
          const isSelected = activeStep === st.id;

          return (
            <button
              key={st.id}
              onClick={() => setActiveStep(st.id)}
              className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                isSelected
                  ? "bg-sky-950/40 border-sky-400 shadow-lg shadow-sky-500/20 -translate-y-1"
                  : "bg-[#0f172a] border-white/[0.06] hover:border-white/20 hover:bg-[#131d33]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-slate-400 font-bold">
                  0{st.id}
                </span>
                <span
                  className={`text-[8px] font-mono px-1.5 py-0.5 rounded border ${st.typeClass}`}
                >
                  {st.isDeterministic ? "DET" : "PROB"}
                </span>
              </div>

              <div className="flex items-center space-x-2 my-1">
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? "text-sky-400" : "text-slate-400"
                  }`}
                />
                <span className="text-xs font-bold text-white line-clamp-1">
                  {st.title}
                </span>
              </div>

              <span className="text-[9px] font-mono text-slate-400 truncate mt-1">
                {st.tech}
              </span>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Stage Inspector */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#0d1424] border border-sky-500/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-white/[0.06]">
          <div className="flex items-center space-x-3">
            <span className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center font-mono text-xs font-bold text-sky-400">
              0{currentStep.id}
            </span>
            <div>
              <h4 className="text-sm font-bold text-white">
                {currentStep.title}
              </h4>
              <span className="text-xs font-mono text-sky-400">
                Component: {currentStep.tech}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span
              className={`text-xs font-mono px-2.5 py-1 rounded-md border ${currentStep.typeClass}`}
            >
              {currentStep.type}
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
          {currentStep.description}
        </p>

        <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05] text-xs font-mono text-slate-300 flex items-start space-x-2">
          <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <span>{currentStep.details}</span>
        </div>
      </div>
    </div>
  );
}
