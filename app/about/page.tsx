import AboutSection from "@/components/about/AboutSection";
import SkillsGrid from "@/components/skills/SkillsGrid";
import CertificationsList from "@/components/certifications/CertificationsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Akash PR | Automation Engineer & AI Specialist",
  description:
    "Professional background, career timeline, education, and technical ethos of Akash PR, Automation Engineer at Equifax with expertise in AI agents and data science.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
      <SkillsGrid />
      <CertificationsList />
    </div>
  );
}
