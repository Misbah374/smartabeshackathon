/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Judging Criteria | Smart ABES Hackathon",
  description:
    "Learn about the judging criteria for Smart ABES Hackathon including Novelty, Articulation, Optimization & Depth, and Methodology.",
  openGraph: {
    title: "Judging Criteria | Smart ABES Hackathon",
    description:
      "Learn about the judging criteria for Smart ABES Hackathon including Novelty, Articulation, Optimization & Depth, and Methodology.",
    images: ["/logo.png"],
  },
};

export default function JudgingCriteriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
