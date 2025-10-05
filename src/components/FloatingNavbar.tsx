import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Globe } from 'lucide-react';

interface FloatingNavbarProps {
  className?: string;
}

const FloatingNavbar: React.FC<FloatingNavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Telescope', path: '/telescope', icon: <Zap className="w-4 h-4" />, color: 'from-blue-400 to-cyan-400' },
    { name: 'Satellites', path: '/satellites', icon: <Globe className="w-4 h-4" />, color: 'from-purple-400 to-pink-400' },
  ];

  return (
    <nav className="fixed left-1/2 top-6 -translate-x-1/2 z-50 w-[780px] max-w-[92vw] rounded-2xl px-5 py-2.5 bg-white/6 backdrop-blur-md border border-white/12 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between h-12">
        {/* Logo */}
        <Link to="/" className="text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-sm transition-colors">
          <h1 className="text-lg font-bold">SpaceSicks</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-sm transition-colors ${
                location.pathname === item.path ? 'text-white' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button className="px-4 py-1.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
            Join
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-sm"
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
        </button>
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
            <div className="px-5 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-sm ${
                    location.pathname === item.path ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-4 px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
                Join Mission
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-fuchsia-500/35 via-sky-500/35 to-fuchsia-500/35 mt-2" />
    </nav>
  );
};

export default FloatingNavbar;