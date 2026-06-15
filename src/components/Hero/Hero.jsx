import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";

const stats = [
  { value: "32+", label: "Properties Listed" },
  { value: "500+", label: "Happy Clients" },
  { value: "12+", label: "Service Apts" },
  { value: "₹50Cr+", label: "Transactions" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')` }}
      />
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 sm:right-24 w-52 h-52 sm:w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-24 left-5 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-white text-xs sm:text-sm font-medium mb-6"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse flex-shrink-0" />
          Sector 107, Noida's #1 Real Estate Platform
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-7xl font-display font-black text-white leading-tight mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
        >
          Find Your{" "}
          <span className="text-secondary drop-shadow-lg">Dream Home</span>
          <br />
          <span className="text-xl sm:text-3xl lg:text-4xl font-semibold">in Sector 107, Noida</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          Premium 1BHK, 2BHK, 3BHK, 4BHK Apartments and Luxury Service Apartments.{" "}
          <span className="font-semibold">Your trusted partner in real estate.</span>
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="max-w-5xl mx-auto mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}
        >
          <SearchBar variant="hero" />
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-16 mb-10"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-secondary">{stat.value}</div>
              <div className="text-white/80 text-xs sm:text-sm mt-1 whitespace-nowrap">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link to="/properties" className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-2xl hover:scale-105 text-sm sm:text-base">
            Explore Properties <FaArrowRight />
          </Link>
          <Link to="/contact" className="flex items-center justify-center gap-2 glass text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 text-sm sm:text-base">
            Contact an Agent
          </Link>
        </motion.div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0 80L1440 80L1440 40C1200 80 720 0 0 40L0 80Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
