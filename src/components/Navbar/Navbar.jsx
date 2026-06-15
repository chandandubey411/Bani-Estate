import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaBuilding, FaPhoneAlt } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Buy Property", path: "/properties?status=buy" },
  { name: "Service Apts", path: "/service-apartments" },
  { name: "Properties", path: "/properties" },
  { name: "About", path: "/about" },
  { name: "Agents", path: "/agents" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const activeSolid = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        activeSolid ? "bg-white shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className={`w-9 h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center ${
              activeSolid ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
            }`}>
              <FaBuilding className={`text-lg ${activeSolid ? "text-secondary" : "text-white"}`} />
            </div>
            <div>
              <div className={`text-lg lg:text-xl font-black font-display leading-tight ${
                activeSolid ? "text-primary" : "text-white"
              }`}>
                Bani <span className="text-secondary">Estate</span>
              </div>
              <div className={`text-[10px] lg:text-xs leading-none ${
                activeSolid ? "text-gray-500" : "text-white/80"
              }`}>Sector 107, Noida</div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-secondary"
                      : activeSolid
                      ? "text-gray-700 hover:text-primary hover:bg-blue-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Phone CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <a href="tel:+918826508087" className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl transition-all ${
              activeSolid
                ? "text-primary border border-primary hover:bg-primary hover:text-white"
                : "text-white border border-white/50 hover:bg-white/20"
            }`}>
              <FaPhoneAlt className="text-secondary" /> 088265 08087
            </a>
          </div>

          {/* Mobile */}
          <div className="xl:hidden flex items-center gap-2">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-lg ${activeSolid ? "text-gray-700" : "text-white"}`}>
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive ? "bg-blue-50 text-primary font-semibold" : "text-gray-700 hover:bg-blue-50 hover:text-primary"
                    }`
                  }
                >{link.name}</NavLink>
              ))}

              <a href="tel:+918826508087" className="flex items-center gap-2 px-4 py-3 text-sm text-primary font-medium">
                <FaPhoneAlt className="text-secondary" /> 088265 08087
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
