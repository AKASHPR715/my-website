"use client";

import { Award, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { certificationsData } from "@/data/certifications";

export default function CertificationsList() {
  return (
    <section className="py-16 relative bg-[#090d18] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>FORMAL CREDENTIALS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Certifications & Continuing Education
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-mono mt-1">
              Verified certifications across Generative AI, AI ethics, prompt engineering, and core software engineering.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            <span className="text-emerald-400 font-semibold">Honest Verification:</span> Documented records on file without fabricated credential IDs.
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-2xl bg-[#0c1220] border border-white/[0.08] hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
                    {cert.issuerLogoText}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                    {cert.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-400 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skillsAcquired.map((s) => (
                    <span
                      key={s}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-slate-300 border border-white/[0.04]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Completion
                </span>
                <span className="text-slate-400">
                  {cert.credentialNotice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
