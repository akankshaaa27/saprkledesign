import React from 'react';
import { FiHome, FiBriefcase, FiLayers, FiDroplet, FiGrid, FiCamera } from 'react-icons/fi';

const Services = () => {
  const services = [
    { 
      title: "Residential Design", 
      description: "Transform your living spaces with our bespoke residential designs that blend functionality with aesthetic perfection.",
      icon: <FiHome className="w-8 h-8" />,
      features: ["Custom home designs", "Space planning", "Material selection", "Lighting design"]
    },
    { 
      title: "Commercial Spaces", 
      description: "Elevate your business environment with innovative commercial designs that enhance productivity and brand identity.",
      icon: <FiBriefcase className="w-8 h-8" />,
      features: ["Office interiors", "Retail spaces", "Hospitality design", "Brand integration"]
    },
    { 
      title: "3D Visualization", 
      description: "Experience your space before it's built with our photorealistic 3D renderings and virtual walkthroughs.",
      icon: <FiLayers className="w-8 h-8" />,
      features: ["3D renderings", "Virtual staging", "Augmented reality", "Animation walkthroughs"]
    },
    { 
      title: "Color Consultation", 
      description: "Expert color schemes tailored to your space's lighting, architecture, and personal style.",
      icon: <FiDroplet className="w-8 h-8" />,
      features: ["Color psychology", "Material coordination", "Lighting analysis", "Finish selection"]
    },
    { 
      title: "Space Planning", 
      description: "Optimize your space with intelligent layouts that maximize functionality and flow.",
      icon: <FiGrid className="w-8 h-8" />,
      features: ["Furniture layouts", "Traffic flow", "Ergonomic design", "Storage solutions"]
    },
    { 
      title: "Photography", 
      description: "Professional interior photography to showcase your space in its best light.",
      icon: <FiCamera className="w-8 h-8" />,
      features: ["Professional staging", "Lighting setup", "Editorial shots", "Portfolio creation"]
    }
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Our <span className="text-amber-500">Design Services</span>
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to bring your vision to life with precision and creativity
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                
                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Features List */}
                <ul className="mt-auto space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <button className="mt-6 text-amber-600 font-medium hover:text-amber-700 transition-colors flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your space?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation with our design experts to discuss your project
            </p>
            <button className="px-8 py-3 bg-white text-amber-600 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;