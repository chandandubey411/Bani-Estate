import React, { createContext, useContext, useState, useEffect } from "react";
import { properties } from "../data/properties";
import { serviceApartments } from "../data/serviceApartments";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("bani-wishlist");
    return saved ? JSON.parse(saved) : [];
  });
  const [searchFilters, setSearchFilters] = useState({
    type: "",
    location: "Sector 107, Noida",
    budget: "",
    beds: "",
  });
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("bani-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (propertyId) => {
    setWishlist((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const isInWishlist = (propertyId) => wishlist.includes(propertyId);

  const applyFilters = (filters) => {
    setIsLoading(true);
    setSearchFilters(filters);
    setTimeout(() => {
      let result = properties;
      if (filters.type && filters.type !== "All") {
        result = result.filter((p) => p.type === filters.type);
      }
      if (filters.budget) {
        const budgetMap = {
          "under-40": [0, 4000000],
          "40-80": [4000000, 8000000],
          "80-150": [8000000, 15000000],
          "above-150": [15000000, Infinity],
        };
        const [min, max] = budgetMap[filters.budget] || [0, Infinity];
        result = result.filter((p) => p.price >= min && p.price <= max);
      }
      if (filters.beds) {
        result = result.filter((p) => p.beds === parseInt(filters.beds));
      }
      setFilteredProperties(result);
      setIsLoading(false);
    }, 500);
  };

  const getPropertyById = (id) => properties.find((p) => p.id === parseInt(id));
  const getServiceApartmentById = (id) =>
    serviceApartments.find((a) => a.id === parseInt(id));
  const getPropertiesByType = (type) =>
    type === "All" ? properties : properties.filter((p) => p.type === type);
  const getFeaturedProperties = () => properties.filter((p) => p.featured);

  return (
    <PropertyContext.Provider
      value={{
        properties,
        serviceApartments,
        filteredProperties,
        wishlist,
        searchFilters,
        activeFilter,
        isLoading,
        setActiveFilter,
        toggleWishlist,
        isInWishlist,
        applyFilters,
        setSearchFilters,
        getPropertyById,
        getServiceApartmentById,
        getPropertiesByType,
        getFeaturedProperties,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) throw new Error("useProperty must be used within PropertyProvider");
  return context;
};

export default PropertyContext;
