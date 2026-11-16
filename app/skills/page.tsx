import { Metadata } from "next";
import SkillsGrid from "@/components/skills/SkillsGrid";
import CertificationsList from "@/components/certifications/CertificationsList";

export const metadata: Metadata = {
  title: "Skills & Credentials",
  description:
    "Organized technical skill matrix and verified certifications across Generative AI, Python automation, data science, and computer vision.",
};

export default function SkillsPage() {
  return (
    <div className="pt-20 bg-[#121316] min-h-screen">
      <SkillsGrid />
      <CertificationsList />
    </div>
  );
}