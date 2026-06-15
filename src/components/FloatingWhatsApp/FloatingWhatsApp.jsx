import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/918826508087?text=Hi%20Bani%20Estate,%20I%20have%20an%20inquiry%20regarding%20Sector%20107%20Noida%20properties.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white text-gray-800 text-xs font-bold px-4 py-2.5 rounded-2xl shadow-2xl border border-gray-100 pointer-events-auto flex items-center gap-2 whitespace-nowrap"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Chat with us on WhatsApp!
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 font-bold ml-1 text-[10px]"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all pointer-events-auto relative group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />
        <FaWhatsapp className="text-3xl" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
          Open Chat
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
