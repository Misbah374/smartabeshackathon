/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessions | Smart ABES Hackathon",
  description:
    "Sessions of Smart ABES Hackathon. Interactive sessions led by industry experts and mentors to enhance your skills and knowledge as warm up for the hackathon.",
  openGraph: {
    title: "Sessions | Smart ABES Hackathon",
    description:
      "Sessions of Smart ABES Hackathon. Interactive sessions led by industry experts and mentors to enhance your skills and knowledge as warm up for the hackathon.",
    images: ["/logo.png"],
  },
};

export default function SessionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}