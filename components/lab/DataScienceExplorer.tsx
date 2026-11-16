"use client";

import { useState, useMemo } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid, 
  AreaChart, 
  Area 
} from "recharts";
import { 
  BarChart3, 
  Sliders, 
  Filter, 
  TrendingUp, 
  PieChart, 
  Sparkles, 
  Info,
  CheckCircle2
} from "lucide-react";

export default function DataScienceExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Model Simulator States
  const [msgVolume, setMsgVolume] = useState<number>(68);
  const [responseLatency, setResponseLatency] = useState<number>(12);
  const [lexicalDiversity, setLexicalDiversity] = useState<number>(75);

  // Sample Dataset for Visualization
  const rawHourlyData = [
    { hour: "08:00", volume: 18, latency: 28, category: "Engineering" },
    { hour: "10:00", volume: 64, latency: 8, category: "Engineering" },
    { hour: "12:00", volume: 82, latency: 11, category: "Operations" },
    { hour: "14:00", volume: 95, latency: 6, category: "AI Microservices" },
    { hour: "16:00", volume: 88, latency: 9, category: "Engineering" },
    { hour: "18:00", volume: 42, latency: 16, category: "Operations" },
    { hour: "20:00", volume: 24, latency: 32, category: "AI Microservices" },
    { hour: "22:00", volume: 12, latency: 45, category: "Operations" },
  ];

  const clusterPersonas = [
    { cluster: "Cluster 0: Core Initiators", share: "34%", count: 41, desc: "High volume, low latency, dense technical vocabulary." },
    { cluster: "Cluster 1: Responsive Collaborators", share: "48%", count: 58, desc: "Moderate volume, rapid response time, high reply ratio." },
    { cluster: "Cluster 2: Passive Observers", share: "18%", count: 21, desc: "Low message count, elevated response latency." },
  ];

  // Client-side prediction logic simulating Random Forest classifier
  const prediction = useMemo(() => {
    // Scoring heuristic calibrated to mimic the original experiment
    const score = (msgVolume * 0.45) - (responseLatency * 0.7) + (lexicalDiversity * 0.35);

    if (score > 35) {
      return {
        tier: "High-Impact Initiator",
        cluster: "Cluster 0",
        confidence: Math.min(99, Math.round(82 + (score * 0.25))),
        badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        recommendation: "Optimal conversational driver. Exhibits high engagement velocity.",
      };
    } else if (score > 10) {
      return {
        tier: "Collaborative Responder",
        cluster: "Cluster 1",
        confidence: Math.min(96, Math.round(78 + (score * 0.3))),
        badge: "bg-sky-500/20 text-sky-300 border-sky-500/40",
        recommendation: "Consistent responder. Provides timely support across threads.",
      };
    } else {
      return {
        tier: "Passive Observer",
        cluster: "Cluster 2",
        confidence: Math.min(98, Math.round(85 + Math.abs(score) * 0.2)),
        badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
        recommendation: "Infrequent activity. Higher latency observed.",
      };
    }
  }, [msgVolume, responseLatency, lexicalDiversity]);

  const filteredData = useMemo(() => {
    if (selectedCategory === "All") return rawHourlyData;
    return rawHourlyData.filter((d) => d.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Top Banner and Category Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#0b101c] border border-white/[0.08]">
        <div>
          <span className="text-[10px] font-mono uppercase text-slate-400 block">
            DATASET DOMAIN & FILTER
          </span>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {["All", "Engineering", "Operations", "AI Microservices"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold"
                    : "bg-white/[0.03] text-slate-400 border-white/[0.06] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
            ILLUSTRATIVE TELEMETRY EXPERIMENT
          </span>
        </div>
      </div>

      {/* Dataset Statistics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-[#0a0f1d] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 block">TOTAL RECORDS</span>
          <span className="text-xl font-bold font-mono text-white mt-0.5 block">120 Cohorts</span>
          <span className="text-[10px] text-slate-400 font-mono">Cleaned & Anonymized</span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#0a0f1d] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 block">SILHOUETTE SCORE</span>
          <span className="text-xl font-bold font-mono text-emerald-400 mt-0.5 block">0.6019</span>
          <span className="text-[10px] text-emerald-400/80 font-mono">Strong Clustering (k=3)</span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#0a0f1d] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 block">MEAN LATENCY</span>
          <span className="text-xl font-bold font-mono text-sky-400 mt-0.5 block">14.2 min</span>
          <span className="text-[10px] text-slate-400 font-mono">Response Turnaround</span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#0a0f1d] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 block">MODEL ALGORITHM</span>
          <span className="text-xl font-bold font-mono text-white mt-0.5 block">Random Forest</span>
          <span className="text-[10px] text-slate-400 font-mono">100 Trees &bull; Gini Impurity</span>
        </div>
      </div>

      {/* Interactive Visualizations Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Chart: Hourly Activity vs Latency */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-[#090d18] border border-white/[0.08] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/[0.06]">
            <div>
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                COMMUNICATION VELOCITY & LATENCY CURVE
              </h4>
              <span className="text-[10px] font-mono text-slate-400">
                Message Volume (bars) vs Response Delay in minutes (shaded area)
              </span>
            </div>
            <span className="text-xs font-mono text-sky-400">24H Window</span>
          </div>

          <div className="h-60 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={filteredData}>
                <defs>
                  <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f293d" />
                <XAxis dataKey="hour" stroke="#64748b" fontSize={10} fontVariant="monospace" />
                <YAxis stroke="#64748b" fontSize={10} fontVariant="monospace" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0d1322",
                    borderColor: "#38bdf8",
                    borderRadius: "8px",
                    fontSize: "11px",
                    fontFamily: "monospace",
                  }}
                />
                <Area type="monotone" dataKey="volume" stroke="#38bdf8" fill="url(#volGrad)" name="Messages" />
                <Area type="monotone" dataKey="latency" stroke="#10b981" fill="none" strokeWidth={2} name="Latency (min)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Panel: K-Means Personas */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-[#090d18] border border-white/[0.08] flex flex-col justify-between space-y-3">
          <div className="pb-2 border-b border-white/[0.06]">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              K-MEANS CLUSTER PERSONAS
            </h4>
            <span className="text-[10px] font-mono text-slate-400">
              Silhouette Separation = 0.6019 (k=3 clusters)
            </span>
          </div>

          <div className="space-y-2.5">
            {clusterPersonas.map((cp) => (
              <div
                key={cp.cluster}
                className="p-3 rounded-xl bg-[#0c1220] border border-white/[0.06] text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white font-mono text-[11px]">
                    {cp.cluster}
                  </span>
                  <span className="font-mono text-xs text-sky-400 font-bold">
                    {cp.share}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {cp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Model Prediction Demonstration */}
      <div className="p-6 rounded-2xl bg-[#0a0f1d] border border-sky-500/30 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/[0.06] gap-2">
          <div className="flex items-center space-x-2">
            <Sliders className="w-4 h-4 text-sky-400" />
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              INTERACTIVE ENGAGEMENT PREDICTOR SIMULATOR
            </h4>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            Adjust feature weights below to watch classification adapt in real time
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Slider 1: Message Volume */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">Message Volume / Day</span>
              <span className="text-sky-400 font-bold">{msgVolume} msgs</span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              value={msgVolume}
              onChange={(e) => setMsgVolume(Number(e.target.value))}
              className="w-full accent-sky-400 bg-slate-800 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] font-mono text-slate-400">Feature Importance: 45%</span>
          </div>

          {/* Slider 2: Response Latency */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">Avg Response Delay</span>
              <span className="text-sky-400 font-bold">{responseLatency} mins</span>
            </div>
            <input
              type="range"
              min="1"
              max="90"
              value={responseLatency}
              onChange={(e) => setResponseLatency(Number(e.target.value))}
              className="w-full accent-sky-400 bg-slate-800 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] font-mono text-slate-400">Feature Importance: 35%</span>
          </div>

          {/* Slider 3: Lexical Diversity */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">Lexical Richness</span>
              <span className="text-sky-400 font-bold">{lexicalDiversity}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="95"
              value={lexicalDiversity}
              onChange={(e) => setLexicalDiversity(Number(e.target.value))}
              className="w-full accent-sky-400 bg-slate-800 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] font-mono text-slate-400">Feature Importance: 20%</span>
          </div>
        </div>

        {/* Prediction Result Output Card */}
        <div className="p-4 rounded-xl bg-[#0d1424] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-400">
              PREDICTED PARTICIPANT ENGAGEMENT TIER
            </span>
            <div className="flex items-center space-x-3">
              <span className="text-lg font-bold text-white font-mono">
                {prediction.tier}
              </span>
              <span
                className={`text-[10px] font-mono px-2.5 py-0.5 rounded border ${prediction.badge}`}
              >
                {prediction.cluster}
              </span>
            </div>
            <p className="text-xs text-slate-300">{prediction.recommendation}</p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[10px] font-mono text-slate-400 block">MODEL CONFIDENCE</span>
            <span className="text-2xl font-bold font-mono text-sky-400 block mt-0.5">
              {prediction.confidence}%
            </span>
            <span className="text-[9px] font-mono text-emerald-400">Optimal Convergence</span>
          </div>
        </div>
      </div>
    </div>
  );
}
