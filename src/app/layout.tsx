/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
