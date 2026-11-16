"use client";

import { useState } from "react";
import { Cpu, Bot, Database, ShieldCheck, Activity, Sparkles, Terminal } from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  icon: any;
  color: string;
  pulseColor: string;
  description: string;
  status: string;
  tech: string[];
}

export default function TechNexusVisual() {
  const [activeNodeId, setActiveNodeId] = useState<string>("agents");

  const nodes: NodeItem[] = [
    {
      id: "automation",
      name: "Automation Engine",
      category: "Deterministic Core",
      x: 100,
      y: 110,
      icon: Cpu,
      color: "#38bdf8",
      pulseColor: "rgba(56, 189, 248, 0.4)",
      description: "Rule-based pipelines, Microsoft Graph API integration & enterprise test generation.",
      status: "OPERATIONAL",
      tech: ["Python", "FastAPI", "MS Graph API", "AST"],
    },
    {
      id: "agents",
      name: "AI Agents & RAG",
      category: "Probabilistic Reasoning",
      x: 320,
      y: 80,
      icon: Bot,
      color: "#818cf8",
      pulseColor: "rgba(129, 140, 248, 0.4)",
      description: "Multi-agent LangGraph orchestrations, neuro-symbolic boundaries & semantic vector retrieval.",
      status: "ACTIVE STATE MACHINE",
      tech: ["LangGraph", "RAG", "FAISS", "TaxMate"],
    },
    {
      id: "data",
      name: "Data Science & ML",
      category: "Statistical Synthesis",
      x: 330,
      y: 280,
      icon: Database,
      color: "#10b981",
      pulseColor: "rgba(16, 185, 129, 0.4)",
      description: "EDA, behavioral clustering, Random Forest classification & predictive sports telemetry.",
      status: "CONVERGED",
      tech: ["Scikit-Learn", "Pandas", "K-Means", "EDA"],
    },
    {
      id: "safety",
      name: "Safety & Vision",
      category: "Guardrails & Perception",
      x: 110,
      y: 290,
      icon: ShieldCheck,
      color: "#f59e0b",
      pulseColor: "rgba(245, 158, 11, 0.4)",
      description: "LlamaGuard moderation, Guardrails AI, TrackNet shuttlecock tracking & pose estimation.",
      status: "ENFORCING",
      tech: ["LlamaGuard", "Guardrails AI", "TrackNet", "OpenCV"],
    },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[1];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Outer border & glass container */}
      <div className="relative rounded-2xl bg-[#0b101c]/90 border border-white/10 p-5 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Top header telemetry */}
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/[0.06] text-[11px] font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            <span className="text-slate-300 font-semibold uppercase">SYSTEM ARCHITECTURE NEXUS</span>
          </div>
          <span className="text-sky-400/80">INTERACTIVE GRAPH</span>
        </div>

        {/* SVG Node Graph Canvas */}
        <div className="relative h-72 sm:h-80 w-full flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 440 380">
            <defs>
              <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="lineGrad3" x1="100%" y1="100%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="lineGrad4" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Circuit Interconnects */}
            <path
              d="M 100 110 L 320 80"
              stroke="url(#lineGrad1)"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            <path
              d="M 320 80 L 330 280"
              stroke="url(#lineGrad2)"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            <path
              d="M 330 280 L 110 290"
              stroke="url(#lineGrad3)"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            <path
              d="M 110 290 L 100 110"
              stroke="url(#lineGrad4)"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
            />

            {/* Diagonals to Center */}
            <line x1="100" y1="110" x2="215" y2="195" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            <line x1="320" y1="80" x2="215" y2="195" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            <line x1="330" y1="280" x2="215" y2="195" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            <line x1="110" y1="290" x2="215" y2="195" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

            {/* Center Core Node */}
            <circle cx="215" cy="195" r="32" fill="#0e1726" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="215" cy="195" r="42" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Center Core Label */}
            <text x="215" y="191" textAnchor="middle" fill="#f8fafc" fontSize="10" fontFamily="monospace" fontWeight="bold">
              INTELLIGENT
            </text>
            <text x="215" y="204" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">
              SYSTEMS
            </text>

            {/* Orbiting Nodes */}
            {nodes.map((node) => {
              const isSelected = activeNodeId === node.id;
              return (
                <g
                  key={node.id}
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveNodeId(node.id)}
                  onMouseEnter={() => setActiveNodeId(node.id)}
                >
                  {/* Outer pulse when selected */}
                  {isSelected && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="34"
                      fill="none"
                      stroke={node.color}
                      strokeWidth="1.5"
                      className="animate-ping"
                      opacity="0.3"
                    />
                  )}

                  {/* Main Node Circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isSelected ? "28" : "24"}
                    fill="#111827"
                    stroke={isSelected ? node.color : "rgba(255,255,255,0.2)"}
                    strokeWidth={isSelected ? "2.5" : "1.5"}
                    filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))"
                  />

                  {/* Category Label */}
                  <text
                    x={node.x}
                    y={node.y > 195 ? node.y + 36 : node.y - 32}
                    textAnchor="middle"
                    fill={isSelected ? "#f1f5f9" : "#94a3b8"}
                    fontSize="9.5"
                    fontFamily="monospace"
                    fontWeight={isSelected ? "bold" : "normal"}
                  >
                    {node.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* HTML icons centered inside nodes */}
          {nodes.map((node) => {
            const Icon = node.icon;
            const isSelected = activeNodeId === node.id;
            // Map SVG coords to percent approx
            const leftPct = (node.x / 440) * 100;
            const topPct = (node.y / 380) * 100;

            return (
              <div
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none cursor-pointer flex items-center justify-center transition-transform"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                }}
              >
                <Icon
                  className={`transition-all duration-300 ${
                    isSelected ? "w-6 h-6 scale-110" : "w-5 h-5 opacity-70"
                  }`}
                  style={{ color: node.color }}
                />
              </div>
            );
          })}
        </div>

        {/* Selected Node Inspector Panel */}
        <div className="mt-2 p-3.5 rounded-xl bg-[#090d18] border border-white/[0.08] transition-all">
          <div className="flex items-center justify-between text-xs font-mono mb-1">
            <span className="font-bold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeNode.color }}></span>
              {activeNode.name}
            </span>
            <span
              className="text-[10px] px-2 py-0.5 rounded font-mono border"
              style={{
                color: activeNode.color,
                borderColor: `${activeNode.color}40`,
                backgroundColor: `${activeNode.color}15`,
              }}
            >
              {activeNode.status}
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-2.5">
            {activeNode.description}
          </p>

          <div className="flex flex-wrap gap-1">
            {activeNode.tech.map((t) => (
              <span
                key={t}
                className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Subtle footer hint */}
        <div className="text-center mt-2.5 text-[10px] font-mono text-slate-400">
          Click or hover nodes to inspect interconnected engineering domains
        </div>
      </div>
    </div>
  );
}
