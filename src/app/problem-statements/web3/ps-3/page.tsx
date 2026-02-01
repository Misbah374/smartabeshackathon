/** @format */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DePIN (Decentralized Physical Infrastructure Networks) - Smart ABES Hackathon",
  description:
    "Problem Statement 3 -  DePIN (Decentralized Physical Infrastructure Networks)",
  openGraph: {
    title:
      "Problem Statement 3 - DePIN (Decentralized Physical Infrastructure Networks)",
    description:
      "Solving the DePIN (Decentralized Physical Infrastructure Networks) challenge in Smart ABES Hackathon",
    type: "website",
    url: "https://smartabeshackathon.tech/problem-statements/web3/ps-3",
  },
};

const Web3PS3 = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 select-text">
      <h1 className="text-4xl font-bold mb-2">
        DePIN (Decentralized Physical Infrastructure Networks)
      </h1>
      <p className="text-gray-600 mb-8">
        Context & Background
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Infrastructure networks (maps, sensors, compute) are currently centralized 
          silos. Contributors who provide the underlying data have no transparency 
          into how their data is used, no ownership of the network, and must trust 
          a single company to pay them fairly.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Objective</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Build a Solana-based Coordination Layer that automates data submission, 
          quality verification, and reward distribution for a distributed network 
          of contributors.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Core Technical Requirements</h2>
        <div className="text-gray-700 leading-relaxed">
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Data Submission: A mechanism for "producers" (users or devices) to report real-world activity or resource usage.</li>
            <li>On-Chain Coordination: A Solana program to log contributions and execute reward payouts.</li>
            <li>Quality Control: A reputation system or logic-based check to filter out "junk" data or dishonest actors.</li>
          </ul>
        </div>
      </section>

    <section className="mt-8">
        <p className="text-2xl font-semibold mb-4">
            System Workflow
        </p>
        <p className="text-2xl font-semibold mb-4">
            Implementation Pathways
        </p>
    </section>

      <section className="mt-8">
        <table className="w-full border-collapse border border-[#165a94]/60">
        <tbody>
            <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">Sector</td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">What is Contributed?</td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">Solana's Role</td>
            </tr>
            <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">Environmental</td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">Air quality, noise, or weather data</td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">Minting "Green Credits" based on sensor uptime.</td>
            </tr>
            <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Mobility
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Anonymized traffic or location pings
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Rewarding "Map Tiles" mapped via GPS.
                </td>
            </tr>
            <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Compute/Web
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Bandwidth, storage, or CPU cycles
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Handling micro-payments for resource usage.
                </td>
            </tr>
            <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Logistics
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Proof of delivery or package location
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Verifying milestones and releasing escrowed funds.
                </td>
            </tr>
        </tbody>
        </table>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Key Evaluation Criteria</h2>
        <div className="text-gray-700 leading-relaxed">
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Incentive Alignment: Is the reward system sustainable, or will it be drained by bots?</li>
            <li>Data Efficiency: Are you storing heavy raw data off-chain while keeping the proof of work on-chain?</li>
            <li>Coordination Logic: How effectively does the Solana program handle frequent, low-value updates (micro-contributions)?</li>
            <li>Verification: How do you ensure the data submitted is real without a central human reviewer?</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Guidelines & Constraints</h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Simulated Data is OK: You do not need to buy sensors; mock data from a script is sufficient.
          </li>
          <li>Keep it Simple: Focus on the Economic Engine (the Solana program) rather than the physical hardware.</li>
          <li>Scalability: Consider using Solana features like State Compression or Blinks to make user participation frictionless.</li>
        </ul>
      </section>

    </div>
  );
};

export default Web3PS3;
