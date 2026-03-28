import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Waves } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Hotels', path: '/hotels' },
  { name: 'Food & Cafes', path: '/food' },
  { name: 'Experiences', path: '/experience' },
  { name: 'Gallery', path: '/gallery' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // If not on home page, we want the navbar to always have a background
  const hasBackground = scrolled || isOpen || !isHome;
  const textColorClass = hasBackground ? 'text-gray-900' : 'text-white';
  const logoColorClass = hasBackground ? 'text-gray-900' : 'text-white';
  const iconColorClass = hasBackground ? 'text-ocean' : 'text-white group-hover:text-ocean-light';

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${hasBackground ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <Waves className={`h-8 w-8 transition-colors ${iconColorClass}`} />
            <span className={`font-bold text-xl tracking-wide ${logoColorClass}`}>
              SouthWave <span className="text-ocean">LK</span>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-ocean ${hasBackground ? 'text-gray-700' : 'text-gray-100'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/plan" 
              className="bg-ocean hover:bg-ocean-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ml-2"
            >
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColorClass} hover:text-ocean transition-colors`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col shadow-xl">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-gray-800 font-medium text-lg hover:text-ocean py-2 border-b border-gray-50 flex items-center justify-between"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="text-gray-800 font-medium text-lg hover:text-ocean py-2 flex items-center justify-between"
              >
                Contact
              </Link>
              <Link 
                to="/plan" 
                className="bg-ocean text-white text-center px-5 py-3 rounded-xl font-semibold mt-4 shadow-md"
              >
                Plan Your Trip
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
