import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
    }, 1200);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/95 to-[#0a3660]/90" />

      {/* Floating Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-4">
            Stay Updated
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-4">
            Get Latest{" "}
            <span className="text-[#D4AF37]">Property Updates</span>
          </h2>
          <p className="text-white/75 text-lg mb-10">
            Subscribe to receive exclusive property listings, market trends and investment opportunities in Sector 107 Noida. No spam, ever.
          </p>

          {submitted ? (
            <motion.div
              className="glass rounded-2xl px-8 py-6 text-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="text-4xl mb-3">🎉</div>
              <div className="text-xl font-display font-bold mb-2">You're subscribed!</div>
              <p className="text-white/70 text-sm">
                Welcome to the Bani Estate family. Expect great property insights in your inbox.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-4 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/60 outline-none focus:border-[#D4AF37] focus:bg-white/20 transition-all text-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 px-7 py-4 bg-[#D4AF37] hover:bg-[#b8941f] text-white font-bold rounded-xl transition-all duration-300 shadow-lg disabled:opacity-70 hover:scale-105"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <FaPaperPlane /> Subscribe
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-white/40 text-xs mt-4">
            By subscribing you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
