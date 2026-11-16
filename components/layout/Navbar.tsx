"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
import ResumeModal from "@/components/resume/ResumeModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Lab", href: "/lab" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${
          scrolled
            ? "bg-[#121316]/95 backdrop-blur-sm border-b border-[#262930] py-3"
            : "bg-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2.5 text-white group"
            >
              <span className="w-7 h-7 rounded-sm bg-[#1c1f26] border border-[#262930] group-hover:border-amber flex items-center justify-center font-mono font-medium text-xs text-amber transition-colors">
                PR
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight text-white group-hover:text-amber transition-colors">
                  Akash PR
                </span>
                <span className="text-[11px] text-slate-400 -mt-0.5 hidden sm:block">
                  Automation Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                      isActive
                        ? "text-amber bg-[#181a1f] border border-[#262930]"
                        : "text-slate-300 hover:text-white hover:bg-[#181a1f]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Resume */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={() => setResumeModalOpen(true)}
                className="flex items-center space-x-1.5 text-xs px-3 py-1.5 rounded bg-[#181a1f] hover:bg-[#22252c] border border-[#262930] hover:border-amber text-slate-200 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-amber" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded text-slate-300 hover:text-white hover:bg-[#181a1f] border border-[#262930] transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#262930] bg-[#121316] px-4 pt-3 pb-5">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 text-sm rounded font-medium transition-colors ${
                      isActive
                        ? "text-amber bg-[#181a1f] border border-[#262930]"
                        : "text-slate-300 hover:text-white hover:bg-[#181a1f]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-2 mt-2 border-t border-[#262930]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setResumeModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center space-x-2 text-xs py-2 rounded bg-[#181a1f] text-slate-200 border border-[#262930]"
                >
                  <FileText className="w-3.5 h-3.5 text-amber" />
                  <span>Resume (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}