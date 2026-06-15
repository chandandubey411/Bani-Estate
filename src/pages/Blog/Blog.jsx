import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogs, blogCategories } from "../../data/blogs";
import { FaSearch, FaRegCalendarAlt, FaUser, FaChevronRight } from "react-icons/fa";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main className="pt-20 bg-[#F8FAFC] min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0F4C81] to-[#0a3660] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.span
            className="inline-block text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Bani Estate Insights
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-5xl font-display font-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Real Estate <span className="text-[#D4AF37]">Blog & Guide</span>
          </motion.h1>
          <p className="text-white/80 text-sm max-w-xl mx-auto mb-6">
            Expert property tips, buying regulations, legal assistance checklists and Noida Expressway market trends.
          </p>

          {/* Search bar inside header */}
          <div className="max-w-lg mx-auto relative">
            <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white text-gray-800 text-sm outline-none shadow-md focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Category Horizontal Filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-gray-200">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-[#0F4C81] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#0F4C81]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-100 rounded-3xl">
            <div className="text-5xl mb-3">📝</div>
            <h3 className="text-lg font-display font-bold text-gray-600 mb-1">No Articles Found</h3>
            <p className="text-xs text-gray-400">Try adjusting your search queries or category filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, idx) => (
              <motion.article
                key={blog.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx % 3 * 0.1 }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#0F4C81] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                    {blog.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-[11px] text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaRegCalendarAlt /> {blog.date}
                      </span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="font-display font-bold text-gray-800 text-sm sm:text-base leading-snug group-hover:text-[#0F4C81] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={blog.authorImage}
                        alt={blog.author}
                        className="w-7 h-7 rounded-full object-cover border"
                      />
                      <span className="text-[10px] text-gray-500 font-bold">{blog.author}</span>
                    </div>

                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-xs font-semibold text-[#0F4C81] flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
                    >
                      Read Guide <FaChevronRight className="text-[8px]" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
