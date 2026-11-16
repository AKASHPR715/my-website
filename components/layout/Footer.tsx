import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight, Cpu } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#070a10] text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center font-mono font-bold text-sky-400 text-xs">
                PR
              </div>
              <span className="font-heading font-bold text-lg text-slate-100">
                AKASH PR
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              &ldquo;Building intelligent systems through automation, AI and data.&rdquo;
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Automation Engineer @ Equifax &bull; B.Tech AI (2026)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-mono text-xs text-slate-300 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors">
                  About Me & Timeline
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-sky-400 transition-colors">
                  Experience & Roles
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-sky-400 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/lab" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  Engineering Lab
                  <span className="text-[10px] text-sky-400 font-mono">Interactive</span>
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-sky-400 transition-colors">
                  Skills & Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div>
            <h4 className="font-mono text-xs text-slate-300 uppercase tracking-wider mb-3">
              Direct Channels
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-sky-400 transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-sky-400 transition-colors group"
              >
                <Github className="w-4 h-4 text-sky-400" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center space-x-2 hover:text-sky-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{profileData.email}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <div>
            &copy; {currentYear} Akash PR. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-slate-400">
            <span>Kerala, India</span>
            <span>&bull;</span>
            <span>Deterministic &bull; Probabilistic &bull; Agentic</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
