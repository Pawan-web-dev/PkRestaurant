import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">PK Restaurant</h3>
            <p className="text-gray-300">
              Experience the finest dining with authentic flavors and exceptional service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">123 Food Street, City Center</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">info@RESTAURNTPK.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-gray-300">Mon - Thu: 11:00 AM - 11:00 PM</p>
                  <p className="text-gray-300">Fri - Sun: 11:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Newsletter</h4>
            <p className="text-gray-300 text-sm">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-r-md hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Developed By Pawan. PK Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;