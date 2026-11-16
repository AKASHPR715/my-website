"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profileData } from "@/data/profile";

export default function QuickIntro() {
  return (
    <section className="py-16 bg-[#121316] border-b border-[#262930]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Statement */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono text-amber">
              [APPROACH // ARCHITECTURE PRINCIPLES]
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              Deterministic engines for calculations. Probabilistic models for parsing and language. Clean interfaces between them.
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              {profileData.quickIntro.text}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <Link
                href="/about"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#181a1f] hover:bg-[#22252c] text-slate-200 border border-[#262930] hover:border-amber transition-colors"
              >
                <span>Read Background</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber" />
              </Link>
              <Link
                href="/lab"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#181a1f] hover:bg-[#22252c] text-amber border border-[#262930] hover:border-amber transition-colors"
              >
                <span>Interactive Demos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Three Architectural Pillars */}
          <div className="lg:col-span-6 space-y-2.5">
            {profileData.quickIntro.corePillars.map((p, idx) => (
              <div
                key={p.title}
                className="p-3.5 rounded bg-[#181a1f] border border-[#262930] space-y-1"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-white">
                    0{idx + 1} // {p.title}
                  </h3>
                  <span className="text-[10px] font-mono text-amber">SYSTEM PILLAR</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}