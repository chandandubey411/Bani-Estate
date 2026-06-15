import React, { useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "../PropertyCard/PropertyCard";
import { useProperty } from "../../context/PropertyContext";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const tabs = ["All", "1BHK", "2BHK", "3BHK", "4BHK"];

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md">
    <div className="skeleton h-52" />
    <div className="p-5 space-y-3">
      <div className="skeleton h-5 rounded-lg" />
      <div className="skeleton h-4 rounded-lg w-2/3" />
      <div className="skeleton h-10 rounded-xl" />
      <div className="flex gap-2"><div className="skeleton h-10 flex-1 rounded-xl" /><div className="skeleton h-10 flex-1 rounded-xl" /></div>
    </div>
  </div>
);

const PropertyGrid = ({ title, subtitle, limit, showTabs = true }) => {
  const { getPropertiesByType, isLoading } = useProperty();
  const [activeTab, setActiveTab] = useState("All");
  const properties = getPropertiesByType(activeTab === "All" ? "All" : activeTab);
  const displayed = limit ? properties.slice(0, limit) : properties;

  return (
    <section className="section-padding bg-white">
      <div className="container-base">
        <motion.div className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Sector 107 Noida</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-3">
            {title || "Featured"} <span className="gradient-text">Properties</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            {subtitle || "Explore our premium selection of verified residential properties."}
          </p>
        </motion.div>

        {showTabs && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab ? "bg-primary text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-primary"
                }`}>{tab}</button>
            ))}
          </div>
        )}

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            {displayed.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
          </motion.div>
        )}

        {limit && (
          <div className="text-center mt-10 sm:mt-12">
            <Link to="/properties"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:scale-105 text-sm sm:text-base">
              View All Properties <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;
