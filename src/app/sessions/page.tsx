/** @format */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SessionsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".faq-title", {
        opacity: 0,
        y: -30,
        duration: 1,
      })
        .from(
          ".faq-divider",
          {
            scaleX: 0,
            duration: 0.8,
          },
          "-=0.5",
        )

        .from(
          ".faq-item",
          {
            opacity: 0,
            x: -50,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.3",
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
        <div className="max-w-4xl mx-auto w-full">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="faq-title text-5xl md:text-7xl font-bold text-[#165a94] mb-4 tracking-tight font-mono">
              Sessions
            </h1>
            <div className="faq-divider h-1 w-32 bg-[#165a94] mx-auto"></div>
          </div>

          {/* Session 1 Card */}
          <div className="faq-item mt-16">
            <div className="relative group">
              {/* Main Card */}
              <div className="bg-white/5 backdrop-blur-sm border-2 border-[#165a94] hover:border-[#5fb8dc] transition-all duration-300 overflow-hidden">
                {/* Header Section */}
                <div className="bg-linear-to-r from-[#165a94] to-[#3791c4] p-6 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)",
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl border-2 border-white/30">
                        🎤
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white font-mono tracking-tight">
                          Open Source as an Engineering Classroom, Not a Resume
                          Hack
                        </h3>
                        <p className="font-mono text-sm mt-1">
                          📅 01 February 2026 9:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Description */}
                  <div className="mb-6">
                    <div className="border-l-4 border-[#165a94] pl-6 py-2">
                      <p className="text-white/90 text-lg leading-relaxed font-mono">
                        Learning isn’t about padding resumes it’s about building
                        skills that last.
                        <br />
                        <br />
                        Akshit Batra sir is coming on behalf of Building For Fun
                        with a powerful session on “Open Source as an
                        Engineering Classroom, Not a Resume Hack” Real talk.
                        <br />
                        <br />
                        Real engineering. Real impact.
                      </p>
                    </div>
                  </div>

                  {/* Speaker Section */}
                  <div className="bg-[#165a94]/20 border-2 border-[#165a94]/50 p-6">
                    <p className="text-white/70 font-mono text-xs mb-2 tracking-wider">
                      SPEAKER
                    </p>
                    <div>
                      <p className="text-white font-mono text-xl font-bold">
                        Mr. Akshit Batra
                      </p>
                      <p className="font-mono text-sm">Industry Expert</p>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#165a94]/30 pointer-events-none"></div>
                </div>
              </div>

              {/* Hover Shadow Effect */}
              <div className="absolute inset-0 -z-10 bg-[#165a94]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
