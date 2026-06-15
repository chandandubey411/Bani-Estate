import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaClock, FaUser, FaArrowRight, FaTag } from "react-icons/fa";
import { blogs } from "../../data/blogs";

const BlogPreview = () => {
  const displayed = blogs.slice(0, 6);
  return (
    <section className="section-padding bg-white">
      <div className="container-base">
        <motion.div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div>
            <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Real Estate Insights</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900">
              Latest <span className="gradient-text">Blog Posts</span>
            </h2>
          </div>
          <Link to="/blog" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm">
            View All Articles <FaArrowRight />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayed.map((blog, i) => (
            <motion.div key={blog.id}
              className="property-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img src={blog.image} alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 flex items-center gap-1 text-xs font-bold bg-secondary text-white px-2.5 py-1 rounded-full">
                  <FaTag className="text-[9px]" /> {blog.category}
                </span>
                {blog.featured && <span className="absolute top-3 right-3 text-xs font-bold bg-primary text-white px-2 py-1 rounded-full">Featured</span>}
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><FaUser className="text-primary" /> {blog.author.split(" ")[0]}</span>
                  <span className="flex items-center gap-1"><FaClock className="text-primary" /> {blog.readTime}</span>
                </div>
                <h3 className="font-display font-bold text-gray-900 text-sm sm:text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">{blog.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{blog.views.toLocaleString()} views</span>
                  <Link to={`/blog/${blog.id}`} className="flex items-center gap-1 text-sm text-primary font-semibold hover:gap-2 transition-all">
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
