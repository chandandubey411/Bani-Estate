import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaMapMarkerAlt, FaHome, FaRupeeSign, FaBed } from "react-icons/fa";
import { useProperty } from "../../context/PropertyContext";

const SearchBar = ({ variant = "hero" }) => {
  const { applyFilters } = useProperty();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    type: "",
    location: "Sector 107, Noida",
    budget: "",
    beds: "",
  });

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    applyFilters(filters);
    navigate("/properties");
  };

  const isHero = variant === "hero";

  return (
    <motion.div
      className={`${isHero ? "glass rounded-2xl p-4 sm:p-6" : "bg-white rounded-2xl p-4 shadow-xl border border-gray-100"}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* Property Type */}
        <div className={`flex items-center gap-2 rounded-xl px-4 py-3 ${
          isHero ? "bg-white/20 border border-white/30" : "bg-gray-50 border border-gray-200"
        }`}>
          <FaHome className={isHero ? "text-white/70" : "text-[#0F4C81]"} />
          <select
            value={filters.type}
            onChange={(e) => handleChange("type", e.target.value)}
            className={`flex-1 bg-transparent text-sm font-medium outline-none cursor-pointer ${
              isHero ? "text-white placeholder-white/70" : "text-gray-700"
            }`}
          >
            <option value="" className="text-gray-700">Property Type</option>
            <option value="1BHK" className="text-gray-700">1 BHK</option>
            <option value="2BHK" className="text-gray-700">2 BHK</option>
            <option value="3BHK" className="text-gray-700">3 BHK</option>
            <option value="4BHK" className="text-gray-700">4 BHK</option>
          </select>
        </div>

        {/* Location */}
        <div className={`flex items-center gap-2 rounded-xl px-4 py-3 ${
          isHero ? "bg-white/20 border border-white/30" : "bg-gray-50 border border-gray-200"
        }`}>
          <FaMapMarkerAlt className={isHero ? "text-white/70" : "text-[#0F4C81]"} />
          <select
            value={filters.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className={`flex-1 bg-transparent text-sm font-medium outline-none cursor-pointer ${
              isHero ? "text-white" : "text-gray-700"
            }`}
          >
            <option value="Sector 107, Noida" className="text-gray-700">Sector 107, Noida</option>
          </select>
        </div>

        {/* Budget */}
        <div className={`flex items-center gap-2 rounded-xl px-4 py-3 ${
          isHero ? "bg-white/20 border border-white/30" : "bg-gray-50 border border-gray-200"
        }`}>
          <FaRupeeSign className={isHero ? "text-white/70" : "text-[#0F4C81]"} />
          <select
            value={filters.budget}
            onChange={(e) => handleChange("budget", e.target.value)}
            className={`flex-1 bg-transparent text-sm font-medium outline-none cursor-pointer ${
              isHero ? "text-white placeholder-white/70" : "text-gray-700"
            }`}
          >
            <option value="" className="text-gray-700">Budget</option>
            <option value="under-40" className="text-gray-700">Under ₹40 Lac</option>
            <option value="40-80" className="text-gray-700">₹40 – 80 Lac</option>
            <option value="80-150" className="text-gray-700">₹80 Lac – 1.5 Cr</option>
            <option value="above-150" className="text-gray-700">Above ₹1.5 Cr</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div className={`flex items-center gap-2 rounded-xl px-4 py-3 ${
          isHero ? "bg-white/20 border border-white/30" : "bg-gray-50 border border-gray-200"
        }`}>
          <FaBed className={isHero ? "text-white/70" : "text-[#0F4C81]"} />
          <select
            value={filters.beds}
            onChange={(e) => handleChange("beds", e.target.value)}
            className={`flex-1 bg-transparent text-sm font-medium outline-none cursor-pointer ${
              isHero ? "text-white placeholder-white/70" : "text-gray-700"
            }`}
          >
            <option value="" className="text-gray-700">Bedrooms</option>
            <option value="1" className="text-gray-700">1 Bedroom</option>
            <option value="2" className="text-gray-700">2 Bedrooms</option>
            <option value="3" className="text-gray-700">3 Bedrooms</option>
            <option value="4" className="text-gray-700">4 Bedrooms</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#b8941f] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 active:scale-95"
        >
          <FaSearch />
          <span>Search</span>
        </button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
