import React, { useState } from 'react';
import { 
  FiShoppingCart, 
  FiHeart, 
  FiSearch, 
  FiFilter,
  FiStar 
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    {
      id: 1,
      name: "Modern Velvet Sofa",
      price: 1299,
      category: 'furniture',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.5
    },
    // Add 7-10 more products
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold font-serif">Sparkal Store</h1>
          <div className="flex items-center gap-6">
            <button className="relative">
              <FiShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')] bg-cover bg-center opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-2xl px-4"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Curated Design Essentials</h2>
            <p className="text-xl text-gray-300">Where Form Meets Function in Modern Living</p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-4">
          {['all', 'furniture', 'lighting', 'decor', 'textiles'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize ${
                selectedCategory === category 
                ? 'bg-amber-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/20" />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100">
                  <FiHeart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 font-bold">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <FiStar className="text-amber-400" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setCart([...cart, product])}
                  className="w-full mt-4 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-serif mb-8">The Artisanal Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80"
                alt="Handcrafted decor"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 p-6 text-left">
                <h4 className="text-2xl font-bold mb-2">Handcrafted Excellence</h4>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;