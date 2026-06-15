import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useProperty } from "../../context/PropertyContext";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Wishlist = () => {
  const { wishlist, properties } = useProperty();

  const savedProperties = useMemo(() => {
    return properties.filter((p) => wishlist.includes(p.id));
  }, [wishlist, properties]);

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
            My <span className="text-[#D4AF37]">Wishlist</span>
          </motion.h1>
          <p className="text-white/80 text-sm max-w-xl mx-auto">
            Your premium verified bookmarks and selection in Sector 107 Noida. Keep track of your favourite properties.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {savedProperties.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-lg mx-auto">
            <div className="text-6xl mb-4">❤️</div>
            <h2 className="text-xl font-display font-bold text-gray-700 mb-2">Your Wishlist is Empty</h2>
            <p className="text-gray-400 text-xs mb-6 max-w-xs mx-auto">
              Start exploring luxury homes, 1BHK, 2BHK, 3BHK, 4BHK apartments in Sector 107 Noida and save them here.
            </p>
            <Link
              to="/properties"
              className="px-6 py-3 bg-[#0F4C81] hover:bg-[#0a3660] text-white text-xs font-bold rounded-xl shadow-md transition-all inline-block"
            >
              Browse Properties
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center text-xs text-gray-500 font-semibold px-2">
              <span>{savedProperties.length} Bookmarked Listing{savedProperties.length > 1 && "s"}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {savedProperties.map((p, idx) => (
                <PropertyCard key={p.id} property={p} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Wishlist;
