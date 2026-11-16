import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Akash PR — Automation Engineer",
    template: "%s — Akash PR",
  },
  description:
    "Automation Engineer at Equifax with background in AI Engineering and Data Science. Systems, deterministic pipelines, and agentic workflows.",
  keywords: [
    "Akash PR",
    "Automation Engineer",
    "AI Engineer",
    "Data Science",
    "Equifax",
    "Acsia Technologies",
    "LangGraph",
    "RAG",
    "Python",
    "Kerala India",
  ],
  authors: [{ name: "Akash PR" }],
  creator: "Akash PR",
  openGraph: {
    title: "Akash PR — Automation Engineer",
    description:
      "Automation Engineer at Equifax. Deterministic data pipelines, multi-agent orchestrations, and interactive engineering lab.",
    type: "website",
    locale: "en_US",
    siteName: "Akash PR",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#121316",
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
      <body className="bg-[#121316] text-[#f3f4f6] antialiased min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}