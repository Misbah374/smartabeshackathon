/** @format */

export default function Session1Page() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      {/* SVG Drawing Layer */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <defs>
          <marker
            id="arrow-session"
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
          markerEnd="url(#arrow-session)"
          className="opacity-30"
        />
      </svg>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#165a94] font-mono tracking-tight">
            Session 1: Open Source as an Engineering Classroom, Not a Resume Hack
          </h1>
          <div className="w-32 h-0.5 bg-[#165a94] mx-auto mb-6"></div>
          <div className="flex justify-center items-center gap-8 text-white/80 font-mono">
            <p className="text-lg">📅 01 February 2026</p>
            <p className="text-lg">🕒 9:00 PM</p>
          </div>
        </div>

        {/* Speaker Info Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm border-2 border-[#165a94] p-8">
            <h2 className="text-2xl font-bold text-[#165a94] font-mono mb-4">
              Speaker
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#165a94]/20 rounded-full flex items-center justify-center text-3xl">
                🎤
              </div>
              <div>
                <p className="text-xl font-bold text-white font-mono">
                  Mr. Akshit Batra
                </p>
                <p className="text-white/70 font-mono">Industry Expert</p>
                <p className="text-white/60 font-mono text-sm">
                  Building For Fun
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Session Overview */}
          <section className="bg-white/5 backdrop-blur-sm border-2 border-[#165a94] p-8">
            <h2 className="text-2xl font-bold text-[#165a94] font-mono mb-4 border-b-2 border-[#165a94]/30 pb-2">
                Session Overview
            </h2>
            <div className="text-white/90 font-mono space-y-4">
              {/* Add your content here */}
              <p>
                The session began with a warm welcome and a brief introduction of 
                Mr. Arpit Batra, who has mentored numerous students in contributing 
                to open-source projects.
              </p>
              <p>
                Sir emphasized that open source should be treated as an engineering 
                classroom, not a résumé hack. The core idea of open source, according 
                to him, is “Let’s build it together.” It is about collaboration, learning, 
                and solving real problems, not just collecting contributions.
              </p>
              <p>He highlighted two major issues commonly seen in open-source contributions:</p>
              <ul className="list-disc list-inside">
                <li>README-only commits</li>
                <li>Spam or low-quality pull requests</li>
              </ul>
              <p>
                Sir explained that college education largely focuses on DSA 
                problem-solving and solo coding. On the other hand open source 
                exposes students to real-world software development. It teaches 
                how to work with large, messy codebases, collaborate within 
                teams, and handle production-level bugs.
              </p>
              <p>
                Key Learnings a person will get from Open Source Contribution:
              </p>
              <ul className="list-disc list-inside">
                <li>Reading and understanding large codebases</li>
                <li>Writing maintainable and scalable code</li>
                <li>Participating in meaningful PR discussions</li>
                <li>Handling CI/CD failures</li>
                <li>Debugging production bugs</li>
              </ul>
              <p>
                Suggestions for Beginners:
              </p>
              <ul className="list-disc list-inside">
                <li>Chooses a tech stack you are comfortable with</li>
                <li>Find beginner-friendly issues</li>
                <li>Set short-term, achievable goals.</li>
              </ul>
              <p>
                The speaker challenged the participants with an inspiring call 
                to action "Within 30 days, set up at least one open-source 
                project locally and submit one meaningful pull request, not a 
                typo fix or README change."
              </p>
              <p>
                The session concluded with an interactive Q&A, where Sir 
                addressed participants’ doubts and guided them on starting 
                their open-source journey.
              </p>
            </div>
          </section>

          {/* Resources & Links */}
          <section className="bg-white/5 backdrop-blur-sm border-2 border-[#165a94] p-8">
            <h2 className="text-2xl font-bold text-[#165a94] font-mono mb-4 border-b-2 border-[#165a94]/30 pb-2">
              Resources & Links
            </h2>
            <ul className="text-white/90 font-mono space-y-2">
              {/* Add your resources here */}
              <li>
                <a href="https://youtu.be/-KjeQ4S_KuA?si=hgmZu9NubnVSwevA" className="hover:underline" target="_blank">
                    Session Recording link
                </a>
              </li>
            </ul>
          </section>

          {/* Back Button */}
          <div className="text-center py-8">
            <a
              href="/sessions"
              className="inline-block bg-[#165a94] hover:bg-[#3791c4] text-white font-mono px-8 py-3 border-2 border-[#165a94] hover:border-[#5fb8dc] transition-all duration-300"
            >
              ← Back to Sessions
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
