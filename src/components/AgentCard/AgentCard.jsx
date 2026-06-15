import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaPhone, FaWhatsapp, FaHome, FaArrowRight } from "react-icons/fa";

const AgentCard = ({ agent, index = 0 }) => {
  return (
    <motion.div
      className="property-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#0F4C81] to-[#1a6cb8] h-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMi0xMnY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        {/* Certified Badge */}
        {agent.certified && (
          <div className="absolute top-3 right-3">
            <span className="text-xs bg-[#D4AF37] text-white px-2 py-1 rounded-full font-bold flex items-center gap-1">
              <FaStar className="text-[10px]" /> Certified
            </span>
          </div>
        )}
      </div>

      {/* Avatar */}
      <div className="flex justify-center -mt-14">
        <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden">
          <img
            src={agent.image}
            alt={agent.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>

      {/* Info */}
      <div className="px-6 pb-6 pt-3">
        <h3 className="font-display font-bold text-[#1E293B] text-lg leading-tight mb-1">
          {agent.name}
        </h3>
        <p className="text-[#0F4C81] text-sm font-medium mb-1">{agent.designation}</p>
        <p className="text-gray-500 text-xs mb-4">{agent.specialization}</p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${i < Math.floor(agent.rating) ? "text-[#D4AF37]" : "text-gray-200"}`}
            />
          ))}
          <span className="text-gray-600 text-xs ml-1">({agent.reviews} reviews)</span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 mb-4 bg-gray-50 rounded-xl py-3">
          <div>
            <div className="text-lg font-display font-black text-[#0F4C81]">{agent.propertiesSold}+</div>
            <div className="text-xs text-gray-500">Deals Closed</div>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div>
            <div className="text-lg font-display font-black text-[#0F4C81]">{agent.experience}</div>
            <div className="text-xs text-gray-500">Years Exp.</div>
          </div>
        </div>

        {/* Languages */}
        <div className="flex flex-wrap justify-center gap-1 mb-4">
          {agent.languages.map((lang) => (
            <span key={lang} className="text-xs bg-blue-50 text-[#0F4C81] px-2 py-0.5 rounded-full font-medium">
              {lang}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <a
            href={`tel:${agent.phone}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-sm font-semibold text-[#0F4C81] border border-[#0F4C81] rounded-xl hover:bg-[#0F4C81] hover:text-white transition-all"
          >
            <FaPhone className="text-xs" /> Call
          </a>
          <a
            href={`https://wa.me/${agent.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-sm font-semibold bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        <Link
          to={`/agents/${agent.id}`}
          className="mt-2 flex items-center justify-center gap-1 text-xs text-gray-500 hover:text-[#0F4C81] transition-colors"
        >
          View Profile <FaArrowRight className="text-[10px]" />
        </Link>
      </div>
    </motion.div>
  );
};

export default AgentCard;
