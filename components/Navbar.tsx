
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { DR_NAME, PHONE_VOICE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'حجز موعد', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl md:text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
              د. يوسف بولعيش
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-all duration-300 hover:text-teal-500 relative group py-2 ${
                  isActive(link.path) ? 'text-teal-600' : 'text-gray-600'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform transition-transform duration-300 ${
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
            <a
              href={`tel:${PHONE_VOICE}`}
              className="flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-full hover:bg-teal-700 transition-all hover:shadow-lg active:scale-95"
            >
              <Phone size={18} />
              <span className="font-bold">{PHONE_VOICE}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-teal-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-bold ${
                  isActive(link.path) ? 'text-teal-600 bg-teal-50' : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_VOICE}`}
              className="block w-full text-center bg-teal-600 text-white px-3 py-4 rounded-md font-bold mt-4"
            >
              اتصل الآن
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
