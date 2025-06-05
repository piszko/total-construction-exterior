
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/6e20f217-2601-444a-b4da-fe1996160910.png" 
                alt="Total Construction & Remodeling"
                className="h-[60px] w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional construction, roofing, and remodeling services in Atlanta, GA since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Exterior Construction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Interior Construction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roofing Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Remodeling</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="text-total-red mr-3" />
                <span className="text-gray-400">(404) 386-6849</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-total-red mr-3" />
                <span className="text-gray-400">info@totalconstructionandremodeling.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="text-total-red mr-3 mt-1" />
                <span className="text-gray-400">1273 Thomas Rd, Decatur, GA 30030</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="text-total-red mr-3" />
                <span className="text-gray-400">Mon - Fri: 8:00am - 5:00pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Total Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
