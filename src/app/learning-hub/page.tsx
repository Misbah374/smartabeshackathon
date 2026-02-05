/** @format */

import LearningDrop from "@/components/LearningDrop";

export default function LearningDropPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      {/* SVG Drawing Layer */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
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
      </svg>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#165a94] font-mono tracking-tight">
            LEARNING HUB
          </h1>
          <div className="w-32 h-0.5 bg-[#165a94] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-mono">
            Expert sessions to enhance your learning journey
          </p>
        </div>
        <LearningDrop />
      </div>
    </main>
  );
}
