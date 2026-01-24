/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SAH | Smart ABES Hackathon",
  description:
    "Learn about Smart ABES Hackathon (SAH), a large-scale technical hackathon bridging the gap between DSA and Project Development with real-world problem statements.",
  openGraph: {
    title: "About SAH | Smart ABES Hackathon",
    description:
      "Learn about Smart ABES Hackathon (SAH), a large-scale technical hackathon bridging the gap between DSA and Project Development with real-world problem statements.",
    images: ["/logo.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
