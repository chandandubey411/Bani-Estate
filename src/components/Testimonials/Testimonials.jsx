import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="section-padding bg-[#F8FAFC] overflow-hidden">
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
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E293B] mb-4">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Trusted by hundreds of families and investors in Sector 107 Noida. Here's what they have to say about us.
          </p>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-full"
                whileHover={{ y: -4, shadow: "0 20px 40px rgba(15,76,129,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-3xl text-[#D4AF37]/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${i < t.rating ? "text-[#D4AF37]" : "text-gray-200"}`}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  "{t.review}"
                </p>

                {/* Property */}
                <div className="text-xs text-[#0F4C81] bg-blue-50 px-3 py-1.5 rounded-full inline-block mb-4 font-medium">
                  📍 {t.property}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-display font-bold text-[#1E293B] text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.designation} • {t.company}</div>
                  </div>
                  <div className="ml-auto text-gray-400 text-xs">{t.date}</div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
