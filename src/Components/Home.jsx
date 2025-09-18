import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiStar, FiAward, FiHome, FiBriefcase } from 'react-icons/fi';

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Glamorous Penthouse",
      description: "Luxury high-rise with panoramic views",
      category: "Luxury Residential",
      icon: <FiHome className="inline mr-2" />
    },
    {
      id: 2,
      title: "Chic Boutique Hotel",
      description: "Boutique hospitality with art deco influences",
      category: "Commercial",
      icon: <FiBriefcase className="inline mr-2" />
    },
    {
      id: 3,
      title: "Sparkle Office Suite",
      description: "Modern workspace with biophilic design",
      category: "Corporate",
      icon: <FiBriefcase className="inline mr-2" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Luxurious Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')" }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-6 flex justify-center">
              <div className="bg-amber-500/20 px-4 py-2 rounded-full">
                <p className="text-amber-400 font-medium flex items-center">
                  <FiStar className="mr-2" /> Award-Winning Designs Since 2012
                </p>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-serif">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Sparkle</span> Your Space
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              Where luxury meets functionality in perfect harmony
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg"
              >
                Begin Your Design Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/60 backdrop-blur-sm"
              >
                Explore Our Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Sparkle Scrolling Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-amber-300 flex flex-col items-center"
          >
            <FiArrowDown className="w-8 h-8 mb-1" />
            <div className="text-xs tracking-widest">DISCOVER</div>
          </motion.div>
        </div>
      </section>

      {/* Signature Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Our <span className="text-amber-500">Signature</span> Creations
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project reflects our commitment to excellence and attention to detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl bg-white"
              >
                <div className="overflow-hidden h-80 relative">
                  <img 
                    src={`https://source.unsplash.com/random/800x800/?luxury-interior,${project.id}`} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-amber-300 bg-black/50 rounded-full backdrop-blur-sm">
                      {project.icon} {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="text-amber-500 font-medium hover:text-amber-600 transition-colors flex items-center">
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-medium rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center mx-auto">
              Discover All Projects
              <FiArrowDown className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Luxury Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Why <span className="text-amber-400">Sparkle</span> Stands Out
            </h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Luxury Projects", icon: <FiHome className="mx-auto mb-4 w-8 h-8 text-amber-400" /> },
              { value: "15+", label: "Years Excellence", icon: <FiAward className="mx-auto mb-4 w-8 h-8 text-amber-400" /> },
              { value: "100%", label: "Client Satisfaction", icon: <FiStar className="mx-auto mb-4 w-8 h-8 text-amber-400" /> },
              { value: "50+", label: "Industry Awards", icon: <FiAward className="mx-auto mb-4 w-8 h-8 text-amber-400" /> }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-800/50 rounded-xl backdrop-blur-sm"
              >
                {stat.icon}
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 font-serif">{stat.value}</div>
                <div className="text-gray-300 uppercase text-sm tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-serif">
              The <span className="text-amber-500">Sparkle</span> Design Philosophy
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-10"></div>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              "We believe interiors should be as unique as the people who inhabit them. 
              Our approach combines timeless elegance with innovative solutions, 
              creating spaces that don't just sparkle visually, but elevate everyday living."
            </p>
            <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-amber-600 transition-all duration-300 shadow-lg">
              Meet Our Design Team
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;