import Hero from "@/components/hero/Hero";
import QuickIntro from "@/components/hero/QuickIntro";
import AboutSection from "@/components/about/AboutSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import ProjectCard from "@/components/projects/ProjectCard";
import EngineeringLab from "@/components/lab/EngineeringLab";
import SkillsGrid from "@/components/skills/SkillsGrid";
import CertificationsList from "@/components/certifications/CertificationsList";
import ContactSection from "@/components/contact/ContactSection";
import { projectsData } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Interactive Tech Nexus */}
      <Hero />

      {/* Quick Intro: Philosophy & Core Pillars */}
      <QuickIntro />

      {/* About Biography & Professional Chronology */}
      <AboutSection />

      {/* Professional Work Experience Timeline */}
      <ExperienceTimeline />

      {/* Featured Engineering Projects Showcase */}
      <section id="projects" className="py-20 relative bg-[#090d18] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs mb-3">
                <Code2 className="w-3.5 h-3.5" />
                <span>TECHNICAL PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
                Featured Engineering Systems
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-mono">
                Architectures demonstrating neuro-symbolic AI, deterministic computation, multi-agent state machines, and enterprise automation.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-sky-400 border border-white/[0.08] text-xs font-mono transition-all group shrink-0"
            >
              <span>View All 6 Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Featured Project Cards List */}
          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featuredMode={true} />
            ))}
          </div>

          {/* Secondary Projects Grid Preview */}
          <div className="mt-12 pt-12 border-t border-white/[0.06]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                Additional Research & Vision Projects
              </h3>
              <Link href="/projects" className="text-xs font-mono text-sky-400 hover:text-sky-300">
                Explore Detailed Specs &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-5 rounded-2xl bg-[#0c1220] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {p.roleBadge}
                      </span>
                      <span className="text-[9px] font-mono text-slate-400">
                        {p.category.split("|")[0]}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white leading-snug">
                      {p.title}
                    </h4>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {p.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {p.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.03] text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1"
                    >
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inside My Engineering Lab (Interactive Demos) */}
      <EngineeringLab />

      {/* Skills Matrix */}
      <SkillsGrid />

      {/* Certifications & Formal Training */}
      <CertificationsList />

      {/* Contact & Inquiry Section */}
      <ContactSection />

      {/* Resume Download CTA */}
      <ResumeSection />
    </div>
  );
}
