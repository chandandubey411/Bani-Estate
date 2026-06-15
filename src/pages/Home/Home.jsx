import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/Hero/Hero";
import FeaturedCategories from "../../components/FeaturedCategories/FeaturedCategories";
import PropertyGrid from "../../components/PropertyGrid/PropertyGrid";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/Testimonials/Testimonials";
import BlogPreview from "../../components/BlogPreview/BlogPreview";
import Newsletter from "../../components/Newsletter/Newsletter";
import CTASection from "../../components/CTASection/CTASection";
import PropertyGallery from "../../components/PropertyGallery/PropertyGallery";
import ServiceApartmentCard from "../../components/ServiceApartmentCard/ServiceApartmentCard";
import AgentCard from "../../components/AgentCard/AgentCard";
import { serviceApartments } from "../../data/serviceApartments";
import { agents } from "../../data/agents";
import { sector107Advantages } from "../../data/categories";
import {
  FaTrain, FaSchool, FaHospital, FaShoppingBag, FaTree,
  FaBuilding, FaChartLine, FaRoad,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const advantageIconMap = {
  FaTrain, FaSchool, FaHospital, FaShoppingBag, FaTree,
  FaBuilding, FaChartLine, FaRoad,
};

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Featured Properties Grid */}
      <PropertyGrid
        title="Featured"
        subtitle="Explore our premium selection of verified residential properties in Sector 107 Noida."
        limit={6}
        showTabs={true}
      />

      {/* CTA Banner */}
      <CTASection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Sector 107 Advantages */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">
              Location Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E293B] mb-4">
              Why <span className="gradient-text">Sector 107, Noida?</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Sector 107 is one of the fastest-growing residential hotspots in NCR with excellent infrastructure and connectivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sector107Advantages.map((adv, index) => {
              const Icon = advantageIconMap[adv.icon];
              return (
                <motion.div
                  key={adv.id}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-[#0F4C81]/20 hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#0F4C81] transition-colors duration-300">
                    {Icon && (
                      <Icon className="text-2xl text-[#0F4C81] group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                  <div className="text-2xl font-display font-black text-[#D4AF37] mb-1">
                    {adv.stat}
                  </div>
                  <h3 className="font-display font-bold text-[#1E293B] text-base mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{adv.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Apartments Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">
                Furnished Stays
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E293B]">
                Service <span className="gradient-text">Apartments</span>
              </h2>
            </div>
            <Link
              to="/service-apartments"
              className="flex items-center gap-2 text-[#0F4C81] font-semibold hover:gap-3 transition-all"
            >
              View All <FaArrowRight />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceApartments.slice(0, 4).map((apt, i) => (
              <ServiceApartmentCard key={apt.id} apartment={apt} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Property Gallery */}
      <PropertyGallery />

      {/* Meet Our Agents Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">
                Our Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E293B]">
                Meet Our <span className="gradient-text">Expert Agents</span>
              </h2>
            </div>
            <Link
              to="/agents"
              className="flex items-center gap-2 text-[#0F4C81] font-semibold hover:gap-3 transition-all"
            >
              All Agents <FaArrowRight />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.filter((a) => a.featured).slice(0, 4).map((agent, i) => (
              <AgentCard key={agent.id} agent={agent} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Blog Preview */}
      <BlogPreview />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
};

export default Home;
