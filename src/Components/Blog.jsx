import React from 'react';
import { FiArrowUpRight, FiCalendar, FiTag, FiMessageCircle, FiBookmark } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Sustainable Interior Design",
      excerpt: "Exploring eco-friendly materials and energy-efficient solutions...",
      category: "Sustainability",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    // Add more posts...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-amber-50">
      {/* Hero Header */}
      <header className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Sparkle Insights
          </motion.h1>
          <p className="text-xl md:text-2xl text-amber-300 max-w-2xl mx-auto">
            Where design thinking meets creative innovation
          </p>
        </div>
      </header>

      {/* Featured Post */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <motion.article 
          whileHover={{ scale: 1.02 }}
          className="relative group bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1604018612943-f6b19b7b2c15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Featured post"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <span className="bg-amber-500 text-sm px-3 py-1 rounded-full mb-4 inline-block">
              Featured Article
            </span>
            <h2 className="text-3xl font-bold mb-4">Revolutionizing Space Utilization</h2>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <FiCalendar /> Mar 10, 2024
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <FiBookmark /> 8 min read
              </span>
            </div>
          </div>
        </motion.article>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
                <div className="absolute top-4 right-4 bg-amber-500 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <FiCalendar /> {post.date}
                  <span>•</span>
                  <FiBookmark /> {post.readTime}
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-amber-600 hover:text-amber-700">
                    Read More <FiArrowUpRight />
                  </button>
                  <div className="flex items-center gap-2">
                    <FiMessageCircle className="text-gray-400" /> 12
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Category Cloud */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-8">Explore Topics</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Sustainability', 'Color Theory', 'Space Planning', 'Materials', 'Trends'].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-colors"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-400 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Design Insights Delivered</h3>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto">
            Join our newsletter for exclusive content, early access to new articles, 
            and professional design tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;