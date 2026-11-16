"use client";

import { useState } from "react";
import { 
  FileText, 
  Scissors, 
  Binary, 
  Search, 
  ArrowRight, 
  Bot, 
  CheckCircle2, 
  Sparkles,
  RefreshCw,
  Sliders,
  ChevronRight
} from "lucide-react";

export default function RagVisualizer() {
  const [activeStage, setActiveStage] = useState<number>(3);
  const [selectedDocIndex, setSelectedDocIndex] = useState<number>(0);
  const [queryInput, setQueryInput] = useState<string>("What are the eligibility limits for Section 80C deductions?");

  const sampleDocuments = [
    {
      title: "Indian Income Tax Circular: Sec 80C Guidelines",
      category: "FinTech / Tax",
      content:
        "Section 80C of the Income Tax Act allows individual taxpayers and HUFs to claim deductions up to INR 1,50,000 from total gross income. Permissible investments include Employees' Provident Fund (EPF), Public Provident Fund (PPF), Equity Linked Savings Schemes (ELSS), 5-year tax-saver bank FDs, and principal repayment on home loans. Note: Section 80C deductions are not available under the New Tax Regime (Section 115BAC) unless opting for the Old Regime.",
      chunks: [
        { id: 1, text: "Section 80C allows individuals/HUFs deductions up to INR 1,50,000 from gross total income.", vector: "[0.824, -0.193, 0.441, ...]", similarity: 0.942, relevant: true },
        { id: 2, text: "Permissible investments include EPF, PPF, ELSS, 5-year tax-saving FDs, and home loan principal.", vector: "[0.781, -0.210, 0.512, ...]", similarity: 0.887, relevant: true },
        { id: 3, text: "Note: Section 80C deductions are restricted under the New Tax Regime (Section 115BAC).", vector: "[0.612, 0.045, 0.339, ...]", similarity: 0.725, relevant: false },
      ],
      llmAnswer: "Under Section 80C of the Income Tax Act, you are eligible to claim a maximum deduction of up to ₹1,50,000 from your gross income under the Old Tax Regime. Eligible avenues include EPF, PPF, ELSS mutual funds, and principal repayment on housing loans.",
    },
    {
      title: "Enterprise LLM Safety Protocol (LlamaGuard)",
      category: "AI Safety",
      content:
        "All incoming prompts through the enterprise gateway must undergo dual-phase auditing. Phase 1 applies regex filters for API keys and PII tokens. Phase 2 passes the normalized prompt to LlamaGuard to classify content across 12 prohibited harm categories including prompt injection and privilege escalation. Responses flagged with severity > 0.85 are dropped with an error code.",
      chunks: [
        { id: 1, text: "Incoming prompts undergo dual-phase auditing: Phase 1 regex PII filters; Phase 2 LlamaGuard classification.", vector: "[0.742, 0.129, -0.381, ...]", similarity: 0.931, relevant: true },
        { id: 2, text: "LlamaGuard evaluates 12 harm categories including prompt injection, jailbreaks, and privilege escalation.", vector: "[0.684, 0.312, -0.119, ...]", similarity: 0.865, relevant: true },
        { id: 3, text: "Responses flagged with severity > 0.85 are dropped with sanitized telemetry error logs.", vector: "[0.490, 0.088, -0.201, ...]", similarity: 0.690, relevant: false },
      ],
      llmAnswer: "Enterprise prompts undergo a two-phase safety validation: first, deterministic regex scrubbing for PII and secrets, followed by LlamaGuard inference across 12 risk taxonomies with automated dropping of requests exceeding a 0.85 violation score.",
    },
  ];

  const currentDoc = sampleDocuments[selectedDocIndex];

  const stages = [
    { id: 1, name: "Document Intake", icon: FileText, label: "Raw Document", desc: "Ingests raw domain documents, PDF text streams, or knowledge bases." },
    { id: 2, name: "Chunking", icon: Scissors, label: "Text Splitting", desc: "Splits text into overlapping semantic passages (e.g. 500 tokens, 50 overlap)." },
    { id: 3, name: "Vector Embedding", icon: Binary, label: "Sentence Transformers", desc: "Converts text chunks into 768-dim dense embedding vectors in semantic space." },
    { id: 4, name: "Vector Search", icon: Search, label: "FAISS / Cosine Similarity", desc: "Executes approximate nearest neighbor (ANN) search against indexed chunk vectors." },
    { id: 5, name: "Context Retrieval", icon: CheckCircle2, label: "Top-K Chunks", desc: "Retrieves top scoring chunks above similarity threshold to build prompt context." },
    { id: 6, name: "LLM Response", icon: Bot, label: "Grounded Synthesis", desc: "Generates factual answer grounded strictly within retrieved knowledge context." },
  ];

  return (
    <div className="space-y-6">
      {/* Top Controls & Document Picker */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#0b101c] border border-white/[0.08]">
        <div>
          <span className="text-[10px] font-mono uppercase text-slate-400 block">
            SELECT SAMPLE KNOWLEDGE BASE
          </span>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {sampleDocuments.map((doc, idx) => (
              <button
                key={doc.title}
                onClick={() => setSelectedDocIndex(idx)}
                className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                  selectedDocIndex === idx
                    ? "bg-sky-500/20 text-sky-300 border-sky-500/40 font-bold"
                    : "bg-white/[0.03] text-slate-400 border-white/[0.06] hover:text-white"
                }`}
              >
                {doc.category}: {doc.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
            SIMULATION MODE &bull; ZERO API KEY REQ
          </span>
        </div>
      </div>

      {/* Interactive Pipeline Stages Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {stages.map((st) => {
          const Icon = st.icon;
          const isSelected = activeStage === st.id;

          return (
            <button
              key={st.id}
              onClick={() => setActiveStage(st.id)}
              className={`p-3 rounded-xl border text-left transition-all relative ${
                isSelected
                  ? "bg-sky-950/40 border-sky-400 shadow-lg shadow-sky-500/10 -translate-y-1"
                  : "bg-[#0c1220] border-white/[0.06] hover:border-white/15"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] text-slate-400 font-bold">
                  0{st.id}
                </span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
                )}
              </div>
              <div className="flex items-center space-x-1.5 mb-1">
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? "text-sky-400" : "text-slate-400"
                  }`}
                />
                <span className="text-xs font-bold text-white truncate">
                  {st.name}
                </span>
              </div>
              <span className="text-[9px] font-mono text-slate-400 truncate block">
                {st.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Stage Inspector Panel */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#090d18] border border-sky-500/20 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center space-x-3">
            <span className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 font-mono text-xs font-bold flex items-center justify-center">
              0{activeStage}
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Stage {activeStage}: {stages[activeStage - 1].name}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {stages[activeStage - 1].desc}
              </p>
            </div>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.04] text-sky-300 border border-white/[0.08] w-fit">
            Component: {stages[activeStage - 1].label}
          </span>
        </div>

        {/* Dynamic Interactive Stage Content */}
        {activeStage === 1 && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>RAW SOURCE DOCUMENT</span>
              <span>Tokens: ~110 &bull; Format: UTF-8 Text</span>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-slate-300 font-mono leading-relaxed">
              {currentDoc.content}
            </div>
          </div>
        )}

        {activeStage === 2 && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>RECURSIVE SEMANTIC CHUNK SPLITTER</span>
              <span>Chunk Size: 250 chars &bull; Overlap: 40 chars</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentDoc.chunks.map((ch) => (
                <div
                  key={ch.id}
                  className="p-3.5 rounded-xl bg-[#0e1628] border border-white/[0.08] text-xs space-y-2"
                >
                  <span className="font-mono text-[10px] text-sky-400 font-bold block">
                    CHUNK #0{ch.id}
                  </span>
                  <p className="text-slate-300 leading-relaxed text-xs">
                    &ldquo;{ch.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeStage === 3 && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>VECTOR EMBEDDING MODEL: all-MiniLM-L6-v2</span>
              <span>Dimensionality: 384 Float32</span>
            </div>
            <div className="space-y-2">
              {currentDoc.chunks.map((ch) => (
                <div
                  key={ch.id}
                  className="p-3 rounded-xl bg-[#0e1628] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono"
                >
                  <span className="text-slate-300 font-bold">Chunk 0{ch.id}</span>
                  <span className="text-sky-400 bg-sky-950/40 px-2 py-1 rounded border border-sky-800/40">
                    vector: {ch.vector}
                  </span>
                  <span className="text-emerald-400 text-[10px]">L2-Normalized</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeStage === 4 && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>COSINE SIMILARITY SEARCH (FAISS INDEX)</span>
              <span>Metric: Inner Product (Cosine)</span>
            </div>
            <div className="space-y-2">
              {currentDoc.chunks.map((ch) => (
                <div
                  key={ch.id}
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs font-mono ${
                    ch.relevant
                      ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-300"
                      : "bg-[#0e1628] border-white/[0.06] text-slate-400"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">Chunk 0{ch.id}</span>
                    <span className="text-slate-400 text-[11px] hidden sm:inline truncate max-w-xs">
                      {ch.text.substring(0, 45)}...
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">Score: {ch.similarity}</span>
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded ${
                        ch.relevant
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-white/[0.05] text-slate-500"
                      }`}
                    >
                      {ch.relevant ? "RETAINED (>0.75)" : "PRUNED"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeStage === 5 && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400">
              SYNTHESIZED PROMPT INJECTION CONTEXT
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-sky-500/30 text-xs font-mono text-slate-300 space-y-2">
              <span className="text-slate-400">// System Prompt Injection</span>
              <p className="text-sky-300">
                You are a factual AI assistant. Answer using strictly the verified context below:
              </p>
              <div className="p-2.5 rounded bg-white/[0.04] border border-white/[0.06] text-slate-300">
                {currentDoc.chunks
                  .filter((c) => c.relevant)
                  .map((c) => `[Context 0${c.id}]: ${c.text}`)
                  .join("\n")}
              </div>
            </div>
          </div>
        )}

        {activeStage === 6 && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>GROUNDED LLM RESPONSE GENERATION</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 0% Hallucination Grounded
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0f172a] border border-sky-500/40 text-sm text-slate-200 leading-relaxed shadow-lg">
              <p>{currentDoc.llmAnswer}</p>
            </div>
          </div>
        )}

        {/* Navigation buttons between steps */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={() => setActiveStage((p) => Math.max(1, p - 1))}
            disabled={activeStage === 1}
            className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] disabled:opacity-40 text-slate-300"
          >
            &larr; Previous Stage
          </button>
          <span className="text-xs font-mono text-slate-400">
            Step {activeStage} of {stages.length}
          </span>
          <button
            onClick={() => setActiveStage((p) => Math.min(stages.length, p + 1))}
            disabled={activeStage === stages.length}
            className="text-xs font-mono px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 disabled:opacity-40 text-sky-300 border border-sky-500/30"
          >
            Next Stage &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
