import ContactSection from "@/components/contact/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Akash PR | Automation Engineer & AI Specialist",
  description:
    "Direct contact channels, LinkedIn, GitHub, and message transmission form for Akash PR, Automation Engineer at Equifax.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
