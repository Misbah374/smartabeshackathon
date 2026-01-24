/** @format */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

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
        <div className="max-w-4xl mx-auto w-full text-center">
          {/* Title */}
          <h1 className="ps-title text-6xl md:text-8xl lg:text-9xl font-bold text-[#165a94] mb-8 tracking-tight font-mono">
            Coming Soon
          </h1>
          <div className="ps-divider h-1 w-48 bg-[#165a94] mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="ps-subtitle text-xl md:text-2xl text-white font-mono">
            Problem Statements will be revealed soon
          </p>
        </div>
      </section>
    </main>
  );
}
