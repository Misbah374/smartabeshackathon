/** @format */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const FAQS = [
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and enthusiasm!",
  },
  {
    question: "When will I get the PS?",
    answer: "25th of January",
  },
  {
    question: "How round will there be?",
    answer:
      "2 Rounds, Round 1 will end on the 14th of Feb, and Round 2 will take place on the 28th of Feb",
  },
  {
    question: "How to get in touch?",
    answer: "Reach out to contacts below,",
  },
  {
    question: "How many teams will qualify for Round 2?",
    answer: "30 teams",
  },
];

export default function FAQPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Animate title
      tl.from(".faq-title", {
        opacity: 0,
        y: -30,
        duration: 1,
      })
        // Animate divider
        .from(
          ".faq-divider",
          {
            scaleX: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        // Animate FAQ items
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
        <div className="max-w-4xl mx-auto w-full">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="faq-title text-5xl md:text-7xl font-bold text-[#165a94] mb-4 tracking-tight font-mono">
              You might be thinking...
            </h1>
            <div className="faq-divider h-1 w-32 bg-[#165a94] mx-auto"></div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-8">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-[#3791c4]/30 backdrop-blur-sm border-2 border-[#165a94] p-6 rounded-lg"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-mono">
                  {faq.question}
                </h3>
                <p className="text-white/90 text-base md:text-lg font-mono leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section Placeholder */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-[#165a94]/40 backdrop-blur-sm border-2 border-[#165a94] px-8 py-4 rounded-lg">
              <p className="text-white font-mono text-lg">
                For more information, check our contact details on the home page
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
