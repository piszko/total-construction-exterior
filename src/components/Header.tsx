
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm pt-2 sm:pt-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/59636e50-63b9-4c62-9e79-8e5059e41b1c.png" 
                alt="Total Construction & Remodeling"
                className="h-16 w-auto sm:h-20 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <Link 
              to="/" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/') ? 'text-logo-red font-bold' : 'text-gray-700 hover:text-logo-red'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/about') ? 'text-logo-red font-bold' : 'text-gray-700 hover:text-logo-red'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/services') ? 'text-logo-red font-bold' : 'text-gray-700 hover:text-logo-red'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/projects') ? 'text-logo-red font-bold' : 'text-gray-700 hover:text-logo-red'
              }`}
            >
              Projects
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button 
                className="bg-logo-red text-white hover:bg-red-700 transition-colors font-syne font-medium text-2xl"
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

          {/* Mobile menu button - doubled size */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-logo-red p-2"
            >
              {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - redesigned with red buttons */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-6">
            <div className="px-4 pt-4 pb-3 space-y-4 text-center">
              <Link 
                to="/" 
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className={`w-full py-3 px-6 rounded-lg font-syne font-medium text-xl transition-colors ${
                  isActive('/') ? 'bg-logo-red text-white' : 'bg-logo-red text-white hover:bg-red-700'
                }`}>
                  Home
                </button>
              </Link>
              <Link 
                to="/about" 
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className={`w-full py-3 px-6 rounded-lg font-syne font-medium text-xl transition-colors ${
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
                <button className={`w-full py-3 px-6 rounded-lg font-syne font-medium text-xl transition-colors ${
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
                <button className={`w-full py-3 px-6 rounded-lg font-syne font-medium text-xl transition-colors ${
                  isActive('/projects') ? 'bg-logo-red text-white' : 'bg-logo-red text-white hover:bg-red-700'
                }`}>
                  Projects
                </button>
              </Link>
              <Link to="/contact" className="block" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full py-3 px-6 rounded-lg bg-logo-red text-white hover:bg-red-700 transition-colors font-syne font-medium text-xl">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
