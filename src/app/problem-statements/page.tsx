/** @format */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function ProblemStatementsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Animate title
      tl.from(".ps-title", {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
      })
        // Animate divider
        .from(
          ".ps-divider",
          {
            scaleX: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        // Animate subtitle
        .from(
          ".ps-subtitle",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.3",
        )
        // Animate cards
        .from(
          ".ps-card",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.2,
          },
          "-=0.2",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen w-full overflow-hidden ">
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
        <div className="max-w-6xl mx-auto w-full">
          {/* Title */}
          <h1 className="ps-title text-5xl md:text-7xl lg:text-8xl font-bold text-[#165a94] mb-8 tracking-tight font-mono text-center">
            Problem Statements
          </h1>
          <div className="ps-divider h-1 w-48 bg-[#165a94] mx-auto mb-12"></div>

          {/* Subtitle */}
          <p className="ps-subtitle text-xl md:text-2xl text-white font-mono text-center mb-16">
            Explore challenges across different domains
          </p>

          {/* Problem Statement Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Defence Category */}
            <Link href="/problem-statements/defence" className="ps-card block">
              <div className="bg-[#165a94]/10 backdrop-blur-sm border-2 border-[#165a94] p-8 rounded-lg hover:bg-[#165a94]/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h2 className="text-2xl font-bold text-[#165a94] mb-4 font-mono">
                  Defence
                </h2>
                <p className="text-white/80">
                  Security, surveillance, and strategic defense systems
                </p>
              </div>
            </Link>

            {/* AI Category */}
            <Link href="/problem-statements/ai" className="ps-card block">
              <div className="bg-[#165a94]/10 backdrop-blur-sm border-2 border-[#165a94] p-8 rounded-lg hover:bg-[#165a94]/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h2 className="text-2xl font-bold text-[#165a94] mb-4 font-mono">
                  AI
                </h2>
                <p className="text-white/80">
                  Machine learning, automation, and intelligent systems
                </p>
              </div>
            </Link>

            {/* Web3 Category */}
            <Link href="/problem-statements/web3" className="ps-card block">
              <div className="bg-[#165a94]/10 backdrop-blur-sm border-2 border-[#165a94] p-8 rounded-lg hover:bg-[#165a94]/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h2 className="text-2xl font-bold text-[#165a94] mb-4 font-mono">
                  Web3
                </h2>
                <p className="text-white/80">
                  Decentralized applications, blockchain, and smart contracts
                </p>
              </div>
            </Link>

            {/* Additional categories can be added here */}
          </div>
        </div>
      </section>
    </main>
  );
}
