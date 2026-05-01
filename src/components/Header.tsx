
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm pt-2 sm:pt-4" role="banner">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" aria-label="Total Construction & Remodeling - Home">
              <img 
                src="/lovable-uploads/59636e50-63b9-4c62-9e79-8e5059e41b1c.png" 
                alt="Total Construction & Remodeling logo"
                className="h-16 w-auto sm:h-20 object-contain"
                width="80"
                height="80"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10" aria-label="Main navigation">
            <Link 
              to="/about" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/about') ? 'text-logo-red font-bold' : 'text-gray-700 hover:text-logo-red'
              }`}
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/services') ? 'text-logo-red font-bold' : 'text-gray-700 hover:text-logo-red'
              }`}
              aria-current={isActive('/services') ? 'page' : undefined}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/projects') ? 'text-logo-red font-bold' : 'text-gray-700 hover:text-logo-red'
              }`}
              aria-current={isActive('/projects') ? 'page' : undefined}
            >
              Portfolio
            </Link>
            <Link 
              to="/property-management" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/property-management') ? 'text-logo-red font-bold' : 'text-gray-700 hover:text-logo-red'
              }`}
              aria-current={isActive('/property-management') ? 'page' : undefined}
            >
              Property Mgmt
            </Link>
            <Link 
              to="/reviews" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/reviews') ? 'text-logo-red font-bold' : 'text-gray-700 hover:text-logo-red'
              }`}
              aria-current={isActive('/reviews') ? 'page' : undefined}
            >
              Reviews
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button 
                className="bg-logo-red text-white hover:bg-red-700 transition-colors font-syne font-medium text-2xl focus:outline-none focus:ring-2 focus:ring-logo-red focus:ring-offset-2"
                style={{
                  width: '183px',
                  height: '49px',
                  borderRadius: '27px'
                }}
              >
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-logo-red p-2 focus:outline-none focus:ring-2 focus:ring-logo-red rounded"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMenuOpen ? <X size={40} aria-hidden="true" /> : <Menu size={40} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-menu" className="md:hidden bg-white pb-6" aria-label="Mobile navigation">
            <div className="px-4 pt-4 pb-3 space-y-4 text-center">
              <Link 
                to="/about" 
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className={`w-full py-3 px-6 rounded-lg font-syne font-medium text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
                  isActive('/about') ? 'bg-logo-red text-white' : 'bg-logo-red text-white hover:bg-red-700'
                }`}>
                  About
                </button>
              </Link>
              <Link 
                to="/services" 
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className={`w-full py-3 px-6 rounded-lg font-syne font-medium text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
                  isActive('/services') ? 'bg-logo-red text-white' : 'bg-logo-red text-white hover:bg-red-700'
                }`}>
                  Services
                </button>
              </Link>
              <Link 
                to="/projects" 
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className={`w-full py-3 px-6 rounded-lg font-syne font-medium text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
                  isActive('/projects') ? 'bg-logo-red text-white' : 'bg-logo-red text-white hover:bg-red-700'
                }`}>
                  Portfolio
                </button>
              </Link>
              <Link 
                to="/property-management" 
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className={`w-full py-3 px-6 rounded-lg font-syne font-medium text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
                  isActive('/property-management') ? 'bg-logo-red text-white' : 'bg-logo-red text-white hover:bg-red-700'
                }`}>
                  Property Mgmt
                </button>
              </Link>
              <Link 
                to="/reviews" 
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className={`w-full py-3 px-6 rounded-lg font-syne font-medium text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
                  isActive('/reviews') ? 'bg-logo-red text-white' : 'bg-logo-red text-white hover:bg-red-700'
                }`}>
                  Reviews
                </button>
              </Link>
              <Link to="/contact" className="block" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full py-3 px-6 rounded-lg bg-logo-red text-white hover:bg-red-700 transition-colors font-syne font-medium text-xl focus:outline-none focus:ring-2 focus:ring-white">
                  Contact Us
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
