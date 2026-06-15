import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExpand } from "react-icons/fa";
import { galleryImages } from "../../data/categories";

const PropertyGallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-base">
        <motion.div className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Gallery</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-3">
            Property <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            A glimpse into the premium living spaces in Sector 107, Noida.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div key={i}
              className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-md"
              style={{ gridRow: i === 0 || i === 4 ? "span 2" : "span 1" }}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setSelected(img)}>
              <img src={img} alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"
                style={{ minHeight: "200px" }} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <FaExpand className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}>
              <button onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all">
                <FaTimes />
              </button>
              <motion.img src={selected} alt="Gallery" className="max-w-full max-h-full rounded-2xl shadow-2xl"
                initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PropertyGallery;
