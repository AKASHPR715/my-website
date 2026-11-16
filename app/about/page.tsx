import { Metadata } from "next";
import AboutSection from "@/components/about/AboutSection";
import SkillsGrid from "@/components/skills/SkillsGrid";
import CertificationsList from "@/components/certifications/CertificationsList";

export const metadata: Metadata = {
  title: "About & Background",
  description:
    "Professional background, career chronology, education, and technical orientations of Akash PR, Automation Engineer at Equifax.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 bg-[#121316] min-h-screen">
      <AboutSection />
      <SkillsGrid />
      <CertificationsList />
    </div>
  );
}