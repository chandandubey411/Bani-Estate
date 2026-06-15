import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import AgentCard from "../../components/AgentCard/AgentCard";
import { agents } from "../../data/agents";

const achievements = [
  { value: "500+", label: "Happy Clients" },
  { value: "32+", label: "Properties Listed" },
  { value: "₹50Cr+", label: "Total Transactions" },
  { value: "10+", label: "Expert Agents" },
  { value: "8+", label: "Years in Business" },
  { value: "100%", label: "Verified Properties" },
];

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <div className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=70')` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
      <div className="relative z-10 container-base text-center">
        <motion.h1 className="text-3xl sm:text-5xl font-display font-black text-white mb-4"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          About <span className="text-secondary">Bani Estate</span>
        </motion.h1>
        <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Your Trusted Partner in Real Estate since the beginning. We specialize exclusively in Sector 107, Noida.
        </p>
      </div>
    </div>

    {/* Story */}
    <section className="section-padding bg-white">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Our Story</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">Building Dreams in <span className="gradient-text">Sector 107</span></h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Bani Estate was founded with one simple mission: to make real estate in Sector 107, Noida transparent, honest, and accessible. We have helped over 500 families and investors find their dream properties.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              With a dedicated team of 10 expert agents and deep knowledge of every society and lane in Sector 107, we are the most trusted name in local real estate. Every property we list is personally verified.
            </p>
            <div className="space-y-3">
              {["100% verified properties", "Transparent and zero hidden fees", "Legal assistance for every deal", "24/7 client support"].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-700"><FaCheckCircle className="text-primary flex-shrink-0" />{item}</div>
              ))}
            </div>
          </motion.div>
          <motion.div className="rounded-2xl overflow-hidden shadow-2xl" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800" alt="About Bani Estate" className="w-full h-64 sm:h-80 lg:h-96 object-cover" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-gray-50">
      <div className="container-base">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Our Mission", color: "from-primary to-primary-dark", text: "To provide transparent, verified, and professional real estate services exclusively in Sector 107 Noida — making property buying, selling, and renting a seamless experience for every client." },
            { title: "Our Vision", color: "from-secondary to-secondary-dark", text: "To become the most trusted real estate brand in Sector 107 Noida by delivering exceptional value, ethical practices, and innovative property solutions for buyers, sellers, and investors alike." },
          ].map(({title, color, text}) => (
            <motion.div key={title} className={`bg-gradient-to-br ${color} rounded-2xl p-7 sm:p-8 text-white shadow-xl`}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="font-display font-black text-xl sm:text-2xl mb-4">{title}</h3>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Achievements */}
    <section className="section-padding bg-white">
      <div className="container-base text-center">
        <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Our Track Record</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-10">Our <span className="gradient-text">Achievements</span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {achievements.map((a, i) => (
            <motion.div key={a.label} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5 text-center shadow-md"
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="text-2xl sm:text-3xl font-display font-black text-primary mb-1">{a.value}</div>
              <div className="text-xs sm:text-sm text-gray-600">{a.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-gray-50">
      <div className="container-base">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Our Team</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900">Meet the <span className="gradient-text">Team</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {agents.slice(0, 8).map((agent, i) => <AgentCard key={agent.id} agent={agent} index={i} />)}
        </div>
        <div className="text-center mt-8">
          <Link to="/agents" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:scale-105 text-sm">
            View All Agents <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default About;
