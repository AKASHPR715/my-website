"use client";

import { useState, useEffect } from "react";
import { Play, RotateCcw, ArrowUpRight } from "lucide-react";

const PRESETS = [
  {
    title: "TaxMate: Multi-Agent Tax Advisory & Filing",
    userQuery: "Evaluate Form 16 vs 26AS for AY2026-27 and recommend the optimal tax regime.",
    nodes: [
      {
        id: "intake",
        name: "Request Ingestion",
        role: "API Gateway",
        thought: "Sanitizing user query, verifying authenticated session, validating document tokens.",
        toolCall: "session_verifier(user_id='USR_882', doc_ids=['F16_A', '26AS'])",
      },
      {
        id: "orchestrator",
        name: "LangGraph Router",
        role: "State Coordinator",
        thought: "Decomposing task: Route to Extraction -> Deterministic Math Engine -> RAG Advisor.",
        toolCall: "state_graph.route(state='EXTRACTION_AND_MATH')",
      },
      {
        id: "research",
        name: "Extraction Agent",
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
        name: "Artifact Synthesizer",
        role: "Schema Compiler",
        thought: "Compiling comparative summary and generating official ITR-1 JSON schema.",
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
    title: "Teams Intelligence: Channel Thread to Task Sync",
    userQuery: "Scan #core-engineering channel history from yesterday and sync all action items to Microsoft To Do.",
    nodes: [
      {
        id: "intake",
        name: "Teams Query Receiver",
        role: "Scheduled Trigger",
        thought: "Received scheduled daily trigger to parse channel ID: ch-9941 (Engineering Release).",
        toolCall: "ms_graph.get_delta_messages(channel_id='ch-9941', lookback_hours=24)",
      },
      {
        id: "orchestrator",
        name: "Thread Parser",
        role: "Sanitizer",
        thought: "Cleaned 48 raw Teams messages, filtered chat banter, constructed chronological reply hierarchies.",
        toolCall: "thread_sanitizer.parse_replies(raw_messages=48)",
      },
      {
        id: "research",
        name: "Action Item Extractor",
        role: "Semantic Classifier",
        thought: "Extracted 3 actionable commitments: [1] Fix Swagger auth headers, [2] Benchmark LlamaGuard, [3] Deploy staging build.",
        toolCall: "nlp.extract_action_items(confidence_threshold=0.88)",
      },
      {
        id: "analysis",
        name: "Entity Resolver",
        role: "Assignee Matcher",
        thought: "Mapped user tags (@alex, @priya) to Azure AD email accounts and assigned due dates.",
        toolCall: "azure_ad.resolve_users(tags=['@alex', '@priya'])",
      },
      {
        id: "response",
        name: "Microsoft To Do Writer",
        role: "Task Sync Agent",
        thought: "Injected 3 prioritized tasks into Microsoft To Do with deep links back to Teams conversation.",
        toolCall: "ms_graph.create_todo_tasks(count=3, list='Sprint 44')",
      },
    ],
    finalOutput: {
      tasksSynced: 3,
      targetList: "Microsoft To Do · Sprint 44",
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

  useEffect(() => {
    if (!isRunning || currentNodeIndex < 0) return;

    if (currentNodeIndex >= currentPreset.nodes.length) {
      setIsRunning(false);
      setExecutionLogs((prev) => [
        ...prev,
        `[STATE: COMPLETED] Workflow executed successfully. Output artifact generated.`,
      ]);
      return;
    }

    const step = currentPreset.nodes[currentNodeIndex];
    setExecutionLogs((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] [${step.role}] ${step.thought}`,
      `> CALL: ${step.toolCall}`,
    ]);

    const timer = setTimeout(() => {
      setCurrentNodeIndex((prev) => prev + 1);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isRunning, currentNodeIndex, activePreset]);

  const handleStart = () => {
    setExecutionLogs([
      `[INIT] Starting multi-agent state graph...`,
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
      {/* Control Bar: Scenario Select & Truthful Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded bg-[#181a1f] border border-[#262930]">
        <div>
          <div className="text-[11px] font-mono text-slate-400 mb-1.5 uppercase tracking-wide">
            Select Workflow Scenario
          </div>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p, idx) => (
              <button
                key={p.title}
                onClick={() => {
                  handleReset();
                  setActivePreset(idx);
                }}
                className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                  activePreset === idx
                    ? "bg-[#22252c] text-amber border-amber font-medium"
                    : "bg-[#121316] text-slate-300 border-[#262930] hover:text-white hover:border-slate-500"
                }`}
              >
                {p.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={handleStart}
            disabled={isRunning}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded bg-amber hover:bg-amber-dark disabled:opacity-40 text-[#121316] font-semibold text-xs transition-colors"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isRunning ? "Simulating..." : "Run Simulation"}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded bg-[#121316] hover:bg-[#22252c] text-slate-400 hover:text-white border border-[#262930] transition-colors"
            title="Reset simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Honest Scope Disclosure & View Source */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 font-mono">
        <div>
          <span>DISCLOSURE: Simulated State Machine · Client-Side Execution</span>
        </div>
        <a
          href="https://github.com/AKASHPR715/my-website/blob/main/components/lab/AgentWorkflowSimulator.tsx"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber inline-flex items-center space-x-1 transition-colors"
        >
          <span>View Component Source</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* Interconnected Multi-Agent Pipeline Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 border border-[#262930] bg-[#181a1f] p-3 rounded">
        {currentPreset.nodes.map((node, index) => {
          const isCompleted = currentNodeIndex > index || (!isRunning && currentNodeIndex >= currentPreset.nodes.length);
          const isActive = currentNodeIndex === index && isRunning;

          return (
            <div
              key={node.id}
              className={`p-3 rounded border transition-colors flex flex-col justify-between min-h-[110px] ${
                isActive
                  ? "bg-[#22252c] border-amber text-white"
                  : isCompleted
                  ? "bg-[#181a1f] border-signal-greenBorder text-slate-200"
                  : "bg-[#121316] border-[#262930] text-slate-400"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono ${isActive ? "text-amber font-semibold" : "text-slate-400"}`}>
                    NODE 0{index + 1}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-1 rounded ${
                      isActive
                        ? "bg-amber text-[#121316] font-semibold"
                        : isCompleted
                        ? "text-signal-green"
                        : "text-slate-400"
                    }`}
                  >
                    {isActive ? "RUNNING" : isCompleted ? "DONE" : "IDLE"}
                  </span>
                </div>
                <div className={`text-xs font-semibold ${isActive ? "text-white" : isCompleted ? "text-slate-200" : "text-slate-400"}`}>
                  {node.name}
                </div>
              </div>
              <div className="text-[10px] font-mono text-slate-400 pt-2 border-t border-[#262930] truncate">
                {node.role}
              </div>
            </div>
          );
        })}
      </div>

      {/* Terminal Telemetry Log Output */}
      <div className="rounded bg-[#121316] border border-[#262930] p-4 font-mono text-xs space-y-2">
        <div className="flex items-center justify-between pb-2 border-b border-[#262930] text-[11px] text-slate-400">
          <span className="text-slate-300">TELEMETRY & TOOL-CALL EXECUTION LOG</span>
          <span>{executionLogs.length} events</span>
        </div>

        <div className="h-40 overflow-y-auto space-y-1 text-[11px] text-slate-300 pt-1">
          {executionLogs.length === 0 ? (
            <div className="text-slate-400 italic py-6 text-center">
              Click &ldquo;Run Simulation&rdquo; above to execute the LangGraph multi-agent state transitions.
            </div>
          ) : (
            executionLogs.map((log, i) => (
              <div
                key={i}
                className={
                  log.startsWith("> CALL:")
                    ? "text-amber pl-3 border-l border-amber/40"
                    : log.startsWith("[STATE: COMPLETED]")
                    ? "text-signal-green font-semibold"
                    : "text-slate-300"
                }
              >
                {log}
              </div>
            ))
          )}
        </div>

        {/* Synthesized Output Banner when completed */}
        {!isRunning && currentNodeIndex >= currentPreset.nodes.length && executionLogs.length > 2 && (
          <div className="mt-3 p-3 rounded bg-[#181a1f] border border-signal-greenBorder space-y-2">
            <div className="text-[10px] font-mono text-signal-green uppercase font-semibold">
              SYNTHESIZED STATE ARTIFACT
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {Object.entries(currentPreset.finalOutput).map(([k, v]) => (
                <div key={k} className="p-2 rounded bg-[#121316] border border-[#262930]">
                  <span className="text-[9px] text-slate-400 uppercase block font-mono">
                    {k.replace(/([A-Z])/g, " $1")}
                  </span>
                  <span className="font-semibold text-slate-200 mt-0.5 block">{String(v)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}