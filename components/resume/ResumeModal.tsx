"use client";

import { useState } from "react";
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  CheckCircle2, 
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
    // Generate an instant structured clean HTML/text download or trigger print-to-pdf
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0f1420] border border-white/10 rounded-2xl shadow-2xl text-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#131b2c] border-b border-white/[0.08]">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-mono text-xs text-slate-300 font-semibold tracking-wider uppercase">
              Curriculum Vitae &bull; Akash PR
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/[0.08] transition-colors"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? "Preparing PDF..." : "Download Resume"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0b101b] print:bg-white print:text-black print:p-0">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-heading font-bold text-white print:text-black">
                  {profileData.name}
                </h1>
                <p className="text-sky-400 font-mono text-sm mt-1 print:text-sky-700 font-medium">
                  {profileData.headline}
                </p>
              </div>

              <div className="flex flex-col text-xs font-mono text-slate-400 print:text-gray-700 space-y-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {profileData.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  {profileData.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  linkedin.com/in/akashpr715
                </span>
                <span className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-sky-400" />
                  github.com/AKASHPR715
                </span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed print:text-gray-800">
              {profileData.hero.description}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-3 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h2>
            <div className="bg-[#121826] border border-white/[0.06] rounded-xl p-4 print:bg-gray-50 print:border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <span className="font-bold text-white print:text-black">
                  {profileData.education.degree} in {profileData.education.specialization}
                </span>
                <span className="font-mono text-xs text-sky-400 print:text-sky-700 font-medium">
                  Graduated {profileData.education.graduationDate}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 print:text-gray-600">
                {profileData.education.institution}
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-3 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-[#121826] border border-white/[0.06] rounded-xl p-4 print:bg-gray-50 print:border-gray-200 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white print:text-black">
                        {exp.role} <span className="text-sky-400">&bull; {exp.company}</span>
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {exp.type} &bull; {exp.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-slate-300 bg-white/[0.05] px-2 py-1 rounded mt-1 sm:mt-0 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 italic">{exp.description}</p>

                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 print:text-gray-800">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-3 font-bold flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Featured Projects & Systems
            </h2>
            <div className="space-y-3">
              {projectsData.slice(0, 3).map((proj) => (
                <div
                  key={proj.id}
                  className="bg-[#121826] border border-white/[0.06] rounded-xl p-4 print:bg-gray-50 print:border-gray-200 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {proj.title} &mdash; <span className="text-xs font-normal text-slate-400">{proj.subtitle}</span>
                    </h3>
                    <span className="text-[10px] font-mono text-sky-400 border border-sky-500/30 px-2 py-0.5 rounded w-fit mt-1 sm:mt-0">
                      {proj.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed print:text-gray-800">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tags.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Categorization */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-3 font-bold flex items-center gap-2">
              <Award className="w-4 h-4" />
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skillsData.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-[#121826] border border-white/[0.06] rounded-xl p-3.5 print:bg-gray-50 print:border-gray-200"
                >
                  <h3 className="text-xs font-mono font-bold text-slate-200 mb-2">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2 font-bold">
              Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-center space-x-2 p-2 rounded bg-white/[0.02] border border-white/[0.04]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span className="text-slate-300">
                    <strong className="text-white">{cert.title}</strong> &bull; {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
