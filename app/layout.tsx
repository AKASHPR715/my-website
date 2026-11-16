import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  title: "Akash PR | Automation Engineer, AI Engineer & Data Science",
  description:
    "Portfolio of Akash PR, an Automation Engineer with experience in Generative AI, Agentic AI, machine learning, computer vision and data-driven automation solutions.",
  keywords: [
    "Akash PR",
    "Automation Engineer",
    "AI Engineer",
    "Data Science",
    "Agentic AI",
    "Generative AI",
    "LangGraph",
    "Equifax",
    "Acsia Technologies",
    "Computer Vision",
    "Machine Learning",
    "Kerala India",
  ],
  authors: [{ name: "Akash PR" }],
  creator: "Akash PR",
  openGraph: {
    title: "Akash PR | Automation Engineer, AI Engineer & Data Science",
    description:
      "I build intelligent systems that automate, analyze and solve real-world problems. Explore engineering projects in Agentic AI, RAG, and Computer Vision.",
    type: "website",
    locale: "en_US",
    siteName: "Akash PR Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080c14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#080c14] text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-300 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
