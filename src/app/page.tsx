/** @format */
"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // 1. Grid & Background Reveal
      tl.to(".blueprint-layer", {
        opacity: 1,
        duration: 2,
      })

        // 2. Draw Major Lines (Borders)
        .to(
          ".border-line",
          {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 1.5,
            stagger: 0.2,
          },
          "-=1"
        )

        // 3. Arrow Heads pop in
        .to(".arrow-head", {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.1,
        })

        // 4. Logo Entrance
        .fromTo(
          ".logo-bg-img",
          {
            opacity: 0,
            scale: 0.8,
            filter: "grayscale(100%) contrast(1.2)",
          },
          {
            opacity: 1,
            scale: 1,
            filter: "grayscale(0%) contrast(1)",
            duration: 1.5,
            ease: "power2.inOut",
          }
        )
        .fromTo(
          ".logo-fg-img",
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "back.out(1.2)",
          },
          "<"
        )

        // 5. Annotations Typewriter effect
        .to(
          ".annotation-text",
          {
            text: {
              value: "Material: Hardened Steel",
              delimiter: "",
            },
            opacity: 1,
            duration: 1,
          },
          "-=0.5"
        )
        .to(
          ".dimension-text",
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.5,
          },
          "-=0.5"
        )

        // 6. Delayed Slow Spin of the Background Logo
        .to(".logo-bg-img", {
          rotation: 360,
          duration: 60,
          repeat: -1,
          ease: "none",
        });
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden blueprint-grid blueprint-grid-sub select-none"
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 vignette pointer-events-none z-20" />

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

        {/* Outer Border Box (51 height equivalent) */}
        <rect
          x="5%"
          y="5%"
          width="90%"
          height="90%"
          fill="none"
          stroke="#165a94"
          strokeWidth="2"
          className="border-line opacity-0"
          style={{ strokeDasharray: 4000, strokeDashoffset: 4000 }}
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
          className="border-line opacity-0"
          style={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
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
          className="border-line opacity-0"
          style={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        />

        {/* Bottom Dimension Line */}
        <line
          x1="5%"
          y1="90%"
          x2="95%"
          y2="90%"
          stroke="#165a94"
          strokeWidth="1"
          markerStart="url(#arrow-start)"
          markerEnd="url(#arrow-end)"
          className="border-line opacity-0"
          style={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        />

        {/* Right Dimension Line (Partial) */}
        <line
          x1="92%"
          y1="20%"
          x2="92%"
          y2="80%"
          stroke="#165a94"
          strokeWidth="1"
          className="border-line opacity-0"
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        />

        {/* Leader Line for Material */}
        <path
          d="M300,150 L350,250"
          stroke="#165a94"
          strokeWidth="1"
          fill="none"
          className="border-line opacity-0 md:block hidden"
          style={{ strokeDasharray: 200, strokeDashoffset: 200 }}
        />
      </svg>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center p-8">
        {/* Top Measurement Text */}
        <div className="absolute top-[7%] left-1/2 -translate-x-1/2 bg-[#5fb8dc] px-2 text-[#165a94] text-sm font-bold dimension-text opacity-0">
          3/4&quot;
        </div>

        {/* Left Measurement Text */}
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 -rotate-90 bg-[#5fb8dc] px-2 text-[#165a94] text-sm font-bold dimension-text opacity-0">
          51
        </div>

        {/* Bottom Measurement Text */}
        <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 bg-[#5fb8dc] px-2 text-[#165a94] text-sm font-bold dimension-text opacity-0">
          3/4&quot;
        </div>

        {/* Main Logo */}
        <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Schematic Logo Background"
            width={800}
            height={800}
            className="logo-bg-img relative z-0 object-contain drop-shadow-xl"
            priority
          />

          <Image
            src="/logo-circle.png"
            alt="Schematic Logo Foreground"
            width={800}
            height={800}
            className="logo-fg-img object-contain absolute w-[75%] h-[75%] top-1/2 left-1/2 -translate-x-[51%] -translate-y-[49%] z-10"
            priority
          />

          {/* Overlay Grid on Logo to make it look printed on paper */}
          <div className="absolute inset-0 blueprint-grid-sub opacity-30 mix-blend-multiply pointer-events-none rounded-full" />
        </div>

        {/* Annotations */}
        <div className="absolute top-[15%] left-[10%] md:left-[20%] text-[#104069] text-sm md:text-base font-bold">
          <div className="border-b border-[#165a94] mb-1 pb-1 inline-block opacity-0 dimension-text">
            Material:
          </div>
          <div className="opacity-0 dimension-text">Hardened Steel</div>
        </div>

        <div className="absolute top-[15%] right-[10%] md:right-[20%] text-[#104069] text-sm md:text-base font-bold text-right">
          <div className="opacity-0 dimension-text">Module 2.5 Gears</div>
          <div className="border-t border-[#165a94] mt-1 pt-1 w-32 ml-auto opacity-0 dimension-text"></div>
        </div>

        <div className="absolute bottom-[15%] right-[10%] text-[#104069] text-sm md:text-base font-bold text-right">
          <div className="opacity-0 dimension-text">Module 2.5 Gears</div>
        </div>
      </div>
    </main>
  );
}
