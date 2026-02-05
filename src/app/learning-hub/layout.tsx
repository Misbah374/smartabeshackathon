/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Drop | Smart ABES Hackathon",
  description:
    "Learning Drop of Smart ABES Hackathon. Interactive sessions led by industry experts and mentors to enhance your skills and knowledge as warm up for the hackathon.",
  openGraph: {
    title: "Learning Drop | Smart ABES Hackathon",
    description:
      "Learning Drop of Smart ABES Hackathon. Interactive sessions led by industry experts and mentors to enhance your skills and knowledge as warm up for the hackathon.",
    images: ["/logo.png"],
  },
};

export default function LearningDropLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}