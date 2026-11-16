"use client";

import Link from "next/link";
import { useState } from "react";
import { Download, FileText, ArrowRight, Sparkles } from "lucide-react";
import ResumeModal from "@/components/resume/ResumeModal";

export default function ResumeSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section className="py-16 relative bg-[#070b13] border-t border-white/[0.06] overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-sky-500/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPEN TO OPPORTUNITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
            Interested in working together?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore my professional experience, technical background and selected projects in my resume. I'm actively interested in automation engineering, AI engineering, and data science roles.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-sky-500/25 active:scale-95 group"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>

            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl bg-[#0e1626] hover:bg-[#1a2744] text-sky-400 border border-sky-500/30 font-mono text-sm transition-all group"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume Online</span>
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/[0.1] font-mono text-sm transition-all group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
