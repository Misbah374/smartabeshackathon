/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { hackathonSchema, organizationSchema } from "./layout-schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart ABES Hackathon 2025 - DSA & Innovation",
  description:
    "Join Smart ABES Hackathon - The Missing Piece. Build innovative projects powered by Data Structures and Algorithms. Register now for this exclusive hackathon event.",
  keywords: [
    "Smart ABES Hackathon",
    "hackathon 2025",
    "Data Structures and Algorithms",
    "DSA hackathon",
    "coding competition",
    "ABES hackathon",
    "innovation challenge",
  ],
  authors: [{ name: "ABES Institute" }],
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://smartabeshackathon.tech"),
  alternates: {
    canonical: "https://smartabeshackathon.tech",
  },
  openGraph: {
    title: "Smart ABES Hackathon - The Missing Piece",
    description:
      "A hackathon about building projects that work better because of Data Structures and Algorithms.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Smart ABES Hackathon Logo",
      },
    ],
    siteName: "Smart ABES Hackathon",
    type: "website",
    url: "https://smartabeshackathon.tech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart ABES Hackathon - The Missing Piece",
    description:
      "Build innovative projects powered by Data Structures and Algorithms",
    images: ["/logo.png"],
  },
  applicationName: "Smart ABES Hackathon",
  formatDetection: {
    email: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hackathonSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
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
