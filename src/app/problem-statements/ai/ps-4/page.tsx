/** @format */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Problem Statement 4 - AI-Driven Interview Video Processing for Behavioral Trait Extraction - Smart ABES Hackathon",
  description:
    "Problem Statement 4: Build an AI-driven system for processing interview videos to extract behavioral traits.",
  openGraph: {
    title:
      "Problem Statement 4 - AI-Driven Interview Video Processing for Behavioral Trait Extraction",
    description:
      "Build an AI-driven system for processing interview videos to extract behavioral traits",
    type: "website",
    url: "https://smartabeshackathon.tech/problem-statements/ai/ps-4",
  },
};

const AIPS4 = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 select-text">
      <h1 className="text-4xl font-bold mb-2">
        AI-Driven Interview Video Processing for Behavioral Trait Extraction
      </h1>
      <p className="text-gray-600 mb-8">
        Context & Background in Modern Interview Evaluation
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In modern recruitment and remote hiring ecosystems, video interviews 
          have become a primary medium for candidate assessment. While verbal 
          responses are important, behavioral cues such as posture, facial 
          expressions, gaze patterns, speaking rhythm, confidence indicators, 
          and environmental interaction provide deeper insight into candidate 
          intent, engagement, and personality traits.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Manual evaluation of these signals is subjective, inconsistent, and 
          difficult to scale. There is a growing need for an automated AI-driven 
          system that can analyze interview videos and convert behavioral signals 
          into structured, measurable, and interpretable insights.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Such a system must process multimodal data (video + audio), handle 
          variability in recording environments, and produce objective, 
          explainable behavioral analytics that assist human decision-making 
          rather than replace it.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Why the Problem Matters</h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Behavioral assessment plays a crucial role in interview outcomes, yet 
          it is often influenced by interviewer bias, fatigue, and inconsistency. 
          Automated behavioral analysis enables:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Objective and reproducible candidate evaluation
          </li>
          <li>
            Scalable processing of large interview volumes  
          </li>
          <li>
            Reduced interviewer bias
          </li>
          <li>
            Data-driven decision support for hiring teams
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Core Engineering Challenge
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Design an AI/ML system capable of:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Processing recorded interview videos 
          </li>
          <li>
            Extracting multimodal behavioral features 
          </li>
          <li>
            Quantifying behavioral traits into structured metrics 
          </li>
          <li>
            Generating interpretable and explainable outputs
          </li>
        </ul>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The system must be robust to lighting changes, background noise, 
          camera variations, and diverse candidate demographics without manual 
          preprocessing.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Core Objectives
        </h2>
        
        {/*Yahan se shuru hoga*/} 
        <ol className="list-decimal list-inside ml-4 mb-4 space-y-2">
          <li>
            Extract Multimodal Behavioral Features 
            <p>
                Detect facial expressions, gaze direction, posture, gestures, 
                speaking tempo, pitch variation, pauses, and environmental 
                attention shifts.
            </p>
          </li>
          <li>
            Quantify Behavioral Traits
            <p>
                Translate signals into metrics such as Confidence Score, 
                Engagement Index, Focus Consistency, Stress Indicators, and 
                External Reference Usage.
            </p>
          </li>
          <li>
            Ensure Explainability  
            <p>
                Provide evidence-backed reasoning for each behavioral score.
            </p>
          </li>
          <li>
            Handle Variability
            <p>
                Maintain reliable performance across diverse recording 
                environments and video quality.
            </p>
          </li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Expected Technical Outcomes
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Reliable detection of visual and audio behavioral markers  
          </li>
          <li>
            Conversion of raw signals into standardized behavioral metrics
          </li>
          <li>
            Explainable trait scoring model  
          </li>
          <li>
            Batch processing capability for 50+ videos  
          </li>
          <li>
            Structured report or dashboard output
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Constraints & Assumptions
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Input videos may vary in format, lighting, angle, and audio quality
          </li>
          <li>
            No manual tagging or preprocessing allowed 
          </li>
          <li>
            System must work without requiring high-end inference hardware
          </li>
          <li>
            Models must avoid demographic bias 
          </li>
          <li>
            Interviews primarily in English
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Algorithmic Focus</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Participants are expected to apply techniques in:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Computer Vision (pose estimation, gaze tracking, expression recognition)  
          </li>
          <li>
            Speech Processing (prosody, pause detection, speech rate analysis)  
          </li>
          <li>
            Multimodal fusion  
          </li>
          <li>
            Behavioral scoring logic and normalization
          </li>
          <li>
            Explainable AI methods
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Evaluation Criteria</h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Mandatory Requirements </li>
          <li>
            Extraction of at least five behavioral metrics per video
          </li>
          <li>Generation of trait scores</li>
          <li>Processing of 50 videos within defined compute constraints</li>
          <li>Explainable scoring methodology</li>
          <li>
            Nice to have Features:
            <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Behavioral event timeline visualization</li>
            <li>Confidence/uncertainty score per trait</li>
            <li>Multi-camera support</li>
            <li>Transcript-behavior correlation</li>
            </ul>
          </li>
        </ul>
        
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Acceptance Threshold
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Stable processing without system failures
          </li>
          <li>
            Consistent behavioral scoring outputs  
          </li>
          <li>
            Interpretable analytics for each candidate
          </li>
          <li>
            Robustness across diverse recording conditions
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Components</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Your system should include these technical components:
        </p>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">
              Pathfinding (Graph Traversal)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Use algorithms like BFS/DFS to unlock &quot;downstream&quot;
              concepts based on prerequisite mastery. For example, you cannot
              learn about page tables until you understand basic memory
              allocation.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">
              Difficulty Scaling (Adaptive Control)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Use reinforcement learning or control algorithms to maintain the
              &quot;Flow State&quot; by tuning system variables in real-time.
              Keep challenges neither too easy nor too hard.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">
              State Tracking (Knowledge Modeling)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Use Markov Chains or Bayesian Knowledge Tracing to model the
              probability that a learner has actually grasped a concept, not
              just memorized an answer.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">
              Optimization (Multi-Objective)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Balance multiple goals like &quot;time-to-mastery&quot; with
              &quot;engagement depth.&quot; Find the sweet spot where learning
              is both fast and deep.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Evaluation Criteria (Mandatory)
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Mandatory Requirements</h3>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Your solution MUST include these features:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>
              Clear mapping between concepts and game mechanics (each technical
              concept should map to a specific game interaction)
            </li>
            <li>
              A non-competitive progression system (advancement should be based
              on personal understanding, not competing with others)
            </li>
            <li>
              Adaptive or rule-based difficulty progression (difficulty should
              change based on learner performance)
            </li>
            <li>
              Demonstrable learning flow, not random play (there should be a
              clear path from beginner to advanced)
            </li>
            <li>
              Explanation of algorithmic decisions (you should be able to
              explain why the system made each choice)
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Nice-to-Have Features</h3>
          <p className="text-gray-700 mb-3 leading-relaxed">
            These features are not required but will make your solution
            stronger:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>
              Multiple game modes (exploration mode, sandbox mode, challenge
              mode)
            </li>
            <li>
              Concept dependency visualization (show a map of how concepts
              connect)
            </li>
            <li>
              Story-based or narrative progression (add a story to make learning
              more engaging)
            </li>
            <li>
              Personalized learning paths (different paths for different
              learners based on their background)
            </li>
            <li>
              Analytics on engagement vs understanding (track whether fun
              gameplay actually leads to learning)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Acceptance Threshold</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A solution is accepted if it meets these minimum standards:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>
              Makes learning genuinely interactive and enjoyable (not boring or
              frustrating)
            </li>
            <li>
              Shows real algorithmic modeling of progression and mastery (uses
              real algorithms, not random choices)
            </li>
            <li>
              Avoids shallow &quot;quiz game&quot; implementations (goes beyond
              multiple choice questions)
            </li>
            <li>
              Demonstrates engineering depth behind the fun experience (proves
              that serious algorithms are managing the learning)
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        
      </section>

      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-gray-700 text-xl font-semibold mb-2">Problem Gist</h3>
        <ul className="text-gray-700 list-disc list-inside ml-4 mb-4 space-y-2">
            <li>
              <strong>Problem Type:</strong> Interview Video Behavioral Analytics
            </li>
            <li>
              <strong>Domain:</strong> AI / Computer Vision / Speech Processing
            </li>
            <li>
              <strong>Key Objectives:</strong> Behavioral feature extraction, trait scoring, explainability
            </li>
            <li>
              <strong>Constraints:</strong> Variable video quality, no manual preprocessing
            </li>
            <li>
                <strong>Challenge:</strong> Converting multimodal signals into objective behavioral metrics
            </li>
          </ul>
      </div>
    </div>
  );
};

export default AIPS4;
