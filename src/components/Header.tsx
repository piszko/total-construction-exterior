
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/6e20f217-2601-444a-b4da-fe1996160910.png" 
              alt="Total Construction & Remodeling"
              className="h-[91px] w-[184px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-total-red font-syne font-bold text-2xl">Home</a>
            <a href="#" className="text-gray-700 hover:text-total-red transition-colors font-syne font-medium text-2xl">About</a>
            <a href="#" className="text-gray-700 hover:text-total-red transition-colors font-syne font-medium text-2xl">Services</a>
            <a href="#" className="text-gray-700 hover:text-total-red transition-colors font-syne font-medium text-2xl">Projects</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-total-red text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors font-syne font-medium text-2xl">
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
              <a href="#" className="block px-3 py-2 text-total-red font-syne font-bold text-xl">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-total-red font-syne font-medium text-xl">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-total-red font-syne font-medium text-xl">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-total-red font-syne font-medium text-xl">Projects</a>
              <button className="w-full mt-2 bg-total-red text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors font-syne font-medium text-2xl">
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
