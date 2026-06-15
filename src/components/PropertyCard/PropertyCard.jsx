import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaParking, FaMapMarkerAlt, FaCheckCircle, FaBuilding } from "react-icons/fa";
import { useProperty } from "../../context/PropertyContext";

const PropertyCard = ({ property, index = 0 }) => {
  const { toggleWishlist, isInWishlist } = useProperty();
  const inWishlist = isInWishlist(property.id);

  const formatPrice = (price, status) => {
    if (status === "For Rent") return `₹${price.toLocaleString()}/mo`;
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(0)} Lac`;
    return `₹${price.toLocaleString()}`;
  };

  return (
    <motion.div
      className="property-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group flex flex-col"
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
        <img src={property.images[0]} alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full ${property.status === "For Sale" ? "bg-primary text-white" : "bg-emerald-500 text-white"}`}>
            {property.status}
          </span>
          {property.verified && (
            <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-secondary text-white flex items-center gap-1">
              <FaCheckCircle className="text-[8px]" /> Verified
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button onClick={(e) => { e.preventDefault(); toggleWishlist(property.id); }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow ${
            inWishlist ? "bg-red-500 text-white scale-110" : "bg-white/90 text-gray-400 hover:text-red-500 hover:scale-110"
          }`}>
          <FaHeart className="text-xs" />
        </button>

        {/* Price */}
        <div className="absolute bottom-3 left-3">
          <span className="text-lg sm:text-xl font-display font-black text-white drop-shadow-lg">
            {formatPrice(property.price, property.status)}
          </span>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="glass text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-lg">{property.type}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-gray-900 text-sm sm:text-base leading-snug mb-1.5 line-clamp-2 group-hover:text-primary transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
          <FaMapMarkerAlt className="text-secondary flex-shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center justify-between text-xs text-gray-600 mb-3 bg-gray-50 rounded-xl p-2.5">
          <div className="flex items-center gap-1.5"><FaBed className="text-primary" /><span className="font-semibold">{property.beds} Bed</span></div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-1.5"><FaBath className="text-primary" /><span className="font-semibold">{property.baths} Bath</span></div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-1.5"><FaRulerCombined className="text-primary" /><span className="font-semibold">{property.area} sqft</span></div>
        </div>

        {/* Amenity Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {property.lift && <span className="flex items-center gap-1 text-[10px] bg-blue-50 text-primary px-2 py-0.5 rounded-full font-medium"><FaBuilding className="text-[8px]" /> Lift</span>}
          {property.parking && <span className="flex items-center gap-1 text-[10px] bg-blue-50 text-primary px-2 py-0.5 rounded-full font-medium"><FaParking className="text-[8px]" /> Parking</span>}
          {property.furnishing && <span className="text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-medium">{property.furnishing}</span>}
        </div>

        {/* CTAs */}
        <div className="flex gap-2 mt-auto">
          <Link to={`/properties/${property.id}`}
            className="flex-1 text-center py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
            View Details
          </Link>
          <a href={`https://wa.me/919876543210?text=Hi, I'm interested in ${property.title}`}
            target="_blank" rel="noopener noreferrer"
            className="flex-1 text-center py-2 sm:py-2.5 text-xs sm:text-sm font-semibold bg-secondary text-white rounded-xl hover:bg-secondary-dark transition-all duration-300 flex items-center justify-center">
            Contact Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
