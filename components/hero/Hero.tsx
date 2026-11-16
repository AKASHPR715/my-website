"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  Terminal,
  Cpu
} from "lucide-react";
import { profileData } from "@/data/profile";
import TechNexusVisual from "./TechNexusVisual";
import ResumeModal from "@/components/resume/ResumeModal";

export default function Hero() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-28 sm:pt-36 pb-20 overflow-hidden bg-grid-pattern">
        {/* Ambient lighting glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Monospace Identifier Label */}
              <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                <span>{profileData.hero.smallIntro}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-[1.12]">
                I build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-200">
                  intelligent systems
                </span>{" "}
                that automate, analyze and solve real-world problems.
              </h1>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {profileData.hero.description}
              </p>

              {/* Three Professional Identity Tags */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {profileData.hero.identityTags.map((tag, idx) => (
                  <div
                    key={tag}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#0e1626] border border-white/10 text-xs font-mono text-slate-200 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons & CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-sky-500/20 active:scale-95 group"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-slate-200 border border-white/10 font-mono text-xs transition-all active:scale-95"
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Social Channels & Contact Links */}
              <div className="flex items-center space-x-6 pt-2 text-slate-400 text-xs font-mono">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 hover:text-sky-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 hover:text-sky-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-sky-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center space-x-1.5 hover:text-sky-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>{profileData.email}</span>
                </a>
              </div>

              {/* Technical Status Panel */}
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>ENGINEERING STATUS & ATTRIBUTION</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-[#0a0f1d] border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-400 block">CURRENT ROLE</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">
                      {profileData.currentRole.title}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0a0f1d] border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-400 block">ORGANIZATION</span>
                    <span className="text-xs font-bold text-sky-400 mt-0.5 block">
                      {profileData.currentRole.company}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0a0f1d] border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-400 block">EDUCATION</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">
                      B.Tech AI (2026)
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0a0f1d] border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-400 block">LOCATION</span>
                    <span className="text-xs font-bold text-slate-200 mt-0.5 block flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400 inline" />
                      {profileData.location}
                    </span>
                  </div>
                </div>

                <div className="mt-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] text-slate-400 font-mono">
                  <span className="text-sky-400 font-semibold">Note:</span> Joined Equifax on July 1, 2026. Completed 3-month foundational training programme and assigned to team.
                </div>
              </div>
            </div>

            {/* Right Graphic Column: Interactive Tech Nexus */}
            <div className="lg:col-span-5 flex items-center justify-center">
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
