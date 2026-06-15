import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaPhone, FaEnvelope, FaHome, FaCommentAlt } from "react-icons/fa";

const ContactForm = ({ title = "Get In Touch", subtitle = "Fill in your details and our expert advisors will get back to you within 24 hours." }) => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", propertyType: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:border-[#0F4C81] focus:bg-white transition-all placeholder-gray-400";

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
      <h3 className="text-xl font-display font-bold text-[#1E293B] mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">{subtitle}</p>

      {submitted ? (
        <motion.div
          className="text-center py-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="text-5xl mb-4">✅</div>
          <h4 className="text-xl font-display font-bold text-[#0F4C81] mb-2">Thank You!</h4>
          <p className="text-gray-500 text-sm">
            Your enquiry has been received. Our team will call you back within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-6 py-2.5 bg-[#0F4C81] text-white rounded-xl text-sm font-semibold hover:bg-[#0a3660]"
          >
            Send Another
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F4C81] text-sm" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
                className={`${inputClass} pl-10`}
              />
            </div>
            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F4C81] text-sm" />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className={`${inputClass} pl-10`}
              />
            </div>
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F4C81] text-sm" />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className={`${inputClass} pl-10`}
            />
          </div>
          <div className="relative">
            <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F4C81] text-sm" />
            <select
              name="propertyType"
              value={form.propertyType}
              onChange={handleChange}
              className={`${inputClass} pl-10`}
            >
              <option value="">Select Property Type</option>
              <option>1 BHK Apartment</option>
              <option>2 BHK Apartment</option>
              <option>3 BHK Apartment</option>
              <option>4 BHK Apartment</option>
              <option>Service Apartment</option>
              <option>Investment Enquiry</option>
            </select>
          </div>
          <div className="relative">
            <FaCommentAlt className="absolute left-4 top-4 text-[#0F4C81] text-sm" />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your message or specific requirements..."
              className={`${inputClass} pl-10 resize-none`}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0a3660] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-900/30 disabled:opacity-70"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <FaPaperPlane /> Send Enquiry
              </>
            )}
          </button>
          <p className="text-gray-400 text-xs text-center">
            🔒 Your information is secure and will never be shared with third parties.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
