"use client";

import { useState } from "react";
import { 
  MessageSquare, 
  KeyRound, 
  Cpu, 
  FileText, 
  CheckSquare, 
  ArrowRight,
  ShieldAlert,
  CalendarCheck
} from "lucide-react";

export default function TeamsAgentArchitecture() {
  const [activeStep, setActiveStep] = useState<number>(3);

  const steps = [
    {
      step: 1,
      title: "Teams Conversation Ingestion",
      icon: MessageSquare,
      tech: "Microsoft Graph API",
      type: "Enterprise Ingestion",
      summary: "Authenticated delta query fetches past 24-hour chats and multi-threaded replies across authorized engineering channels.",
      technicalDetail: "Uses least-privilege OAuth 2.0 app scopes (`ChannelMessage.Read.All`) and stores delta-link tokens to prevent redundant polling.",
    },
    {
      step: 2,
      title: "Context Preprocessing & Cleaning",
      icon: Cpu,
      tech: "Python Thread Parser",
      type: "Deterministic Sanitization",
      summary: "Normalizes message trees, removes bot notifications, system alerts, and parses timestamps into chronological threads.",
      technicalDetail: "Preserves sender roles, message reply hierarchies, and cleans raw HTML formatting into lightweight markdown representations.",
    },
    {
      step: 3,
      title: "Semantic LLM Summarization",
      icon: FileText,
      tech: "LLMs / Prompt Engineering",
      type: "Probabilistic Synthesis",
      summary: "Compresses multi-participant discourse into crisp executive summaries categorized by project domain and decision points.",
      technicalDetail: "Employs chunked Map-Reduce summarization to safely digest lengthy daily threads without exceeding model context windows.",
    },
    {
      step: 4,
      title: "Action Item & Task Extraction",
      icon: CheckSquare,
      tech: "Structured JSON Parsing",
      type: "Task Classification",
      summary: "Detects explicit task assignments ('@alex please deploy PR #14'), implicit deadlines, and assigns urgency levels.",
      technicalDetail: "Enforces strict Pydantic schemas validating task name, assignee email, priority (Low/Med/High), and ISO-8601 due date.",
    },
    {
      step: 5,
      title: "Microsoft To Do Synchronization",
      icon: CalendarCheck,
      tech: "Graph API / To Do Endpoints",
      type: "Integration",
      summary: "Injects actionable tasks with deep links back to the original Teams conversation directly into personal/shared To Do lists.",
      technicalDetail: "Handles Graph API rate limits with exponential backoff and prevents duplicate task creation via deterministic idempotent hashing.",
    },
  ];

  const current = steps.find((s) => s.step === activeStep) || steps[2];

  return (
    <div className="p-6 rounded-2xl bg-[#0a0f1d] border border-white/10 shadow-2xl my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/[0.08] gap-2">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Autonomous Agent Execution Flow
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 font-mono">
            Microsoft Teams &rarr; Graph API &rarr; LLM Summarization &rarr; Task Extraction &rarr; Microsoft To Do
          </p>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
          Acsia Enterprise R&amp;D
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
        {steps.map((st) => {
          const Icon = st.icon;
          const isSelected = activeStep === st.step;

          return (
            <button
              key={st.step}
              onClick={() => setActiveStep(st.step)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? "bg-indigo-950/40 border-indigo-400 shadow-lg shadow-indigo-500/20 -translate-y-1"
                  : "bg-[#0f172a] border-white/[0.06] hover:border-white/20 hover:bg-[#131d33]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-slate-400 font-bold">
                  Stage 0{st.step}
                </span>
                <span className="text-[8px] font-mono px-1 py-0.5 rounded bg-white/[0.05] text-slate-400">
                  {st.tech.split(" ")[0]}
                </span>
              </div>

              <div className="flex items-center space-x-2 my-1">
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? "text-indigo-400" : "text-slate-400"
                  }`}
                />
                <span className="text-xs font-bold text-white line-clamp-1">
                  {st.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="p-4 sm:p-5 rounded-xl bg-[#0e1628] border border-indigo-500/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-white/[0.06]">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-indigo-500/20 text-indigo-400 font-mono text-xs flex items-center justify-center font-bold">
              0{current.step}
            </span>
            {current.title}
          </h4>
          <span className="text-xs font-mono text-indigo-400">
            Mechanism: {current.tech}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
          {current.summary}
        </p>

        <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05] text-xs font-mono text-slate-400">
          <strong className="text-indigo-300">Implementation Note:</strong> {current.technicalDetail}
        </div>
      </div>
    </div>
  );
}
