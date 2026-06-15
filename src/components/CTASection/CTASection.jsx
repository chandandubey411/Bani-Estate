import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhone } from "react-icons/fa";

const CTASection = () => (
  <section className="relative py-16 sm:py-20 overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=70')` }} />
    <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary/85" />

    <div className="relative z-10 container-base">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
        <motion.div className="text-center lg:text-left flex-1"
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-white/80 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Exclusive Listings</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white mb-3 sm:mb-4 leading-tight">
            Exclusive Listings –<br />
            <span className="text-white/90 italic">Limited Time Offers</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-xl leading-relaxed">
            Don't miss our premium property listings in Sector 107 Noida. Book a free site visit today.
          </p>
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto"
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Link to="/properties"
            className="flex items-center justify-center gap-2 bg-white text-primary font-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-gray-50 transition-all shadow-2xl hover:scale-105 text-sm sm:text-base">
            Explore Properties <FaArrowRight />
          </Link>
          <a href="tel:+919876543210"
            className="flex items-center justify-center gap-2 glass border-2 border-white/50 text-white font-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-white/20 transition-all text-sm sm:text-base">
            <FaPhone /> Call Now
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTASection;
