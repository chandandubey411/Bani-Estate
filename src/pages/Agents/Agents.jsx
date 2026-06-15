import React from "react";
import { motion } from "framer-motion";
import { agents } from "../../data/agents";
import AgentCard from "../../components/AgentCard/AgentCard";

const Agents = () => {
  return (
    <main className="pt-20 bg-[#F8FAFC] min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0F4C81] to-[#0a3660] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.span
            className="inline-block text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Bani Estate Advisors
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-5xl font-display font-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Meet Our <span className="text-[#D4AF37]">Expert Agents</span>
          </motion.h1>
          <p className="text-white/80 text-sm max-w-xl mx-auto">
            Our certified real estate advisors bring deep local expertise, legal background, and investment insights to ensure transparent deals in Sector 107 Noida.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
        </div>

        {/* Corporate Trust Badge */}
        <motion.div
          className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-gray-800">Interested in joining our advisor network?</h3>
            <p className="text-sm text-gray-500 max-w-xl">We are always looking for certified, dedicated agents to expand our presence in Noida's fast-growing luxury markets.</p>
          </div>
          <a
            href="mailto:careers@baniestate.com?subject=Real%20Estate%20Advisor%20Application"
            className="px-6 py-3 bg-[#D4AF37] hover:bg-[#b8941f] text-white text-sm font-bold rounded-xl shadow-md transition-all whitespace-nowrap"
          >
            Apply as Agent
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default Agents;
