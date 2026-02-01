/** @format */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DeFi - Smart ABES Hackathon",
  description:
    "Problem Statement 1 -  DeFi",
  openGraph: {
    title:
      "Problem Statement 1 - DeFi",
    description:
      "Solving the DeFi challenge in Smart ABES Hackathon",
    type: "website",
    url: "https://smartabeshackathon.tech/problem-statements/web3/ps-1",
  },
};

const Web3PS1 = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 select-text">
      <h1 className="text-4xl font-bold mb-2">
        DeFi
      </h1>
      <p className="text-gray-600 mb-8">
        Context & Background
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Current DeFi dashboards rely on delayed, off-chain indexers that 
          fail to reflect Solana’s parallel execution model. During high 
          volatility, this latency causes "ghost" liquidations and capital 
          inefficiency, eroding user trust.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Objective</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Build a Real-Time DeFi Risk & Exposure System that derives account-level 
          health directly from Solana’s on-chain state, bypassing centralized APIs.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Core Technical Requirements</h2>
        <div className="text-gray-700 leading-relaxed">
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Direct State Access: Read and interpret Solana account data (Borsh-serialized) directly.</li>
            <li>Sub-Second Latency: Compute liquidation risk and exposure in real-time, matching network speeds.</li>
            <li>Scalable Architecture: Maintain performance during high-frequency state changes and network congestion.</li>
            <li>Cross-Protocol Logic: Design a system capable of interpreting risk across Lending (Solend/Marginfi), DEXs (Orca/Raydium), and Perps (Drift).</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">What We’re Evaluating</h2>
        <div className="text-gray-700 leading-relaxed">
            Key Evaluation Criteria
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Architecture: How well does the system leverage Solana’s Account Model and Parallel Execution?</li>
            <li>Accuracy vs. Speed: Your strategy for balancing low-latency delivery with high-precision data.</li>
            <li>State Management: Your approach to handling high-frequency updates without lag or "stale" data.</li>
            <li>Resilience: Proof of system correctness and reliability during peak network load.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <table className="w-full border-collapse border border-[#165a94]/60">
        <tbody>
            <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">Sector</td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">Primary Use Case</td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">Suggested Protocols</td>
            </tr>
            <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">Lending</td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">Health factors, liquidation thresholds</td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">Marginfi, Solend, Kamino</td>
            </tr>
            <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    DEX/LP
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Impermanent loss, concentration risk
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Orca Whirlpools, Phoenix, Raydium
                </td>
            </tr>
            <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Derivatives
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Leverage monitoring, margin requirements
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Drift Protocol
                </td>
            </tr>
            <tr>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Yield
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Strategy-level transparency & dependencies
                </td>
                <td className="border border-[#165a94]/60 px-4 py-3 font-semibold w-1/3 text-[#165a94]">
                    Kamino Vaults
                </td>
            </tr>
        </tbody>
        </table>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Submission Guardrails</h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Do not rely on centralized APIs or deprecated protocols.
          </li>
          <li>Do not build a new DeFi protocol; focus entirely on the risk/analytics layer.</li>
          <li>Do emphasize direct on-chain state reading (using RPC or Geyser plugins).</li>
        </ul>
      </section>

    </div>
  );
};

export default Web3PS1;
