/** @format */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Automated Resume Information Extraction, Scoring, and Ranking System - Smart ABES Hackathon",
  description:
    "Problem Statement 1: Design an automated system for resume parsing, scoring, and ranking using algorithmic approaches. Handle diverse formats and extract structured information.",
  openGraph: {
    title:
      "Problem Statement 1 - Automated Resume Information Extraction, Scoring, and Ranking System",
    description:
      "Solve the resume parsing and ranking challenge in Smart ABES Hackathon",
    type: "website",
    url: "https://smartabeshackathon.tech/problem-statements/ai/ps-1",
  },
};

const AIPS1 = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 select-text">
      <h1 className="text-4xl font-bold mb-2">
        Automated Resume Information Extraction, Scoring, and Ranking System
      </h1>
      <p className="text-gray-600 mb-8">
        Context & Background in Modern Recruitment
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction:</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In modern recruitment and talent acquisition systems, organizations
          receive resumes in large volumes and diverse formats (PDF, DOC, DOCX).
          Manual screening is inefficient, inconsistent, and does not scale.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          An automated system is required to process unstructured resume
          documents and convert them into structured, machine-readable
          information. Beyond extraction, the system must objectively evaluate
          resumes using a consistent scoring mechanism and rank candidates in a
          transparent and reproducible manner.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Simply extracting text is insufficient. The system must handle
          ambiguity, missing information, and formatting variability while
          maintaining fairness and consistency across all candidates. More
          content in a resume should not automatically imply better quality.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The core challenge is to design an algorithmic pipeline that can
          accurately extract information, quantitatively assess candidate
          profiles, and generate an objective ranking, while remaining robust,
          explainable, and scalable.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Why the Problem Matters</h2>
        <p className="text-gray-700 leading-relaxed">
          Automating resume parsing and evaluation reduces human effort,
          minimizes bias, and significantly improves the speed and fairness of
          candidate shortlisting.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Core Engineering Challenge
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Design an algorithm or program that can:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Accurately extract structured information from unstructured resumes
          </li>
          <li>Quantitatively evaluate resumes using a scoring mechanism</li>
          <li>Rank multiple candidates objectively based on extracted data</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          The system must handle format variability, text ambiguity, and
          information incompleteness without manual intervention.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Core Objectives:</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The proposed solution should aim to design an automated system that:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. Accurately extracts structured information
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Convert unstructured resume content into structured data fields
              such as education, skills, experience, projects, and achievements
              without manual intervention.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              2. Applies a consistent and explainable scoring mechanism
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Quantitatively evaluate each resume using a well-defined scoring
              logic with a maximum score of 100, ensuring uniform treatment
              across all candidates.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Ranks candidates objectively
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Correctly rank at least 25 resumes based on computed scores,
              ensuring deterministic, reproducible, and unbiased ordering.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              4. Handles incomplete or noisy data
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Maintain reliable performance even when resumes contain missing
              sections, ambiguous text, or inconsistent formatting.
            </p>
          </div>
        </div>

        <p className="text-gray-700 mt-6 leading-relaxed">
          The system should prioritize correctness, robustness, and algorithmic
          clarity over surface-level features or presentation.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Expected Technical Outcomes
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A strong solution should demonstrate:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Reliable extraction of personal details, education, experience, and
            skills
          </li>
          <li>
            Conversion of unstructured resume content into structured data
          </li>
          <li>A consistent and explainable resume scoring mechanism</li>
          <li>
            Correct ranking of 25 resumes based on computed scores (max score of
            100)
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Constraints & Assumptions
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Input resumes may vary significantly in layout and structure</li>
          <li>No manual tagging or pre-processing is allowed</li>
          <li>
            The system must process at least 25 resumes in a single evaluation
            cycle
          </li>
          <li>Scoring logic must remain consistent across all resumes</li>
          <li>Maximum score is 100, and minimum score is 0</li>
          <li>The solution should be scalable for larger datasets</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Algorithmic Focus</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Participants are expected to apply algorithmic reasoning in:
        </p>
        <ol className="list-decimal list-inside ml-4 mb-4 space-y-2">
          <li>Text parsing and information extraction</li>
          <li>Feature identification and normalization</li>
          <li>Resume scoring logic and weight assignment</li>
          <li>Ranking and sorting mechanisms</li>
        </ol>
        <p className="text-gray-700 leading-relaxed">
          Trade-offs between accuracy, efficiency, and scalability should be
          clearly addressed.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Evaluation Criteria</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Mandatory Requirements
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Successful extraction of key resume sections</li>
              <li>Correct storage of extracted information</li>
              <li>Generation of a resume score for each candidate</li>
              <li>Accurate ranking of all 25 resumes (max score of 100)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Nice-to-Have Features
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Improved extraction accuracy for complex layouts</li>
              <li>
                Skill relevance matching or keyword weighting according to a job
                posting
              </li>
              <li>Configurable scoring parameters</li>
              <li>Performance optimizations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Acceptance Threshold</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>At least 95% extraction accuracy across resumes</li>
              <li>No system failures during batch processing</li>
              <li>Complete ranking output for all test resumes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Scoring Weights</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Following researched estimated weights can be used to score (out of
          100%):
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="text-gray-700">Prior Internships</span>
              <span className="font-semibold text-[#165a94]">20%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Skills and Certification</span>
              <span className="font-semibold text-[#165a94]">20%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Projects</span>
              <span className="font-semibold text-[#165a94]">15%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">College Marks (CGPA)</span>
              <span className="font-semibold text-[#165a94]">10%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Quantifiable Achievements</span>
              <span className="font-semibold text-[#165a94]">10%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Experience (if any)</span>
              <span className="font-semibold text-[#165a94]">5%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Extra-curricular</span>
              <span className="font-semibold text-[#165a94]">5%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Language Fluency</span>
              <span className="font-semibold text-[#165a94]">3%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Online Presence (if any)</span>
              <span className="font-semibold text-[#165a94]">3%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Degree Type</span>
              <span className="font-semibold text-[#165a94]">3%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">College Ranking</span>
              <span className="font-semibold text-[#165a94]">2%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">School Marks (10th/12th)</span>
              <span className="font-semibold text-[#165a94]">2%</span>
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mt-4 leading-relaxed italic">
          <strong>Note:</strong> More content in the resume does not always mean
          better. It is advised to manage and prevent overfitting of the built
          scoring model.
        </p>
      </section>

      {/* Summary Table */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Problem Gist
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-[#165a94]/60">
            <tbody>
              <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                  Problem Type
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 text-gray-700">
                  Resume Information Extraction & Ranking Algorithm
                </td>
              </tr>
              <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold text-[#165a94]">
                  Domain
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 text-gray-700">
                  AI & Talent Acquisition
                </td>
              </tr>
              <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold text-[#165a94]">
                  Key Objectives
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 text-gray-700">
                  Information extraction, Consistent scoring, Objective ranking
                </td>
              </tr>
              <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold text-[#165a94]">
                  Constraints
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 text-gray-700">
                  Process 25+ resumes, Max score 100, No manual preprocessing
                </td>
              </tr>
              <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold text-[#165a94]">
                  Input Formats
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 text-gray-700">
                  PDF, DOC, DOCX with variable layouts
                </td>
              </tr>
              <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold text-[#165a94]">
                  Challenge
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 text-gray-700">
                  Handle format variability, ambiguity, and incomplete data
                  while maintaining fairness
                </td>
              </tr>
              <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold text-[#165a94]">
                  Acceptance Threshold
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 text-gray-700">
                  95% extraction accuracy, No system failures, Complete ranking
                  output
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AIPS1;
