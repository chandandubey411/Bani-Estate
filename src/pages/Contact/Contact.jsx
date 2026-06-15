import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 2500);
  };

  return (
    <main className="pt-20 bg-[#F8FAFC] min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0F4C81] to-[#0a3660] py-14 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span
            className="inline-block text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-5xl font-display font-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact <span className="text-[#D4AF37]">Bani Estate</span>
          </motion.h1>
          <p className="text-white/80 text-sm max-w-xl mx-auto">
            Have questions about Sector 107 Noida residential listings, service apartments, or investment opportunities? Let's connect.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-6">
              <h3 className="text-lg font-display font-bold text-gray-800 border-b border-gray-100 pb-3">
                Office Information
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0F4C81] flex items-center justify-center flex-shrink-0 text-base">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xs">Our Office Address</h4>
                    <p className="mt-0.5 leading-relaxed">Shop no -1, Ground floor, Suman Enclave, Plot no-43, Sector 107, Noida, Uttar Pradesh 201304</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D4AF37] flex items-center justify-center flex-shrink-0 text-base">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xs">Phone Number</h4>
                    <p className="mt-0.5">088265 08087</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0F4C81] flex items-center justify-center flex-shrink-0 text-base">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xs">Email Address</h4>
                    <p className="mt-0.5">baniestate20@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-base">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xs">Working Hours</h4>
                    <p className="mt-0.5">Mon – Sat: 09:00 AM – 07:00 PM</p>
                    <p className="text-gray-400 text-xs">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Redirect */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://wa.me/918826508087?text=Hi%20Bani%20Estate,%20I%20have%20an%20inquiry%20regarding%20Sector%20107%20Noida%20properties."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                >
                  <FaWhatsapp className="text-sm" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Email Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-display font-bold text-gray-800 border-b border-gray-100 pb-3 mb-6">
                Send Us A Message
              </h3>
              
              {submitted ? (
                <div className="bg-green-50 text-green-600 border border-green-200 text-sm font-semibold rounded-2xl p-6 text-center space-y-3">
                  <div className="text-3xl">🎉</div>
                  <div className="text-base font-display font-bold">Message Sent Successfully!</div>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    Thank you for contacting Bani Estate. One of our RERA certified consultants will call or email you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold block mb-1">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={form.name}
                        onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] focus:ring-1 focus:ring-[#0F4C81] transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold block mb-1">Your Email</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] focus:ring-1 focus:ring-[#0F4C81] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 99999 99999"
                        required
                        value={form.phone}
                        onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] focus:ring-1 focus:ring-[#0F4C81] transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold block mb-1">Subject Topic</label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm(prev => ({ ...prev, subject: e.target.value }))}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] focus:ring-1 focus:ring-[#0F4C81] transition-all text-gray-600 cursor-pointer"
                      >
                        <option value="">Choose Topic</option>
                        <option value="Residential Buy">Residential Buy (Flats)</option>
                        <option value="Residential Rental">Residential Rental</option>
                        <option value="Service Apartment Stay">Service Apartment Stay</option>
                        <option value="Investment Advisory">Investment Advisory</option>
                        <option value="Other Inquiry">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 font-bold block mb-1">Detailed Message</label>
                    <textarea
                      rows="5"
                      placeholder="Write your questions or requirement details..."
                      required
                      value={form.message}
                      onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0F4C81] focus:ring-1 focus:ring-[#0F4C81] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#0F4C81] hover:bg-[#0a3660] text-white font-bold rounded-xl text-xs transition-all shadow-md hover:scale-102"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Styled Google Maps Embed */}
        <div className="mt-8 bg-white border border-gray-100 rounded-3xl p-4 shadow-sm h-96 relative overflow-hidden">
          <iframe
            title="Google Maps office coordinates"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.995964893116!2d77.3697241!3d28.5472758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ded8ec63cb%3A0xe5a36329bf336829!2sSector%20107%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "1.2rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </main>
  );
};

export default Contact;
