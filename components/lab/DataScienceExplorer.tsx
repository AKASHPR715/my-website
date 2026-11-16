"use client";

import { useState, useMemo } from "react";
import { 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid, 
  AreaChart, 
  Area 
} from "recharts";
import { ArrowUpRight } from "lucide-react";

export default function DataScienceExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Model Simulator States
  const [msgVolume, setMsgVolume] = useState<number>(68);
  const [responseLatency, setResponseLatency] = useState<number>(12);
  const [lexicalDiversity, setLexicalDiversity] = useState<number>(75);

  const rawHourlyData = [
    { hour: "08:00", volume: 18, latency: 28, category: "Engineering" },
    { hour: "10:00", volume: 64, latency: 8, category: "Engineering" },
    { hour: "12:00", volume: 82, latency: 11, category: "Operations" },
    { hour: "14:00", volume: 95, latency: 6, category: "Microservices" },
    { hour: "16:00", volume: 88, latency: 9, category: "Engineering" },
    { hour: "18:00", volume: 42, latency: 16, category: "Operations" },
    { hour: "20:00", volume: 24, latency: 32, category: "Microservices" },
    { hour: "22:00", volume: 12, latency: 45, category: "Operations" },
  ];

  const clusterPersonas = [
    { cluster: "Cluster 0: Core Initiators", share: "34%", count: 41, desc: "High message volume, fast response, dense technical vocabulary." },
    { cluster: "Cluster 1: Responsive Collaborators", share: "48%", count: 58, desc: "Moderate volume, rapid response time, high reply ratio." },
    { cluster: "Cluster 2: Passive Observers", share: "18%", count: 21, desc: "Low message count, elevated response latency." },
  ];

  // Dynamic client-side prediction heuristic simulating classifier
  const prediction = useMemo(() => {
    const score = (msgVolume * 0.45) - (responseLatency * 0.7) + (lexicalDiversity * 0.35);

    if (score > 35) {
      return {
        tier: "High-Impact Initiator",
        cluster: "Cluster 0",
        confidence: Math.min(99, Math.round(82 + (score * 0.25))),
        badge: "text-signal-green bg-signal-greenSubtle border-signal-greenBorder",
        recommendation: "High conversational velocity. Key driver of active workthreads.",
      };
    } else if (score > 10) {
      return {
        tier: "Collaborative Responder",
        cluster: "Cluster 1",
        confidence: Math.min(96, Math.round(78 + (score * 0.3))),
        badge: "text-amber bg-amber-subtle border-amber-border",
        recommendation: "Consistent responder. Provides timely support across threads.",
      };
    } else {
      return {
        tier: "Passive Observer",
        cluster: "Cluster 2",
        confidence: Math.min(98, Math.round(85 + Math.abs(score) * 0.2)),
        badge: "text-slate-400 bg-[#121316] border-[#262930]",
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
      {/* Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded bg-[#181a1f] border border-[#262930]">
        <div>
          <div className="text-[11px] font-mono text-slate-400 mb-1.5 uppercase tracking-wide">
            Filter Telemetry Segment
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Engineering", "Operations", "Microservices"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#22252c] text-amber border-amber font-medium"
                    : "bg-[#121316] text-slate-300 border-[#262930] hover:text-white hover:border-slate-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:items-end gap-1 shrink-0">
          <div className="text-[11px] font-mono text-slate-300 px-2.5 py-1 rounded bg-[#121316] border border-[#262930]">
            Interactive Client-Side Calculation · Anonymized Sample Data
          </div>
          <a
            href="https://github.com/AKASHPR715/my-website/blob/main/components/lab/DataScienceExplorer.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-slate-400 hover:text-amber inline-flex items-center space-x-1 transition-colors"
          >
            <span>View Component Source</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Dataset Statistics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border border-[#262930] bg-[#181a1f] p-3 rounded">
        <div className="p-3 rounded bg-[#121316] border border-[#262930]">
          <div className="text-[10px] font-mono text-slate-400">DATASET SIZE</div>
          <div className="text-lg font-semibold font-mono text-white mt-0.5">120 Cohorts</div>
          <div className="text-[10px] text-slate-400">Exported & Anonymized</div>
        </div>
        <div className="p-3 rounded bg-[#121316] border border-[#262930]">
          <div className="text-[10px] font-mono text-slate-400">SILHOUETTE SCORE</div>
          <div className="text-lg font-semibold font-mono text-amber mt-0.5">0.6019</div>
          <div className="text-[10px] text-slate-400">K-Means Separation (k=3)</div>
        </div>
        <div className="p-3 rounded bg-[#121316] border border-[#262930]">
          <div className="text-[10px] font-mono text-slate-400">MEAN LATENCY</div>
          <div className="text-lg font-semibold font-mono text-slate-200 mt-0.5">14.2 min</div>
          <div className="text-[10px] text-slate-400">Turnaround Time</div>
        </div>
        <div className="p-3 rounded bg-[#121316] border border-[#262930]">
          <div className="text-[10px] font-mono text-slate-400">CLASSIFIER</div>
          <div className="text-lg font-semibold font-mono text-white mt-0.5">Random Forest</div>
          <div className="text-[10px] text-slate-400">100 Estimators</div>
        </div>
      </div>

      {/* Visualizations & Personas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Chart */}
        <div className="lg:col-span-7 p-4 rounded bg-[#181a1f] border border-[#262930] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#262930]">
            <div>
              <div className="text-xs font-semibold text-white">
                Message Volume vs Response Delay Curve
              </div>
              <div className="text-[11px] text-slate-400">
                Messages (amber fill) vs Latency in minutes (white line)
              </div>
            </div>
            <span className="text-[11px] font-mono text-slate-400">24h Window</span>
          </div>

          <div className="h-56 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={filteredData}>
                <defs>
                  <linearGradient id="amberGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="2 2" stroke="#262930" />
                <XAxis dataKey="hour" stroke="#6b7280" fontSize={10} fontFamily="monospace" />
                <YAxis stroke="#6b7280" fontSize={10} fontFamily="monospace" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#181a1f",
                    borderColor: "#373c47",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontFamily: "monospace",
                  }}
                />
                <Area type="monotone" dataKey="volume" stroke="#f59e0b" fill="url(#amberGrad)" name="Messages" strokeWidth={1.5} />
                <Area type="monotone" dataKey="latency" stroke="#f3f4f6" fill="none" strokeWidth={1.5} name="Latency (min)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Persona Cards */}
        <div className="lg:col-span-5 p-4 rounded bg-[#181a1f] border border-[#262930] space-y-2.5">
          <div className="pb-2 border-b border-[#262930]">
            <div className="text-xs font-semibold text-white">
              Cluster Personas (K-Means)
            </div>
            <div className="text-[11px] text-slate-400">
              Evaluated on feature space (Silhouette = 0.6019)
            </div>
          </div>

          <div className="space-y-2">
            {clusterPersonas.map((cp) => (
              <div
                key={cp.cluster}
                className="p-3 rounded bg-[#121316] border border-[#262930] text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">
                    {cp.cluster.split(":")[0]}
                  </span>
                  <span className="font-mono text-amber text-xs font-semibold">
                    {cp.share}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {cp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Sliders Demonstration */}
      <div className="p-5 rounded bg-[#181a1f] border border-[#262930] space-y-5">
        <div className="pb-2 border-b border-[#262930]">
          <div className="text-xs font-semibold text-white">
            Real-Time Feature Weight Predictor
          </div>
          <div className="text-[11px] text-slate-400">
            Adjust the input parameters below to see the simulated classifier recalculate tier and confidence in real time.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300">Message Volume / Day</span>
              <span className="font-mono text-amber font-semibold">{msgVolume} msgs</span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              value={msgVolume}
              onChange={(e) => setMsgVolume(Number(e.target.value))}
              className="w-full accent-amber bg-[#121316] rounded cursor-pointer"
            />
            <div className="text-[10px] font-mono text-slate-400">Feature Weight: 45%</div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300">Avg Response Delay</span>
              <span className="font-mono text-amber font-semibold">{responseLatency} min</span>
            </div>
            <input
              type="range"
              min="1"
              max="90"
              value={responseLatency}
              onChange={(e) => setResponseLatency(Number(e.target.value))}
              className="w-full accent-amber bg-[#121316] rounded cursor-pointer"
            />
            <div className="text-[10px] font-mono text-slate-400">Feature Weight: 35%</div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300">Lexical Richness</span>
              <span className="font-mono text-amber font-semibold">{lexicalDiversity}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="95"
              value={lexicalDiversity}
              onChange={(e) => setLexicalDiversity(Number(e.target.value))}
              className="w-full accent-amber bg-[#121316] rounded cursor-pointer"
            />
            <div className="text-[10px] font-mono text-slate-400">Feature Weight: 20%</div>
          </div>
        </div>

        {/* Prediction Result Output Card */}
        <div className="p-4 rounded bg-[#121316] border border-[#262930] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono text-slate-400 uppercase">
              Predicted Participant Engagement Tier
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="text-base font-semibold text-white">
                {prediction.tier}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${prediction.badge}`}>
                {prediction.cluster}
              </span>
            </div>
            <p className="text-xs text-slate-300">{prediction.recommendation}</p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[10px] font-mono text-slate-400 block">ESTIMATED CONFIDENCE</span>
            <span className="text-2xl font-mono font-semibold text-amber block mt-0.5">
              {prediction.confidence}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}