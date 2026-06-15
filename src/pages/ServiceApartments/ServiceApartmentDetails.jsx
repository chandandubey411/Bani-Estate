import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useProperty } from "../../context/PropertyContext";
import { agents } from "../../data/agents";
import {
  FaWifi, FaCar, FaShieldAlt, FaUtensils, FaSnowflake, FaStar,
  FaMapMarkerAlt, FaUsers, FaArrowLeft, FaCheck, FaPhoneAlt,
  FaEnvelope, FaWhatsapp, FaBed, FaClock, FaCheckCircle,
} from "react-icons/fa";

const amenityIcons = {
  WiFi: FaWifi,
  Housekeeping: FaCheckCircle,
  Lift: FaCheckCircle,
  "Car Parking": FaCar,
  Security: FaShieldAlt,
  "Furnished Rooms": FaBed,
  Kitchen: FaUtensils,
  "Air Conditioning": FaSnowflake,
  Laundry: FaCheckCircle,
  Reception: FaClock,
};

const ServiceApartmentDetails = () => {
  const { id } = useParams();
  const { getServiceApartmentById } = useProperty();
  const apartment = useMemo(() => getServiceApartmentById(id), [id, getServiceApartmentById]);

  const [activeImg, setActiveImg] = useState(0);
  const [bookType, setBookType] = useState("monthly"); // monthly or daily
  const [bookForm, setBookForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
  });
  const [bookingStatus, setBookingStatus] = useState(false);

  const agent = useMemo(() => {
    if (!apartment) return null;
    return agents.find((a) => a.id === apartment.agentId) || agents[4]; // Default to Vikram (Vikram is agent 5, index 4)
  }, [apartment]);

  if (!apartment) {
    return (
      <div className="pt-28 pb-20 text-center min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-xl font-display font-bold text-gray-700 mb-4">Service Apartment Not Found</h2>
        <Link to="/service-apartments" className="bg-[#0F4C81] text-white px-5 py-2 rounded-xl font-bold">
          Back to Stays
        </Link>
      </div>
    );
  }

  const handleBookSubmit = (e) => {
    e.preventDefault();
    setBookingStatus(true);
    
    // Redirect to whatsapp option
    const message = `Hi ${agent?.name}, I want to book "${apartment.title}" (${bookType === "monthly" ? "Monthly" : "Daily"} Stay) from ${bookForm.checkIn} to ${bookForm.checkOut} for ${bookForm.guests} guests. My name is ${bookForm.name}.`;
    const whatsappUrl = `https://wa.me/${agent?.whatsapp || "919876543210"}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setBookingStatus(false);
    }, 1000);
  };

  return (
    <main className="pt-20 bg-[#F8FAFC] min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-[#0F4C81] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/service-apartments" className="hover:text-[#0F4C81] transition-colors">Service Apartments</Link>
            <span>/</span>
            <span className="text-[#0F4C81] font-semibold truncate max-w-xs">{apartment.title}</span>
          </div>
          <Link to="/service-apartments" className="flex items-center gap-1 text-xs text-[#0F4C81] font-semibold">
            <FaArrowLeft className="text-[10px]" /> Back to List
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info Columns */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Header info card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-white">
                  {apartment.type}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-[#0F4C81]">
                  {apartment.category} Stay
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  apartment.availability === "Available" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                }`}>
                  {apartment.availability}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-display font-black text-[#1E293B] mb-2 leading-tight">
                {apartment.title}
              </h1>
              
              <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-gray-100 mt-4">
                <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                  <FaMapMarkerAlt className="text-[#D4AF37] flex-shrink-0" />
                  <span>{apartment.address}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-[#D4AF37]/10 px-2.5 py-1 rounded-full text-[#b8941f] text-xs font-bold">
                    <FaStar /> {apartment.rating}
                  </div>
                  <span className="text-xs text-gray-400">({apartment.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-4">
              <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={apartment.images[activeImg]}
                  alt={apartment.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2">
                {apartment.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`relative w-20 h-16 sm:w-24 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImg === idx ? "border-[#0F4C81]" : "border-transparent opacity-60"
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Overview & Specs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-lg font-display font-bold text-[#1E293B] border-b border-gray-100 pb-3">
                Apartment Details
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-4">
                <div className="bg-gray-50 p-3 rounded-xl">
                  <span className="text-xs text-gray-400 block mb-0.5">Capacity</span>
                  <span className="font-bold text-gray-700 flex items-center gap-1">
                    <FaUsers className="text-[#0F4C81]" /> Up to {apartment.capacity} guests
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl">
                  <span className="text-xs text-gray-400 block mb-0.5">Area Size</span>
                  <span className="font-bold text-gray-700">{apartment.area} Sq. Ft.</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl">
                  <span className="text-xs text-gray-400 block mb-0.5">Availability</span>
                  <span className="font-bold text-gray-700">{apartment.availability}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl">
                  <span className="text-xs text-gray-400 block mb-0.5">Available From</span>
                  <span className="font-bold text-gray-700">{apartment.availableFrom}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
                {apartment.description}
              </p>
            </div>

            {/* Amenities Checklist */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-lg font-display font-bold text-[#1E293B] border-b border-gray-100 pb-3">
                Included Services & Amenities
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {apartment.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity] || FaCheck;
                  return (
                    <div key={amenity} className="flex items-center gap-3 text-sm text-gray-600 font-medium bg-blue-50/30 px-3 py-2 rounded-xl border border-blue-50/20">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#0F4C81]">
                        <Icon />
                      </div>
                      <span>{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column Reservation form */}
          <div className="space-y-6">
            
            {/* Booking Reservation Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs text-gray-400 block font-semibold mb-2">Flexible Rent Pricing</span>
                
                {/* Pricing Selectors */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setBookType("monthly")}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                      bookType === "monthly"
                        ? "bg-[#0F4C81] text-white border-[#0F4C81]"
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    Monthly Stay
                  </button>
                  {apartment.dailyRent && (
                    <button
                      onClick={() => setBookType("daily")}
                      className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                        bookType === "daily"
                          ? "bg-[#0F4C81] text-white border-[#0F4C81]"
                          : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      Daily Stay
                    </button>
                  )}
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-display font-black text-[#0F4C81]">
                    ₹{(bookType === "monthly" ? apartment.monthlyRent : apartment.dailyRent || 0).toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400">/ {bookType === "monthly" ? "month" : "day"}</span>
                </div>
              </div>

              {/* Booking form */}
              <form onSubmit={handleBookSubmit} className="space-y-3">
                <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">Book Accommodation</h4>
                
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={bookForm.name}
                    onChange={(e) => setBookForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={bookForm.email}
                    onChange={(e) => setBookForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={bookForm.phone}
                    onChange={(e) => setBookForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-gray-400 block mb-1 font-semibold">Check-In</label>
                    <input
                      type="date"
                      required
                      value={bookForm.checkIn}
                      onChange={(e) => setBookForm(prev => ({ ...prev, checkIn: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-400 block mb-1 font-semibold">Check-Out</label>
                    <input
                      type="date"
                      required
                      value={bookForm.checkOut}
                      onChange={(e) => setBookForm(prev => ({ ...prev, checkOut: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] text-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-gray-400 block mb-1 font-semibold">Number of Guests</label>
                  <select
                    value={bookForm.guests}
                    onChange={(e) => setBookForm(prev => ({ ...prev, guests: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] text-gray-600 cursor-pointer"
                  >
                    {[...Array(apartment.capacity)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} Guest{i > 0 && "s"}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={bookingStatus}
                  className="w-full py-3 bg-[#D4AF37] hover:bg-[#b8941f] text-white font-bold rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <FaWhatsapp className="text-sm" /> {bookingStatus ? "Redirecting..." : "Book via WhatsApp"}
                </button>
              </form>
            </div>

            {/* Managing Advisor Card */}
            {agent && (
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Property Advisor</h4>
                <div className="flex items-center gap-3">
                  <img src={agent.image} alt={agent.name} className="w-12 h-12 rounded-full object-cover border" />
                  <div>
                    <h5 className="font-display font-bold text-sm text-gray-800 leading-tight">{agent.name}</h5>
                    <span className="text-[10px] text-gray-400 block mt-0.5">{agent.designation}</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-[#0F4C81] text-[10px]" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-[#0F4C81] text-[10px]" />
                    <span className="truncate">{agent.email}</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </main>
  );
};

export default ServiceApartmentDetails;
