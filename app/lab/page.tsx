import { Metadata } from "next";
import EngineeringLab from "@/components/lab/EngineeringLab";

export const metadata: Metadata = {
  title: "Engineering Lab — Interactive Demonstrations",
  description:
    "Interactive engineering sandboxes: RAG Pipeline Visualizer, Multi-Agent Workflow Simulator, and Data Science Explorer by Akash PR.",
};

export default function LabPage() {
  return (
    <div className="pt-20 bg-[#121316] min-h-screen">
      <EngineeringLab />
    </div>
  );
}