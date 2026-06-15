import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWifi, FaBroom, FaParking, FaSnowflake, FaUtensils, FaStar, FaArrowRight } from "react-icons/fa";

const amenityIcons = {
  "WiFi": FaWifi, "Housekeeping": FaBroom, "Car Parking": FaParking,
  "AC": FaSnowflake, "Kitchen": FaUtensils, "Daily Housekeeping": FaBroom,
};

const ServiceApartmentCard = ({ apartment, index = 0 }) => (
  <motion.div
    className="property-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group flex flex-col"
    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <div className="relative h-48 overflow-hidden flex-shrink-0">
      <img src={apartment.image} alt={apartment.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${apartment.availability === "Available" ? "bg-emerald-500 text-white" : "bg-amber-500 text-white"}`}>
        {apartment.availability}
      </span>
      <span className="absolute top-3 right-3 glass text-white text-xs font-bold px-2 py-1 rounded-lg">{apartment.type}</span>
      <div className="absolute bottom-3 left-3">
        <div className="text-lg font-display font-black text-white drop-shadow-lg">₹{apartment.monthlyRent.toLocaleString()}/mo</div>
        <div className="text-white/80 text-xs">₹{apartment.dailyRent.toLocaleString()}/day</div>
      </div>
    </div>

    <div className="p-4 sm:p-5 flex flex-col flex-1">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-display font-bold text-gray-900 text-sm sm:text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {apartment.name}
        </h3>
        <div className="flex items-center gap-1 ml-2 flex-shrink-0">
          <FaStar className="text-secondary text-xs" />
          <span className="text-xs font-bold text-gray-800">{apartment.rating}</span>
          <span className="text-xs text-gray-500">({apartment.reviews})</span>
        </div>
      </div>

      <p className="text-gray-500 text-xs mb-3 line-clamp-2">{apartment.description}</p>

      <div className="flex items-center gap-3 text-xs text-gray-600 mb-3 bg-gray-50 rounded-xl p-2.5">
        <span className="font-semibold">{apartment.beds}B</span>
        <div className="w-px h-3 bg-gray-200" />
        <span className="font-semibold">{apartment.baths}Ba</span>
        <div className="w-px h-3 bg-gray-200" />
        <span className="font-semibold">{apartment.area} sqft</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {apartment.amenities.slice(0, 4).map((a) => (
          <span key={a} className="text-[10px] bg-blue-50 text-primary px-2 py-0.5 rounded-full font-medium">{a}</span>
        ))}
        {apartment.amenities.length > 4 && (
          <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">+{apartment.amenities.length - 4} more</span>
        )}
      </div>

      <div className="flex gap-2 mt-auto">
        <Link to={`/service-apartments/${apartment.id}`}
          className="flex-1 text-center py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary border border-primary rounded-xl hover:bg-primary hover:text-white transition-all">
          View Details
        </Link>
        <a href={`https://wa.me/919876543210?text=I'm interested in ${apartment.name}`}
          target="_blank" rel="noopener noreferrer"
          className="flex-1 text-center py-2 sm:py-2.5 text-xs sm:text-sm font-semibold bg-secondary text-white rounded-xl hover:bg-secondary-dark transition-all flex items-center justify-center">
          Book Now
        </a>
      </div>
    </div>
  </motion.div>
);

export default ServiceApartmentCard;
