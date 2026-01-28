/** @format */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline | Smart ABES Hackathon",
  description:
    "Smart ABES Hackathon timeline: from design thinking to implementation. Track key dates, learning sessions, and evaluation milestones.",
  openGraph: {
    title: "SAH Timeline - Smart ABES Hackathon",
    description:
      "Follow the hackathon journey from algorithmic thinking to final implementation.",
  },
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
