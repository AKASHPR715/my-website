"use client";

import { useState, useEffect } from "react";
import { 
  Play, 
  RotateCcw, 
  Bot, 
  Cpu, 
  Search, 
  CheckCircle2, 
  Terminal, 
  ArrowRight, 
  Sparkles,
  Layers,
  FileCheck
} from "lucide-react";

interface WorkflowStep {
  nodeId: string;
  name: string;
  role: string;
  state: "idle" | "active" | "completed";
  thought: string;
  toolCall?: string;
}

// Static presets defined outside component to maintain stable references
const PRESETS = [
  {
    title: "TaxMate: Multi-Agent Tax Advisory & Filing",
    userQuery: "Evaluate Form 16 vs 26AS for AY2026-27 and recommend the optimal tax regime.",
    nodes: [
      {
        id: "intake",
        name: "User Request Ingestion",
        role: "Gateway",
        thought: "Sanitizing user query, verifying authenticated session, validating document tokens.",
        toolCall: "session_verifier(user_id='USR_882', doc_ids=['F16_A', '26AS'])",
      },
      {
        id: "orchestrator",
        name: "LangGraph Orchestrator",
        role: "State Router",
        thought: "Decomposing task: Route to Extraction -> Deterministic Math Engine -> RAG Advisor.",
        toolCall: "state_graph.route(state='EXTRACTION_AND_MATH')",
      },
      {
        id: "research",
        name: "Extraction & Retrieval Agent",
        role: "Document Parser",
        thought: "Parsed Form 16 salary (INR 14,50,000) and verified INR 1,82,000 TDS deposited in Form 26AS.",
        toolCall: "pdf_extractor(mode='structured_pydantic')",
      },
      {
        id: "analysis",
        name: "Deterministic Tax Engine",
        role: "Math Engine",
        thought: "Computing Old vs New regime: Old Tax = INR 1,64,320; New Tax (115BAC) = INR 1,40,400. Delta: Savings of INR 23,920 under New Regime.",
        toolCall: "tax_rules.evaluate_slabs(income=1450000, deductions_80c=150000)",
      },
      {
        id: "response",
        name: "Response Synthesizer",
        role: "Artifact Generator",
        thought: "Compiling comprehensive comparative summary and generating official ITR-1 JSON schema.",
        toolCall: "schema_generator.compile_itr1(status='OPTIMAL_NEW_REGIME')",
      },
    ],
    finalOutput: {
      recommendedRegime: "New Tax Regime (Section 115BAC)",
      taxLiability: "₹1,40,400 (inclusive of 4% Health & Education Cess)",
      estimatedTaxSavings: "₹23,920 over Old Regime",
      schemaStatus: "Validated against official ITD e-filing JSON specifications",
    },
  },
  {
    title: "Teams Intelligence: Thread to Task Sync",
    userQuery: "Scan #core-engineering channel history from yesterday and sync all action items to Microsoft To Do.",
    nodes: [
      {
        id: "intake",
        name: "Teams Query Receiver",
        role: "Trigger",
        thought: "Received scheduled daily trigger to parse channel ID: ch-9941 (Engineering Release).",
        toolCall: "ms_graph.get_delta_messages(channel_id='ch-9941', lookback_hours=24)",
      },
      {
        id: "orchestrator",
        name: "Conversation Orchestrator",
        role: "Thread Parser",
        thought: "Cleaned 48 raw Teams messages, filtered chat banter, constructed chronological reply hierarchies.",
        toolCall: "thread_sanitizer.parse_replies(raw_messages=48)",
      },
      {
        id: "research",
        name: "Action Item Extractor",
        role: "Semantic AI",
        thought: "Extracted 3 actionable commitments: [1] Fix Swagger auth headers, [2] Benchmark LlamaGuard, [3] Deploy staging build.",
        toolCall: "nlp.extract_action_items(confidence_threshold=0.88)",
      },
      {
        id: "analysis",
        name: "Priority & Assignee Resolver",
        role: "Entity Matcher",
        thought: "Mapped user tags (@alex, @priya) to Azure AD email accounts and assigned due dates.",
        toolCall: "azure_ad.resolve_users(tags=['@alex', '@priya'])",
      },
      {
        id: "response",
        name: "Microsoft To Do Sync Agent",
        role: "Task Writer",
        thought: "Injected 3 prioritized tasks into Microsoft To Do with deep links back to Teams conversation.",
        toolCall: "ms_graph.create_todo_tasks(count=3, list='Sprint 44')",
      },
    ],
    finalOutput: {
      tasksSynced: 3,
      targetList: "Microsoft To Do &bull; Sprint 44",
      syncStatus: "Success (100% Idempotent)",
      auditLog: "MS Graph API status 201 Created for all action items",
    },
  },
];

