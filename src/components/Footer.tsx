
import { Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/59636e50-63b9-4c62-9e79-8e5059e41b1c.png" 
                alt="Total Construction & Remodeling logo"
                className="h-16 w-auto object-contain brightness-0 invert"
                width="64"
                height="64"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Offering professional residential &amp; commercial construction, roofing, and remodeling services in Atlanta, GA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer quick links">
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Project Gallery</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <nav aria-label="Footer services links">
              <ul className="space-y-2">
                <li><Link to="/services/exterior-construction" className="text-gray-400 hover:text-white transition-colors">Exterior Construction</Link></li>
                <li><Link to="/services/interior-construction" className="text-gray-400 hover:text-white transition-colors">Interior Construction</Link></li>
                <li><Link to="/services/roofing-services" className="text-gray-400 hover:text-white transition-colors">Roofing Services</Link></li>
                <li><Link to="/property-management" className="text-gray-400 hover:text-white transition-colors">Property Management</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="text-logo-red mr-3" aria-hidden="true" />
                <a href="tel:+14043866849" className="text-gray-400 hover:text-white transition-colors">(404) 386-6849</a>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-logo-red mr-3" aria-hidden="true" />
                <a href="mailto:info@totalconstructionandremodeling.com" className="text-gray-400 hover:text-white transition-colors text-sm">info@totalconstruction...</a>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="text-logo-red mr-3" aria-hidden="true" />
                <span className="text-gray-400">Mon - Fri: 8:00am - 5:00pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Total Construction & Remodeling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
