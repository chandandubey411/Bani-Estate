import React, { useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "../PropertyCard/PropertyCard";
import { useProperty } from "../../context/PropertyContext";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const tabs = ["All", "1BHK", "2BHK", "3BHK", "4BHK"];

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md">
    <div className="skeleton h-56" />
    <div className="p-5 space-y-3">
      <div className="skeleton h-5 rounded-lg" />
      <div className="skeleton h-4 rounded-lg w-2/3" />
      <div className="skeleton h-10 rounded-xl" />
      <div className="flex gap-2">
        <div className="skeleton h-10 flex-1 rounded-xl" />
        <div className="skeleton h-10 flex-1 rounded-xl" />
      </div>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">
            Sector 107 Noida
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E293B] mb-4">
            {title || "Featured"}{" "}
            <span className="gradient-text">Properties</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {subtitle || "Explore our premium selection of verified residential properties in Sector 107 Noida."}
          </p>
        </motion.div>

        {/* Tabs */}
        {showTabs && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#0F4C81] text-white shadow-lg shadow-blue-900/20"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-[#0F4C81]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {displayed.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </motion.div>
        )}

        {/* View All */}
        {limit && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 bg-[#0F4C81] hover:bg-[#0a3660] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-900/30 hover:scale-105"
            >
              View All Properties <FaArrowRight />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;
