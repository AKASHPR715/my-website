"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, FileText, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import TechNexusVisual from "./TechNexusVisual";
import ResumeModal from "@/components/resume/ResumeModal";

export default function Hero() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-28 sm:pt-36 pb-16 blueprint-grid border-b border-[#262930]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              {/* Context Label */}
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-amber">
                <span>[AKASH PR // AUTOMATION ENGINEER]</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                {profileData.hero.headline}
              </h1>

              {/* Supporting First-Person Description */}
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {profileData.hero.description}
              </p>

              {/* Currently Seeking Status Line */}
              <div className="p-3 rounded bg-[#181a1f] border border-[#262930] text-xs">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide mb-1">
                  Currently Seeking
                </div>
                <div className="text-slate-200 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-signal-green inline-block"></span>
                  <span>{profileData.seeking}</span>
                </div>
              </div>

              {/* Three Practical Identity Focus Areas */}
              <div className="flex flex-wrap gap-2 pt-1">
                {profileData.hero.identityTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#181a1f] border border-[#262930] text-xs text-slate-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons & CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/lab"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-amber hover:bg-amber-dark text-[#121316] font-semibold text-xs transition-colors"
                >
                  <span>Open Engineering Lab</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-[#181a1f] hover:bg-[#22252c] text-slate-200 border border-[#262930] text-xs transition-colors"
                >
                  <span>View Projects</span>
                </Link>

                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-[#181a1f] hover:bg-[#22252c] text-slate-200 border border-[#262930] text-xs transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-amber" />
                  <span>Resume (PDF)</span>
                </button>
              </div>

              {/* Verified Profiles */}
              <div className="flex items-center space-x-5 pt-1 text-slate-400 text-xs">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber inline-flex items-center space-x-1 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber inline-flex items-center space-x-1 transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-amber inline-flex items-center space-x-1 transition-colors"
                >
                  <span>{profileData.email}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Status & Attribution Panel */}
              <div className="pt-4 border-t border-[#262930]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded bg-[#181a1f] border border-[#262930]">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Role</span>
                    <span className="text-xs font-semibold text-white mt-0.5 block truncate">
                      {profileData.currentRole.title}
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-[#181a1f] border border-[#262930]">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Company</span>
                    <span className="text-xs font-semibold text-amber mt-0.5 block truncate">
                      {profileData.currentRole.company}
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-[#181a1f] border border-[#262930]">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Education</span>
                    <span className="text-xs font-semibold text-white mt-0.5 block truncate">
                      B.Tech AI (2026)
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-[#181a1f] border border-[#262930]">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Location</span>
                    <span className="text-xs font-semibold text-slate-300 mt-0.5 block truncate">
                      {profileData.location}
                    </span>
                  </div>
                </div>

                <div className="mt-2 text-[11px] text-slate-400 font-mono">
                  <span className="text-amber">Disclosure:</span> Joined Equifax on July 1, 2026. Completed 3-month foundational training programme and assigned to team.
                </div>
              </div>
            </div>

            {/* Right Graphic Column: Systems Bus Schematic */}
            <div className="lg:col-span-5">
              <TechNexusVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}