"use client";

import Link from "next/link";
import { useState } from "react";
import { FileText, ArrowRight } from "lucide-react";
import ResumeModal from "@/components/resume/ResumeModal";

export default function ResumeSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section className="py-14 bg-[#121316] border-b border-[#262930]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="text-xs font-mono text-amber">
            [CURRICULUM VITAE // VERIFICATION]
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Review detailed credentials & resume
          </h2>

          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Examine academic coursework, internship projects, technical skills, and verified certifications in clean, printable format.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-amber hover:bg-amber-dark text-[#121316] font-semibold text-xs transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Inspect Resume (Print / PDF)</span>
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded bg-[#181a1f] hover:bg-[#22252c] text-slate-200 border border-[#262930] hover:border-amber text-xs transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber" />
            </Link>
          </div>
        </div>
      </section>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}