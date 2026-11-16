import { Metadata } from "next";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import CertificationsList from "@/components/certifications/CertificationsList";

export const metadata: Metadata = {
  title: "Experience & Timeline",
  description:
    "Professional work history of Akash PR: Automation Engineer at Equifax, AI Research Intern at Acsia Technologies, and computer vision internships.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-20 bg-[#121316] min-h-screen">
      <ExperienceTimeline />
      <CertificationsList />
    </div>
  );
}