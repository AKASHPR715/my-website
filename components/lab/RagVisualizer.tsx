"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function RagVisualizer() {
  const [activeStage, setActiveStage] = useState<number>(3);
  const [selectedDocIndex, setSelectedDocIndex] = useState<number>(0);

  const sampleDocuments = [
    {
      title: "Indian Income Tax Circular: Section 80C Guidelines",
      category: "Tax Law",
      content:
        "Section 80C of the Income Tax Act allows individual taxpayers and HUFs to claim deductions up to INR 1,50,000 from gross total income. Permissible investments include Employees' Provident Fund (EPF), Public Provident Fund (PPF), Equity Linked Savings Schemes (ELSS), 5-year tax-saver bank FDs, and principal repayment on housing loans. Section 80C deductions are restricted under the New Tax Regime (Section 115BAC) unless the taxpayer specifically opts for the Old Regime.",
      chunks: [
        { id: 1, text: "Section 80C allows individuals/HUFs deductions up to INR 1,50,000 from gross total income.", vector: "[0.042, -0.193, 0.441, ..., 0.088]", similarity: 0.942, relevant: true },
        { id: 2, text: "Permissible investments include EPF, PPF, ELSS, 5-year tax-saving FDs, and home loan principal.", vector: "[0.081, -0.210, 0.512, ..., -0.012]", similarity: 0.887, relevant: true },
        { id: 3, text: "Section 80C deductions are restricted under the New Tax Regime (Section 115BAC).", vector: "[0.012, 0.045, 0.339, ..., 0.145]", similarity: 0.725, relevant: false },
      ],
      llmAnswer:
        "Under Section 80C of the Income Tax Act, you are eligible to claim a maximum deduction of up to ₹1,50,000 from your gross income under the Old Tax Regime. Eligible avenues include EPF, PPF, ELSS mutual funds, and principal repayment on housing loans.",
    },
    {
      title: "Enterprise LLM Safety Protocol (LlamaGuard Policy)",
      category: "AI Safety",
      content:
        "All incoming prompts through the enterprise gateway must undergo dual-phase auditing. Phase 1 applies regex filters for API keys, passwords, and PII tokens. Phase 2 passes the normalized prompt to LlamaGuard to classify content across 12 prohibited harm categories including prompt injection and privilege escalation. Responses flagged with severity > 0.85 are dropped with an error code.",
      chunks: [
        { id: 1, text: "Incoming prompts undergo dual-phase auditing: Phase 1 regex PII filters; Phase 2 LlamaGuard classification.", vector: "[0.142, 0.129, -0.381, ..., 0.034]", similarity: 0.931, relevant: true },
        { id: 2, text: "LlamaGuard evaluates 12 harm categories including prompt injection, jailbreaks, and privilege escalation.", vector: "[0.084, 0.312, -0.119, ..., -0.077]", similarity: 0.865, relevant: true },
        { id: 3, text: "Responses flagged with severity > 0.85 are dropped with sanitized telemetry error logs.", vector: "[0.090, 0.088, -0.201, ..., 0.102]", similarity: 0.690, relevant: false },
      ],
      llmAnswer:
        "Enterprise prompts undergo a two-phase safety validation: first, deterministic regex scrubbing for PII and secrets, followed by LlamaGuard inference across 12 risk taxonomies with automated dropping of requests exceeding a 0.85 violation score.",
    },
  ];

  const currentDoc = sampleDocuments[selectedDocIndex];

  const stages = [
    {
      id: 1,
      title: "Document Ingestion",
      subtext: "UTF-8 text / PDF extract",
      tech: "Raw Text Stream",
      description: "Ingests raw domain text or knowledge base documents without chunking.",
    },
    {
      id: 2,
      title: "Chunk Splitting",
      subtext: "250 chars / 40 overlap",
      tech: "RecursiveCharacterTextSplitter",
      description: "Splits continuous text into overlapping semantic passages to retain cross-boundary context.",
    },
    {
      id: 3,
      title: "Vector Embedding",
      subtext: "384-dim Float32 dense vectors",
      tech: "all-MiniLM-L6-v2",
      description: "Converts text chunks into 384-dimensional dense embedding vectors (all-MiniLM-L6-v2).",
    },
    {
      id: 4,
      title: "Similarity Search",
      subtext: "Cosine metric (Inner Product)",
      tech: "FAISS IndexFlatIP",
      description: "Executes cosine similarity against indexed vectors. Chunks scoring >= 0.75 are retained.",
    },
    {
      id: 5,
      title: "Context Assembly",
      subtext: "Top-K filtered context",
      tech: "Prompt Injector",
      description: "Combines high-relevance chunks into the system prompt context window.",
    },
    {
      id: 6,
      title: "Grounded Synthesis",
      subtext: "Fact-constrained completion",
      tech: "Target LLM",
      description: "Generates answer strictly constrained to the retrieved context chunks.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Control Bar: Document Selection & Truthful Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded bg-[#181a1f] border border-[#262930]">
        <div>
          <div className="text-[11px] font-mono text-slate-400 mb-1.5 uppercase tracking-wide">
            Select Sample Knowledge Base
          </div>
          <div className="flex flex-wrap gap-2">
            {sampleDocuments.map((doc, idx) => (
              <button
                key={doc.title}
                onClick={() => setSelectedDocIndex(idx)}
                className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                  selectedDocIndex === idx
                    ? "bg-[#22252c] text-amber border-amber font-medium"
                    : "bg-[#121316] text-slate-300 border-[#262930] hover:text-white hover:border-slate-500"
                }`}
              >
                [{doc.category}] {doc.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:items-end gap-1 shrink-0">
          <div className="text-[11px] font-mono text-slate-300 px-2.5 py-1 rounded bg-[#121316] border border-[#262930]">
            Precomputed 384d Embeddings · No API Required
          </div>
          <a
            href="https://github.com/AKASHPR715/my-website/blob/main/components/lab/RagVisualizer.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-slate-400 hover:text-amber inline-flex items-center space-x-1 transition-colors"
          >
            <span>View Component Source</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Large Structural Stepper (Blueprint Schematic) */}
      <div className="border border-[#262930] bg-[#181a1f] rounded overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-[#262930]">
          {stages.map((st) => {
            const isSelected = activeStage === st.id;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStage(st.id)}
                className={`p-3.5 text-left transition-colors relative flex flex-col justify-between min-h-[100px] ${
                  isSelected
                    ? "bg-[#22252c] text-white"
                    : "bg-[#181a1f] text-slate-400 hover:text-slate-200 hover:bg-[#1c1f26]"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-0.5 bg-amber" />
                )}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-mono font-semibold ${isSelected ? "text-amber" : "text-slate-400"}`}>
                      0{st.id}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono text-amber">ACTIVE</span>
                    )}
                  </div>
                  <div className={`text-xs font-semibold leading-tight ${isSelected ? "text-white" : "text-slate-300"}`}>
                    {st.title}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-400 truncate mt-2">
                  {st.tech}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stage Inspection Panel */}
      <div className="p-5 sm:p-6 rounded bg-[#181a1f] border border-[#262930] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#262930]">
          <div>
            <div className="text-[11px] font-mono text-amber">
              STAGE 0{activeStage} // {stages[activeStage - 1].title.toUpperCase()}
            </div>
            <div className="text-sm font-semibold text-white mt-0.5">
              {stages[activeStage - 1].tech}
            </div>
          </div>
          <div className="text-xs text-slate-400">
            {stages[activeStage - 1].description}
          </div>
        </div>

        {/* Dynamic Stage Output */}
        {activeStage === 1 && (
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>RAW DOCUMENT TEXT</span>
              <span>Length: ~{currentDoc.content.length} characters</span>
            </div>
            <div className="p-4 rounded bg-[#121316] border border-[#262930] text-xs font-mono text-slate-300 leading-relaxed whitespace-pre-wrap">
              {currentDoc.content}
            </div>
          </div>
        )}

        {activeStage === 2 && (
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>RECURSIVE CHUNKS (3 PASSAGES GENERATED)</span>
              <span>Chunk Size: 250 · Overlap: 40</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentDoc.chunks.map((ch) => (
                <div
                  key={ch.id}
                  className="p-3.5 rounded bg-[#121316] border border-[#262930] text-xs space-y-1.5"
                >
                  <div className="text-[10px] font-mono text-amber font-semibold">
                    CHUNK [0{ch.id}]
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    &ldquo;{ch.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeStage === 3 && (
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>EMBEDDING MODEL: all-MiniLM-L6-v2</span>
              <span className="text-amber">Dimensionality: 384 Float32 (Dense)</span>
            </div>
            <div className="space-y-2">
              {currentDoc.chunks.map((ch) => (
                <div
                  key={ch.id}
                  className="p-3 rounded bg-[#121316] border border-[#262930] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono"
                >
                  <span className="text-slate-300 font-semibold">Chunk 0{ch.id}</span>
                  <span className="text-slate-400 bg-[#181a1f] px-2 py-1 rounded border border-[#262930]">
                    {ch.vector}
                  </span>
                  <span className="text-slate-400 text-[10px]">384 Float32 · L2 Normalized</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeStage === 4 && (
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>COSINE SIMILARITY SEARCH (FAISS INDEX)</span>
              <span>Threshold: &ge; 0.75 Retained</span>
            </div>
            <div className="space-y-2">
              {currentDoc.chunks.map((ch) => (
                <div
                  key={ch.id}
                  className={`p-3 rounded border flex items-center justify-between text-xs font-mono ${
                    ch.relevant
                      ? "bg-[#181a1f] border-signal-greenBorder text-slate-200"
                      : "bg-[#121316] border-[#262930] text-slate-400"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-slate-300">Chunk 0{ch.id}</span>
                    <span className="text-slate-400 text-[11px] hidden sm:inline truncate max-w-sm">
                      {ch.text.substring(0, 50)}...
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-amber">Score: {ch.similarity}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded ${
                        ch.relevant
                          ? "bg-signal-greenSubtle text-signal-green border border-signal-greenBorder"
                          : "bg-[#181a1f] text-slate-400 border border-[#262930]"
                      }`}
                    >
                      {ch.relevant ? "RETAINED" : "PRUNED"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeStage === 5 && (
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-slate-400">
              SYNTHESIZED PROMPT CONTEXT (INJECTED INTO LLM SYSTEM MESSAGE)
            </div>
            <div className="p-4 rounded bg-[#121316] border border-[#262930] text-xs font-mono text-slate-300 space-y-2">
              <div className="text-slate-400">// System Prompt Injection:</div>
              <div className="text-amber">
                Answer the user query strictly using the verified context passages below:
              </div>
              <div className="p-3 rounded bg-[#181a1f] border border-[#262930] text-slate-300 space-y-1">
                {currentDoc.chunks
                  .filter((c) => c.relevant)
                  .map((c) => (
                    <div key={c.id}>
                      [Context 0{c.id}]: {c.text}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {activeStage === 6 && (
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>FINAL GROUNDED SYNTHESIS</span>
              <span className="text-signal-green text-xs font-mono">Grounded Output</span>
            </div>
            <div className="p-4 rounded bg-[#121316] border border-amber/40 text-sm text-slate-200 leading-relaxed">
              <p>{currentDoc.llmAnswer}</p>
            </div>
          </div>
        )}

        {/* Stepper Navigation */}
        <div className="flex items-center justify-between pt-3 border-t border-[#262930]">
          <button
            onClick={() => setActiveStage((p) => Math.max(1, p - 1))}
            disabled={activeStage === 1}
            className="text-xs font-mono px-3 py-1.5 rounded bg-[#121316] hover:bg-[#22252c] disabled:opacity-30 text-slate-300 border border-[#262930]"
          >
            &larr; Prev Stage
          </button>
          <span className="text-xs font-mono text-slate-400">
            Stage {activeStage} of {stages.length}
          </span>
          <button
            onClick={() => setActiveStage((p) => Math.min(stages.length, p + 1))}
            disabled={activeStage === stages.length}
            className="text-xs font-mono px-3 py-1.5 rounded bg-[#121316] hover:bg-[#22252c] disabled:opacity-30 text-amber border border-amber/40"
          >
            Next Stage &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}