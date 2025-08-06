import React, { useState } from 'react';
import Hero from '../components/Hero';
import { menuItems, menuCategories } from '../data/menuData';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Our Menu"
        subtitle="Discover our delicious selection of authentic dishes"
        backgroundImage="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1600"
        height="h-96"
      />

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-yellow-400 text-black shadow-lg transform scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    Rs. {item.price.toLocaleString()}
                  </div>
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="w-full bg-black text-yellow-400 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No items message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-400 text-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Family Deal</h3>
              <p className="text-lg mb-4">Get 20% off on orders above Rs. 5000</p>
              <p className="font-semibold">Valid until end of month</p>
            </div>
            <div className="bg-gray-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Weekend Special</h3>
              <p className="text-lg mb-4">Free dessert with every BBQ platter on weekends</p>
              <p className="font-semibold text-yellow-400">Friday - Sunday</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;