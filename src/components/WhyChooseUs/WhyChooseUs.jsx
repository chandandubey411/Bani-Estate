import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaMapMarkerAlt, FaCar, FaUserTie, FaBalanceScale, FaChartLine, FaHandshake, FaHeadset } from "react-icons/fa";
import { whyChooseUs } from "../../data/categories";

const iconMap = { FaShieldAlt, FaMapMarkerAlt, FaCar, FaUserTie, FaBalanceScale, FaChartLine, FaHandshake, FaHeadset };

const WhyChooseUs = () => (
  <section className="section-padding bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
    </div>

    <div className="container-base relative z-10">
      <motion.div className="text-center mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Why Bani Estate</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-3">
          Why Choose <span className="text-secondary">Bani Estate?</span>
        </h2>
        <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base">
          We are more than a real estate agency — your trusted partner in finding the perfect home.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {whyChooseUs.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div key={item.id}
              className="glass-dark rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300 group cursor-default"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.03, y: -4 }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${item.color}25` }}>
                {Icon && <Icon className="text-xl" style={{ color: item.color === "#D4AF37" ? "#D4AF37" : "#93c5fd" }} />}
              </div>
              <h3 className="font-display font-bold text-white text-sm sm:text-base mb-2">{item.title}</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Stats */}
      <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/10"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
        {[{ v: "500+", l: "Happy Clients" }, { v: "32+", l: "Properties" }, { v: "₹50Cr+", l: "Transactions" }, { v: "10+", l: "Expert Agents" }].map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-secondary">{s.v}</div>
            <div className="text-white/60 text-xs sm:text-sm mt-1">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;
