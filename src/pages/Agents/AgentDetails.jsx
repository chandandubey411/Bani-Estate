import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { agents } from "../../data/agents";
import { useProperty } from "../../context/PropertyContext";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import ServiceApartmentCard from "../../components/ServiceApartmentCard/ServiceApartmentCard";
import {
  FaPhoneAlt, FaEnvelope, FaWhatsapp, FaStar, FaBuilding,
  FaCheckCircle, FaAward, FaCalendarAlt, FaClock,
} from "react-icons/fa";

const AgentDetails = () => {
  const { id } = useParams();
  const { properties, serviceApartments } = useProperty();

  const agent = useMemo(() => {
    return agents.find((a) => a.id === parseInt(id)) || agents[0];
  }, [id]);

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    topic: "Buying Consultation",
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Filter properties listed by this agent
  const agentProperties = useMemo(() => {
    return properties.filter((p) => p.agentId === agent.id);
  }, [properties, agent]);

  // Filter service apartments listed by this agent
  const agentServiceApartments = useMemo(() => {
    return serviceApartments.filter((a) => a.agentId === agent.id);
  }, [serviceApartments, agent]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingForm({ name: "", email: "", phone: "", date: "", time: "", topic: "Buying Consultation" });
    }, 2500);
  };

  if (!agent) {
    return (
      <div className="pt-28 pb-20 text-center min-h-screen">
        <h2 className="text-xl font-display font-bold text-gray-700">Agent Not Found</h2>
        <Link to="/agents" className="bg-[#0F4C81] text-white px-5 py-2 rounded-xl mt-4 inline-block font-bold">
          Back to Agents
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-20 bg-[#F8FAFC] min-h-screen">
      {/* Top Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500">
          <Link to="/" className="hover:text-[#0F4C81]">Home</Link>
          <span>/</span>
          <Link to="/agents" className="hover:text-[#0F4C81]">Agents</Link>
          <span>/</span>
          <span className="text-[#0F4C81] font-semibold">{agent.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Agent Information Profile Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-[#0F4C81] to-[#1a6cb8]" />
              
              <div className="relative pt-6">
                <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden mx-auto">
                  <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
                </div>
                
                <h1 className="font-display font-black text-gray-800 text-xl mt-4 mb-1">{agent.name}</h1>
                <p className="text-[#0F4C81] text-sm font-semibold mb-1">{agent.designation}</p>
                <p className="text-xs text-gray-400">Specialist: {agent.specialization}</p>

                {agent.certified && (
                  <div className="flex justify-center mt-3">
                    <span className="text-xs bg-[#D4AF37] text-white px-3 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-sm">
                      <FaAward className="text-sm" /> Verified Advisor
                    </span>
                  </div>
                )}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 border-y border-gray-100 py-5 my-6 text-center">
                <div>
                  <div className="text-base font-display font-black text-[#0F4C81]">{agent.propertiesSold}+</div>
                  <span className="text-[10px] text-gray-400 font-semibold block">Closed Deals</span>
                </div>
                <div className="w-px h-8 bg-gray-200 justify-self-center self-center" />
                <div>
                  <div className="text-base font-display font-black text-[#0F4C81]">{agent.experience} Yrs</div>
                  <span className="text-[10px] text-gray-400 font-semibold block">Experience</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 text-left text-xs text-gray-600">
                <div className="flex items-center gap-2.5">
                  <FaPhoneAlt className="text-[#0F4C81]" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaEnvelope className="text-[#0F4C81]" />
                  <span className="truncate">{agent.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaBuilding className="text-[#0F4C81]" />
                  <span>Focus: {agent.location}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <a
                  href={`tel:${agent.phone}`}
                  className="flex-1 py-2.5 text-xs font-semibold text-[#0F4C81] border border-[#0F4C81] rounded-xl hover:bg-[#0F4C81] hover:text-white transition-all"
                >
                  Call Advisor
                </a>
                <a
                  href={`https://wa.me/${agent.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 text-xs font-semibold bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all flex items-center justify-center gap-1"
                >
                  <FaWhatsapp className="text-sm" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Schedule Consultation Booking Form */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-5">
              <h3 className="text-base font-display font-bold text-gray-800 border-b border-gray-100 pb-3">
                Schedule Consultation
              </h3>
              
              {bookingSubmitted ? (
                <div className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-semibold rounded-xl p-4 text-center">
                  Consultation request sent! {agent.name.split(" ")[0]} will confirm via email/phone.
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81]"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      required
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] text-gray-600"
                    />
                    <select
                      value={bookingForm.time}
                      required
                      onChange={(e) => setBookingForm(prev => ({ ...prev, time: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] text-gray-600 cursor-pointer"
                    >
                      <option value="">Select Time</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                  <select
                    value={bookingForm.topic}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, topic: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] text-gray-600 cursor-pointer"
                  >
                    <option value="Buying Consultation">Buying Consultation</option>
                    <option value="Selling / Valuation">Selling / Valuation</option>
                    <option value="Service Apartment Booking">Service Apartment booking</option>
                    <option value="Investment Advisory">Investment Advisory</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0F4C81] hover:bg-[#0a3660] text-white font-bold rounded-xl text-xs transition-all shadow-md"
                  >
                    Request Call Appointment
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column / Bio & Listings */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-lg font-display font-bold text-gray-800 border-b border-gray-100 pb-3">
                About {agent.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {agent.bio}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-50 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <span>🌐 Languages Spoken:</span>
                  <span className="font-bold text-gray-700">{agent.languages.join(", ")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>★ Overall Performance:</span>
                  <span className="font-bold text-gray-700">{agent.rating} / 5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Managed Residential Properties */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold text-gray-800 pl-1">
                Active Residential Listings ({agentProperties.length})
              </h3>
              {agentProperties.length === 0 ? (
                <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center text-sm text-gray-400 shadow-sm">
                  No active residential listings managed by this agent.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {agentProperties.map((p, index) => (
                    <PropertyCard key={p.id} property={p} index={index} />
                  ))}
                </div>
              )}
            </div>

            {/* Managed Service Apartments */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-display font-bold text-gray-800 pl-1">
                Active Service Suite Listings ({agentServiceApartments.length})
              </h3>
              {agentServiceApartments.length === 0 ? (
                <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center text-sm text-gray-400 shadow-sm">
                  No active service suite listings managed by this agent.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {agentServiceApartments.map((a, index) => (
                    <ServiceApartmentCard key={a.id} apartment={a} index={index} />
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </main>
  );
};

export default AgentDetails;
