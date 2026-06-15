import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useProperty } from "../../context/PropertyContext";
import { agents } from "../../data/agents";
import {
  FaBed, FaBath, FaRulerCombined, FaCheckCircle, FaHeart,
  FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUser, FaPhoneAlt,
  FaEnvelope, FaWhatsapp, FaBuilding, FaRoad, FaShieldAlt,
  FaChevronLeft, FaChevronRight, FaCompass, FaRegCalendarAlt,
} from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams();
  const { getPropertyById, toggleWishlist, isInWishlist, properties } = useProperty();
  
  const property = useMemo(() => getPropertyById(id), [id, getPropertyById]);
  const isSaved = isInWishlist(property?.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [visitForm, setVisitForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    note: ""
  });
  const [visitSubmitted, setVisitSubmitted] = useState(false);

  const [agentForm, setAgentForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Hi, I'm interested in "${property?.title}" (ID: ${property?.id}). Please contact me.`
  });
  const [agentSubmitted, setAgentSubmitted] = useState(false);

  // Find corresponding agent
  const agent = useMemo(() => {
    if (!property) return null;
    return agents.find(a => a.id === property.agentId) || agents[0];
  }, [property]);

  // Similar properties (same BHK type, excluding current)
  const similarProperties = useMemo(() => {
    if (!property) return [];
    return properties
      .filter(p => p.type === property.type && p.id !== property.id)
      .slice(0, 3);
  }, [property, properties]);

  if (!property) {
    return (
      <div className="pt-28 pb-20 text-center min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-display font-bold text-gray-700 mb-4">Property Not Found</h2>
        <Link to="/properties" className="bg-[#0F4C81] text-white px-6 py-2.5 rounded-xl font-bold">
          Back to Properties
        </Link>
      </div>
    );
  }

  const formatPrice = (price, status) => {
    if (status === "For Rent") return `₹${price.toLocaleString()}/mo`;
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(0)} Lac`;
    return `₹${price.toLocaleString()}`;
  };

  const handleVisitSubmit = (e) => {
    e.preventDefault();
    setVisitSubmitted(true);
    setTimeout(() => {
      setVisitForm({ name: "", email: "", phone: "", date: "", time: "", note: "" });
    }, 2000);
  };

  const handleAgentSubmit = (e) => {
    e.preventDefault();
    setAgentSubmitted(true);
    setTimeout(() => {
      setAgentForm(prev => ({ ...prev, name: "", email: "", phone: "" }));
    }, 2000);
  };

  return (
    <main className="pt-20 bg-[#F8FAFC] min-h-screen">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-[#0F4C81] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-[#0F4C81] transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-[#0F4C81] font-semibold truncate max-w-xs">{property.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleWishlist(property.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                isSaved
                  ? "bg-red-50 text-red-500 border-red-200"
                  : "bg-white text-gray-600 border-gray-200 hover:border-red-400 hover:text-red-500"
              }`}
            >
              <FaHeart className={isSaved ? "fill-current" : ""} />
              {isSaved ? "Saved" : "Save Listing"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left / Main Details Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header Details */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  property.status === "For Sale" ? "bg-[#0F4C81] text-white" : "bg-emerald-500 text-white"
                }`}>
                  {property.status}
                </span>
                {property.verified && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#D4AF37] text-white flex items-center gap-1">
                    <FaCheckCircle className="text-[10px]" /> Verified Property
                  </span>
                )}
                {property.tags && property.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-2xl sm:text-3xl font-display font-black text-[#1E293B] mb-2 leading-tight">
                {property.title}
              </h1>
              <p className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <FaMapMarkerAlt className="text-[#D4AF37] flex-shrink-0" />
                <span>{property.address}</span>
              </p>

              <div className="flex flex-wrap items-end justify-between border-t border-gray-100 pt-4 gap-4">
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Demand Price</span>
                  <span className="text-3xl font-display font-black text-[#0F4C81]">
                    {formatPrice(property.price, property.status)}
                  </span>
                </div>
                
                <div className="flex gap-6 text-sm text-gray-600">
                  <div className="text-center bg-gray-50 px-4 py-2 rounded-xl">
                    <div className="font-bold text-[#0F4C81] flex items-center justify-center gap-1">
                      <FaBed /> {property.beds}
                    </div>
                    <span className="text-xs text-gray-400">Bedrooms</span>
                  </div>
                  <div className="text-center bg-gray-50 px-4 py-2 rounded-xl">
                    <div className="font-bold text-[#0F4C81] flex items-center justify-center gap-1">
                      <FaBath /> {property.baths}
                    </div>
                    <span className="text-xs text-gray-400">Bathrooms</span>
                  </div>
                  <div className="text-center bg-gray-50 px-4 py-2 rounded-xl">
                    <div className="font-bold text-[#0F4C81] flex items-center justify-center gap-1">
                      <FaRulerCombined /> {property.area}
                    </div>
                    <span className="text-xs text-gray-400">Sq. Ft.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-4 space-y-4">
              <div className="relative h-64 sm:h-96 w-full rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={property.images[activeImageIndex]}
                  alt={`${property.title} detail`}
                  className="w-full h-full object-cover"
                />
                
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImageIndex(prev => (prev === 0 ? property.images.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-all"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={() => setActiveImageIndex(prev => (prev === property.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-all"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>
              
              {property.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                  {property.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`relative flex-shrink-0 w-20 h-16 sm:w-24 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === i ? "border-[#0F4C81]" : "border-transparent opacity-60"
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-lg font-display font-bold text-[#1E293B] border-b border-gray-100 pb-3">
                Property Overview
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features & Amenities */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
              <div>
                <h3 className="text-lg font-display font-bold text-[#1E293B] border-b border-gray-100 pb-3 mb-4">
                  Internal Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {property.features ? property.features.map(f => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium bg-gray-50 px-3 py-2 rounded-xl">
                      <FaCheckCircle className="text-[#D4AF37] flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  )) : (
                    <div className="text-gray-400 text-sm">No internal features specified.</div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-[#1E293B] border-b border-gray-100 pb-3 mb-4">
                  Society Amenities & Infrastructure
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.amenities.map(a => (
                    <div key={a} className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-blue-50/50 px-3 py-2 rounded-xl border border-blue-50">
                      <FaBuilding className="text-[#0F4C81] flex-shrink-0 text-xs" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fact Sheet */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-lg font-display font-bold text-[#1E293B] border-b border-gray-100 pb-3">
                Property Details Factsheet
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Floor Placement</span>
                  <span className="font-bold text-gray-700">{property.floor || "Middle"} of {property.totalFloors || "12"} floors</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Construction Age</span>
                  <span className="font-bold text-gray-700">{property.age || "New"}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Direction Facing</span>
                  <span className="font-bold text-gray-700 flex items-center gap-1">
                    <FaCompass className="text-[#D4AF37]" /> {property.facing || "East"}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Furnishing State</span>
                  <span className="font-bold text-gray-700">{property.furnishing}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Lift Facility</span>
                  <span className="font-bold text-gray-700">{property.lift ? "Available (Elevators)" : "Not Available"}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Parking Spaces</span>
                  <span className="font-bold text-gray-700">{property.parking || "Reserved Parking"}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Property Type</span>
                  <span className="font-bold text-gray-700">{property.type} Apartment</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Location Area</span>
                  <span className="font-bold text-gray-700">{property.location}</span>
                </div>
              </div>
            </div>

            {/* Location Map visual placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-lg font-display font-bold text-[#1E293B] border-b border-gray-100 pb-3">
                Location Map (Sector 107 Noida)
              </h3>
              <div className="relative h-64 rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  title="Sector 107 Noida location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.995964893116!2d77.3697241!3d28.5472758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ded8ec63cb%3A0xe5a36329bf336829!2sSector%20107%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">
                📍 Situated near primary bypass roads, offering direct metro connectivity (Aqua line within 1.5 km) and top educational facilities in Noida.
              </div>
            </div>

          </div>

          {/* Right Column - Inquiry Forms & Agent Info */}
          <div className="space-y-6">
            
            {/* Contact Agent Section */}
            {agent && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
                <h3 className="text-lg font-display font-bold text-[#1E293B] border-b border-gray-100 pb-3">
                  Listed By Agent
                </h3>
                
                <div className="flex items-center gap-4">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]"
                  />
                  <div>
                    <h4 className="font-display font-bold text-gray-800 text-sm">{agent.name}</h4>
                    <p className="text-xs text-[#0F4C81] font-semibold">{agent.designation}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Specialist: {agent.specialization}</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-sm text-gray-600 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-[#0F4C81] text-xs" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-[#0F4C81] text-xs" />
                    <span className="truncate">{agent.email}</span>
                  </div>
                </div>

                {agentSubmitted ? (
                  <div className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold rounded-xl p-4 text-center">
                    Inquiry submitted! Rajesh will respond shortly.
                  </div>
                ) : (
                  <form onSubmit={handleAgentSubmit} className="space-y-3 pt-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={agentForm.name}
                      onChange={(e) => setAgentForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81]"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={agentForm.email}
                      onChange={(e) => setAgentForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={agentForm.phone}
                      onChange={(e) => setAgentForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81]"
                    />
                    <textarea
                      rows="3"
                      value={agentForm.message}
                      onChange={(e) => setAgentForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#0F4C81] hover:bg-[#0a3660] text-white font-bold rounded-xl text-xs transition-all shadow-md"
                    >
                      Inquire Now
                    </button>
                  </form>
                )}

                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${agent.whatsapp}?text=Hi Rajesh, I am interested in ${property.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-semibold transition-all"
                  >
                    <FaWhatsapp className="text-sm" /> WhatsApp
                  </a>
                  <a
                    href={`tel:${agent.phone}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl text-xs font-semibold transition-all"
                  >
                    <FaPhoneAlt className="text-xs" /> Call Agent
                  </a>
                </div>
              </div>
            )}

            {/* Schedule Site Visit Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
              <h3 className="text-lg font-display font-bold text-[#1E293B] border-b border-gray-100 pb-3">
                Schedule Site Visit
              </h3>
              
              {visitSubmitted ? (
                <div className="bg-[#0F4C81] text-white border border-[#0F4C81] text-xs font-semibold rounded-xl p-4 text-center">
                  Visit requested! Our legal coordinator will call you to confirm appointment.
                </div>
              ) : (
                <form onSubmit={handleVisitSubmit} className="space-y-3">
                  <div className="relative">
                    <FaUser className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={visitForm.name}
                      onChange={(e) => setVisitForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81]"
                    />
                  </div>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={visitForm.email}
                      onChange={(e) => setVisitForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81]"
                    />
                  </div>
                  <div className="relative">
                    <FaPhoneAlt className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={visitForm.phone}
                      onChange={(e) => setVisitForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <FaRegCalendarAlt className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
                      <input
                        type="date"
                        required
                        value={visitForm.date}
                        onChange={(e) => setVisitForm(prev => ({ ...prev, date: e.target.value }))}
                        className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] text-gray-600"
                      />
                    </div>
                    <div className="relative">
                      <FaClock className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
                      <select
                        required
                        value={visitForm.time}
                        onChange={(e) => setVisitForm(prev => ({ ...prev, time: e.target.value }))}
                        className="w-full pl-9 pr-2 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] text-gray-600 cursor-pointer"
                      >
                        <option value="">Time Slot</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <textarea
                    rows="2"
                    placeholder="Any message or specific requirements..."
                    value={visitForm.note}
                    onChange={(e) => setVisitForm(prev => ({ ...prev, note: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] resize-none"
                  />
                  
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#D4AF37] hover:bg-[#b8941f] text-white font-bold rounded-xl text-xs transition-all shadow-md"
                  >
                    Book Site Visit
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-12">
            <div className="mb-8">
              <span className="inline-block text-[#D4AF37] font-semibold text-xs uppercase tracking-widest mb-2">
                Sector 107 Noida
              </span>
              <h2 className="text-2xl font-display font-bold text-[#1E293B]">
                Similar <span className="gradient-text">Properties</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((p, i) => (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute top-3 left-3 bg-[#0F4C81] text-white text-[10px] font-bold px-2 py-1 rounded-full">{p.status}</div>
                    <div className="absolute bottom-3 left-3 text-white font-display font-black text-lg drop-shadow-md">{formatPrice(p.price, p.status)}</div>
                  </div>
                  <div className="p-4 space-y-3">
                    <h4 className="font-display font-bold text-gray-800 text-sm line-clamp-1 group-hover:text-[#0F4C81] transition-colors">{p.title}</h4>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>🛏️ {p.beds} Beds</span>
                      <span>🛁 {p.baths} Baths</span>
                      <span>📐 {p.area} sqft</span>
                    </div>
                    <Link
                      to={`/properties/${p.id}`}
                      className="block text-center py-2 bg-blue-50 hover:bg-[#0F4C81] hover:text-white text-[#0F4C81] text-xs font-semibold rounded-xl transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default PropertyDetails;
