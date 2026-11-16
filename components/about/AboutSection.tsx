"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Download, 
  FileText, 
  CheckCircle, 
  ArrowUpRight, 
  Cpu, 
  Terminal,
  ShieldCheck,
  Brain
} from "lucide-react";
import { profileData } from "@/data/profile";
import ResumeModal from "@/components/resume/ResumeModal";

export default function AboutSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const timelineMilestones = [
    {
      year: "2026",
      title: "Graduation & Equifax Onboarding",
      highlight: "Automation Engineer @ Equifax",
      description: "Graduated with B.Tech in CSE (AI) from Mar Baselios College of Engineering and Technology. Joined Equifax on July 1, 2026, completing 3-month foundational training programme.",
      badge: "Current",
      active: true,
    },
    {
      year: "2025 – 2026",
      title: "Enterprise AI & Research Internship",
      highlight: "Acsia Technologies (10 Months)",
      description: "Implemented LLM safety guardrails using LlamaGuard & Guardrails AI, built Microsoft Teams automation agent via Graph API, and engineered AST-based code analysis tools.",
      badge: "Internship",
      active: false,
    },
    {
      year: "2025",
      title: "Industrial Multimodal AI Training",
      highlight: "Intel Unnati Industrial Training",
      description: "Engineered an adaptive learning assistant combining LLaMA, SpeechRecognition, and real-time student engagement detection via OpenCV.",
      badge: "Training",
      active: false,
    },
    {
      year: "2024 – 2025",
      title: "Computer Vision & NLP Internships",
      highlight: "Icore Pioneer & Nestsoft Technologies",
      description: "Developed TrackNet high-speed badminton shuttlecock tracking (>90% accuracy) and player pose estimation at Icore; built text preprocessing and summarization pipelines at Nestsoft.",
      badge: "Dual Internship",
      active: false,
    },
    {
      year: "2022",
      title: "Commenced B.Tech in Artificial Intelligence",
      highlight: "Mar Baselios College of Engineering (MBCET)",
      description: "Began rigorous engineering studies in Computer Science and Engineering with specialization in Artificial Intelligence.",
      badge: "Academic",
      active: false,
    },
  ];

  return (
    <>
      <section id="about" className="py-20 relative bg-[#090d17] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span>BIOGRAPHY & BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Engineering with Purpose, Precision & Depth
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-mono">
              Bridging deterministic software automation with modern agentic and generative AI.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Biography, Interests, Education */}
            <div className="lg:col-span-7 space-y-8">
              {/* Detailed Narrative */}
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {profileData.quickIntro.bioParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Education Box */}
              <div className="p-6 rounded-2xl bg-[#0e1524] border border-white/[0.08] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-wider">
                        DEGREE & EDUCATION
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {profileData.education.status} May 2026
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {profileData.education.degree} in {profileData.education.specialization}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {profileData.education.institution}
                    </p>
                    <p className="text-xs text-slate-400 font-mono pt-1">
                      Focus on Intelligent Systems, Machine Learning, Deep Neural Architectures, and Autonomous Agents.
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Interests Triad */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  CORE TECHNICAL ORIENTATIONS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {profileData.quickIntro.corePillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="p-4 rounded-xl bg-[#0b101c] border border-white/[0.06] hover:border-sky-500/30 transition-colors"
                    >
                      <h4 className="text-xs font-mono font-bold text-sky-300 mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Timeline & Career Path */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/[0.08]">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                  <h3 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    CAREER CHRONOLOGY
                  </h3>
                  <button
                    onClick={() => setResumeOpen(true)}
                    className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1"
                  >
                    <span>PDF Resume</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Timeline Stream */}
                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                  {timelineMilestones.map((m, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline dot */}
                      <div
                        className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-2 ${
                          m.active
                            ? "bg-sky-400 border-sky-300 ring-4 ring-sky-500/20"
                            : "bg-[#0c1220] border-slate-600 group-hover:border-sky-400"
                        } transition-colors`}
                      />

                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-sky-400">
                            {m.year}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                            {m.badge}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white">
                          {m.highlight}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Download resume CTA inside card */}
                <div className="mt-8 pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => setResumeOpen(true)}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-slate-200 border border-white/[0.1] text-xs font-mono transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-sky-400" />
                    <span>Download Complete Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
