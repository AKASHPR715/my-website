"use client";

import { useState } from "react";
import { 
  X, 
  Download, 
  Printer, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github 
} from "lucide-react";
import { profileData } from "@/data/profile";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { certificationsData } from "@/data/certifications";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-4xl bg-[#181a1f] border border-[#262930] rounded shadow-2xl text-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#121316] border-b border-[#262930]">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-signal-green"></span>
            <span className="text-slate-300 font-semibold uppercase">
              Curriculum Vitae // Akash PR
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono rounded bg-[#181a1f] hover:bg-[#22252c] text-slate-200 border border-[#262930] transition-colors"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-amber" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono rounded bg-amber hover:bg-amber-dark text-[#121316] font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? "Opening Dialog..." : "Save PDF"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-[#22252c] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 bg-[#181a1f] print:bg-white print:text-black print:p-0">
          {/* Header */}
          <div className="border-b border-[#262930] pb-5 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white print:text-black">
                  {profileData.name}
                </h1>
                <p className="text-amber font-mono text-xs mt-1 print:text-amber-800 font-medium">
                  {profileData.headline}
                </p>
                <p className="text-xs text-slate-400 mt-1 max-w-lg print:text-gray-700">
                  {profileData.hero.description}
                </p>
              </div>

              <div className="flex flex-col text-xs font-mono text-slate-400 print:text-gray-700 space-y-1 shrink-0">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber" />
                  {profileData.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber" />
                  {profileData.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-amber" />
                  linkedin.com/in/akashpr715
                </span>
                <span className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-amber" />
                  github.com/AKASHPR715
                </span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber mb-2 font-semibold">
              Education
            </h2>
            <div className="bg-[#121316] border border-[#262930] rounded p-3 text-xs print:bg-gray-50 print:border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-semibold text-white print:text-black">
                  {profileData.education.degree} in {profileData.education.specialization}
                </span>
                <span className="font-mono text-amber print:text-amber-800">
                  Graduated {profileData.education.graduationDate}
                </span>
              </div>
              <p className="text-slate-400 mt-0.5 print:text-gray-600">
                {profileData.education.institution}
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber mb-2 font-semibold">
              Professional Experience
            </h2>
            <div className="space-y-3">
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-[#121316] border border-[#262930] rounded p-3 text-xs print:bg-gray-50 print:border-gray-200 space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="font-semibold text-white print:text-black">
                        {exp.role} · {exp.company}
                      </span>
                      <span className="text-slate-400 font-mono ml-2">
                        ({exp.location})
                      </span>
                    </div>
                    <span className="font-mono text-slate-400 bg-[#181a1f] px-2 py-0.5 rounded border border-[#262930] w-fit mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-300 italic">{exp.description}</p>

                  <ul className="list-disc list-inside text-slate-300 space-y-1 print:text-gray-800 pt-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#181a1f] text-slate-300 border border-[#262930]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber mb-2 font-semibold">
              Selected Systems Engineered
            </h2>
            <div className="space-y-2">
              {projectsData.slice(0, 3).map((proj) => (
                <div
                  key={proj.id}
                  className="bg-[#121316] border border-[#262930] rounded p-3 text-xs print:bg-gray-50 print:border-gray-200 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white print:text-black">
                      {proj.title} — {proj.subtitle}
                    </span>
                    <span className="font-mono text-[10px] text-amber border border-amber/30 px-1.5 py-0.5 rounded">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed print:text-gray-800">
                    {proj.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber mb-2 font-semibold">
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skillsData.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-[#121316] border border-[#262930] rounded p-2.5 text-xs print:bg-gray-50 print:border-gray-200"
                >
                  <span className="font-mono font-semibold text-slate-300 block mb-1">
                    {cat.title}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#181a1f] text-slate-300 border border-[#262930]"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}