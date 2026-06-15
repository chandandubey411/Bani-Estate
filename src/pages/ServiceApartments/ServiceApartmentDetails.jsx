import React from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaCheckCircle, FaWhatsapp, FaPhone, FaCalendarAlt, FaWifi } from "react-icons/fa";
import { serviceApartments } from "../../data/serviceApartments";
import ContactForm from "../../components/ContactForm/ContactForm";

const ServiceApartmentDetails = () => {
  const { id } = useParams();
  const apt = serviceApartments.find(a => a.id === Number(id));

  if (!apt) return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <div className="text-6xl mb-4">🏠</div>
        <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">Apartment Not Found</h2>
        <Link to="/service-apartments" className="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm">Back to Service Apartments</Link>
      </div>
    </div>
  );

  return (
    <main className="pt-20 bg-gray-50">
      <div className="container-base py-8 sm:py-10">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-primary">Home</Link> <span>/</span>
          <Link to="/service-apartments" className="hover:text-primary">Service Apartments</Link> <span>/</span>
          <span className="text-gray-900 font-medium truncate">{apt.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
              <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="h-56 sm:h-72 lg:h-96">
                {apt.images.map((img, i) => (
                  <SwiperSlide key={i}><img src={img} alt={apt.name} className="w-full h-full object-cover" /></SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 mb-5">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${apt.availability === "Available" ? "bg-emerald-500 text-white" : "bg-amber-500 text-white"}`}>{apt.availability}</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-white">{apt.type}</span>
              </div>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-gray-900 mb-2">{apt.name}</h1>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className={`text-sm ${i < Math.floor(apt.rating) ? "text-secondary" : "text-gray-200"}`} />)}
                    <span className="text-sm font-bold text-gray-800">{apt.rating}</span>
                    <span className="text-sm text-gray-500">({apt.reviews} reviews)</span>
                  </div>
                  <p className="text-gray-500 text-sm">{apt.beds} Bed · {apt.baths} Bath · {apt.area} sqft · {apt.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-display font-black text-primary">₹{apt.monthlyRent.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <div className="text-base font-bold text-gray-700 mt-1">₹{apt.dailyRent.toLocaleString()}<span className="text-xs font-normal text-gray-500">/day</span></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 mb-5">
              <h2 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-3">Description</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{apt.description}</p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100">
              <h2 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {apt.amenities.map(a => (
                  <div key={a} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-xl">
                    <FaCheckCircle className="text-primary text-xs flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
              <h3 className="font-display font-bold text-lg text-gray-900 mb-4">Book This Apartment</h3>
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-4 text-white mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/70">Monthly Rent</span>
                  <span className="font-bold">₹{apt.monthlyRent.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/70">Daily Rate</span>
                  <span className="font-bold">₹{apt.dailyRent.toLocaleString()}</span>
                </div>
              </div>
              <a href={`https://wa.me/918826508087?text=I want to book: ${apt.name}`}
                target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all mb-3 text-sm">
                <FaWhatsapp className="text-lg" /> Book via WhatsApp
              </a>
              <a href="tel:+918826508087"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all text-sm">
                <FaPhone /> Call to Book
              </a>
            </div>

            <ContactForm title="Send Enquiry" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceApartmentDetails;
