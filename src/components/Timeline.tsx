/** @format */

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string | string[];
  icon: string;
  type: "major" | "minor" | "mystery";
  supportingText?: string;
  evaluationCriteria?: string[];
  outcome?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "round-1-start",
    date: "Feb 1, 2026",
    title: "Round 1 Begins · Design & Algorithmic Thinking Phase",
    description:
      "Participants select a problem statement and begin deep analysis, ideation, and system design. Focus is on thinking, not full implementation.",
    icon: "🚀",
    type: "major",
    supportingText: "No full implementation required at this stage",
  },
  {
    id: "mystery-1",
    date: "Throughout Round 1",
    title: "Mystery Learning Drop",
    description: [
      "Industry experts will host sessions focused on:",
      "• Practical algorithm usage",
      "• Fast full-stack development",
      "• Real-world engineering thinking",
    ],
    icon: "❓",
    type: "mystery",
    supportingText: "Supportive · Non-evaluative · Learning-focused",
  },
  {
    id: "iteration",
    date: "Throughout Round 1",
    title: "Iteration & Refinement",
    description:
      "Teams rethink assumptions, refine approaches, and strengthen algorithmic depth. This phase validates revisiting and improving ideas.",
    icon: "🧠",
    type: "minor",
    supportingText: "Overthinking is welcomed and encouraged",
  },
  {
    id: "round-1-eval",
    date: "Feb 14, 2026",
    title: "Round 1 Evaluation · Proposal Presentation",
    description:
      "Teams present their proposed solution using a PPT, explaining problem understanding, system approach, and proposed DSA usage and reasoning.",
    icon: "🧪",
    type: "major",
    evaluationCriteria: [
      "Novelty",
      "Understanding of the Problem Statement",
      "Methodology",
      "Depth",
    ],
    outcome: "Top 30 teams selected (10 per track)",
  },
  {
    id: "round-2-start",
    date: "Feb 28, 2026",
    title: "Round 2 · Implementation Phase",
    description:
      "Shortlisted teams move into execution and building, implementing the ideas developed during Round 1.",
    icon: "⚡",
    type: "major",
  },
];

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!timelineRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the vertical line drawing based on scroll
      gsap.to(lineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      // Animate each timeline event
      eventsRef.current.forEach((event) => {
        if (!event) return;

        // Initial state
        gsap.set(event, {
          opacity: 0,
          y: 50,
        });

        // Fade in with upward motion
        gsap.to(event, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: event,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        });

        // Active state (add class for styling)
        ScrollTrigger.create({
          trigger: event,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => {
            event.classList.add("timeline-active");
          },
          onLeave: () => {
            event.classList.remove("timeline-active");
          },
          onEnterBack: () => {
            event.classList.add("timeline-active");
          },
          onLeaveBack: () => {
            event.classList.remove("timeline-active");
          },
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={timelineRef} className="relative max-w-5xl mx-auto">
      {/* Vertical Timeline Line */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5">
        <div className="absolute inset-0 bg-[#3791c4] opacity-40"></div>
        <div
          ref={lineRef}
          className="absolute top-0 left-0 right-0 h-0 bg-[#165a94]"
        ></div>
      </div>

      {/* Timeline Events */}
      <div className="space-y-12 md:space-y-16">
        {timelineEvents.map((event, index) => {
          const isMajor = event.type === "major";
          const isMystery = event.type === "mystery";

          return (
            <div
              key={event.id}
              ref={(el) => {
                eventsRef.current[index] = el;
              }}
              className="relative flex items-center"
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-16 transform -translate-x-1/2 z-10">
                <div
                  className={`
                  ${isMajor ? "w-16 h-16" : "w-12 h-12"}
                  rounded-full 
                  bg-[#5fb8dc]
                  border-4 border-[#165a94]
                  flex items-center justify-center
                  text-2xl
                  shadow-lg
                  transition-shadow duration-300
                `}
                >
                  {event.icon}
                </div>
              </div>

              {/* Event Card */}
              <div className="w-full pl-20 md:pl-32">
                <div
                  className={`
                  timeline-card
                  p-6 md:p-8 
                  bg-white/3 backdrop-blur-sm
                  border-2 
                  ${
                    isMajor
                      ? "border-[#165a94]"
                      : isMystery
                        ? "border-[#3791c4]"
                        : "border-[#5fb8dc]/50"
                  }
                  hover:bg-white/10
                  transition-all duration-300
                  font-mono
                `}
                >
                  {/* Date */}
                  <div className="text-sm font-bold mb-2 text-white/70 tracking-wider">
                    {event.date}
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                    ${isMajor ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}
                    font-bold mb-4
                    text-white
                    tracking-tight
                  `}
                  >
                    {event.title}
                  </h3>

                  {/* Description */}
                  <div className="text-white/80 mb-4 leading-relaxed text-sm">
                    {Array.isArray(event.description) ? (
                      <div className="space-y-2">
                        {event.description.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    ) : (
                      <p>{event.description}</p>
                    )}
                  </div>

                  {/* Evaluation Criteria */}
                  {event.evaluationCriteria && (
                    <div className="mb-4 p-4 bg-[#165a94]/30 border border-[#165a94]">
                      <p className="font-bold text-white mb-2 text-sm">
                        EVALUATION CRITERIA:
                      </p>
                      <ul className="space-y-1 text-xs text-white/90">
                        {event.evaluationCriteria.map((criteria, i) => (
                          <li key={i}>▸ {criteria}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Outcome */}
                  {event.outcome && (
                    <div className="mb-4 p-3 bg-[#3791c4]/30 border border-[#3791c4]">
                      <p className="font-bold text-white text-sm">
                        ✓ OUTCOME: {event.outcome}
                      </p>
                    </div>
                  )}

                  {/* Supporting Text */}
                  {event.supportingText && (
                    <div className="text-xs italic text-white/60 mt-3 border-t border-white/20 pt-3">
                      {event.supportingText}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Extra spacing for scroll animation */}
      <div className="h-32"></div>

      {/* Global styles for active timeline */}
      <style jsx global>{`
        .timeline-active .timeline-card {
          background-color: rgba(255, 255, 255, 0.15) !important;
          filter: drop-shadow(0 0 16px rgba(22, 90, 148, 0.6));
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
