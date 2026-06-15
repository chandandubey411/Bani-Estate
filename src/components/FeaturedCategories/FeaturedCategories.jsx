import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { categories } from "../../data/categories";

const FeaturedCategories = () => (
  <section className="section-padding bg-gray-50">
    <div className="container-base">
      <motion.div className="text-center mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Browse By Category</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-3">
          Featured <span className="gradient-text">Categories</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
          Explore our curated inventory of premium residential & service apartments in Sector 107 Noida.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {categories.map((cat, i) => (
          <motion.div key={cat.id}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
            <Link to={cat.type === "service" ? "/service-apartments" : `/properties?type=${cat.type}`}
              className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500">
              <div className="relative h-32 sm:h-40 lg:h-44">
                <img src={cat.image} alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: `linear-gradient(180deg, transparent 20%, ${cat.color}dd 100%)` }} />
                <span className="absolute top-2 right-2 text-[10px] sm:text-xs font-bold bg-secondary text-white px-1.5 sm:px-2 py-0.5 rounded-full">
                  {cat.count}+
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3">
                <h3 className="text-white font-display font-bold text-xs sm:text-sm leading-tight">{cat.name}</h3>
                <div className="flex items-center gap-1 text-white/80 text-[10px] sm:text-xs mt-1 group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <FaArrowRight className="text-[8px]" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCategories;
