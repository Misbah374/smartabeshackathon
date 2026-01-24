/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Smart ABES Hackathon",
  description:
    "Frequently Asked Questions about Smart ABES Hackathon including registration details, schedule, team requirements, and contact information.",
  openGraph: {
    title: "FAQ | Smart ABES Hackathon",
    description:
      "Frequently Asked Questions about Smart ABES Hackathon including registration details, schedule, team requirements, and contact information.",
    images: ["/logo.png"],
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
