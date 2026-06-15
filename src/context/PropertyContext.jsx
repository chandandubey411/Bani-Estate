import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { properties as allProperties } from "../data/properties";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState(allProperties);
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("baniEstate_wishlist")) || [];
    } catch {
      return [];
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});

  useEffect(() => {
    localStorage.setItem("baniEstate_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const getPropertiesByType = useCallback(
    (type) => {
      if (!type || type === "All") return properties;
      return properties.filter((p) => p.type === type);
    },
    [properties]
  );

  const applyFilters = useCallback((filters) => {
    setIsLoading(true);
    setActiveFilters(filters);
    setTimeout(() => {
      let result = [...allProperties];
      if (filters.type && filters.type !== "All") {
        result = result.filter((p) => p.type === filters.type);
      }
      if (filters.status && filters.status !== "All") {
        if (filters.status === "buy" || filters.status === "For Sale") {
          result = result.filter((p) => p.status === "For Sale");
        } else if (filters.status === "rent" || filters.status === "For Rent") {
          result = result.filter((p) => p.status === "For Rent");
        }
      }
      if (filters.budget) {
        if (filters.budget === "under-40") result = result.filter((p) => p.price < 4000000);
        else if (filters.budget === "40-80") result = result.filter((p) => p.price >= 4000000 && p.price <= 8000000);
        else if (filters.budget === "80-150") result = result.filter((p) => p.price > 8000000 && p.price <= 15000000);
        else if (filters.budget === "above-150") result = result.filter((p) => p.price > 15000000);
      }
      if (filters.beds) {
        result = result.filter((p) => p.beds === Number(filters.beds));
      }
      setFilteredProperties(result);
      setIsLoading(false);
    }, 400);
  }, []);

  const toggleWishlist = useCallback((id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }, []);

  const isInWishlist = useCallback(
    (id) => wishlist.includes(id),
    [wishlist]
  );

  const getPropertyById = useCallback(
    (id) => allProperties.find((p) => p.id === Number(id)),
    []
  );

  const getFeaturedProperties = useCallback(
    () => allProperties.filter((p) => p.featured),
    []
  );

  return (
    <PropertyContext.Provider
      value={{
        properties,
        filteredProperties,
        wishlist,
        isLoading,
        activeFilters,
        getPropertiesByType,
        applyFilters,
        toggleWishlist,
        isInWishlist,
        getPropertyById,
        getFeaturedProperties,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  const ctx = useContext(PropertyContext);
  if (!ctx) throw new Error("useProperty must be used within PropertyProvider");
  return ctx;
};
