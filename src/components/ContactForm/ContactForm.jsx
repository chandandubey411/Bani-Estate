import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const ContactForm = ({ title = "Send Us a Message" }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); setForm({ name: "", email: "", phone: "", message: "" }); }, 1500);
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm bg-gray-50 focus:bg-white";

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
      <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 mb-6">{title}</h3>
      {sent ? (
        <div className="text-center py-10">
          <div className="text-5xl mb-4">🎉</div>
          <h4 className="font-display font-bold text-xl text-gray-900 mb-2">Message Sent!</h4>
          <p className="text-gray-500 text-sm">Our team will contact you within 24 hours.</p>
          <button onClick={() => setSent(false)} className="mt-6 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all">
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required
                className={`${inputCls} pl-10`} />
            </div>
            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required
                className={`${inputCls} pl-10`} />
            </div>
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email Address" required
              className={`${inputCls} pl-10`} />
          </div>
          <div className="relative">
            <FaCommentDots className="absolute left-4 top-4 text-gray-400 text-sm" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message..." required rows={4}
              className={`${inputCls} pl-10 resize-none`} />
          </div>
          <button type="submit" disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02] disabled:opacity-70 text-sm sm:text-base">
            {loading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              : <><FaPaperPlane /> Send Message</>}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
