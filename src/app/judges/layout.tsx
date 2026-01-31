/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Judges | Smart ABES Hackathon",
  description:
    "Judges of Smart ABES Hackathon.",
  openGraph: {
    title: "Judges | Smart ABES Hackathon",
    description:
      "Judges of Smart ABES Hackathon.",
    images: ["/logo.png"],
  },
};

export default function JudgesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}