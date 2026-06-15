import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaHome, FaRupeeSign, FaBed } from "react-icons/fa";
import { useProperty } from "../../context/PropertyContext";

const SearchBar = ({ variant = "hero" }) => {
  const { applyFilters } = useProperty();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ type: "", location: "Sector 107, Noida", budget: "", beds: "" });

  const isHero = variant === "hero";

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.type) params.set("type", filters.type);
    if (filters.budget) params.set("budget", filters.budget);
    if (filters.beds) params.set("beds", filters.beds);
    navigate(`/properties?${params.toString()}`);
  };

  const fieldCls = isHero
    ? "bg-white/20 border border-white/30 text-white"
    : "bg-gray-50 border border-gray-200 text-gray-800";

  const selectCls = isHero ? "text-white" : "text-gray-700";
  const iconCls = isHero ? "text-white/70" : "text-primary";

  return (
    <div className={`${isHero ? "glass rounded-2xl p-3 sm:p-5" : "bg-white rounded-2xl p-4 shadow-xl border border-gray-100"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3">
        {/* Type */}
        <div className={`flex items-center gap-2 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 ${fieldCls}`}>
          <FaHome className={`flex-shrink-0 text-sm ${iconCls}`} />
          <select value={filters.type} onChange={(e) => setFilters(p => ({ ...p, type: e.target.value }))}
            className={`flex-1 bg-transparent text-xs sm:text-sm font-medium outline-none cursor-pointer ${selectCls}`}>
            <option value="" className="text-gray-700">Property Type</option>
            <option value="1BHK" className="text-gray-700">1 BHK</option>
            <option value="2BHK" className="text-gray-700">2 BHK</option>
            <option value="3BHK" className="text-gray-700">3 BHK</option>
            <option value="4BHK" className="text-gray-700">4 BHK</option>
          </select>
        </div>

        {/* Location */}
        <div className={`flex items-center gap-2 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 ${fieldCls}`}>
          <FaMapMarkerAlt className={`flex-shrink-0 text-sm ${iconCls}`} />
          <select value={filters.location} onChange={(e) => setFilters(p => ({ ...p, location: e.target.value }))}
            className={`flex-1 bg-transparent text-xs sm:text-sm font-medium outline-none cursor-pointer ${selectCls}`}>
            <option value="Sector 107, Noida" className="text-gray-700">Sector 107, Noida</option>
          </select>
        </div>

        {/* Budget */}
        <div className={`flex items-center gap-2 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 ${fieldCls}`}>
          <FaRupeeSign className={`flex-shrink-0 text-sm ${iconCls}`} />
          <select value={filters.budget} onChange={(e) => setFilters(p => ({ ...p, budget: e.target.value }))}
            className={`flex-1 bg-transparent text-xs sm:text-sm font-medium outline-none cursor-pointer ${selectCls}`}>
            <option value="" className="text-gray-700">Budget</option>
            <option value="under-40" className="text-gray-700">Under ₹40 Lac</option>
            <option value="40-80" className="text-gray-700">₹40 – 80 Lac</option>
            <option value="80-150" className="text-gray-700">₹80L – 1.5 Cr</option>
            <option value="above-150" className="text-gray-700">Above ₹1.5 Cr</option>
          </select>
        </div>

        {/* Beds */}
        <div className={`flex items-center gap-2 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 ${fieldCls}`}>
          <FaBed className={`flex-shrink-0 text-sm ${iconCls}`} />
          <select value={filters.beds} onChange={(e) => setFilters(p => ({ ...p, beds: e.target.value }))}
            className={`flex-1 bg-transparent text-xs sm:text-sm font-medium outline-none cursor-pointer ${selectCls}`}>
            <option value="" className="text-gray-700">Bedrooms</option>
            <option value="1" className="text-gray-700">1 BHK</option>
            <option value="2" className="text-gray-700">2 BHK</option>
            <option value="3" className="text-gray-700">3 BHK</option>
            <option value="4" className="text-gray-700">4 BHK</option>
          </select>
        </div>

        {/* Search Button */}
        <button onClick={handleSearch}
          className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-2.5 sm:py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 text-sm sm:text-base">
          <FaSearch /> Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
