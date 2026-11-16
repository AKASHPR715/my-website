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

    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from Portfolio - ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.open(mailtoUrl, "_blank");
    setDispatched(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#121316] border-b border-[#262930]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Information & Channels */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="text-xs font-mono text-amber mb-2">
                [CONTACT // DIRECT CHANNELS]
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let&apos;s discuss systems & automation.
              </h2>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                I am interested in discussions around enterprise automation, agentic workflows, LLM safety pipelines, and data systems.
              </p>
            </div>

            {/* Currently Seeking Status */}
            <div className="p-3.5 rounded bg-[#181a1f] border border-[#262930] text-xs space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                Currently Seeking
              </div>
              <div className="text-slate-200 font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal-green inline-block"></span>
                <span>{profileData.seeking}</span>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-2 pt-1 text-xs">
              <a
                href={`mailto:${profileData.email}`}
                className="p-3 rounded bg-[#181a1f] border border-[#262930] hover:border-amber transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-amber" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Email</span>
                    <span className="font-semibold text-slate-200">{profileData.email}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded bg-[#181a1f] border border-[#262930] hover:border-amber transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-2.5">
                  <Linkedin className="w-4 h-4 text-amber" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">LinkedIn</span>
                    <span className="font-semibold text-slate-200">linkedin.com/in/akashpr715</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded bg-[#181a1f] border border-[#262930] hover:border-amber transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-2.5">
                  <Github className="w-4 h-4 text-amber" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">GitHub</span>
                    <span className="font-semibold text-slate-200">github.com/AKASHPR715</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <MapPin className="w-3.5 h-3.5 text-amber" />
              <span>Location: Kerala, India · Equifax Bangalore team assignment</span>
            </div>
          </div>

          {/* Right Column: Direct Mailto Dispatch */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-6 rounded bg-[#181a1f] border border-[#262930] space-y-4">
              <div className="pb-3 border-b border-[#262930] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Send Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Pre-fills your inquiry directly into your email client.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-[#121316] px-2 py-0.5 rounded border border-[#262930]">
                  DIRECT MAILTO
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Chen"
                      className="w-full px-3 py-2 rounded bg-[#121316] border border-[#262930] text-white text-xs focus:outline-none focus:border-amber transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3 py-2 rounded bg-[#121316] border border-[#262930] text-white text-xs focus:outline-none focus:border-amber transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300 block">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Automation Engineering / Role Discussion"
                    className="w-full px-3 py-2 rounded bg-[#121316] border border-[#262930] text-white text-xs focus:outline-none focus:border-amber transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your role, project, or technical question..."
                    className="w-full px-3 py-2 rounded bg-[#121316] border border-[#262930] text-white text-xs focus:outline-none focus:border-amber transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded bg-amber hover:bg-amber-dark text-[#121316] font-semibold text-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open in Mail Client</span>
                </button>

                <div className="text-[11px] text-slate-400 font-mono">
                  No third-party forms or trackers. Opens your system mail client with <code>akashpr715@gmail.com</code>.
                </div>

                {dispatched && (
                  <div className="p-2.5 rounded bg-[#121316] border border-signal-greenBorder text-xs font-mono text-signal-green flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Email client triggered. If it didn&apos;t open, email directly at akashpr715@gmail.com</span>
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