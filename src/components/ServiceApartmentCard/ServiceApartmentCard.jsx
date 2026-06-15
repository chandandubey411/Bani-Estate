import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWifi, FaCar, FaShieldAlt, FaUtensils, FaSnowflake, FaArrowRight, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const amenityIcons = {
  WiFi: FaWifi,
  "Car Parking": FaCar,
  Security: FaShieldAlt,
  Kitchen: FaUtensils,
  "Air Conditioning": FaSnowflake,
};

const ServiceApartmentCard = ({ apartment, index = 0 }) => {
  return (
    <motion.div
      className="property-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={apartment.images[0]}
          alt={apartment.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-white">
            {apartment.type}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 glass px-2 py-1 rounded-full">
          <FaStar className="text-[#D4AF37] text-xs" />
          <span className="text-white text-xs font-bold">{apartment.rating}</span>
          <span className="text-white/70 text-xs">({apartment.reviews})</span>
        </div>

        {/* Availability */}
        <div className="absolute bottom-3 left-3">
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
            apartment.availability === "Available" ? "bg-green-500 text-white" : "bg-orange-500 text-white"
          }`}>
            {apartment.availability}
          </span>
        </div>

        {/* Category */}
        <div className="absolute bottom-3 right-3">
          <span className="glass text-white text-xs font-bold px-2 py-1 rounded-lg">
            {apartment.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-display font-bold text-[#1E293B] text-base leading-tight mb-1 line-clamp-2 group-hover:text-[#0F4C81] transition-colors">
          {apartment.title}
        </h3>
        <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-4">
          <FaMapMarkerAlt className="text-[#D4AF37]" />
          <span>{apartment.location}</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-4 mb-4 bg-blue-50 rounded-xl p-3">
          <div>
            <div className="text-xs text-gray-500 font-medium">Monthly</div>
            <div className="text-base font-display font-black text-[#0F4C81]">
              ₹{apartment.monthlyRent.toLocaleString()}
            </div>
          </div>
          {apartment.dailyRent && (
            <>
              <div className="w-px h-10 bg-blue-200" />
              <div>
                <div className="text-xs text-gray-500 font-medium">Daily</div>
                <div className="text-base font-display font-black text-[#D4AF37]">
                  ₹{apartment.dailyRent.toLocaleString()}
                </div>
              </div>
            </>
          )}
          <div className="ml-auto text-xs text-gray-500">
            {apartment.area} sqft
          </div>
        </div>

        {/* Amenity Icons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {apartment.amenities.slice(0, 5).map((amenity) => {
            const Icon = amenityIcons[amenity];
            return Icon ? (
              <div key={amenity} title={amenity} className="flex items-center gap-1 text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">
                <Icon className="text-[#0F4C81]" /> {amenity}
              </div>
            ) : null;
          })}
        </div>

        {/* CTA */}
        <div className="flex gap-2">
          <Link
            to={`/service-apartments/${apartment.id}`}
            className="flex-1 text-center py-2.5 text-sm font-semibold text-[#0F4C81] border border-[#0F4C81] rounded-xl hover:bg-[#0F4C81] hover:text-white transition-all duration-300"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/919876543210?text=I'm interested in ${apartment.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 text-sm font-semibold bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceApartmentCard;
