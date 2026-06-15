import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHeart, FaBuilding, FaPhoneAlt } from "react-icons/fa";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useProperty } from "../../context/PropertyContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Buy Property", path: "/properties?status=buy" },
  { name: "Service Apartments", path: "/service-apartments" },
  { name: "Properties", path: "/properties" },
  { name: "About", path: "/about" },
  { name: "Agents", path: "/agents" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const { wishlist } = useProperty();
  const navigate = useNavigate();

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-lg shadow-blue-900/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              isScrolled ? "bg-[#0F4C81]" : "bg-white/20 backdrop-blur-sm"
            }`}>
              <FaBuilding className={`text-xl ${isScrolled ? "text-[#D4AF37]" : "text-white"}`} />
            </div>
            <div>
              <span className={`text-xl font-bold font-display ${
                isScrolled ? "text-[#0F4C81]" : "text-white"
              }`}>
                Bani <span className="text-[#D4AF37]">Estate</span>
              </span>
              <p className={`text-xs ${isScrolled ? "text-gray-500" : "text-white/80"}`}>
                Sector 107, Noida
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : isScrolled
                      ? "text-gray-700 hover:text-[#0F4C81]"
                      : "text-white/90 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              to="/wishlist"
              className={`relative p-2 rounded-lg transition-all ${
                isScrolled ? "text-gray-600 hover:text-[#0F4C81]" : "text-white hover:text-[#D4AF37]"
              }`}
            >
              <FaHeart className="text-xl" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4AF37] text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              to="/login"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                isScrolled
                  ? "text-[#0F4C81] border border-[#0F4C81] hover:bg-[#0F4C81] hover:text-white"
                  : "text-white border border-white/50 hover:bg-white/10"
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#D4AF37] text-white hover:bg-[#b8941f] transition-all shadow-lg"
            >
              Register
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-blue-50 text-[#0F4C81]"
                        : "text-gray-700 hover:bg-blue-50 hover:text-[#0F4C81]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 flex gap-3">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 text-center py-2.5 text-sm font-semibold rounded-lg text-[#0F4C81] border border-[#0F4C81]"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 text-center py-2.5 text-sm font-semibold rounded-lg bg-[#D4AF37] text-white"
                >
                  Register
                </Link>
              </div>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-4 py-3 text-sm text-[#0F4C81] font-medium"
              >
                <FaPhoneAlt /> +91 98765 43210
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
