/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Problem Statements | Smart ABES Hackathon",
  description:
    "Smart ABES Hackathon problem statements will be revealed soon. Stay tuned for innovative challenges focused on Data Structures and Algorithms.",
  openGraph: {
    title: "Problem Statements | Smart ABES Hackathon",
    description:
      "Smart ABES Hackathon problem statements will be revealed soon. Stay tuned for innovative challenges focused on Data Structures and Algorithms.",
    images: ["/logo.png"],
  },
};

export default function ProblemStatementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
