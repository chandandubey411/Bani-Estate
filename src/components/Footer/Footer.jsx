import React from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-primary-dark text-white">
    <div className="container-base py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center"><FaBuilding className="text-white text-lg" /></div>
            <div>
              <div className="text-xl font-display font-black">Bani <span className="text-secondary">Estate</span></div>
              <div className="text-white/60 text-xs">Sector 107, Noida</div>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">Your Trusted Partner in Real Estate. Premium residential and service apartments in Sector 107, Noida.</p>
          <div className="space-y-2.5 mb-6">
            {[
              { icon: FaPhone, text: "088265 08087", href: "tel:+918826508087" },
              { icon: FaEnvelope, text: "baniestate20@gmail.com", href: "mailto:baniestate20@gmail.com" },
              { icon: FaMapMarkerAlt, text: "Shop no -1, Ground floor, Suman Enclave, Plot no-43, Sector 107, Noida, UP 201304", href: "#" },
            ].map(({ icon: Icon, text, href }) => (
              <a key={text} href={href} className="flex items-start gap-2.5 text-white/60 hover:text-secondary text-sm transition-colors">
                <Icon className="text-secondary mt-0.5 flex-shrink-0" />{text}
              </a>
            ))}
          </div>
          <div className="flex gap-2.5">
            {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110"><Icon className="text-sm" /></a>
            ))}
          </div>
        </div>

        {/* Properties */}
        <div>
          <h4 className="font-display font-bold text-sm sm:text-base mb-4 text-secondary">Properties</h4>
          <ul className="space-y-2">
            {["1 BHK Apartments","2 BHK Apartments","3 BHK Apartments","4 BHK Apartments","For Sale","For Rent"].map(i => (
              <li key={i}><Link to="/properties" className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors">{i}</Link></li>
            ))}
          </ul>
        </div>

        {/* Service Apts */}
        <div>
          <h4 className="font-display font-bold text-sm sm:text-base mb-4 text-secondary">Service Apts</h4>
          <ul className="space-y-2">
            {["Fully Furnished","Corporate Stay","Family Stay","Long-Term","Short-Term","Book Now"].map(i => (
              <li key={i}><Link to="/service-apartments" className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors">{i}</Link></li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-sm sm:text-base mb-4 text-secondary">Quick Links</h4>
          <ul className="space-y-2">
            {[{n:"About Us",p:"/about"},{n:"Our Agents",p:"/agents"},{n:"Blog",p:"/blog"},{n:"Contact",p:"/contact"},{n:"Login",p:"/login"},{n:"Register",p:"/register"}].map(({n,p}) => (
              <li key={n}><Link to={p} className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors">{n}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-base py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-white/50 text-xs sm:text-sm">© 2026 Bani Estate. All Rights Reserved.</p>
        <a href="https://wa.me/918826508087" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs sm:text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-all font-semibold">
          <FaWhatsapp className="text-base" /> WhatsApp Us
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
