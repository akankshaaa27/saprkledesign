import React from 'react';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "Sparkle Design transformed our outdated space into a modern sanctuary. Their attention to detail and creative vision exceeded all expectations!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Restaurant Owner",
      text: "The commercial space redesign boosted our customer retention by 40%. Sparkle's team understood our brand identity perfectly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Architect",
      text: "Collaborating with Sparkle Design was a masterclass in innovative space planning. Their technical expertise is matched only by their creativity.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "CEO, Tech Startup",
      text: "Our new office design has become our best recruitment tool. The team delivered ahead of schedule while maintaining impeccable quality.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 5,
      name: "David Müller",
      role: "Hotelier",
      text: "The renovation increased our room rates by 30% while maintaining 95% occupancy. A phenomenal return on design investment!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 6,
      name: "Linh Nguyen",
      role: "Boutique Owner",
      text: "Our store traffic tripled after the redesign. Sparkle's ability to blend aesthetics with functionality is unparalleled.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  const colors = {
    primary: '#2A2D34',
    secondary: '#C5A46D',
    accent: '#8B5E3C',
    light: '#F5F3F0',
    dark: '#1A1C22'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
            style={{ color: colors.primary }}
          >
            Client Experiences
          </motion.h1>
          <p className="text-xl mb-8" style={{ color: colors.accent }}>
            Transforming spaces, inspiring lives through exceptional design
          </p>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next'
            }}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl p-8 h-full relative overflow-hidden min-h-[500px] flex flex-col"
                  style={{ 
                    backgroundColor: colors.primary,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
                  
                  {/* Profile Section */}
                  <div className="mb-6 relative flex-shrink-0">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                      <div className="relative w-16 h-16">
                        <div 
                          className="absolute inset-0 rounded-full animate-pulse"
                          style={{ backgroundColor: `${colors.secondary}30` }}
                        />
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative z-10 w-16 h-16 rounded-full object-cover border-4"
                          style={{ borderColor: colors.light }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="text-center mt-8 flex-1 flex flex-col">
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ color: colors.secondary }}
                    >
                      {testimonial.name}
                    </h3>
                    <p className="mb-4" style={{ color: `${colors.light}CC` }}>
                      {testimonial.role}
                    </p>
                    <div className="flex justify-center gap-1 mb-4" style={{ color: colors.secondary }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar key={i} className="w-5 h-5" />
                      ))}
                    </div>
                    <p 
                      className="italic leading-relaxed flex-1 mb-4 line-clamp-5"
                      style={{ color: `${colors.light}CC` }}
                    >
                      {`"${testimonial.text}"`}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              className="custom-prev p-3 rounded-full hover:scale-105 transition-transform"
              style={{ backgroundColor: colors.secondary }}
            >
              <FiChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button 
              className="custom-next p-3 rounded-full hover:scale-105 transition-transform"
              style={{ backgroundColor: colors.secondary }}
            >
              <FiChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: colors.dark }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '98%', label: 'Client Satisfaction', icon: '🏆' },
              { number: '250+', label: 'Projects Completed', icon: '✨' },
              { number: '15', label: 'Awards Won', icon: '📐' },
              { number: '4.9/5', label: 'Average Rating', icon: '⭐' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl relative overflow-hidden"
                style={{ 
                  backgroundColor: colors.primary,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="text-3xl mb-4">{stat.icon}</div>
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: colors.secondary }}
                >
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-wide" style={{ color: `${colors.light}CC` }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div 
          className="max-w-4xl mx-auto rounded-2xl p-12 text-center relative overflow-hidden"
          style={{ 
            backgroundColor: colors.accent,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
          <h3 
            className="text-3xl font-bold mb-6"
            style={{ color: colors.light }}
          >
            Begin Your Transformation
          </h3>
          <p 
            className="mb-8 max-w-xl mx-auto leading-relaxed"
            style={{ color: `${colors.light}CC` }}
          >
            Partner with us to create spaces that inspire and endure
          </p>
          <button 
            className="px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            style={{ 
              backgroundColor: colors.secondary,
              color: colors.primary
            }}
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;