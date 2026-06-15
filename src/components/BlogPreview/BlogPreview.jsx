import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaClock, FaUser, FaArrowRight, FaTag } from "react-icons/fa";
import { blogs } from "../../data/blogs";

const BlogPreview = () => {
  const featured = blogs.filter((b) => b.featured).slice(0, 3);
  const rest = blogs.filter((b) => !b.featured).slice(0, 3);
  const displayed = [...featured, ...rest].slice(0, 6);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">
              Real Estate Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E293B]">
              Latest <span className="gradient-text">Blog Posts</span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="flex items-center gap-2 text-[#0F4C81] font-semibold hover:gap-3 transition-all"
          >
            View All Articles <FaArrowRight />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="property-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Category */}
                <div className="absolute top-3 left-3">
                  <span className="flex items-center gap-1 text-xs font-bold bg-[#D4AF37] text-white px-2.5 py-1 rounded-full">
                    <FaTag className="text-[10px]" /> {blog.category}
                  </span>
                </div>
                {blog.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-bold bg-[#0F4C81] text-white px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <FaUser className="text-[#0F4C81]" /> {blog.author.split(" ")[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-[#0F4C81]" /> {blog.readTime}
                  </span>
                  <span>{blog.date}</span>
                </div>

                <h3 className="font-display font-bold text-[#1E293B] text-base leading-tight mb-2 line-clamp-2 group-hover:text-[#0F4C81] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {blog.excerpt}
                </p>

                {/* Views */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{blog.views.toLocaleString()} views</span>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="flex items-center gap-1 text-sm text-[#0F4C81] font-semibold hover:gap-2 transition-all"
                  >
                    Read More <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
