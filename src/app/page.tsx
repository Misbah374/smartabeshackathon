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
          "-=1",
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
          },
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
          "<",
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
          "-=0.5",
        )

        .to(
          ".dimension-text",
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.5,
          },
          "-=0.5",
        )

        // 6. Footer / CTA Reveal
        .fromTo(
          ".footer-element",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 },
          "-=0.5",
        )

        // 7. Delayed Slow Spin of the Background Logo
        .to(".logo-bg-img", {
          rotation: 360,
          duration: 60,
          repeat: -1,
          ease: "none",
        });
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="w-full max-h-[calc(100dvh-4rem)] overflow-hidden "
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
        <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center mb-16 select-none">
          <Image
            src="/logo-r.png"
            alt="Schematic Logo Background"
            width={800}
            height={800}
            className="logo-bg-img relative z-0 object-contain drop-shadow-xl select-none"
            priority
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />

          <Image
            src="/logo-circle.png"
            alt="Schematic Logo Foreground"
            width={800}
            height={800}
            className="logo-fg-img object-contain absolute w-[75%] h-[75%] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-10 select-none"
            priority
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Overlay Grid on Logo */}
          <div className="absolute inset-0 blueprint-grid-sub opacity-30 mix-blend-multiply pointer-events-none rounded-full" />
        </div>

        {/* Footer / CTA Section */}
        <div className="absolute bottom-[18%] md:bottom-[12%] flex flex-col items-center gap-6 z-30 w-full max-w-md">
          {/* Social Icons - Above button on mobile, hidden on desktop */}
          <div className="flex md:hidden gap-6 items-center footer-element">
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 transition-transform hover:scale-110"
            >
              <Image
                src="/icons/discord_outline.svg"
                alt="Join us on Discord"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 transition-transform hover:scale-110"
            >
              <Image
                src="/icons/WhatsApp_outline.svg"
                alt="Join us on WhatsApp"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>

          {/* Register Button */}
          <a
            href={REGISTER_LINK}
            className="footer-element group relative inline-block px-8 py-3 overflow-hidden border-2 border-[#165a94] text-[#165a94] bg-[#5fb8dc]/20 backdrop-blur-md font-bold uppercase tracking-widest hover:bg-[#165a94] hover:text-[#5fb8dc] transition-all duration-300"
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

        {/* Social Icons (Bottom Left) - Hidden on mobile, visible on desktop */}
        <div className="absolute bottom-20 left-35 hidden md:flex gap-6 items-center z-30">
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-element group relative p-2 transition-transform hover:scale-110"
          >
            <Image
              src="/icons/discord_outline.svg"
              alt="Join us on Discord"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-element group relative p-2 transition-transform hover:scale-110"
          >
            <Image
              src="/icons/WhatsApp_outline.svg"
              alt="Join us on WhatsApp"
              width={32}
              height={32}
              className="w-8 h-8"
            />
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
