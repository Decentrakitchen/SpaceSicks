import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Zap, Globe, Users } from 'lucide-react';

interface FloatingNavbarProps {
  className?: string;
}

const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" />, color: 'from-green-400 to-emerald-400' },
    { name: 'Challenge', path: '/challenge', icon: <Rocket className="w-4 h-4" />, color: 'from-yellow-400 to-orange-400' },
  ];

  return (
    <div className="sticky top-4 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`transition-all duration-700 ${
          isScrolled 
            ? 'bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl' 
            : 'bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl'
        } ${className}`}
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 h-[1px] bottom-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 blur-sm rounded-full -z-10"></div>
        
        <div className="px-6">
          <div className="flex items-center gap-8 h-14">
          {/* Logo with enhanced effects */}
          <Link to="/">
            <motion.div
              whileHover={{ opacity: 0.8 }}
              className="flex items-center space-x-3"
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <h1 className="text-lg font-semibold text-white leading-none tracking-tight">
                  SpaceSicks
                </h1>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation with enhanced effects */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
              >
                <Link to={item.path}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`relative text-white/70 hover:text-white transition-colors duration-200 px-3 py-2 text-sm font-medium tracking-wide ${
                      location.pathname === item.path ? 'text-white' : ''
                    }`}
                  >
                    {item.name}
                    {hoveredItem === item.name && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-indigo-400/60 to-blue-400/60"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
            
            {/* Minimal CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="ml-4 px-5 py-1.5 bg-white text-black text-sm font-semibold rounded-full transition-all duration-300 hover:bg-white/90"
            >
              Join
            </motion.button>
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
                <button className="w-full mt-4 px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-300">
                  Join Mission
                </button>
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

