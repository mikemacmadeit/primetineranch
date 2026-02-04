import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/hunts', label: 'HUNTS' },
    { path: '/lodging', label: 'LODGE' },
    { path: '/gallery', label: 'GALLERY' },
    { path: '/genetics', label: 'GENETICS' },
    { path: '/contact', label: 'CONTACT' }
  ];

  const bookNowItem = { path: '/booking', label: 'BOOK NOW' };
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-olive text-tan shadow-md">
      <div className="w-full flex items-center justify-between h-20 px-4 sm:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <img
            src="/images/primetan_5.png?preset=webp"
            alt="PrimeTine Icon"
            className="h-10 w-auto opacity-90 hover:scale-110 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-bold uppercase tracking-widest">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-all duration-300 ${
                isActive(item.path)
                  ? 'text-bronze border-b-2 pb-1 border-bronze'
                  : 'text-tan hover:text-bronze hover:scale-105 hover:tracking-[0.3em]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={bookNowItem.path}
            className="ml-4 bg-bronze text-charcoal px-5 py-2.5 text-xs sm:text-sm font-black uppercase rounded-full shadow-lg hover:bg-tan hover:scale-105 hover:shadow-bronze transition-all duration-300 tracking-wide border-2 border-transparent hover:border-tan"
          >
            {bookNowItem.label}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-olive z-40 flex flex-col items-center justify-start pt-28 px-6 pb-12 space-y-8 text-lg font-bold uppercase tracking-wider text-tan overflow-y-auto"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-all duration-200 ${
                  isActive(item.path) ? 'text-bronze scale-105' : 'hover:text-bronze'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={bookNowItem.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-bronze text-charcoal px-6 py-3 rounded-full text-sm font-black tracking-wide text-center hover:bg-tan transition-all w-[75%] max-w-xs"
            >
              {bookNowItem.label}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HUD Lines (Optional visual flair) */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-0 left-1/2 w-0.5 h-6 bg-olive/30 animate-hud-line" />
        <div className="absolute bottom-0 left-1/2 w-0.5 h-6 bg-olive/30 animate-hud-line" />
        <div className="absolute left-0 top-1/2 h-0.5 w-6 bg-olive/30 animate-hud-line" />
        <div className="absolute right-0 top-1/2 h-0.5 w-6 bg-olive/30 animate-hud-line" />
      </div>
    </header>
  );
};

export default Header;
