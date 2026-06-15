import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useProperty } from "../../context/PropertyContext";
import { FaFilter, FaTimes } from "react-icons/fa";

const statusOptions = ["All", "For Sale", "For Rent"];
const typeOptions = ["All", "1BHK", "2BHK", "3BHK", "4BHK"];
const furnishingOptions = ["All", "Fully Furnished", "Semi-Furnished", "Unfurnished"];

const Properties = () => {
  const { properties } = useProperty();
  const [activeStatus, setActiveStatus] = useState("All");
  const [activeType, setActiveType] = useState("All");
  const [activeFurnishing, setActiveFurnishing] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...properties];
    if (activeStatus !== "All") result = result.filter((p) => p.status === activeStatus);
    if (activeType !== "All") result = result.filter((p) => p.type === activeType);
    if (activeFurnishing !== "All") result = result.filter((p) => p.furnishing === activeFurnishing);
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "area") result.sort((a, b) => b.area - a.area);
    else result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return result;
  }, [properties, activeStatus, activeType, activeFurnishing, sortBy]);

  return (
    <main className="pt-20 bg-[#F8FAFC] min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0F4C81] to-[#1a6cb8] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-5xl font-display font-black text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Properties in{" "}
            <span className="text-[#D4AF37]">Sector 107 Noida</span>
          </motion.h1>
          <p className="text-white/80 text-lg mb-8">
            Explore {properties.length}+ verified residential properties
          </p>
          <div className="max-w-5xl mx-auto">
            <SearchBar variant="hero" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            {statusOptions.map((s) => (
              <button
                key={s}
                onClick={() => setActiveStatus(s)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeStatus === s
                    ? "bg-[#0F4C81] text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#0F4C81]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">{filtered.length} Properties</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:border-[#0F4C81]"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="area">Largest Area</option>
            </select>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F4C81] text-white text-sm font-semibold"
            >
              <FaFilter /> Filter
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          {sidebarOpen && (
            <motion.aside
              className="w-64 flex-shrink-0 bg-white rounded-2xl shadow-md border border-gray-100 p-6 h-fit sticky top-24"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-[#1E293B]">Filters</h3>
                <button onClick={() => setSidebarOpen(false)}>
                  <FaTimes className="text-gray-400 hover:text-red-500 transition-colors" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Type */}
                <div>
                  <h4 className="text-sm font-bold text-gray-700 mb-3">Property Type</h4>
                  <div className="space-y-2">
                    {typeOptions.map((t) => (
                      <label key={t} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          checked={activeType === t}
                          onChange={() => setActiveType(t)}
                          className="accent-[#0F4C81]"
                        />
                        <span className="text-sm text-gray-600">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Furnishing */}
                <div>
                  <h4 className="text-sm font-bold text-gray-700 mb-3">Furnishing</h4>
                  <div className="space-y-2">
                    {furnishingOptions.map((f) => (
                      <label key={f} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="furnishing"
                          checked={activeFurnishing === f}
                          onChange={() => setActiveFurnishing(f)}
                          className="accent-[#0F4C81]"
                        />
                        <span className="text-sm text-gray-600">{f}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveStatus("All");
                    setActiveType("All");
                    setActiveFurnishing("All");
                  }}
                  className="w-full py-2 text-sm font-semibold text-red-500 border border-red-200 rounded-xl hover:bg-red-50"
                >
                  Clear All
                </button>
              </div>
            </motion.aside>
          )}

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-xl font-display font-bold text-gray-600 mb-2">No Properties Found</h3>
                <p className="text-sm">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p, i) => (
                  <PropertyCard key={p.id} property={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Properties;
