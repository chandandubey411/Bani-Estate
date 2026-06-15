import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useProperty } from "../../context/PropertyContext";
import ServiceApartmentCard from "../../components/ServiceApartmentCard/ServiceApartmentCard";
import { FaFilter, FaTimes, FaSearch } from "react-icons/fa";

const stayTypeOptions = ["All", "Fully Furnished", "Corporate Stay", "Family Stay", "Long-Term Rental", "Short-Term Rental"];
const categoryOptions = ["All", "Studio", "1BHK", "2BHK", "3BHK", "Suite"];

const ServiceApartments = () => {
  const { serviceApartments } = useProperty();
  const [activeType, setActiveType] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...serviceApartments];
    
    if (activeType !== "All") {
      result = result.filter((a) => a.type === activeType);
    }
    
    if (activeCategory !== "All") {
      result = result.filter((a) => a.category === activeCategory);
    }

    if (sortBy === "rent-asc") {
      result.sort((a, b) => a.monthlyRent - b.monthlyRent);
    } else if (sortBy === "rent-desc") {
      result.sort((a, b) => b.monthlyRent - a.monthlyRent);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [serviceApartments, activeType, activeCategory, sortBy]);

  return (
    <main className="pt-20 bg-[#F8FAFC] min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0F4C81] to-[#0a3660] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            className="text-3xl sm:text-5xl font-display font-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Service <span className="text-[#D4AF37]">Apartments</span>
          </motion.h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-2">
            Fully furnished luxury stays, corporate suites, and family holiday residences in Sector 107 Noida.
          </p>
          <span className="inline-block text-xs bg-white/10 px-3 py-1 rounded-full text-[#D4AF37] font-semibold border border-white/20">
            ★ verified accommodations with standard cleaning & WiFi
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            {stayTypeOptions.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeType === type
                    ? "bg-[#0F4C81] text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#0F4C81]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-xs text-gray-500 font-semibold">
              {filtered.length} matching stays
            </span>
            
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-xs text-gray-700 outline-none focus:border-[#0F4C81]"
              >
                <option value="default">Default Sort</option>
                <option value="rent-asc">Rent: Low to High</option>
                <option value="rent-desc">Rent: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0F4C81] hover:bg-[#0a3660] text-white text-xs font-semibold"
              >
                <FaFilter className="text-[10px]" /> Filter
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {sidebarOpen && (
            <motion.aside
              className="w-60 flex-shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 h-fit sticky top-24"
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center justify-between mb-5 border-b border-gray-100 pb-3">
                <h3 className="font-display font-bold text-gray-800 text-sm">Filters</h3>
                <button onClick={() => setSidebarOpen(false)}>
                  <FaTimes className="text-gray-400 hover:text-red-500 transition-colors" />
                </button>
              </div>

              <div className="space-y-5">
                {/* Category Options */}
                <div>
                  <h4 className="text-xs font-bold text-gray-700 mb-2">Room Type</h4>
                  <div className="space-y-1.5">
                    {categoryOptions.map((cat) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer text-xs">
                        <input
                          type="radio"
                          name="category"
                          checked={activeCategory === cat}
                          onChange={() => setActiveCategory(cat)}
                          className="accent-[#0F4C81]"
                        />
                        <span className="text-gray-600">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setActiveType("All");
                    setActiveCategory("All");
                    setSortBy("default");
                  }}
                  className="w-full py-2 text-xs font-semibold text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            </motion.aside>
          )}

          {/* Stays Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-5xl mb-3">🛎️</div>
                <h3 className="text-lg font-display font-bold text-gray-600 mb-1">No Service Apartments Found</h3>
                <p className="text-xs text-gray-400">Try adjusting your filters or category choice.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((apt, index) => (
                  <ServiceApartmentCard key={apt.id} apartment={apt} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceApartments;
