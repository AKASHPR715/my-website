"use client";

import { CheckCircle2 } from "lucide-react";
import { certificationsData } from "@/data/certifications";

export default function CertificationsList() {
  return (
    <section className="py-16 bg-[#121316] border-b border-[#262930]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#262930]">
          <div>
            <div className="text-xs font-mono text-amber mb-2">
              [CREDENTIALS // FORMAL TRAINING]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Certifications & Continuing Education
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Verified certifications across Generative AI, AI ethics, prompt engineering, and core software engineering.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            <span className="text-signal-green">Verified:</span> Documented records on file without fabricated IDs.
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-4 rounded bg-[#181a1f] border border-[#262930] flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121316] text-amber border border-amber/30">
                    {cert.issuerLogoText}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {cert.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skillsAcquired.map((s) => (
                    <span
                      key={s}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#121316] text-slate-300 border border-[#262930]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#262930] flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-signal-green">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Completion
                </span>
                <span className="truncate max-w-[120px]">{cert.credentialNotice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}