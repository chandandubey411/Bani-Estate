import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920')`,
        }}
      />
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-white text-sm font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
          Sector 107, Noida's #1 Real Estate Platform
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Find Your{" "}
          <span className="text-[#D4AF37] drop-shadow-lg">Dream Home</span>
          <br />
          <span className="text-4xl sm:text-5xl lg:text-5xl">in Sector 107 Noida</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Premium 1BHK, 2BHK, 3BHK, 4BHK Apartments and Luxury Service Apartments. Your trusted partner in real estate.
        </motion.p>

        {/* Search Bar */}
        <div className="max-w-5xl mx-auto mb-12">
          <SearchBar variant="hero" />
        </div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 sm:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: "32+", label: "Properties Listed" },
            { value: "500+", label: "Happy Clients" },
            { value: "12+", label: "Service Apts" },
            { value: "10+", label: "Expert Agents" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-black text-[#D4AF37]">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="/properties"
            className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b8941f] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 hover:scale-105"
          >
            Explore Properties <FaArrowRight />
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 glass text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30"
          >
            Contact Agent
          </Link>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 720 0 0 40L0 80Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
