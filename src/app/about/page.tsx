/** @format */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".about-title", {
        opacity: 0,
        y: -30,
        duration: 1,
      })
        .from(
          ".about-divider",
          {
            scaleX: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          ".about-section",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
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
      <section className="relative z-10 min-h-screen py-20 px-4">
        <div className="max-w-5xl mx-auto w-full">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="about-title text-5xl md:text-7xl font-bold text-[#165a94] mb-4 tracking-tight font-mono">
              About SAH
            </h1>
            <div className="about-divider h-1 w-32 bg-[#165a94] mx-auto"></div>
          </div>

          {/* Overview */}
          <div className="about-section bg-[#3791c4]/30 backdrop-blur-sm border-2 border-[#165a94] p-6 md:p-8 rounded-lg mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
              What is Smart ABES Hackathon?
            </h2>
            <p className="text-white/90 text-base md:text-lg font-mono leading-relaxed mb-4">
              Smart ABES Hackathon (SAH) is a large-scale technical hackathon
              jointly organized by ACM student chapters from ABES Engineering
              College, SSCBS, and GGSIPU USICT. Inspired by the Smart India
              Hackathon (SIH), SAH is designed with a distinct
              engineering-focused philosophy.
            </p>
            <p className="text-white/90 text-base md:text-lg font-mono leading-relaxed">
              The event bridges the commonly misunderstood gap between Data
              Structures & Algorithms (DSA) and Project Development, challenging
              the binary mindset of &quot;DSA vs Projects&quot; and
              demonstrating how both domains complement and strengthen each
              other when applied correctly.
            </p>
          </div>

          {/* Core Objective */}
          <div className="about-section bg-[#3791c4]/30 backdrop-blur-sm border-2 border-[#165a94] p-6 md:p-8 rounded-lg mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
              Core Objective
            </h2>
            <p className="text-white/90 text-base md:text-lg font-mono leading-relaxed">
              To enable participants to design and build real-world, functional
              solutions whose internal performance, efficiency, or intelligence
              is meaningfully improved using algorithmic thinking and DSA
              concepts, implemented in non-trivial and technically justified
              ways.
            </p>
          </div>

          {/* Innovation Tracks */}
          <div className="about-section bg-[#3791c4]/30 backdrop-blur-sm border-2 border-[#165a94] p-6 md:p-8 rounded-lg mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
              Innovation Tracks
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-white font-mono text-lg mr-3">01.</span>
                <p className="text-white/90 text-base md:text-lg font-mono">
                  AI / ML & Data Optimization
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-white font-mono text-lg mr-3">02.</span>
                <p className="text-white/90 text-base md:text-lg font-mono">
                  Blockchain & Decentralized Technologies
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-white font-mono text-lg mr-3">03.</span>
                <p className="text-white/90 text-base md:text-lg font-mono">
                  Defense
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
