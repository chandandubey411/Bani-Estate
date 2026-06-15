import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { galleryImages } from "../../data/categories";

const PropertyGallery = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const allCategories = ["All", ...new Set(galleryImages.map((img) => img.category))];
  const filtered =
    filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">
            Visual Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E293B] mb-4">
            Property <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A visual showcase of premium properties and amenities in Sector 107 Noida.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-[#0F4C81] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-[#0F4C81] border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, index) => (
            <motion.div
              key={img.id}
              className="break-inside-avoid relative overflow-hidden rounded-2xl cursor-pointer group shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => setSelected(img)}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div>
                  <div className="text-white font-bold text-sm">{img.alt}</div>
                  <div className="text-white/70 text-xs">{img.category}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/40 transition-all"
                >
                  <FaTimes />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="text-white font-bold">{selected.alt}</div>
                  <div className="text-white/60 text-sm">{selected.category}</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PropertyGallery;
