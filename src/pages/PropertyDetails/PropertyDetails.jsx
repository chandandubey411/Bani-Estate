import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaParking, FaBuilding, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaShare, FaCalendarAlt } from "react-icons/fa";
import { useProperty } from "../../context/PropertyContext";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import ContactForm from "../../components/ContactForm/ContactForm";

const PropertyDetails = () => {
  const { id } = useParams();
  const { getPropertyById, toggleWishlist, isInWishlist, getPropertiesByType } = useProperty();
  const property = getPropertyById(id);
  const inWishlist = isInWishlist(Number(id));

  if (!property) return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <div className="text-6xl mb-4">🏠</div>
        <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">Property Not Found</h2>
        <Link to="/properties" className="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm">Back to Properties</Link>
      </div>
    </div>
  );

  const formatPrice = (price, status) => {
    if (status === "For Rent") return `₹${price.toLocaleString()}/mo`;
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)} Cr`;
    return `₹${(price / 100000).toFixed(0)} Lac`;
  };

  const similar = getPropertiesByType(property.type).filter(p => p.id !== property.id).slice(0, 3);

  return (
    <main className="pt-20 bg-gray-50">
      <div className="container-base py-8 sm:py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-primary">Home</Link> <span>/</span>
          <Link to="/properties" className="hover:text-primary">Properties</Link> <span>/</span>
          <span className="text-gray-900 font-medium truncate">{property.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left */}
          <div className="lg:col-span-2">
            {/* Gallery */}
            <motion.div className="rounded-2xl overflow-hidden shadow-xl mb-6"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="h-56 sm:h-72 lg:h-96">
                {property.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} alt={property.title} className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Header */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 mb-5">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${property.status === "For Sale" ? "bg-primary text-white" : "bg-emerald-500 text-white"}`}>{property.status}</span>
                {property.verified && <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-white flex items-center gap-1"><FaCheckCircle className="text-[9px]" /> Verified</span>}
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700">{property.type}</span>
              </div>
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center gap-2 text-gray-500 text-sm"><FaMapMarkerAlt className="text-secondary" />{property.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-display font-black text-primary">{formatPrice(property.price, property.status)}</div>
                  <div className="text-xs text-gray-500">+ taxes & fees</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5 p-4 bg-gray-50 rounded-2xl">
                {[{icon:FaBed,val:`${property.beds} Beds`},{icon:FaBath,val:`${property.baths} Baths`},{icon:FaRulerCombined,val:`${property.area} sqft`}].map(({icon:Icon,val},i) => (
                  <div key={i} className="text-center"><Icon className="text-primary text-lg mx-auto mb-1" /><div className="text-xs sm:text-sm font-bold text-gray-900">{val}</div></div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 mb-5">
              <h2 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-3">About This Property</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 mb-5">
              <h2 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-4">Amenities & Features</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map(a => (
                  <div key={a} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-xl">
                    <FaCheckCircle className="text-primary text-xs flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{a}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 bg-amber-50 px-3 py-2 rounded-xl">
                  <FaCheckCircle className="text-secondary text-xs flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{property.furnishing}</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 mb-5">
              <h2 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-4">Location</h2>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Sector+107+Noida&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Map" />
              </div>
            </div>

            {/* Similar */}
            {similar.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-xl text-gray-900 mb-5">Similar Properties</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {similar.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-5">
            {/* Action Buttons */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
              <div className="flex gap-2 mb-4">
                <button onClick={() => toggleWishlist(property.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${inWishlist ? "bg-red-50 text-red-500 border border-red-200" : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-red-300 hover:text-red-500"}`}>
                  <FaHeart /> {inWishlist ? "Saved" : "Save"}
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 transition-all">
                  <FaShare /> Share
                </button>
              </div>
              <a href={`https://wa.me/918826508087?text=Hi, interested in: ${property.title}`}
                target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all mb-2 text-sm">
                <FaWhatsapp className="text-lg" /> WhatsApp Enquiry
              </a>
              <a href="tel:+918826508087"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all text-sm">
                <FaPhone /> Call Now
              </a>
            </div>

            {/* Schedule Visit */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-5 text-white shadow-xl">
              <FaCalendarAlt className="text-secondary text-2xl mb-3" />
              <h3 className="font-display font-bold text-lg mb-2">Schedule a Site Visit</h3>
              <p className="text-white/70 text-sm mb-4">Book a free site visit and our expert will guide you through the property.</p>
              <a href="https://wa.me/918826508087?text=I want to schedule a site visit for the property"
                target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-secondary hover:bg-secondary-dark text-white font-bold py-3 rounded-xl transition-all text-sm">
                Book Free Visit
              </a>
            </div>

            <ContactForm title="Send an Enquiry" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetails;
