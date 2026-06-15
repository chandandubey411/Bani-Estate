import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaPhone, FaEnvelope, FaBuilding } from "react-icons/fa";

const AgentCard = ({ agent, index = 0 }) => (
  <motion.div
    className="property-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group text-center"
    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <div className="relative pt-6 px-6">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3">
        <img src={agent.image} alt={agent.name}
          className="w-full h-full rounded-full object-cover border-4 border-secondary shadow-lg" loading="lazy" />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>
      <h3 className="font-display font-bold text-gray-900 text-base sm:text-lg">{agent.name}</h3>
      <p className="text-primary text-xs sm:text-sm font-semibold mb-1">{agent.designation}</p>
      <p className="text-gray-500 text-xs mb-3">{agent.specialization}</p>

      <div className="flex items-center justify-center gap-1 mb-4">
        <FaStar className="text-secondary text-xs" />
        <span className="text-sm font-bold text-gray-800">{agent.rating}</span>
        <span className="text-xs text-gray-500">({agent.reviews} reviews)</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-center mb-4">
        <div className="bg-blue-50 rounded-xl p-2">
          <div className="text-lg font-black text-primary font-display">{agent.propertiesSold}+</div>
          <div className="text-xs text-gray-500">Properties Sold</div>
        </div>
        <div className="bg-amber-50 rounded-xl p-2">
          <div className="text-lg font-black text-secondary font-display">{agent.experience}</div>
          <div className="text-xs text-gray-500">Experience</div>
        </div>
      </div>
    </div>

    <div className="px-6 pb-5 flex gap-2">
      <a href={`tel:${agent.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-primary border border-primary rounded-xl hover:bg-primary hover:text-white transition-all">
        <FaPhone className="text-[10px]" /> Call
      </a>
      <Link to={`/agents/${agent.id}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold bg-secondary text-white rounded-xl hover:bg-secondary-dark transition-all">
        <FaBuilding className="text-[10px]" /> Profile
      </Link>
    </div>
  </motion.div>
);

export default AgentCard;
