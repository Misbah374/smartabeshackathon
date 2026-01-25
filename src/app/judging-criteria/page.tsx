/** @format */
"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const CRITERIA = [
  {
    subject: "Novelty",
    fullMark: 100,
    description:
      "Innovation and originality of the solution. How unique is your approach?",
  },
  {
    subject: "Articulation",
    fullMark: 100,
    description:
      "Clear understanding and articulation of the problem being solved.",
  },
  {
    subject: "Optimization & Depth",
    fullMark: 100,
    description:
      "Technical depth, efficiency, and optimization of the solution.",
  },
  {
    subject: "Methodology",
    fullMark: 100,
    description:
      "Well-structured approach and systematic problem-solving methodology.",
  },
];

export default function JudgingCriteriaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [chartData, setChartData] = useState(
    CRITERIA.map((c) => ({ subject: c.subject, value: 0, fullMark: 100 })),
  );

  useEffect(() => {
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

    const ctx = gsap.context(() => {
      // Create timeline for sequential animations
      const tl = gsap.timeline({ delay: 0.5 });

      // Animate title
      tl.from(".criteria-title", {
        opacity: 0,
        y: -30,
        duration: 1,
      })
        // Animate divider
        .from(
          ".criteria-divider",
          {
            scaleX: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        // Animate each point sequentially
        .to(animatedValues, {
          point1: 100,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: updateChart,
        })
        .to(
          animatedValues,
          {
            point2: 100,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: updateChart,
          },
          "+=0.5",
        )
        .to(
          animatedValues,
          {
            point3: 100,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: updateChart,
          },
          "+=0.5",
        )
        .to(
          animatedValues,
          {
            point4: 100,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: updateChart,
          },
          "+=0.5",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-screen w-full overflow-hidden blueprint-grid blueprint-grid-sub "
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
        <div className="max-w-7xl mx-auto w-full">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="criteria-title text-5xl md:text-7xl font-bold text-[#165a94] mb-4 tracking-tight">
              Judging Criteria
            </h1>
            <div className="criteria-divider h-1 w-32 bg-[#165a94] mx-auto"></div>
          </div>

          {/* Chart Container */}
          <div className="relative flex items-center justify-center min-h-175">
            {/* Radar Chart */}
            <svg viewBox="0 0 400 400" className="w-full max-w-2xl">
              {/* Grid Lines */}
              {[0.25, 0.5, 0.75, 1].map((scale) => (
                <polygon
                  key={scale}
                  points="200,50 350,200 200,350 50,200"
                  fill="none"
                  stroke="#165a94"
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
                stroke="#165a94"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="200"
                x2="350"
                y2="200"
                stroke="#165a94"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="200"
                x2="200"
                y2="350"
                stroke="#165a94"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="200"
                x2="50"
                y2="200"
                stroke="#165a94"
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
                fill="#165a94"
                fillOpacity="0.6"
                stroke="#165a94"
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
                  fill="#165a94"
                  stroke="#5fb8dc"
                  strokeWidth="2"
                  opacity={point.visible ? 1 : 0}
                  className="transition-opacity duration-300"
                />
              ))}
            </svg>

            {/* Criteria Descriptions - Around the Graph */}
            <div className="absolute inset-0 pointer-events-none">
              {CRITERIA.map((criterion, index) => {
                const isVisible = chartData[index].value > 0;
                const positions = [
                  {
                    position: "top-[2%] left-1/2 -translate-x-1/2",
                  },
                  {
                    position: "top-1/2 right-[2%] -translate-y-1/2",
                  },
                  {
                    position: "bottom-[2%] left-1/2 -translate-x-1/2",
                  },
                  {
                    position: "top-1/2 left-[2%] -translate-y-1/2",
                  },
                ];

                return (
                  <div
                    key={criterion.subject}
                    className={`absolute ${positions[index].position} max-w-xs transition-all duration-700 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                  >
                    <div className="bg-[#5fb8dc]/10 border border-[#165a94] rounded-lg p-4 backdrop-blur-md shadow-2xl pointer-events-auto">
                      <h3 className="text-base font-bold text-[#165a94] mb-2 flex items-center gap-2">
                        <span className="text-lg text-[#104069]">
                          {index + 1}.
                        </span>
                        {criterion.subject}
                      </h3>
                      <p className="text-[#104069] text-sm leading-relaxed">
                        {criterion.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
