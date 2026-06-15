import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBed, FaBath, FaRulerCombined, FaHeart, FaParking, FaArrowRight,
  FaMapMarkerAlt, FaCheckCircle, FaBuilding,
} from "react-icons/fa";
import { useProperty } from "../../context/PropertyContext";

const PropertyCard = ({ property, index = 0 }) => {
  const { toggleWishlist, isInWishlist } = useProperty();
  const inWishlist = isInWishlist(property.id);

  const formatPrice = (price, status) => {
    if (status === "For Rent") return `₹${price.toLocaleString()}/mo`;
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(0)} Lac`;
    return `₹${price.toLocaleString()}`;
  };

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
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
            property.status === "For Sale"
              ? "bg-[#0F4C81] text-white"
              : "bg-emerald-500 text-white"
          }`}>
            {property.status}
          </span>
          {property.verified && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#D4AF37] text-white flex items-center gap-1">
              <FaCheckCircle className="text-[10px]" /> Verified
            </span>
          )}
        </div>
        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(property.id); }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
            inWishlist
              ? "bg-red-500 text-white scale-110"
              : "bg-white/90 text-gray-400 hover:text-red-500 hover:scale-110"
          }`}
        >
          <FaHeart className="text-sm" />
        </button>
        {/* Price on image */}
        <div className="absolute bottom-3 left-3">
          <span className="text-xl font-display font-black text-white drop-shadow-lg">
            {formatPrice(property.price, property.status)}
          </span>
        </div>
        {/* Type badge */}
        <div className="absolute bottom-3 right-3">
          <span className="glass text-white text-xs font-bold px-2 py-1 rounded-lg">
            {property.type}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-display font-bold text-[#1E293B] text-base leading-tight mb-1 line-clamp-2 group-hover:text-[#0F4C81] transition-colors">
          {property.title}
        </h3>
        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-4">
          <FaMapMarkerAlt className="text-[#D4AF37] flex-shrink-0" />
          <span>{property.location}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center justify-between text-gray-600 text-xs mb-4 bg-gray-50 rounded-xl p-3">
          <div className="flex items-center gap-1.5">
            <FaBed className="text-[#0F4C81]" />
            <span className="font-semibold">{property.beds} Bed</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-1.5">
            <FaBath className="text-[#0F4C81]" />
            <span className="font-semibold">{property.baths} Bath</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-1.5">
            <FaRulerCombined className="text-[#0F4C81]" />
            <span className="font-semibold">{property.area} sqft</span>
          </div>
        </div>

        {/* Amenity tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {property.lift && (
            <span className="flex items-center gap-1 text-xs bg-blue-50 text-[#0F4C81] px-2 py-1 rounded-full font-medium">
              <FaBuilding className="text-[10px]" /> Lift
            </span>
          )}
          <span className="flex items-center gap-1 text-xs bg-blue-50 text-[#0F4C81] px-2 py-1 rounded-full font-medium">
            <FaParking className="text-[10px]" /> Parking
          </span>
          {property.furnishing && (
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full font-medium">
              {property.furnishing}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex gap-2">
          <Link
            to={`/properties/${property.id}`}
            className="flex-1 text-center py-2.5 text-sm font-semibold text-[#0F4C81] border border-[#0F4C81] rounded-xl hover:bg-[#0F4C81] hover:text-white transition-all duration-300"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/919876543210?text=I'm interested in ${property.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 text-sm font-semibold bg-[#D4AF37] text-white rounded-xl hover:bg-[#b8941f] transition-all duration-300 flex items-center justify-center gap-1"
          >
            Contact Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
