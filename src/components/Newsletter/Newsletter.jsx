import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); setEmail(""); }, 1200);
  };

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=60')` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-dark/95" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-16 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-8 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-4">Stay Updated</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white mb-4">
            Get Latest <span className="text-secondary">Property Updates</span>
          </h2>
          <p className="text-white/75 text-sm sm:text-base mb-8 leading-relaxed">
            Subscribe for exclusive property listings, market trends, and investment opportunities in Sector 107 Noida. No spam, ever.
          </p>

          {submitted ? (
            <motion.div className="glass rounded-2xl px-8 py-8 text-white flex flex-col items-center gap-3"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <FaCheckCircle className="text-4xl text-secondary" />
              <div className="text-xl font-display font-bold">You're subscribed!</div>
              <p className="text-white/70 text-sm">Welcome to the Bani Estate family. Great property insights await.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" required
                className="flex-1 px-5 py-3.5 sm:py-4 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/60 outline-none focus:border-secondary focus:bg-white/20 transition-all text-sm" />
              <button type="submit" disabled={loading}
                className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-lg disabled:opacity-70 hover:scale-105 text-sm whitespace-nowrap">
                {loading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  : <><FaPaperPlane /> Subscribe</>}
              </button>
            </form>
          )}
          <p className="text-white/40 text-xs mt-4">By subscribing you agree to our privacy policy. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
