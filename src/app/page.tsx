/** @format */
"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Placeholder Variables
const DISCORD_LINK = "https://discord.gg/ZCUdP4nwDh";
const WHATSAPP_LINK = "https://chat.whatsapp.com/JtmozxCOd2mEojTONjOn7c";
const REGISTER_LINK = "https://devnovate.co/event/sah-20";

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
            scale: 0.4,
            filter: "grayscale(100%) contrast(1.2)",
          },
          {
            opacity: 1,
            scale: 0.7,
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
            scale: 0.72,
            duration: 1.5,
            ease: "back.out(1.2)",
          },
          "<"
        )

        // 5. Annotations Typewriter
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

        // 6. Footer / CTA Reveal
        .fromTo(
          ".footer-element",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 },
          "-=0.5"
        )

        // 7. Delayed Slow Spin of the Background Logo
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
        {/* Outer Border Box */}
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
        // FUCK U{/* Leader Line for Material */}
        {/* <path
          d="M300,150 L350,250"
          stroke="#165a94"
          strokeWidth="1"
          fill="none"
          className="border-line opacity-0 md:block hidden"
          style={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        /> */}
      </svg>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center p-6">
        {/* Measurement Labels */}
        <div className="absolute top-[7%] left-1/2 -translate-x-1/2 bg-[#5fb8dc] px-2 text-[#165a94] text-sm font-bold dimension-text opacity-0">
          3/4&quot;
        </div>
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 -rotate-90 bg-[#5fb8dc] px-2 text-[#165a94] text-sm font-bold dimension-text opacity-0">
          51
        </div>
        <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 bg-[#5fb8dc] px-2 text-[#165a94] text-sm font-bold dimension-text opacity-0">
          3/4&quot;
        </div>

        {/* Main Logo Group */}
        <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center mb-16">
          <Image
            src="/logo-r.png"
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
            className="logo-fg-img object-contain absolute w-[75%] h-[75%] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-10"
            priority
          />

          {/* Overlay Grid on Logo */}
          <div className="absolute inset-0 blueprint-grid-sub opacity-30 mix-blend-multiply pointer-events-none rounded-full" />
        </div>

        {/* Footer / CTA Section */}
        <div className="absolute bottom-[12%] flex flex-col items-center gap-6 z-30 w-full max-w-md">
          {/* Register Button */}
          <a
            href={REGISTER_LINK}
            className="footer-element group relative px-8 py-3 overflow-hidden border-2 border-[#165a94] text-[#165a94] font-bold uppercase tracking-widest hover:bg-[#165a94] hover:text-[#5fb8dc] transition-all duration-300"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#165a94] group-hover:h-full transition-all duration-300 z-0 opacity-20"></div>

            {/* Decorative Corner Marks */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#165a94]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#165a94]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#165a94]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#165a94]"></div>
          </a>
        </div>

        {/* Social Icons (Bottom Left) */}
        <div className="absolute bottom-20 left-35 flex gap-6 items-center z-30">
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-element group relative p-2 transition-transform hover:scale-110"
          >
            <svg
              className="w-8 h-8 fill-[#165a94] group-hover:fill-[#104069] transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-element group relative p-2 transition-transform hover:scale-110"
          >
            <svg
              className="w-8 h-8 fill-[#165a94] group-hover:fill-[#104069] transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </a>
        </div>

        {/* Annotations */}
        <div className="absolute top-[15%] left-[10%] md:left-[30%] text-[#104069] text-sm md:text-base font-bold">
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
