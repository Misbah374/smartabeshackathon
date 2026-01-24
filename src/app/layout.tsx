/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart ABES Hackathon",
  keywords: [
    "Smart ABES Hackathon",
    "Data Structures and Algorithms",
    "Hackathon",
  ],
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL("https://smartabeshackathon.tech"),
  openGraph: {
    title: "Smart ABES Hackathon",
    description:
      "A hackathon about building projects that work better because of Data Structures and Algorithms.",
    images: ["/logo.png"],
    siteName: "Smart ABES Hackathon",
    type: "website",
    url: "https://smartabeshackathon.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-red-500 blueprint-grid blueprint-grid-sub h-full select-none relative overflow-x-hidden`}
      >
        <div className="vignette absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-20" />
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
