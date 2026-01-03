import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Agar already home page pe hai, to bas scroll up karo
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Home page pe navigate karo
      navigate('/');
    }
  };

  const handleNavLinkClick = (path) => {
    setIsOpen(false); // Mobile menu close karo
    
    // Agar same page pe click kiya hai
    if (location.pathname === path) {
      // Top pe scroll karo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white border-b border-gray-200 z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - With proper Link handling */}
          <Link 
            to="/"
            onClick={handleLogoClick}
            className="flex items-center space-x-2 no-underline"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-olive to-maroon rounded-lg"></div>
              <span className="text-xl font-bold text-maroon hover:text-olive transition-colors">
                Portfolio
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                onClick={() => handleNavLinkClick(link.path)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 no-underline
                  ${location.pathname === link.path 
                    ? 'text-maroon' 
                    : 'text-gray-600 hover:text-olive'
                  }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-olive"
                  />
                )}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-6 py-2 bg-olive text-white rounded-lg hover:bg-olive-dark transition-colors duration-200"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-olive hover:bg-gray-100 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavLinkClick(link.path)}
                className={`block px-4 py-3 text-sm font-medium border-l-4 no-underline
                  ${location.pathname === link.path
                    ? 'border-olive bg-olive-light/10 text-maroon'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-olive'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 py-3">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  navigate('/contact');
                }}
                className="w-full px-6 py-2 bg-olive text-white rounded-lg hover:bg-olive-dark transition-colors duration-200"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;