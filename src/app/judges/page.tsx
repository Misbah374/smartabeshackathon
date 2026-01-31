/** @format */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface Judge {
  id: string;
  name: string;
  title: string;
  image: string;
}

const judges: Judge[] = [
  {
    id: "1",
    name: "Akshit Batra",
    title: "Building for fun",
    image: "/judges/Akshit Batra.jpeg",
  },
  {
    id: "2",
    name: "Mr. Anand Thakur",
    title: "CEO of Technoledge Edusearch",
    image: "/judges/Anand Thakur.jpeg",
  },
  {
    id: "3",
    name: "Mr. Vijay Kumar Shukla",
    title: "Section Officer, Delhi Water Board",
    image: "/judges/water board.jpeg",
  },
  // {
  //   id: "4",
  //   name: "Mr. Arpan Garg",
  //   title: "Commudle",
  //   image: "/judges/no image.png",
  // },
  {
    id: "4",
    name: "Mr. Chaitanya Bajpai",
    title: "Exo Tech",
    image: "/judges/Chaitanya Bajpai.jpeg",
  },
];

export default function JudgesPage() {
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
        <div className="max-w-4xl lg:max-w-6xl mx-auto w-full">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="faq-title text-5xl md:text-7xl font-bold text-[#165a94] mb-4 tracking-tight font-mono">
              Judges
            </h1>
            <div className="faq-divider h-1 w-32 bg-[#165a94] mx-auto"></div>
          </div>

          {/* Judges Layout */}
          {/* Mobile: Grid View */}
          <div className="md:hidden grid grid-cols-1 gap-8">
            {judges.map((judge) => (
              <div key={judge.id} className="faq-item">
                <div className="bg-white/5 backdrop-blur-sm border-2 border-[#165a94] hover:border-[#5fb8dc] transition-all duration-300 p-8 h-full group hover:bg-white/10 relative flex flex-col items-center justify-start">
                  {/* Image */}
                  <div className="w-40 h-40 mb-6 overflow-hidden rounded-full border-4 border-[#5fb8dc]/30 group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <Image
                      src={judge.image}
                      alt={judge.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-white text-center mb-4 font-mono w-full">
                    {judge.name}
                  </h3>

                  {/* Title/Position */}
                  <div className="border-t-2 border-[#165a94]/50 pt-4 w-full">
                    <p className="text-white/80 text-center font-mono text-base leading-relaxed">
                      {judge.title}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#165a94]/20 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Timeline View with Alternating Sides */}
          <div className="hidden md:block space-y-16">
            {judges.map((judge) => {
              const isOdd = parseInt(judge.id) % 2 !== 0;

              return (
                <div key={judge.id} className="relative">
                  {/* Wrapper with border around entire judge */}
                  <div className="bg-white/5 backdrop-blur-sm p-6 lg:p-8 relative transition-all duration-300">
                    <div
                      className={`flex items-center gap-8 ${isOdd ? "flex-row" : "flex-row-reverse"}`}
                    >
                      {/* Image */}
                      <div className="shrink-0">
                        <div className="w-56 h-56 lg:w-64 lg:h-64 overflow-hidden rounded-full border-4 border-[#5fb8dc]/50 hover:scale-105 transition-transform duration-300">
                          <Image
                            src={judge.image}
                            alt={judge.name}
                            width={256}
                            height={256}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1">
                        <div className="p-8 lg:p-10 relative">
                          {/* Name */}
                          <h3
                            className={`text-3xl lg:text-6xl font-bold text-white mb-4 font-mono ${isOdd ? "text-left" : "text-right"}`}
                          >
                            {judge.name}
                          </h3>

                          {/* Title/Position */}
                          <div
                            className={`border-t-2 border-[#165a94]/50 pt-4 ${isOdd ? "border-l-4 pl-4" : "border-r-4 pr-4"}`}
                          >
                            <p
                              className={`text-white/80 font-mono text-lg lg:text-xl leading-relaxed ${isOdd ? "text-left" : "text-right"}`}
                            >
                              {judge.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Corner accents on outer border */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#5fb8dc]"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#5fb8dc]"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#5fb8dc]"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#5fb8dc]"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
