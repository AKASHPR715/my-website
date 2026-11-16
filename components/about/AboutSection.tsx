"use client";

import { useState } from "react";
import { GraduationCap, ArrowUpRight, FileText } from "lucide-react";
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
      badge: "Internships",
      active: false,
    },
    {
      year: "2022",
      title: "Commenced B.Tech in Artificial Intelligence",
      highlight: "Mar Baselios College of Engineering (MBCET)",
      description: "Began engineering studies in Computer Science and Engineering with specialization in Artificial Intelligence.",
      badge: "Degree",
      active: false,
    },
  ];

  return (
    <>
      <section id="about" className="py-16 sm:py-20 bg-[#121316] border-b border-[#262930]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-[#262930]">
            <div className="text-xs font-mono text-amber mb-2">
              [ABOUT // PROFESSIONAL BACKGROUND]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engineering Background & Timeline
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
              Software automation, AI agents, and computer vision systems built with honest architectural separation.
            </p>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Narrative & Education */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3.5 text-sm text-slate-300 leading-relaxed">
                {profileData.quickIntro.bioParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Education Box */}
              <div className="p-4 rounded bg-[#181a1f] border border-[#262930] flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded bg-[#121316] border border-[#262930] flex items-center justify-center text-amber shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-slate-400 uppercase">Education</span>
                    <span className="font-mono text-amber">Graduated May 2026</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {profileData.education.degree} in {profileData.education.specialization}
                  </div>
                  <div className="text-slate-400">
                    {profileData.education.institution}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Career Chronology */}
            <div className="lg:col-span-5 p-5 rounded bg-[#181a1f] border border-[#262930] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#262930] text-xs font-mono">
                <span className="text-slate-200 font-semibold uppercase">Chronology</span>
                <button
                  onClick={() => setResumeOpen(true)}
                  className="text-amber hover:underline inline-flex items-center space-x-1"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

              <div className="space-y-4">
                {timelineMilestones.map((m, idx) => (
                  <div key={idx} className="space-y-1 text-xs border-l-2 border-[#262930] pl-3 py-0.5">
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-amber font-semibold">{m.year}</span>
                      <span className="text-[10px] text-slate-400 bg-[#121316] px-1.5 py-0.5 rounded border border-[#262930]">
                        {m.badge}
                      </span>
                    </div>
                    <div className="font-semibold text-white">
                      {m.highlight}
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#262930]">
                <button
                  onClick={() => setResumeOpen(true)}
                  className="w-full flex items-center justify-center space-x-2 py-2 rounded bg-[#121316] hover:bg-[#22252c] text-slate-200 border border-[#262930] hover:border-amber text-xs font-mono transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-amber" />
                  <span>Inspect Complete Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}