import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const navLinkClasses = 'px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition';

  const buttonClasses =
    'px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition';

  return (
    <nav className={`${transparent ? 'bg-transparent' : 'bg-white border-b'} sticky top-0 z-50 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Campus Connect
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={navLinkClasses}>
              Home
            </Link>
            <button className={navLinkClasses}>Features</button>
            <button className={navLinkClasses}>About</button>
            {isAuthenticated ? (
              <button className={buttonClasses} onClick={() => navigate('/dashboard')}>
                Dashboard
              </button>
            ) : (
              <button className={buttonClasses} onClick={() => navigate('/login')}>
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition">
              Home
            </Link>
            <button className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition">
              Features
            </button>
            <button className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition">
              About
            </button>
            {isAuthenticated ? (
              <button
                className="block w-full text-left px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </button>
            ) : (
              <button
                className="block w-full text-left px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
