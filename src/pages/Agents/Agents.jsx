import React from "react";
import { motion } from "framer-motion";
import AgentCard from "../../components/AgentCard/AgentCard";
import { agents } from "../../data/agents";

const Agents = () => (
  <main className="pt-20">
    <div className="bg-gradient-to-r from-primary to-primary-dark py-12 sm:py-16 text-center">
      <motion.h1 className="text-2xl sm:text-4xl font-display font-black text-white mb-3"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        Our Expert <span className="text-secondary">Agents</span>
      </motion.h1>
      <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto px-4">
        Meet our team of trusted real estate professionals dedicated to finding your perfect home.
      </p>
    </div>
    <div className="container-base py-10 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {agents.map((agent, i) => <AgentCard key={agent.id} agent={agent} index={i} />)}
      </div>
    </div>
  </main>
);

export default Agents;
