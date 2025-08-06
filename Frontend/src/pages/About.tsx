import React from 'react';
import Hero from '../components/Hero';
import { Award, Heart, Users2, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users2, label: 'Happy Customers', value: '10,000+' },
    { icon: Clock, label: 'Years of Experience', value: '15+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Heart, label: 'Satisfied Reviews', value: '98%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Our Story"
        subtitle="A journey of flavors, tradition, and excellence"
        backgroundImage="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1600"
        height="h-96"
      />

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 2008, PK Restaurant began as a small family venture with a simple dream: 
                to serve authentic, delicious food that brings people together. What started as a modest eatery 
                has grown into one of the city's most beloved dining destinations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to quality ingredients, traditional cooking methods, and exceptional service 
                has earned us the trust and loyalty of thousands of customers. Every dish we serve carries 
                the passion and dedication of our skilled chefs who have perfected their craft over decades.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to honor our heritage while embracing innovation, ensuring that every 
                visit to PK is a memorable culinary experience.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant Interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-yellow-400">Numbers that speak for our excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind our success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg text-center">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Head Chef"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chef Ahmed Ali</h3>
                <p className="text-yellow-600 font-medium mb-2">Head Chef</p>
                <p className="text-gray-600">
                  With over 20 years of culinary experience, Chef Ahmed brings authentic flavors 
                  and innovative techniques to every dish.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg text-center">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Manager"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sarah Khan</h3>
                <p className="text-yellow-600 font-medium mb-2">Restaurant Manager</p>
                <p className="text-gray-600">
                  Sarah ensures every guest receives exceptional service and has a memorable 
                  dining experience at Albasit.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg text-center">
              <img 
                src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Sous Chef"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chef Fatima</h3>
                <p className="text-yellow-600 font-medium mb-2">Sous Chef</p>
                <p className="text-gray-600">
                  Chef Fatima specializes in traditional recipes and ensures every dish 
                  meets our high standards of quality and taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-8">Our Mission</h2>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            To create unforgettable dining experiences by serving exceptional food made with the finest 
            ingredients, providing warm hospitality, and fostering a welcoming atmosphere where families 
            and friends can come together to celebrate life's special moments.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;