/** @format */
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CRITERIA = [
  { subject: "Novelty", fullMark: 100 },
  { subject: "Articulation", fullMark: 100 },
  { subject: "Optimization & Depth", fullMark: 100 },
  { subject: "Methodology", fullMark: 100 },
];

export default function JudgingCriteriaPage() {
  const [chartData, setChartData] = useState(
    CRITERIA.map((c) => ({ subject: c.subject, value: 0, fullMark: 100 })),
  );
  const [chartVisible, setChartVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const point1Ref = useRef<HTMLDivElement>(null);
  const point2Ref = useRef<HTMLDivElement>(null);
  const point3Ref = useRef<HTMLDivElement>(null);
  const point4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Object to hold animated values
    const animatedValues = {
      point1: 0,
      point2: 0,
      point3: 0,
      point4: 0,
    };

    // Function to update chart data
    const updateChart = () => {
      setChartData([
        {
          subject: CRITERIA[0].subject,
          value: animatedValues.point1,
          fullMark: 100,
        },
        {
          subject: CRITERIA[1].subject,
          value: animatedValues.point2,
          fullMark: 100,
        },
        {
          subject: CRITERIA[2].subject,
          value: animatedValues.point3,
          fullMark: 100,
        },
        {
          subject: CRITERIA[3].subject,
          value: animatedValues.point4,
          fullMark: 100,
        },
      ]);
    };

    // Show chart on scroll
    ScrollTrigger.create({
      trigger: titleRef.current,
      start: "bottom 70%",
      onEnter: () => setChartVisible(true),
      onLeaveBack: () => setChartVisible(false),
    });

    // Animate Point 1 (Novelty) - tied to scroll
    gsap.to(animatedValues, {
      point1: 100,
      scrollTrigger: {
        trigger: point1Ref.current,
        start: "top bottom",
        end: "bottom center",
        scrub: 0.5,
        onUpdate: () => updateChart(),
      },
    });

    // Animate Point 2 (Articulation) - starts after point 1
    gsap.to(animatedValues, {
      point2: 100,
      scrollTrigger: {
        trigger: point2Ref.current,
        start: "top bottom",
        end: "bottom center",
        scrub: 0.5,
        onUpdate: () => updateChart(),
      },
    });

    // Animate Point 3 (Optimization & Depth) - starts after point 2
    gsap.to(animatedValues, {
      point3: 100,
      scrollTrigger: {
        trigger: point3Ref.current,
        start: "top bottom",
        end: "bottom center",
        scrub: 0.5,
        onUpdate: () => updateChart(),
      },
    });

    // Animate Point 4 (Methodology) - starts after point 3
    gsap.to(animatedValues, {
      point4: 100,
      scrollTrigger: {
        trigger: point4Ref.current,
        start: "top bottom",
        end: "bottom center",
        scrub: 0.5,
        onUpdate: () => updateChart(),
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-semibold">Back to Home</span>
        </Link>
      </div>

      <section ref={sectionRef} className="min-h-[300vh] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div
            ref={titleRef}
            className="text-center mb-[30vh] min-h-screen flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Judging Criteria
            </h1>
            <div className="h-1 w-32 bg-linear-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          {/* Radar Chart */}
          <div
            ref={chartRef}
            className={`sticky top-20 z-10 min-h-150 flex items-center justify-center transition-all duration-1000 ${
              chartVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            {/* Custom SVG Radar Chart */}
            <svg viewBox="0 0 400 400" className="w-full max-w-2xl h-150">
              {/* Grid Lines */}
              {[0.25, 0.5, 0.75, 1].map((scale) => (
                <polygon
                  key={scale}
                  points="200,50 350,200 200,350 50,200"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  opacity={0.3}
                  transform={`translate(200, 200) scale(${scale}) translate(-200, -200)`}
                />
              ))}

              {/* Axis Lines */}
              <line
                x1="200"
                y1="200"
                x2="200"
                y2="50"
                stroke="#475569"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="200"
                x2="350"
                y2="200"
                stroke="#475569"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="200"
                x2="200"
                y2="350"
                stroke="#475569"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="200"
                x2="50"
                y2="200"
                stroke="#475569"
                strokeWidth="1"
              />

              {/* Data Polygon */}
              <polygon
                points={`
                  200,${200 - chartData[0].value * 1.5}
                  ${200 + chartData[1].value * 1.5},200
                  200,${200 + chartData[2].value * 1.5}
                  ${200 - chartData[3].value * 1.5},200
                `}
                fill="#8b5cf6"
                fillOpacity="0.6"
                stroke="#8b5cf6"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              {/* Corner Points */}
              {[
                {
                  x: 200,
                  y: 200 - chartData[0].value * 1.5,
                  visible: chartData[0].value > 0,
                },
                {
                  x: 200 + chartData[1].value * 1.5,
                  y: 200,
                  visible: chartData[1].value > 0,
                },
                {
                  x: 200,
                  y: 200 + chartData[2].value * 1.5,
                  visible: chartData[2].value > 0,
                },
                {
                  x: 200 - chartData[3].value * 1.5,
                  y: 200,
                  visible: chartData[3].value > 0,
                },
              ].map((point, index) => (
                <circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="6"
                  fill="#8b5cf6"
                  stroke="white"
                  strokeWidth="2"
                  opacity={point.visible ? 1 : 0}
                  className="transition-opacity duration-300"
                />
              ))}

              {/* Labels */}
              <text
                x="200"
                y="35"
                textAnchor="middle"
                fill="#e2e8f0"
                fontSize="14"
                fontWeight="600"
              >
                {CRITERIA[0].subject}
              </text>
              <text
                x="365"
                y="205"
                textAnchor="start"
                fill="#e2e8f0"
                fontSize="14"
                fontWeight="600"
              >
                {CRITERIA[1].subject}
              </text>
              <text
                x="200"
                y="380"
                textAnchor="middle"
                fill="#e2e8f0"
                fontSize="14"
                fontWeight="600"
              >
                {CRITERIA[2].subject}
              </text>
              <text
                x="35"
                y="205"
                textAnchor="end"
                fill="#e2e8f0"
                fontSize="14"
                fontWeight="600"
              >
                {CRITERIA[3].subject}
              </text>
            </svg>

            {/* Point Labels with Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {CRITERIA.map((criterion, index) => {
                const isVisible = chartData[index].value > 0;
                const positions = [
                  { top: "10%", left: "50%", transform: "translate(-50%, 0)" }, // Top
                  { top: "50%", right: "5%", transform: "translate(0, -50%)" }, // Right
                  {
                    bottom: "10%",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }, // Bottom
                  { top: "50%", left: "5%", transform: "translate(0, -50%)" }, // Left
                ];

                return (
                  <div
                    key={criterion.subject}
                    className={`absolute transition-all duration-700 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                    style={positions[index]}
                  >
                    <div className="bg-linear-to-br from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-2xl border border-white/20 backdrop-blur-sm">
                      <span className="text-sm md:text-base font-semibold">
                        {criterion.subject}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Criteria Descriptions - Around the Graph */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                {
                  position: "top-[5%] right-[5%]",
                  text: "Innovation and originality of the solution. How unique is your approach?",
                },
                {
                  position: "bottom-[5%] right-[5%]",
                  text: "Clear understanding and articulation of the problem being solved.",
                },
                {
                  position: "bottom-[5%] left-[5%]",
                  text: "Technical depth, efficiency, and optimization of the solution.",
                },
                {
                  position: "top-[5%] left-[5%]",
                  text: "Well-structured approach and systematic problem-solving methodology.",
                },
              ].map((desc, index) => (
                <div
                  key={index}
                  className={`absolute ${desc.position} max-w-50 transition-all duration-700 ${
                    chartData[index].value > 50
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                >
                  <div className="bg-slate-800/95 border border-slate-700 rounded-lg p-3 backdrop-blur-md shadow-2xl pointer-events-auto">
                    <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-1">
                      <span className="text-base text-purple-400">
                        {index + 1}.
                      </span>
                      {CRITERIA[index].subject}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {desc.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Trigger Points (invisible divs to trigger animations) */}
          <div ref={point1Ref} className="h-[30vh]" />
          <div ref={point2Ref} className="h-[30vh]" />
          <div ref={point3Ref} className="h-[30vh]" />
          <div ref={point4Ref} className="h-[30vh]" />

          {/* Scroll Indicator */}
          {chartData.filter((d) => d.value > 0).length < 4 && (
            <div className="text-center mt-12 animate-bounce">
              <p className="text-slate-400 text-sm">
                Scroll to reveal all criteria
              </p>
              <svg
                className="w-6 h-6 mx-auto mt-2 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
