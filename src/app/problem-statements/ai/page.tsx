/** @format */

import Link from "next/link";

const AI = () => {
  return (
    <div className="min-h-screen w-full px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 mt-10">
          <h1 className="text-5xl font-bold text-[#165a94] mb-4 font-mono">
            AI Problem Statements
          </h1>
          <div className="h-1 w-32 bg-[#165a94] mb-6"></div>
        </div>

        {/* Problem Statements List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PS-1 */}
          <Link href="/problem-statements/ai/ps-1">
            <div className="bg-[#165a94]/10 backdrop-blur-sm border-2 border-[#165a94] p-8 rounded-lg hover:bg-[#165a94]/20 transition-all duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-xl font-semibold text-white mb-3">
                Automated Resume Information Extraction, Scoring, and Ranking
                System
              </h3>
              <p className="text-white/70 text-sm">
                Design an automated system for resume parsing, scoring, and
                ranking using algorithmic approaches. Extract structured
                information from diverse formats and rank candidates
                objectively.
              </p>
            </div>
          </Link>

          {/* Add more problem statements here */}
        </div>
      </div>
    </div>
  );
};

export default AI;
