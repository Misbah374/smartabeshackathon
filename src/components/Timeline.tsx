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
    id: "speaker-session",
    date: "Feb 1, 2026",
    title: "Sessions: To boost the learning process",
    description:[
      "• Session 1: Participants will learn about open source contributions by Mr. Akshit Batra.",
    ],
    icon: "🎤",
    type: "minor",
    supportingText: "Learning session · Non-evaluative",
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
    icon: "🎓",
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
    date: "Feb 16, 2026",
    title: "Round 2 · Implementation Phase",
    description:
      "Shortlisted teams move into execution and building, implementing the ideas developed during Round 1.",
    icon: "⚡",
    type: "major",
  },
  {
    id: "final-day",
    date: "Feb 28, 2026",
    title: "Final Day!",
    description:
      "Top 30 teams present their complete working solutions to judges. Final evaluations, live demonstrations, and winner announcements.",
    icon: "🏆",
    type: "major",
    supportingText: "The moment of truth · Where champions emerge",
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
          const isStart = event.id === "round-1-start";
          const isFirstEval = event.id === "round-1-eval";
          const isFinal = event.id === "final-day";

          // Define unique styling for each special event
          let nodeStyle = "";
          let cardBorder = "";
          let cardBg = "bg-white/3";
          let activeClass = "";

          if (isStart) {
            nodeStyle = "bg-[#5fb8dc] border-[#165a94]";
            cardBorder = "border-[#165a94] border-l-4";
            activeClass = "event-start";
          } else if (isMystery) {
            nodeStyle = "bg-[#3791c4] border-[#165a94]";
            cardBorder = "border-[#3791c4]/50 border-dashed";
            cardBg = "bg-[#3791c4]/5";
            activeClass = "event-mystery";
          } else if (isFirstEval) {
            nodeStyle = "bg-[#165a94] border-[#165a94]";
            cardBorder = "border-[#165a94]";
            activeClass = "event-eval";
          } else if (isFinal) {
            nodeStyle = "bg-[#165a94] border-[#165a94]";
            cardBorder = "border-[#165a94] border-4";
            activeClass = "event-final";
          } else {
            nodeStyle = "bg-[#5fb8dc] border-[#165a94]";
            cardBorder = isMajor ? "border-[#165a94]" : "border-[#5fb8dc]/50";
          }

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
                  ${isFinal ? "w-20 h-20 text-3xl" : "w-16 h-16 text-2xl"}
                  rounded-full 
                  ${nodeStyle}
                  border-4
                  flex items-center justify-center
                  shadow-lg
                  transition-all duration-300
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
                  ${activeClass}
                  p-6 md:p-8 
                  ${cardBg} backdrop-blur-sm
                  border-2 
                  ${cardBorder}
                  hover:bg-white/10
                  transition-all duration-300
                  font-mono
                  relative
                  overflow-hidden
                `}
                >
                  {/* Decorative corner for final event */}
                  {isFinal && (
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                      <div className="absolute top-0 right-0 border-t-2 border-r-2 border-white w-full h-full"></div>
                    </div>
                  )}

                  {/* Date */}
                  <div className="text-sm font-bold mb-2 tracking-wider text-white/70">
                    {event.date}
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                    ${isMajor ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}
                    ${isFinal ? "text-3xl md:text-4xl" : ""}
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
                    <div className="mb-4 p-4 bg-[#165a94]/20 border border-[#165a94]/50">
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
                    <div className="mb-4 p-3 bg-[#3791c4]/20 border border-[#3791c4]/50">
                      <p className="font-bold text-white text-sm">
                        ✓ OUTCOME: {event.outcome}
                      </p>
                    </div>
                  )}

                  {/* Supporting Text */}
                  {event.supportingText && (
                    <div className="text-xs italic mt-3 border-t border-white/20 pt-3 text-white/60">
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

      {/* Global styles for active timeline - subtle blueprint style */}
      <style jsx global>{`
        /* Start Event */
        .timeline-active .event-start {
          background: rgba(22, 90, 148, 0.15) !important;
          filter: drop-shadow(0 0 12px rgba(22, 90, 148, 0.5));
          border-left-width: 6px !important;
        }

        /* Mystery Drop */
        .timeline-active .event-mystery {
          background: rgba(55, 145, 196, 0.15) !important;
          filter: drop-shadow(0 0 12px rgba(55, 145, 196, 0.5));
        }

        /* Evaluation */
        .timeline-active .event-eval {
          background: rgba(22, 90, 148, 0.2) !important;
          filter: drop-shadow(0 0 12px rgba(22, 90, 148, 0.6));
        }

        /* Final Day */
        .timeline-active .event-final {
          background: rgba(22, 90, 148, 0.25) !important;
          filter: drop-shadow(0 0 16px rgba(22, 90, 148, 0.7));
          border-width: 6px !important;
        }

        /* Default active state */
        .timeline-active
          .timeline-card:not(.event-start):not(.event-mystery):not(
            .event-eval
          ):not(.event-final) {
          background-color: rgba(255, 255, 255, 0.1) !important;
          filter: drop-shadow(0 0 10px rgba(22, 90, 148, 0.4));
        }
      `}</style>
    </div>
  );
}
