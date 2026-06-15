import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { categories } from "../../data/categories";

const FeaturedCategories = () => {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">
            Browse By Category
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E293B] mb-4">
            Featured{" "}
            <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Explore our curated inventory of premium residential and service apartments in Sector 107 Noida.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/properties?type=${cat.type}`}
                className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Background */}
                <div className="relative h-36 sm:h-44">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity"
                    style={{
                      background: `linear-gradient(180deg, transparent 20%, ${cat.color} 100%)`,
                    }}
                  />
                  {/* Badge */}
                  <span className="absolute top-2 right-2 text-xs font-bold bg-[#D4AF37] text-white px-2 py-0.5 rounded-full">
                    {cat.count}+
                  </span>
                </div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-display font-bold text-sm leading-tight">
                    {cat.name}
                  </h3>
                  <div className="flex items-center gap-1 text-white/80 text-xs mt-1 group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <FaArrowRight className="text-[10px]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
