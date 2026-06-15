import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt, FaMapMarkerAlt, FaCar, FaUserTie,
  FaBalanceScale, FaChartLine, FaHandshake, FaHeadset,
} from "react-icons/fa";
import { whyChooseUs } from "../../data/categories";

const iconMap = {
  FaShieldAlt, FaMapMarkerAlt, FaCar, FaUserTie,
  FaBalanceScale, FaChartLine, FaHandshake, FaHeadset,
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-[#0F4C81] to-[#0a3660] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">
            Why Bani Estate
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Why Choose{" "}
            <span className="text-[#D4AF37]">Bani Estate?</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            We are more than a real estate agency. We are your trusted partners in finding the perfect home in Sector 107 Noida.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                className="glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-default"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}30` }}
                >
                  {Icon && (
                    <Icon
                      className="text-2xl"
                      style={{ color: item.color === "#D4AF37" ? "#D4AF37" : "#60a5fa" }}
                    />
                  )}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "32+", label: "Properties" },
            { value: "₹50Cr+", label: "Transactions" },
            { value: "12+", label: "Years Combined" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-black text-[#D4AF37]">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
