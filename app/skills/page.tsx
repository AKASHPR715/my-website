import SkillsGrid from "@/components/skills/SkillsGrid";
import CertificationsList from "@/components/certifications/CertificationsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Certifications | Akash PR",
  description:
    "Organized technical skill matrix and verified certifications across Generative AI, Python automation, data science, and computer vision.",
};

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <SkillsGrid />
      <CertificationsList />
    </div>
  );
}
