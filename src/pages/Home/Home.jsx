import React from "react";
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
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTrain, FaSchool, FaHospital, FaShoppingBag, FaTree, FaBuilding, FaChartLine, FaRoad } from "react-icons/fa";
import { serviceApartments } from "../../data/serviceApartments";
import { agents } from "../../data/agents";
import { sector107Advantages } from "../../data/categories";

const iconMap = { FaTrain, FaSchool, FaHospital, FaShoppingBag, FaTree, FaBuilding, FaChartLine, FaRoad };

const Home = () => (
  <main>
    <Hero />
    <FeaturedCategories />
    <PropertyGrid title="Featured" subtitle="Explore our premium verified residential properties in Sector 107 Noida." limit={6} showTabs={true} />
    <CTASection />
    <WhyChooseUs />

    {/* Sector 107 Advantages */}
    <section className="section-padding bg-gray-50">
      <div className="container-base">
        <motion.div className="text-center mb-10 sm:mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Location Benefits</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-3">Why <span className="gradient-text">Sector 107, Noida?</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">One of the fastest-growing residential hotspots in NCR with excellent infrastructure.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {sector107Advantages.map((adv, i) => {
            const Icon = iconMap[adv.icon];
            return (
              <motion.div key={adv.id}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}>
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  {Icon && <Icon className="text-xl text-primary group-hover:text-white transition-colors duration-300" />}
                </div>
                <div className="text-2xl sm:text-3xl font-display font-black text-secondary mb-1">{adv.stat}</div>
                <h3 className="font-display font-bold text-gray-900 text-sm sm:text-base mb-1.5">{adv.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{adv.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Service Apartments */}
    <section className="section-padding bg-white">
      <div className="container-base">
        <motion.div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div>
            <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Furnished Stays</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900">Service <span className="gradient-text">Apartments</span></h2>
          </div>
          <Link to="/service-apartments" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm whitespace-nowrap">View All <FaArrowRight /></Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {serviceApartments.slice(0, 4).map((apt, i) => <ServiceApartmentCard key={apt.id} apartment={apt} index={i} />)}
        </div>
      </div>
    </section>

    <PropertyGallery />

    {/* Agents */}
    <section className="section-padding bg-white">
      <div className="container-base">
        <motion.div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div>
            <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Our Team</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900">Meet Our <span className="gradient-text">Expert Agents</span></h2>
          </div>
          <Link to="/agents" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm whitespace-nowrap">All Agents <FaArrowRight /></Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {agents.filter(a => a.featured).slice(0, 4).map((agent, i) => <AgentCard key={agent.id} agent={agent} index={i} />)}
        </div>
      </div>
    </section>

    <Testimonials />
    <BlogPreview />
    <Newsletter />
  </main>
);

export default Home;
