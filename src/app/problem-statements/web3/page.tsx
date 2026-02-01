/** @format */

import Link from "next/link";

const Web3 = () => {
  return (
    <div className="min-h-screen w-full px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 mt-10">
          <h1 className="text-5xl font-bold text-[#165a94] mb-4 font-mono">
            Web3 Problem Statements
          </h1>
          <div className="h-1 w-32 bg-[#165a94] mb-6"></div>
        </div>

        {/* Problem Statements List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PS-1 */}
          <Link href="/problem-statements/web3/ps-1">
            <div className="bg-[#165a94]/10 backdrop-blur-sm border-2 border-[#165a94] p-8 rounded-lg hover:bg-[#165a94]/20 transition-all duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-xl font-semibold text-white mb-3">
                DeFi
              </h3>
              <p className="text-white/70 text-sm">
                Current DeFi dashboards rely on delayed, off-chain indexers that fail to reflect Solana’s parallel execution model.
                Build a Real-Time DeFi Risk & Exposure System that derives account-level health directly from Solana’s on-chain state, bypassing centralized APIs.
              </p>
            </div>
          </Link>

          {/* PS-2 */}
          <Link href="/problem-statements/web3/ps-2">
            <div className="bg-[#165a94]/10 backdrop-blur-sm border-2 border-[#165a94] p-8 rounded-lg hover:bg-[#165a94]/20 transition-all duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-xl font-semibold text-white mb-3">
                Consumer Apps
              </h3>
              <p className="text-white/70 text-sm">
                Current AI apps (chatbots, tutors) are "black boxes" where users have zero agency. 
                Build a consumer AI application where the intelligence stays off-chain (for speed), but sovereignty is anchored on Solana.
              </p>
            </div>
          </Link>

          {/* PS-3 */}
          <Link href="/problem-statements/web3/ps-3">
            <div className="bg-[#165a94]/10 backdrop-blur-sm border-2 border-[#165a94] p-8 rounded-lg hover:bg-[#165a94]/20 transition-all duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-xl font-semibold text-white mb-3">
                DePIN (Decentralized Physical Infrastructure Networks)
              </h3>
              <p className="text-white/70 text-sm">
                Infrastructure networks (maps, sensors, compute) are currently centralized silos.
                Build a Solana-based Coordination Layer that automates data submission, quality verification, and reward distribution for a distributed network of contributors.
              </p>
            </div>
          </Link>

          {/* Add more problem statements here */}
        </div>
      </div>
    </div>
  );
};

export default Web3;
