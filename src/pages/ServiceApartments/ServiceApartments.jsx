import React from "react";
import { motion } from "framer-motion";
import ServiceApartmentCard from "../../components/ServiceApartmentCard/ServiceApartmentCard";
import { serviceApartments } from "../../data/serviceApartments";
import { FaWifi, FaParking, FaSnowflake, FaShieldAlt, FaUtensils, FaBroom, FaTv } from "react-icons/fa";

const types = ["All","Fully Furnished","Corporate Stay","Family Stay","Long-Term Rental","Short-Term Rental"];

const ServiceApartments = () => {
  const [activeType, setActiveType] = React.useState("All");
  const displayed = activeType === "All" ? serviceApartments : serviceApartments.filter(a => a.type === activeType);

  return (
    <main className="pt-20">
      <div className="bg-gradient-to-r from-primary to-primary-dark py-12 sm:py-16 text-center">
        <motion.h1 className="text-2xl sm:text-4xl font-display font-black text-white mb-3"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Service <span className="text-secondary">Apartments</span>
        </motion.h1>
        <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto px-4">
          Fully furnished service apartments for short & long stays in Sector 107, Noida.
        </p>

        {/* Amenities Row */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-8 px-4">
          {[{i:FaWifi,l:"Free WiFi"},{i:FaBroom,l:"Housekeeping"},{i:FaParking,l:"Parking"},{i:FaSnowflake,l:"AC"},{i:FaShieldAlt,l:"Security"},{i:FaUtensils,l:"Kitchen"},{i:FaTv,l:"Smart TV"}].map(({i:Icon,l}) => (
            <div key={l} className="flex items-center gap-2 glass px-3 py-2 rounded-xl text-white text-xs sm:text-sm font-medium">
              <Icon className="text-secondary text-sm" />{l}
            </div>
          ))}
        </div>
      </div>

      <div className="container-base py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {types.map(t => (
            <button key={t} onClick={() => setActiveType(t)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeType === t ? "bg-primary text-white shadow" : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayed.map((apt, i) => <ServiceApartmentCard key={apt.id} apartment={apt} index={i} />)}
        </div>
      </div>
    </main>
  );
};

export default ServiceApartments;
