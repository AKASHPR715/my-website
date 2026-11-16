"use client";

import Link from "next/link";
import { Bot, Cpu, BarChart3, ArrowRight, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";

export default function QuickIntro() {
  return (
    <section className="py-16 relative bg-[#070b13] border-t border-white/[0.05] overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Quote / Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-sky-400/70 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>THE ENGINEERING PHILOSOPHY</span>
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-white leading-snug tracking-tight">
              &ldquo;{profileData.quickIntro.text}&rdquo;
            </blockquote>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-sky-400 border border-white/[0.08] font-mono text-xs transition-all group"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/lab"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 font-mono text-xs transition-all group"
              >
                <span>Engineering Lab Demos</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Three Core Pillars */}
          <div className="lg:col-span-5 space-y-3">
            {[
              { icon: Cpu, title: "Intelligent Automation", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20", desc: "Deterministic pipelines, enterprise APIs, and AST-based code generation that eliminate manual overhead." },
              { icon: Bot, title: "Generative & Agentic AI", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20", desc: "LangGraph multi-agent orchestration, RAG pipelines, LlamaGuard safety enforcement, and prompt engineering." },
              { icon: BarChart3, title: "Data Science & Vision", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", desc: "Statistical clustering, predictive classification, and deep learning visual tracking for real-world telemetry." },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-4 rounded-xl bg-[#0b1020] border border-white/[0.07] hover:border-white/15 transition-all flex items-start gap-3.5"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${p.bg} border`}>
                    <Icon className={`w-4 h-4 ${p.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white mb-1">{p.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
