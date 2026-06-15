import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaBuilding } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }, 1500);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden py-24"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920')` }}
    >
      <div className="absolute inset-0 bg-[#0F4C81]/80" />
      
      {/* Floating animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#D4AF37]/25 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md mx-4 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37] flex items-center justify-center">
              <FaBuilding className="text-white text-lg" />
            </div>
            <span className="text-xl font-display font-black text-white">Bani <span className="text-[#D4AF37]">Estate</span></span>
          </Link>
          <h2 className="text-2xl font-display font-bold">Welcome Back</h2>
          <p className="text-white/60 text-xs mt-1">Log in to view saved properties and schedule visits.</p>
        </div>

        {success ? (
          <div className="bg-emerald-500/25 border border-emerald-500 text-white rounded-2xl p-5 text-center text-sm font-semibold">
            🎉 Login Successful! Redirecting to Home...
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] text-white/70 font-bold block">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3.5 top-3.5 text-white/60 text-xs" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none focus:border-[#D4AF37] text-xs transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[10px] text-white/77 font-bold">Password</label>
                <a href="#forgot" className="text-[10px] text-[#D4AF37] hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <FaLock className="absolute left-3.5 top-3.5 text-white/60 text-xs" />
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none focus:border-[#D4AF37] text-xs transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#b8941f] text-white font-bold rounded-xl text-xs transition-all shadow-lg hover:scale-102 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : "Log In"}
            </button>
          </form>
        )}

        <div className="text-center mt-6 text-xs text-white/60">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#D4AF37] font-semibold hover:underline">
            Register here
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default Login;
