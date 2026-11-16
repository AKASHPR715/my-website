import EngineeringLab from "@/components/lab/EngineeringLab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Lab | Akash PR &bull; Interactive AI & Automation Sandbox",
  description:
    "Interactive engineering demonstrations: RAG Pipeline Visualizer, Multi-Agent Workflow Simulator, and Data Science Explorer by Akash PR.",
};

export default function LabPage() {
  return (
    <div className="pt-20">
      <EngineeringLab />
    </div>
  );
}
