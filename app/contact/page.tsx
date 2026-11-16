import { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description:
    "Direct contact channels, LinkedIn, GitHub, and mail client routing for Akash PR, Automation Engineer at Equifax.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 bg-[#121316] min-h-screen">
      <ContactSection />
    </div>
  );
}