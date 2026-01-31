
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Clock, MessageSquare } from 'lucide-react';
import { DR_NAME, WHATSAPP_NUMBER, PHONE_VOICE, INSTAGRAM_URL, MAPS_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold text-teal-400 mb-6">د. يوسف بولعيش</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            ابتسامتك هي أولويتنا. نستخدم أحدث التقنيات لنقدم لك رعاية أسنان عالية الجودة في مدينة تطوان.
          </p>
          <div className="flex space-x-4 space-x-reverse">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-teal-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
              <MessageSquare size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors">الرئيسية</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-teal-400 transition-colors">خدماتنا</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">حجز موعد</Link></li>
            <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">موقعنا</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6">اتصل بنا</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-teal-400 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-400">عيادة طب الأسنان د. يوسف بولعيش، تطوان، المغرب</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-teal-400 flex-shrink-0" size={20} />
              <span className="text-gray-400">{PHONE_VOICE} / {WHATSAPP_NUMBER}+</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-teal-400 flex-shrink-0" size={20} />
              <span className="text-gray-400">الاثنين - السبت: 09:00 - 18:00</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} د. يوسف بولعيش. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
