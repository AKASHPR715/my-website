import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#262930] bg-[#121316] text-slate-400 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-sm bg-[#181a1f] border border-[#262930] flex items-center justify-center font-mono font-medium text-amber text-xs">
                PR
              </span>
              <span className="font-semibold text-sm text-slate-200">
                Akash PR
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Automation Engineer at Equifax with background in AI Engineering and Data Science. I focus on reliable data pipelines, intelligent agents, and practical systems.
            </p>
            <div className="text-xs text-slate-400 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-signal-green inline-block"></span>
              <span>Equifax (Bangalore) · B.Tech AI (2026, MBCET)</span>
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Index
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/lab" className="hover:text-amber transition-colors">
                  Engineering Lab (Interactive Demos)
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber transition-colors">
                  Projects & Architecture
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-amber transition-colors">
                  Experience & Roles
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-amber transition-colors">
                  Skills & Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Channels */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Profiles
            </h4>
            <div className="flex flex-col space-y-1.5 text-xs">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 hover:text-amber transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 hover:text-amber transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center space-x-1 hover:text-amber transition-colors"
              >
                <span>{profileData.email}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-6 border-t border-[#262930] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            &copy; {currentYear} Akash PR
          </div>
          <div className="flex items-center space-x-3">
            <span>Kerala, India</span>
            <span>·</span>
            <Link href="/projects/taxmate-ai-tax-automation" className="hover:text-amber transition-colors">
              Deterministic · Probabilistic · Agentic (TaxMate)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}