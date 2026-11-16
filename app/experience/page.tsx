import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import CertificationsList from "@/components/certifications/CertificationsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Akash PR &bull; Automation Engineer",
  description:
    "Professional work history of Akash PR: Automation Engineer at Equifax, AI Research Intern at Acsia Technologies, and computer vision internships.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      <ExperienceTimeline />
      <CertificationsList />
    </div>
  );
}
