"use client";

import { useState } from "react";
import { 
  Mail, 
  Linkedin, 
  Github, 
  ArrowUpRight, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Terminal, 
  MessageSquare,
  AlertCircle
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [dispatched, setDispatched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Compose genuine mailto URL
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from Portfolio - ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open user's email client with pre-filled content
    window.open(mailtoUrl, "_blank");
    setDispatched(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#070b14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>LET&apos;S CONNECT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                Let&apos;s build something meaningful.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                I&apos;m always interested in discussing automation, AI engineering, data science and interesting technical challenges.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <a
                href={`mailto:${profileData.email}`}
                className="p-4 rounded-xl bg-[#0c1220] border border-white/[0.08] hover:border-sky-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      DIRECT EMAIL
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-sky-300 transition-colors">
                      {profileData.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0c1220] border border-white/[0.08] hover:border-sky-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      PROFESSIONAL NETWORK
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-sky-300 transition-colors">
                      linkedin.com/in/akashpr715
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0c1220] border border-white/[0.08] hover:border-sky-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      SOURCE CODE & REPOSITORIES
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-sky-300 transition-colors">
                      github.com/AKASHPR715
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Based in Kerala, India &bull; Open to collaborative engineering discussions</span>
            </div>
          </div>

          {/* Right Column: Transparent Contact Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1220] border border-white/[0.08] shadow-2xl">
              <div className="pb-4 mb-6 border-b border-white/[0.06] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-sky-400" />
                    SEND DIRECT INQUIRY
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Prepares your message and opens your default mail client directly.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                  SECURE MAILTO ROUTING
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Chen"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d18] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Email Address <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@organization.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d18] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI Automation & Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d18] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your technical project, recruitment inquiry, or engineering collaboration idea..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d18] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-sky-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold font-mono text-xs transition-all shadow-lg shadow-sky-500/20 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT VIA EMAIL CLIENT</span>
                </button>

                {/* Honest Disclosure Notice */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] font-mono text-slate-400 flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Privacy & Integrity:</strong> Submitting formats your message into a pre-filled direct email to <code>akashpr715@gmail.com</code>. No background tracking or third-party CRM server is intercepting your message.
                  </span>
                </div>

                {dispatched && (
                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-xs font-mono text-emerald-300 flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Email client launched! If your email app did not open, click the direct email link on the left.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
