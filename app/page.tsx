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
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <div className="flex flex-col min-h-screen bg-[#121316]">
      {/* Hero Section with Interactive System Architecture Bus */}
      <Hero />

      {/* Quick Intro: Principles & Core Pillars */}
      <QuickIntro />

      {/* Engineering Lab (Interactive Demos) */}
      <EngineeringLab />

      {/* Featured Engineering Systems Showcase */}
      <section id="projects" className="py-16 sm:py-20 bg-[#121316] border-b border-[#262930]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#262930]">
            <div>
              <div className="text-xs font-mono text-amber mb-2">
                [PROJECTS // ARCHITECTURES & SYSTEMS]
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Featured Systems & Prototypes
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
                Neuro-symbolic architectures, deterministic computation, multi-agent state machines, and enterprise automation.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#181a1f] hover:bg-[#22252c] text-amber border border-[#262930] hover:border-amber text-xs font-mono transition-colors shrink-0"
            >
              <span>View All 6 Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Featured Project Cards Stream */}
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featuredMode={true} />
            ))}
          </div>

          {/* Secondary Projects Grid */}
          <div className="mt-10 pt-8 border-t border-[#262930]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-mono uppercase text-slate-400">
                Additional Research & Vision Projects
              </h3>
              <Link href="/projects" className="text-xs font-mono text-amber hover:underline">
                Explore Detailed Specs &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {otherProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded bg-[#181a1f] border border-[#262930] flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="px-1.5 py-0.5 rounded bg-[#121316] text-amber border border-amber/30">
                        {p.roleBadge}
                      </span>
                      <span className="text-slate-400">
                        {p.category.split("|")[0]}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-white leading-snug">
                      {p.title}
                    </h4>

                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {p.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#262930] flex items-center justify-between text-xs">
                    <div className="flex flex-wrap gap-1">
                      {p.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#121316] text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-xs font-mono text-amber hover:underline flex items-center gap-1"
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

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* About & Chronology */}
      <AboutSection />

      {/* Skills Matrix */}
      <SkillsGrid />

      {/* Certifications & Formal Training */}
      <CertificationsList />

      {/* Contact Section */}
      <ContactSection />

      {/* Resume CTA */}
      <ResumeSection />
    </div>
  );
}