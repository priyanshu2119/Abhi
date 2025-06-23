import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github, Heart, Leaf, Coffee } from 'lucide-react';

export function Footer() {  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-purple-500 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Coffee className="h-8 w-8 text-green-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Sustainable Cups
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              🌱 Committed to reducing paper cup waste on college campuses through innovative tracking and rewards systems. Join us in making a difference!
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <Leaf className="h-5 w-5" />
              <span className="font-medium">Eco-Friendly • Sustainable • Future-Ready</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <span className="text-green-400">📧</span>
                <span>info@sustainablecups.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-400">📍</span>
                <span>123 Green Street</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-pink-400">🏢</span>
                <span>Campus Town, ST 12345</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Follow Us</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <a href="#" className="group bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Facebook className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group bg-gradient-to-br from-sky-400 to-sky-500 p-3 rounded-xl hover:from-sky-500 hover:to-sky-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Twitter className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group bg-gradient-to-br from-pink-500 to-rose-500 p-3 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group bg-gradient-to-br from-gray-700 to-gray-800 p-3 rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Github className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-xl border border-green-500/30">
              <p className="text-sm text-gray-300 text-center">
                💚 Join our eco-community and stay updated with the latest sustainability news!
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2025 Sustainable Cups. All rights reserved. Made with{' '}
              <Heart className="h-4 w-4 text-red-500 inline mx-1 animate-pulse" />
              for the planet.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">🌍 Carbon Neutral</span>
              <span className="text-gray-400 text-sm">♻️ 100% Recyclable</span>
              <span className="text-gray-400 text-sm">🌱 Eco-Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}