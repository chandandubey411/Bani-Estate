import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/80 to-[#0F4C81]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-white/80 font-semibold text-sm uppercase tracking-widest mb-3">
              Exclusive Listings
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white mb-4 leading-tight">
              Exclusive Listings –<br />
              <span className="text-white/90 italic">Limited Time Offers</span>
            </h2>
            <p className="text-white/80 text-lg max-w-xl">
              Don't miss our exclusive premium property listings in Sector 107 Noida. Book a free site visit today and speak with our expert advisors.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/properties"
              className="flex items-center justify-center gap-2 bg-white text-[#0F4C81] font-black px-8 py-5 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:scale-105 text-base"
            >
              Explore Properties <FaArrowRight />
            </Link>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 glass border-2 border-white/50 text-white font-black px-8 py-5 rounded-2xl hover:bg-white/20 transition-all duration-300 text-base"
            >
              <FaPhoneAlt /> Call Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