export default function AgentWorkflowSimulator() {
  const [activePreset, setActivePreset] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentNodeIndex, setCurrentNodeIndex] = useState<number>(-1);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);

  const currentPreset = PRESETS[activePreset];

  // Automated step progression when running
  useEffect(() => {
    if (!isRunning || currentNodeIndex < 0) return;

    if (currentNodeIndex >= currentPreset.nodes.length) {
      setIsRunning(false);
      setExecutionLogs((prev) => [
        ...prev,
        `[COMPLETED] Workflow executed successfully. Output artifact synthesized.`,
      ]);
      return;
    }

    const step = currentPreset.nodes[currentNodeIndex];
    setExecutionLogs((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] [${step.role}] ${step.thought}`,
      `[TOOL_CALL] > ${step.toolCall}`,
    ]);

    const timer = setTimeout(() => {
      setCurrentNodeIndex((prev) => prev + 1);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isRunning, currentNodeIndex, activePreset]);

  const handleStart = () => {
    setExecutionLogs([
      `[SIMULATION INITIALIZED] Starting multi-agent state graph...`,
      `[USER_QUERY] "${currentPreset.userQuery}"`,
    ]);
    setCurrentNodeIndex(0);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentNodeIndex(-1);
    setExecutionLogs([]);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Preset Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#0b101c] border border-white/[0.08]">
        <div>
          <span className="text-[10px] font-mono uppercase text-slate-400 block">
            SELECT WORKFLOW SCENARIO
          </span>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {PRESETS.map((p, idx) => (
              <button
                key={p.title}
                onClick={() => {
                  handleReset();
                  setActivePreset(idx);
                }}
                className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                  activePreset === idx
                    ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/40 font-bold"
                    : "bg-white/[0.03] text-slate-400 border-white/[0.06] hover:text-white"
                }`}
              >
                {p.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleStart}
            disabled={isRunning}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-bold text-xs font-mono transition-all shadow-md active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isRunning ? "Running Agent..." : "Run Agent Simulation"}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/[0.08]"
            title="Reset Workflow"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interconnected Multi-Agent Nodes */}
      <div className="relative p-6 rounded-2xl bg-[#090d18] border border-white/[0.08]">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-6 pb-2 border-b border-white/[0.06]">
          <span className="flex items-center gap-1.5 text-white">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            ACTIVE MULTI-AGENT STATE GRAPH
          </span>
          <span className="text-[10px] text-amber-400/90 font-mono">
            DISCLOSURE: CLIENT-SIDE SIMULATION
          </span>
        </div>

        {/* Horizontal Node Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {currentPreset.nodes.map((node, index) => {
            const isCompleted = currentNodeIndex > index || (!isRunning && currentNodeIndex >= currentPreset.nodes.length);
            const isActive = currentNodeIndex === index && isRunning;
            const isPending = currentNodeIndex < index;

            return (
              <div
                key={node.id}
                className={`relative p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                  isActive
                    ? "bg-sky-950/50 border-sky-400 shadow-xl shadow-sky-500/20 scale-105 z-10"
                    : isCompleted
                    ? "bg-emerald-950/20 border-emerald-500/40 text-emerald-300"
                    : "bg-[#0d1424] border-white/[0.06] text-slate-500"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold">
                      NODE 0{index + 1}
                    </span>
                    <span
                      className={`text-[8px] font-mono px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-sky-500 text-slate-950 font-bold animate-pulse"
                          : isCompleted
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-white/[0.05] text-slate-500"
                      }`}
                    >
                      {isActive ? "PROCESSING" : isCompleted ? "COMPLETED" : "IDLE"}
                    </span>
                  </div>

                  <h4
                    className={`text-xs font-bold ${
                      isActive
                        ? "text-sky-300"
                        : isCompleted
                        ? "text-white"
                        : "text-slate-400"
                    }`}
                  >
                    {node.name}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                    {node.role}
                  </span>
                </div>

                {/* Sub status */}
                <div className="mt-3 pt-2 border-t border-white/[0.05] text-[9px] font-mono truncate">
                  {isActive ? (
                    <span className="text-sky-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 animate-spin" /> Calling Tool...
                    </span>
                  ) : isCompleted ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> State Updated
                    </span>
                  ) : (
                    <span>Awaiting Transition</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Terminal Telemetry Log Output */}
      <div className="rounded-2xl bg-black/80 border border-white/[0.1] p-4 sm:p-5 font-mono text-xs space-y-2 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] text-[11px] text-slate-400">
          <div className="flex items-center space-x-2">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-slate-200">AGENT STATE MACHINE EXECUTION LOGS</span>
          </div>
          <span className="text-[10px] text-slate-400">
            {executionLogs.length} events logged
          </span>
        </div>

        <div className="h-44 overflow-y-auto space-y-1.5 text-[11px] text-slate-300 scrollbar-thin pt-1">
          {executionLogs.length === 0 ? (
            <div className="text-slate-400 italic py-8 text-center">
              Click &ldquo;Run Agent Simulation&rdquo; to observe real-time LangGraph multi-agent state transitions...
            </div>
          ) : (
            executionLogs.map((log, i) => (
              <div
                key={i}
                className={
                  log.startsWith("[TOOL_CALL]")
                    ? "text-amber-400 pl-4 border-l border-amber-500/40"
                    : log.startsWith("[COMPLETED]")
                    ? "text-emerald-400 font-bold"
                    : "text-slate-300"
                }
              >
                {log}
              </div>
            ))
          )}
        </div>

        {/* Synthesized Output Banner when completed */}
        {!isRunning && currentNodeIndex >= currentPreset.nodes.length && executionLogs.length > 3 && (
          <div className="mt-3 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/40 animate-in fade-in duration-300 space-y-1">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> SYNTHESIZED STATE ARTIFACT
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1 text-slate-200">
              {Object.entries(currentPreset.finalOutput).map(([k, v]) => (
                <div key={k} className="p-2 rounded bg-black/40 border border-white/[0.06]">
                  <span className="text-[9px] text-slate-400 uppercase block font-mono">
                    {k.replace(/([A-Z])/g, " $1")}
                  </span>
                  <span className="font-bold text-white mt-0.5 block">{String(v)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
