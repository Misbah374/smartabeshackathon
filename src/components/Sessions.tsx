/** @format */

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Session {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string[];
  speaker: {
    name: string;
    designation: string;
  };
  icon: string;
  organization?: string;
  link?: string;
}

const sessions: Session[] = [
  {
    id: "session-1",
    title: "Open Source as an Engineering Classroom, Not a Resume Hack",
    date: "01 February 2026",
    time: "9:00 PM",
    description: [
      "Learning isn't about padding resumes it's about building skills that last.",
      "Akshit Batra sir is coming on behalf of Building For Fun with a powerful session on 'Open Source as an Engineering Classroom, Not a Resume Hack' Real talk.",
      "Real engineering. Real impact.",
    ],
    speaker: {
      name: "Mr. Akshit Batra",
      designation: "Industry Expert",
    },
    icon: "🎤",
    organization: "Building For Fun",
    link: "/sessions/session-1",
  },
];

export default function Sessions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sessionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate each session card
      sessionsRef.current.forEach((session, index) => {
        if (!session) return;

        // Initial state
        gsap.set(session, {
          opacity: 0,
          y: 50,
        });

        // Fade in with upward motion
        gsap.to(session, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: session,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto w-full">
      {sessions.map((session, index) => (
        <div
          key={session.id}
          ref={(el) => {
            sessionsRef.current[index] = el;
          }}
          className="mt-16 first:mt-0"
        >
          <Link href={session.link || "#"} className={session.link ? "cursor-pointer" : "cursor-default"}>
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
                      {session.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-mono tracking-tight">
                        {session.title}
                      </h3>
                      <p className="font-mono text-sm mt-1">
                        📅 {session.date} {session.time}
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
                    {session.description.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-white/90 text-lg leading-relaxed font-mono mb-4 last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Speaker Section */}
                <div className="bg-[#165a94]/20 border-2 border-[#165a94]/50 p-6">
                  <p className="text-white/70 font-mono text-xs mb-2 tracking-wider">
                    SPEAKER
                  </p>
                  <div>
                    <p className="text-white font-mono text-xl font-bold">
                      {session.speaker.name}
                    </p>
                    <p className="font-mono text-sm">
                      {session.speaker.designation}
                    </p>
                    {session.organization && (
                      <p className="font-mono text-xs text-white/70 mt-1">
                        {session.organization}
                      </p>
                    )}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#165a94]/30 pointer-events-none"></div>
              </div>
            </div>

            {/* Hover Shadow Effect */}
            <div className="absolute inset-0 -z-10 bg-[#165a94]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
