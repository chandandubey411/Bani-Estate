import React from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a3660] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37] flex items-center justify-center">
                <FaBuilding className="text-white text-xl" />
              </div>
              <div>
                <div className="text-xl font-display font-black">
                  Bani <span className="text-[#D4AF37]">Estate</span>
                </div>
                <div className="text-white/60 text-xs">Sector 107, Noida</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Your Trusted Partner in Real Estate. Premium residential and service apartments exclusively in Sector 107, Noida.
            </p>
            {/* Contact */}
            <div className="space-y-2">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-white/70 hover:text-[#D4AF37] text-sm transition-colors">
                <FaPhone className="text-[#D4AF37]" /> +91 98765 43210
              </a>
              <a href="mailto:info@baniestate.com" className="flex items-center gap-2 text-white/70 hover:text-[#D4AF37] text-sm transition-colors">
                <FaEnvelope className="text-[#D4AF37]" /> info@baniestate.com
              </a>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <FaMapMarkerAlt className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span>Sector 107, Noida, Uttar Pradesh – 201301</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: FaFacebook, href: "#", label: "Facebook" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaTwitter, href: "#", label: "Twitter" },
                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                { icon: FaYoutube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-[#D4AF37]">Properties</h4>
            <ul className="space-y-2">
              {["1 BHK Apartments", "2 BHK Apartments", "3 BHK Apartments", "4 BHK Apartments", "Properties for Sale", "Properties for Rent"].map((item) => (
                <li key={item}>
                  <Link to="/properties" className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Apartments */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-[#D4AF37]">Service Apts</h4>
            <ul className="space-y-2">
              {["Fully Furnished", "Corporate Stay", "Family Stay", "Long-Term Rental", "Short-Term Rental", "Book Now"].map((item) => (
                <li key={item}>
                  <Link to="/service-apartments" className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Agents", path: "/agents" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
                { name: "Login", path: "/login" },
                { name: "Register", path: "/register" },
              ].map(({ name, path }) => (
                <li key={name}>
                  <Link to={path} className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            © 2026 Bani Estate. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-all font-semibold"
          >
            <FaWhatsapp className="text-base" /> WhatsApp Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
