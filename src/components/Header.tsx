
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-total-red text-white p-2 rounded-md mr-3">
              <span className="font-bold text-lg">TOTAL</span>
            </div>
            <span className="text-gray-800 text-sm font-medium">CONSTRUCTION</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-total-red transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-total-red transition-colors font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-total-red transition-colors font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-total-red transition-colors font-medium">Projects</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-total-red text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors font-medium">
              Contact Us
            </button>
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
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-total-red font-medium">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-total-red font-medium">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-total-red font-medium">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-total-red font-medium">Projects</a>
              <button className="w-full mt-2 bg-total-red text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors font-medium">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
