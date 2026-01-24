/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Smart ABES Hackathon",
  description:
    "Get in touch with the Smart ABES Hackathon team. Find our social media links, contact numbers, and reach out for any queries or assistance.",
  openGraph: {
    title: "Contact Us | Smart ABES Hackathon",
    description:
      "Get in touch with the Smart ABES Hackathon team. Find our social media links, contact numbers, and reach out for any queries or assistance.",
    images: ["/logo.png"],
  },
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
