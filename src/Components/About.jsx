import React from 'react';
import { FiAward, FiUsers, FiHome, FiCheckCircle } from 'react-icons/fi';
import teamMembers from  '../Components/Team'; // Ensure this file exports a valid array

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Design Philosophy</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Creating spaces that inspire, comfort, and reflect your unique personality
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              The Sparkle Design Story
            </h2>
            <div className="h-1 w-24 bg-amber-500 mb-8" />
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2012, Sparkle Design began as a small studio with a big vision: to transform
              ordinary spaces into extraordinary experiences...
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our journey has been guided by the belief that great design should be accessible to
              everyone...
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <FiAward className="text-amber-500 text-3xl mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">25+ Awards</h3>
                  <p className="text-gray-600">Industry recognition for excellence</p>
                </div>
              </div>
              <div className="flex items-start">
                <FiUsers className="text-amber-500 text-3xl mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">300+ Clients</h3>
                  <p className="text-gray-600">Satisfied homeowners and businesses</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Studio interior view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden lg:block">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Since 2012</h3>
              <p className="text-gray-600">Over a decade of design excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Creative Team
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A talented collective of designers, architects, and visionaries...
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.social.map((socialItem) => (
                      <a
                        key={socialItem.name}
                        href={socialItem.url}
                        className="text-gray-500 hover:text-amber-500 transition-colors"
                        aria-label={socialItem.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {socialItem.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            The principles that guide every project we undertake
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FiHome />, title: 'Client-Centric', desc: 'Your vision is our priority...' },
              { icon: <FiCheckCircle />, title: 'Quality Craftsmanship', desc: 'We partner with skilled artisans...' },
              { icon: <FiAward />, title: 'Innovative Solutions', desc: 'Blending creativity with practicality...' },
              { icon: <FiUsers />, title: 'Collaborative Approach', desc: 'We work closely with you at every stage...' }
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-amber-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create an environment that reflects your style and enhances your life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Schedule a Consultation
            </a>
            <a
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
