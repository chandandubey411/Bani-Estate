import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFilter, FaTimes } from "react-icons/fa";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useProperty } from "../../context/PropertyContext";

const types = ["All","1BHK","2BHK","3BHK","4BHK"];
const statuses = ["All","For Sale","For Rent"];
const sorts = ["Default","Price: Low to High","Price: High to Low","Newest First"];

const Properties = () => {
  const { filteredProperties, applyFilters, isLoading } = useProperty();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeType = searchParams.get("type") || "All";
  const activeStatusParam = searchParams.get("status") || "All";
  const activeStatus = activeStatusParam === "buy" || activeStatusParam === "For Sale"
    ? "For Sale"
    : activeStatusParam === "rent" || activeStatusParam === "For Rent"
      ? "For Rent"
      : "All";

  const sortBy = searchParams.get("sort") || "Default";

  useEffect(() => {
    const type = searchParams.get("type") || "";
    const status = searchParams.get("status") || "";
    const budget = searchParams.get("budget") || "";
    const beds = searchParams.get("beds") || "";
    
    applyFilters({ type, status, budget, beds });
  }, [searchParams, applyFilters]);

  const handleTypeChange = (newType) => {
    const params = new URLSearchParams(searchParams);
    if (newType === "All") {
      params.delete("type");
    } else {
      params.set("type", newType);
    }
    setSearchParams(params);
  };

  const handleStatusChange = (newStatus) => {
    const params = new URLSearchParams(searchParams);
    if (newStatus === "All") {
      params.delete("status");
    } else {
      params.set("status", newStatus === "For Sale" ? "buy" : "rent");
    }
    setSearchParams(params);
  };

  const handleSortChange = (newSort) => {
    const params = new URLSearchParams(searchParams);
    if (newSort === "Default") {
      params.delete("sort");
    } else {
      params.set("sort", newSort);
    }
    setSearchParams(params);
  };

  let displayed = [...filteredProperties];
  if (sortBy === "Price: Low to High") displayed.sort((a, b) => a.price - b.price);
  if (sortBy === "Price: High to Low") displayed.sort((a, b) => b.price - a.price);
  if (sortBy === "Newest First") displayed.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));

  return (
    <main className="pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-primary-dark py-12 sm:py-16">
        <div className="container-base text-center">
          <motion.h1 className="text-2xl sm:text-4xl font-display font-black text-white mb-3"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            All Properties in <span className="text-secondary">Sector 107 Noida</span>
          </motion.h1>
          <p className="text-white/70 mb-8 text-sm sm:text-base">{displayed.length} properties found</p>
          <SearchBar variant="default" />
        </div>
      </div>

      <div className="container-base py-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 items-center">
          <div className="flex flex-wrap gap-2">
            {types.map(t => (
              <button key={t} onClick={() => handleTypeChange(t)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeType === t ? "bg-primary text-white shadow" : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"}`}>
                {t}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 ml-0 sm:ml-4">
            {statuses.map(s => (
              <button key={s} onClick={() => handleStatusChange(s)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeStatus === s ? "bg-secondary text-white shadow" : "bg-white text-gray-600 border border-gray-200 hover:border-secondary hover:text-secondary"}`}>
                {s}
              </button>
            ))}
          </div>
          <select value={sortBy} onChange={e => handleSortChange(e.target.value)}
            className="ml-auto px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-gray-200 bg-white text-gray-700 focus:outline-none focus:border-primary cursor-pointer">
            {sorts.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md"><div className="skeleton h-52" /><div className="p-5 space-y-3"><div className="skeleton h-5 rounded" /><div className="skeleton h-4 rounded w-2/3" /><div className="skeleton h-10 rounded-xl" /></div></div>)}
          </div>
        ) : displayed.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="font-display font-bold text-xl text-gray-900 mb-2">No Properties Found</h3>
            <p className="text-gray-500 text-sm">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {displayed.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
          </div>
        )}
      </div>
    </main>
  );
};

export default Properties;
