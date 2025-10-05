import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Globe } from 'lucide-react';

interface FloatingNavbarProps {
  className?: string;
}

const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Telescope', path: '/telescope', icon: <Zap className="w-4 h-4" />, color: 'from-blue-400 to-cyan-400' },
    { name: 'Satellites', path: '/satellites', icon: <Globe className="w-4 h-4" />, color: 'from-purple-400 to-pink-400' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-blue-500/10' 
            : 'bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg shadow-blue-500/5'
        } ${className}`}
      >
        
        <div className="px-6">
          <div className="flex items-center gap-8 h-14">
          {/* Logo - Simple Text Only */}
          <Link to="/">
            <h1 className="text-lg font-bold text-white ">
              SpaceSicks
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link to={item.path}>
                  <div
                    className={`text-white/70 hover:text-white transition-colors duration-200 px-3 py-2 text-sm font-medium tracking-wide ${
                      location.pathname === item.path ? 'text-white' : ''
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-auto p-2 text-white/70 hover:text-white transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-lg"
            >
              <div className="px-6 py-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      location.pathname === item.path ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
};

export default FloatingNavbar;

