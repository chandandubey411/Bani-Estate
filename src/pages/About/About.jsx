import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaBullseye, FaEye, FaAward, FaUsers, FaRegHandshake } from "react-icons/fa";

const About = () => {
  return (
    <main className="pt-20 bg-[#F8FAFC] min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0F4C81] to-[#0a3660] py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span
            className="inline-block text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            About Bani Estate
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-5xl font-display font-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your Trusted Partner <br />
            in <span className="text-[#D4AF37]">Sector 107, Noida</span>
          </motion.h1>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
            Providing premium residential flats, service apartments, rental solutions and consulting services since 2014.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold block">Since 2014</span>
              <h2 className="text-3xl font-display font-bold text-gray-800 leading-tight">
                Crafting Luxury Living and <span className="gradient-text">Exceptional Investments</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Founded with a vision to redefine real estate advisory, Bani Estate has grown to become the leading real estate boutique focusing exclusively on Sector 107 Noida. We bridge the gap between discerning buyers, investors, and elite properties.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Whether it is buying a premium high-rise apartment, booking a corporate service suite, or structuring complex real estate investments, our seasoned team of 10+ certified advisors ensures legally verified transactions, transparent negotiations, and seamless execution.
              </p>
              
              <div className="flex gap-6 pt-4 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-display font-black text-[#0F4C81]">12+ Yrs</div>
                  <span className="text-xs text-gray-400 font-semibold block">Combined Exp.</span>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div>
                  <div className="text-3xl font-display font-black text-[#D4AF37]">500+</div>
                  <span className="text-xs text-gray-400 font-semibold block">Happy Families</span>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div>
                  <div className="text-3xl font-display font-black text-[#0F4C81]">32+</div>
                  <span className="text-xs text-gray-400 font-semibold block">Active Inventory</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-square"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
                alt="Bani Estate luxury properties"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0F4C81]/10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <motion.div
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0F4C81] flex items-center justify-center text-xl">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-800">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To provide ethical, transparent, and legally verified real estate advisory services. We strive to simplify property transactions, maximize investment appreciation, and offer high-end furnished stays that represent luxury, security, and convenience.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#D4AF37] flex items-center justify-center text-xl">
                <FaEye />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-800">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be the most trusted and premium real estate brand in Sector 107 Noida. We aim to establish benchmark service standards in corporate service apartments, luxury residential sales, and NRI property consultation, underpinned by technology and absolute transparency.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Milestones / Achievements */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold mb-2 inline-block">Track Record</span>
            <h2 className="text-3xl font-display font-bold text-gray-800">Milestones & Achievements</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            
            <motion.div
              className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0F4C81] flex items-center justify-center text-lg mx-auto mb-4">
                <FaAward />
              </div>
              <h4 className="font-display font-bold text-gray-800 text-sm mb-2">Sector 107 Authority Award</h4>
              <p className="text-xs text-gray-500">Recognized as the top-performing customer agency in Sector 107 Noida region for 3 consecutive years.</p>
            </motion.div>

            <motion.div
              className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-amber-50 text-[#D4AF37] flex items-center justify-center text-lg mx-auto mb-4">
                <FaUsers />
              </div>
              <h4 className="font-display font-bold text-gray-800 text-sm mb-2">500+ Closed Listings</h4>
              <p className="text-xs text-gray-500">Successfully closed over 500 verified premium residential property sales and long-term rental allocations.</p>
            </motion.div>

            <motion.div
              className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0F4C81] flex items-center justify-center text-lg mx-auto mb-4">
                <FaRegHandshake />
              </div>
              <h4 className="font-display font-bold text-gray-800 text-sm mb-2">Premium RERA Certified</h4>
              <p className="text-xs text-gray-500"> RERA certified real estate boutique ensuring all compliance, safe banking channels, and zero legal disputes.</p>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
