
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/6e20f217-2601-444a-b4da-fe1996160910.png" 
                alt="Total Construction & Remodeling"
                className="h-[91px] w-[184px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/') ? 'text-total-red font-bold' : 'text-gray-700 hover:text-total-red'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/about') ? 'text-total-red font-bold' : 'text-gray-700 hover:text-total-red'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/services') ? 'text-total-red font-bold' : 'text-gray-700 hover:text-total-red'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className={`font-syne font-medium text-2xl transition-colors ${
                isActive('/projects') ? 'text-total-red font-bold' : 'text-gray-700 hover:text-total-red'
              }`}
            >
              Projects
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button 
                className="bg-total-red text-white hover:bg-red-600 transition-colors font-syne font-medium text-2xl"
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
              className="text-gray-700 hover:text-total-red p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 font-syne font-medium text-xl ${
                  isActive('/') ? 'text-total-red font-bold' : 'text-gray-700 hover:text-total-red'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 font-syne font-medium text-xl ${
                  isActive('/about') ? 'text-total-red font-bold' : 'text-gray-700 hover:text-total-red'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 font-syne font-medium text-xl ${
                  isActive('/services') ? 'text-total-red font-bold' : 'text-gray-700 hover:text-total-red'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/projects" 
                className={`block px-3 py-2 font-syne font-medium text-xl ${
                  isActive('/projects') ? 'text-total-red font-bold' : 'text-gray-700 hover:text-total-red'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full mt-2 bg-total-red text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors font-syne font-medium text-2xl">
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
