import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const projects = [
    { 
      id: 1, 
      title: "Scandinavian Apartment", 
      description: "Minimalist elegance with natural textures creating a serene living space",
      category: "Residential",
      year: "2023",
      location: "Stockholm, Sweden",
      size: "85 m²"
    },
    { 
      id: 2, 
      title: "Co-Working Space", 
      description: "Productivity-focused modern workspace with ergonomic design",
      category: "Commercial",
      year: "2023",
      location: "Berlin, Germany",
      size: "320 m²"
    },
    { 
      id: 3, 
      title: "Luxury Villa", 
      description: "Opulent waterfront residence with panoramic views",
      category: "Residential",
      year: "2022",
      location: "Malibu, USA",
      size: "450 m²",
      featured: true,
      awards: ["International Design Award 2022"]
    },
    { 
      id: 4, 
      title: "Café Interior", 
      description: "Artisanal coffee shop blending industrial chic with warmth",
      category: "Commercial",
      year: "2022",
      location: "Melbourne, Australia",
      size: "120 m²"
    },
    { 
      id: 5, 
      title: "Penthouse Suite", 
      description: "Skyline views with contemporary luxury finishes",
      category: "Residential",
      year: "2023",
      location: "Dubai, UAE",
      size: "380 m²",
      featured: true,
      awards: ["Best Residential Design 2023"]
    },
    { 
      id: 6, 
      title: "Boutique Hotel", 
      description: "Intimate 12-room luxury accommodation with bespoke interiors",
      category: "Commercial",
      year: "2021",
      location: "Bali, Indonesia",
      size: "1800 m²",
      awards: ["Hospitality Design Award 2021"]
    },
    { 
      id: 7, 
      title: "Mountain Retreat", 
      description: "Rustic modern cabin with expansive glass walls",
      category: "Residential",
      year: "2023",
      location: "Swiss Alps",
      size: "210 m²"
    },
    { 
      id: 8, 
      title: "Corporate Headquarters", 
      description: "Innovative workspace promoting collaboration and creativity",
      category: "Commercial",
      year: "2022",
      location: "Tokyo, Japan",
      size: "5000 m²"
    },
    { 
      id: 9, 
      title: "Urban Loft", 
      description: "Industrial-chic apartment in converted warehouse",
      category: "Residential",
      year: "2023",
      location: "New York, USA",
      size: "110 m²",
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            <span className="text-amber-500">Design</span> Portfolio
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our award-winning interior transformations that blend functionality with aesthetic perfection
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {['All', 'Residential', 'Commercial'].map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleProjects(6);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-500/30'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
              }`}
            >
              {filter} {filter !== 'All' && `(${projects.filter(p => p.category === filter).length})`}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
            >
              {/* Featured Ribbon */}
              {project.featured && (
                <div className="absolute top-0 right-0 z-10 w-32 h-8 bg-amber-500 text-white flex items-center justify-center text-xs font-bold shadow-lg transform rotate-45 translate-x-8 -translate-y-2">
                  FEATURED
                </div>
              )}
              
              {/* Image Container */}
              <div className="relative overflow-hidden h-80">
                <img 
                  src={`https://source.unsplash.com/random/800x800/?luxury-interior,${project.id}`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Hover Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/90 mb-4">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-amber-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-white/80 text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-amber-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span className="text-white/80 text-sm">{project.size}</span>
                  </div>
                </div>
                
                {project.awards && (
                  <div className="mb-4">
                    <div className="text-xs text-amber-300 uppercase tracking-wider mb-1">Awards</div>
                    {project.awards.map((award, index) => (
                      <div key={index} className="flex items-center text-white/80 text-sm">
                        <svg className="w-4 h-4 text-amber-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {award}
                      </div>
                    ))}
                  </div>
                )}
                
                <button className="mt-4 bg-white text-gray-900 px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center w-full">
                  View Case Study
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              {/* Default Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{project.year}</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'Residential' 
                      ? 'bg-blue-50 text-blue-800' 
                      : 'bg-purple-50 text-purple-800'
                  }`}>
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-16">
            <button 
              onClick={loadMoreProjects}
              className="px-8 py-3 bg-white border-2 border-gray-800 text-gray-800 font-medium rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Load More Projects ({filteredProjects.length - visibleProjects} remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;