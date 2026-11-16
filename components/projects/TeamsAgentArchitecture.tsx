"use client";

import { useState } from "react";
import { 
  MessageSquare, 
  Cpu, 
  FileText, 
  CheckSquare, 
  CalendarCheck 
} from "lucide-react";

export default function TeamsAgentArchitecture() {
  const [activeStep, setActiveStep] = useState<number>(3);

  const steps = [
    {
      step: 1,
      title: "Teams Message Intake",
      tech: "Microsoft Graph API",
      type: "Delta Query Ingestion",
      summary: "Authenticated delta query fetches past 24-hour channel messages and multi-threaded replies across authorized engineering channels.",
      technicalDetail: "Applies least-privilege OAuth 2.0 delegated scopes (ChannelMessage.Read.All) with delta tokens to prevent redundant polling.",
    },
    {
      step: 2,
      title: "Thread Sanitization",
      tech: "Python Thread Parser",
      type: "Deterministic Normalization",
      summary: "Normalizes message trees, strips bot notifications, system alerts, and parses timestamps into chronological thread representations.",
      technicalDetail: "Preserves reply hierarchies and strips noise HTML into lightweight normalized markdown blocks.",
    },
    {
      step: 3,
      title: "Semantic Summarization",
      tech: "LLMs / Prompt Engineering",
      type: "Probabilistic Synthesis",
      summary: "Compresses multi-participant discussion into structured summaries categorized by engineering domain and decisions taken.",
      technicalDetail: "Uses Map-Reduce chunking to process long channel histories without overflowing LLM context limits.",
    },
    {
      step: 4,
      title: "Task & Action Item Extraction",
      tech: "Pydantic Schema Parser",
      type: "Task Classification",
      summary: "Detects explicit task commitments, assignees, priorities, and implicit deadlines from thread context.",
      technicalDetail: "Enforces strict schemas validating task title, assignee email, priority (Low/Med/High), and ISO-8601 due date.",
    },
    {
      step: 5,
      title: "Microsoft To Do Sync",
      tech: "Graph API / To Do Endpoints",
      type: "Enterprise Sync",
      summary: "Injects actionable tasks with deep links back to the original Teams conversation directly into personal/shared To Do lists.",
      technicalDetail: "Handles Graph API rate limits with exponential backoff and prevents duplicate task creation via idempotent hashing.",
    },
  ];

  const current = steps.find((s) => s.step === activeStep) || steps[2];

  return (
    <div className="p-4 sm:p-5 rounded bg-[#181a1f] border border-[#262930] space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#262930] gap-2">
        <div>
          <div className="text-[11px] font-mono text-amber">
            [INTERACTIVE BLUEPRINT // TEAMS AGENT WORKFLOW]
          </div>
          <div className="text-xs font-semibold text-white mt-0.5">
            Teams Graph API &rarr; Python AST/Thread Parser &rarr; LLM Task Extraction &rarr; Microsoft To Do
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121316] text-slate-400 border border-[#262930]">
          Acsia Technologies
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
        {steps.map((st) => {
          const isSelected = activeStep === st.step;
          return (
            <button
              key={st.step}
              onClick={() => setActiveStep(st.step)}
              className={`p-2.5 rounded border text-left transition-colors flex flex-col justify-between min-h-[90px] ${
                isSelected
                  ? "bg-[#22252c] border-amber text-white"
                  : "bg-[#121316] border-[#262930] text-slate-400 hover:text-slate-200 hover:border-slate-600"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono ${isSelected ? "text-amber font-semibold" : "text-slate-400"}`}>
                  0{st.step}
                </span>
                <span className="text-[8px] font-mono px-1 py-0.5 rounded bg-[#181a1f] text-slate-400 border border-[#262930]">
                  {st.tech.split(" ")[0]}
                </span>
              </div>

              <div className={`text-xs font-semibold leading-tight line-clamp-1 ${isSelected ? "text-white" : "text-slate-300"}`}>
                {st.title}
              </div>

              <span className="text-[9px] font-mono text-slate-400 truncate mt-1">
                {st.type}
              </span>
            </button>
          );
        })}
      </div>

      <div className="p-4 rounded bg-[#121316] border border-[#262930] space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-[#262930]">
          <div className="text-xs font-semibold text-white">
            Stage 0{current.step}: {current.title}
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            Mechanism: {current.tech}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          {current.summary}
        </p>

        <div className="p-2.5 rounded bg-[#181a1f] border border-[#262930] text-[11px] font-mono text-slate-400">
          <strong className="text-slate-300">Implementation Assertion:</strong> {current.technicalDetail}
        </div>
      </div>
    </div>
  );
}