/** @format */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Algorithmic Learning Path Generator from Unstructured Developer Content - Smart ABES Hackathon",
  description:
    "Problem Statement 2: Design a system that transforms unstructured learning resources into optimized learning paths using algorithms and concept dependency modeling.",
  openGraph: {
    title:
      "Problem Statement 2 - Algorithmic Learning Path Generator from Unstructured Developer Content",
    description:
      "Solve the learning path generation challenge in Smart ABES Hackathon",
    type: "website",
    url: "https://smartabeshackathon.tech/problem-statements/ai/ps-2",
  },
};

const AIPS2 = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 select-text">
      <h1 className="text-4xl font-bold mb-2">
        Algorithmic Learning Path Generator from Unstructured Developer Content
      </h1>
      <p className="text-gray-600 mb-8">
        Engineering Progressive Learning Journeys
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Context & Background</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Developers today learn from many different places. The learning
          content is highly unstructured and scattered across various sources.
          These sources include:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>YouTube videos</li>
          <li>Blog articles</li>
          <li>GitHub repositories</li>
          <li>Documentation</li>
          <li>Community tutorials</li>
        </ul>
        <p className="text-gray-700 mb-4 leading-relaxed">
          While there is a lot of content available, there is a big problem.
          There is no reliable system that can automatically do these things:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Understand what a resource actually teaches (what concepts it
            covers)
          </li>
          <li>
            Identify its difficulty level and prerequisites (what you need to
            know before learning from it)
          </li>
          <li>
            Place it correctly in a progressive learning journey (where it fits
            in the order of topics)
          </li>
        </ul>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Most learning platforms today depend on manual tagging, playlists, or
          static curation. This means humans have to manually organize the
          content. This approach has serious problems:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Do not scale (when there are thousands of resources, manual
            organization becomes impossible)
          </li>
          <li>
            Miss conceptual dependencies (humans cannot see all the connections
            between different topics)
          </li>
          <li>
            Lack algorithmic rigor (the organization is subjective and not based
            on clear rules)
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Building For Fun aims to explore whether learning paths themselves can
          be engineered. Instead of relying on manual curation, can we use
          algorithms and system design to automatically create the best learning
          path? This is the core question we want to answer.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Core Engineering Challenge
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Your task is to design a system that can do the following:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Accepts a collection of unstructured learning resources (like blog
            posts, videos, documentation)
          </li>
          <li>
            Extracts technical concepts from each resource (figure out what
            topics each resource teaches)
          </li>
          <li>
            Models dependencies between concepts (understand which concepts need
            to be learned before others)
          </li>
          <li>
            Generates an optimized learning path for a given topic (create an
            ordered list of resources that makes sense)
          </li>
        </ul>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The learning path you generate should be optimized. This means it
          should minimize these bad things:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Conceptual jumps (avoid jumping from easy topics to very hard topics
            without steps in between)
          </li>
          <li>
            Redundant content (do not include multiple resources that teach the
            same thing)
          </li>
          <li>
            Knowledge gaps (make sure learners have all the background knowledge
            they need)
          </li>
        </ul>
        <p className="text-gray-700 mb-4 leading-relaxed">
          And it should maximize these good things:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Conceptual continuity (each resource should naturally lead to the
            next one)
          </li>
          <li>
            Progressive difficulty (start easy and gradually increase the
            difficulty level)
          </li>
          <li>
            Learning efficiency (help people learn faster by showing them the
            right content in the right order)
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Expected Technical Outcomes
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A strong solution should demonstrate the following technical
          capabilities:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Structured representation of unstructured content (convert messy
            text, videos, and documents into organized data structures)
          </li>
          <li>
            Concept dependency modeling (build a clear model showing which
            concepts depend on other concepts)
          </li>
          <li>
            Use of algorithms for ordering and optimization (apply computer
            science algorithms to find the best order for resources)
          </li>
          <li>
            Explainability of the learning path (be able to explain why you
            ordered the resources the way you did)
          </li>
          <li>
            Robust handling of noisy or incomplete data (work well even when
            some resources are missing information or have errors)
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          The focus is on engineering depth, not UI polish. We care more about
          how well your algorithms work than how pretty your interface looks.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Constraints & Assumptions
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Your solution must work within these constraints:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Input size: 50–300 resources (your system should handle at least 50
            resources and up to 300 resources)
          </li>
          <li>
            Resources may include different types of content:
            <ul className="list-circle list-inside ml-8 mt-2 space-y-1">
              <li>Text descriptions</li>
              <li>Article excerpts</li>
              <li>README files from GitHub</li>
              <li>Video transcripts</li>
            </ul>
          </li>
          <li>
            No manual tagging or labeling allowed (you cannot manually add tags
            or labels to the resources - everything must be automatic)
          </li>
          <li>
            Offline computation is acceptable (your system does not need to work
            in real-time - it can take time to process)
          </li>
          <li>
            No proprietary or sensitive data should be used (use only publicly
            available learning resources)
          </li>
          <li>
            Algorithmic correctness is prioritized over UI design (focus on
            making the algorithms work correctly, not on making things look
            good)
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Algorithmic Focus</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          This problem requires strong algorithmic thinking. Teams are expected
          to apply the following concepts:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Graph construction (concept dependency graphs) - build graphs where
            nodes are concepts and edges show dependencies
          </li>
          <li>
            Ordering and ranking algorithms - use algorithms like topological
            sort, priority queues, or ranking functions
          </li>
          <li>
            Similarity detection and clustering - group similar resources
            together and detect duplicate content
          </li>
          <li>
            Optimization under constraints - find the best learning path while
            respecting all the constraints
          </li>
          <li>
            Trade-off analysis (accuracy vs computation, simplicity vs depth) -
            balance different goals that may conflict with each other
          </li>
        </ul>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Use of ML/NLP is optional but must be justified. If you use machine
          learning or natural language processing, you need to explain why it is
          necessary and how it improves your solution.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This is primarily a DSA + Systems Engineering problem. The focus is on
          data structures, algorithms, and building robust systems.
        </p>
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
              Ability to ingest unstructured resources (read and process
              different types of content)
            </li>
            <li>
              Extraction of meaningful concepts (identify what topics and ideas
              each resource teaches)
            </li>
            <li>
              Generation of a non-random learning path (create an ordered path
              based on logic, not randomness)
            </li>
            <li>
              Clear explanation of why resources are ordered as they are
              (justify your ordering decisions)
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
              Skill-level adaptive paths (beginner, intermediate, advanced) -
              create different paths for different skill levels
            </li>
            <li>
              Visualization of concept dependency graphs - show visual diagrams
              of how concepts connect
            </li>
            <li>
              Resource quality or relevance scoring - rate how good or relevant
              each resource is
            </li>
            <li>
              Support for multiple topics - handle different subject areas like
              Python, React, or Machine Learning
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Acceptance Threshold</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A solution is accepted if it meets these minimum standards:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>
              Produces a logically ordered, explainable learning path (the path
              makes sense and you can explain why)
            </li>
            <li>
              Demonstrates real algorithmic reasoning (shows clear use of
              algorithms and logic)
            </li>
            <li>
              Uses DSA concepts meaningfully (applies data structures and
              algorithms in a real way)
            </li>
            <li>
              Goes beyond keyword matching or manual heuristics (does more than
              just matching words or using simple rules)
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-gray-700 font-semibold">
          This problem statement emphasizes algorithmic thinking and system
          design. Teams should focus on building robust, explainable systems
          that demonstrate engineering depth.
        </p>
      </div>
    </div>
  );
};

export default AIPS2;
