import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogs } from "../../data/blogs";
import { FaRegCalendarAlt, FaUser, FaClock, FaChevronLeft, FaTag } from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = useMemo(() => {
    return blogs.find((b) => b.id === parseInt(id)) || blogs[0];
  }, [id]);

  // Filter 3 related articles (same category, excluding current)
  const relatedArticles = useMemo(() => {
    return blogs
      .filter((b) => b.category === blog.category && b.id !== blog.id)
      .slice(0, 3);
  }, [blog]);

  if (!blog) {
    return (
      <div className="pt-28 pb-20 text-center min-h-screen">
        <h2 className="text-xl font-display font-bold text-gray-700">Article Not Found</h2>
        <Link to="/blog" className="bg-[#0F4C81] text-white px-5 py-2 rounded-xl mt-4 inline-block font-bold">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-20 bg-[#F8FAFC] min-h-screen">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-[#0F4C81]">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[#0F4C81]">Blog</Link>
            <span>/</span>
            <span className="text-[#0F4C81] font-semibold truncate max-w-xs">{blog.title}</span>
          </div>
          <Link to="/blog" className="flex items-center gap-1 text-xs text-[#0F4C81] font-semibold hover:underline">
            <FaChevronLeft className="text-[9px]" /> Back to Blog
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <article className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm p-6 sm:p-10 space-y-6">
          
          {/* Header metadata */}
          <div className="space-y-4 text-center sm:text-left">
            <span className="inline-block text-xs font-bold bg-blue-50 text-[#0F4C81] px-3 py-1 rounded-full uppercase tracking-widest">
              {blog.category}
            </span>
            <h1 className="text-xl sm:text-3xl font-display font-black text-gray-800 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 pt-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <img src={blog.authorImage} alt={blog.author} className="w-8 h-8 rounded-full object-cover border" />
                <span className="font-bold text-gray-600">{blog.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaRegCalendarAlt />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaClock />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>

          {/* Hero cover image */}
          <div className="h-64 sm:h-96 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>

          {/* Article Main Text Content */}
          <div className="prose max-w-none text-gray-600 text-sm sm:text-base leading-relaxed space-y-4 pt-4 border-t border-gray-50">
            <p className="font-semibold text-gray-700">
              {blog.excerpt}
            </p>
            <p>
              {blog.content}
            </p>
            <p>
              Investing in residential properties near Noida Expressway and key institutional areas of Sector 107 provides great value. It is critical to ensure proper RERA checks before proceeding. RERA, short for Real Estate Regulatory Authority, acts as a primary protector for home buyers. Make sure to download authority brochures and check registration numbers on the official RERA portal.
            </p>
            <h3 className="font-display font-bold text-gray-800 text-lg sm:text-xl pt-4">Why Sector 107 Noida is the focal point</h3>
            <p>
              Property prices here are appreciating fast. Over the last 2 years, we've witnessed significant interest from buyers looking for starter homes and service apartments. The upcoming connectivity with peripheral expressways and commercial complexes makes it an ideal destination.
            </p>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap pt-6 border-t border-gray-100 text-xs">
            <span className="text-gray-400 flex items-center gap-1 font-semibold"><FaTag /> Tags:</span>
            {blog.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>

        </article>

        {/* Related Articles Footer */}
        {relatedArticles.length > 0 && (
          <div className="mt-14 space-y-6">
            <h3 className="text-lg font-display font-bold text-gray-800">
              Related <span className="text-[#0F4C81]">Guides</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((art) => (
                <Link
                  key={art.id}
                  to={`/blog/${art.id}`}
                  className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm block hover:shadow-md transition-all duration-300 group"
                >
                  <div className="h-28 rounded-lg overflow-hidden mb-3 bg-gray-100">
                    <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest">{art.category}</span>
                  <h4 className="font-display font-bold text-gray-800 text-xs sm:text-sm leading-tight mt-1 line-clamp-2 group-hover:text-[#0F4C81]">
                    {art.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default BlogDetails;
