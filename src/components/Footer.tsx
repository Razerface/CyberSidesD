import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-white">CyberSide Studio</span>
            </div>
            <p className="text-sm">
              Crafting exceptional digital experiences through innovative web solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
              <Link to="/portfolio" className="hover:text-indigo-400 transition-colors">Portfolio</Link>
              <Link to="/services" className="hover:text-indigo-400 transition-colors">Services</Link>
              <Link to="/testimonials" className="hover:text-indigo-400 transition-colors">Testimonials</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>cybersidestudio@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>123 Web Street, Digital City</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CyberSide Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}