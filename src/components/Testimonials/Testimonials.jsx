import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => (
  <section className="section-padding bg-gray-50 overflow-hidden">
    <div className="container-base">
      <motion.div className="text-center mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Client Reviews</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-3">
          What Our <span className="gradient-text">Clients Say</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
          Trusted by hundreds of families and investors. Here's what they have to say.
        </p>
      </motion.div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="pb-12"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <motion.div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 h-full"
              whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
              <FaQuoteLeft className="text-2xl text-secondary/30 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`text-xs ${i < t.rating ? "text-secondary" : "text-gray-200"}`} />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">"{t.review}"</p>
              <div className="text-xs text-primary bg-blue-50 px-3 py-1 rounded-full inline-block mb-4 font-medium">📍 {t.property}</div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-secondary" loading="lazy" />
                <div>
                  <div className="font-display font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.designation} · {t.company}</div>
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

export default Testimonials;
