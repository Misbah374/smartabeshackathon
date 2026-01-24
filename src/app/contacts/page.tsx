/** @format */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    name: "WhatsApp",
    url: "https://chat.whatsapp.com/JtmozxCOd2mEojTONjOn7c",
    icon: "💬",
  },
  {
    name: "Discord",
    url: "https://discord.gg/M6emcsPZ8e",
    icon: "🎮",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/acm_abesec/",
    icon: "📷",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/acm-w-abesec/",
    icon: "💼",
  },
];

const CONTACTS = [
  {
    name: "Parshvi Jain",
    phone: "+91 7452905310",
  },
  {
    name: "Kunal Rana",
    phone: "+91 8958909585",
  },
  {
    name: "Himanshu Kapoor",
    phone: "+91 75051 69771",
  },
];

export default function ContactsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Animate title
      tl.from(".contacts-title", {
        opacity: 0,
        y: -30,
        duration: 1,
      })
        // Animate divider
        .from(
          ".contacts-divider",
          {
            scaleX: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        // Animate social links section
        .from(
          ".social-section-title",
          {
            opacity: 0,
            x: -30,
            duration: 0.6,
          },
          "-=0.3",
        )
        .from(
          ".social-link",
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3",
        )
        // Animate contacts section
        .from(
          ".contacts-section-title",
          {
            opacity: 0,
            x: -30,
            duration: 0.6,
          },
          "-=0.2",
        )
        .from(
          ".contact-card",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.15,
          },
          "-=0.3",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-screen w-full overflow-hidden select-none"
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20" />

      {/* SVG Drawing Layer */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <defs>
          <marker
            id="arrow-start"
            markerWidth="10"
            markerHeight="10"
            refX="1"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M9,0 L9,6 L0,3 z" fill="#165a94" />
          </marker>
          <marker
            id="arrow-end"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#165a94" />
          </marker>
        </defs>
        {/* Outer Border Box */}
        <rect
          x="5%"
          y="5%"
          width="90%"
          height="90%"
          fill="none"
          stroke="#165a94"
          strokeWidth="2"
          className="opacity-30"
        />
        {/* Top Dimension Line */}
        <line
          x1="5%"
          y1="10%"
          x2="95%"
          y2="10%"
          stroke="#165a94"
          strokeWidth="1"
          markerStart="url(#arrow-start)"
          markerEnd="url(#arrow-end)"
          className="opacity-30"
        />
        {/* Left Dimension Line */}
        <line
          x1="8%"
          y1="5%"
          x2="8%"
          y2="95%"
          stroke="#165a94"
          strokeWidth="1"
          markerStart="url(#arrow-start)"
          markerEnd="url(#arrow-end)"
          className="opacity-30"
        />
      </svg>

      {/* Content Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-5xl mx-auto w-full">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="contacts-title text-5xl md:text-7xl font-bold text-[#165a94] mb-4 tracking-tight font-mono">
              Got a Question?
            </h1>
            <div className="contacts-divider h-1 w-32 bg-[#165a94] mx-auto"></div>
          </div>

          {/* Social Links Section */}
          <div className="mb-16">
            <h2 className="social-section-title text-2xl md:text-3xl font-bold text-[#165a94] mb-8 font-mono text-center">
              Connect With Us
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {SOCIAL_LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link group"
                >
                  <div className="bg-[#3791c4]/30 backdrop-blur-sm border-2 border-[#165a94] p-6 rounded-lg text-center hover:bg-[#3791c4]/50 transition-all duration-300 hover:scale-105 hover:border-white">
                    <div className="text-4xl mb-3">{link.icon}</div>
                    <p className="text-white font-mono font-bold text-sm md:text-base">
                      {link.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Phone Contacts Section */}
          <div>
            <h2 className="contacts-section-title text-2xl md:text-3xl font-bold text-[#165a94] mb-8 font-mono text-center">
              Phone Contacts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONTACTS.map((contact, index) => (
                <div
                  key={index}
                  className="contact-card bg-[#3791c4]/30 backdrop-blur-sm border-2 border-[#165a94] p-6 rounded-lg text-center"
                >
                  <h3 className="text-xl font-bold text-white mb-3 font-mono">
                    {contact.name}
                  </h3>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="text-white/90 font-mono text-base hover:text-white transition-colors inline-block"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-[#165a94]/40 backdrop-blur-sm border-2 border-[#165a94] px-8 py-4 rounded-lg">
              <p className="text-white font-mono text-base md:text-lg">
                Feel free to reach out for any queries or assistance!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
