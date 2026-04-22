import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const links = [
    { name: 'Collections', path: '/collections' },
    { name: 'Experience', path: '/experience' },
    { name: 'Our Story', path: '/story' },
    { name: 'Philosophy', path: '/' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-3 md:py-6",
          isScrolled ? "glass-header py-2 md:py-4 shadow-sm" : "bg-transparent"
        )}
      >
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <motion.img 
                src="/favicon.png" 
                alt="Velvet Official Logo" 
                className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(233,193,119,0.3)] group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(233,193,119,0.5)] transition-all duration-500"
              />
            </div>
            <span className={cn("text-lg brand-text group-hover:opacity-80 transition-all duration-500 text-primary-container drop-shadow-sm")}>
              VELVET
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "relative group font-headline font-light tracking-[0.2em] uppercase text-[11px] transition-colors duration-500",
                  location.pathname === link.path
                    ? "text-primary-container font-medium"
                    : isScrolled 
                      ? "text-primary hover:text-primary-container" 
                      : "text-primary-container hover:text-white"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-primary/20 transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Action Icons - Mobile Menu Toggle */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn("md:hidden hover:text-primary transition-colors relative z-[60]", isScrolled ? "text-primary" : "text-primary-container")}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[#0f0d0c]/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-12">
              {links.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "font-headline text-4xl font-light tracking-widest transition-colors duration-300 block relative group",
                      location.pathname === link.path ? "text-primary italic" : "text-white/80 hover:text-primary"
                    )}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="mobile-nav-underline"
                        className="absolute -bottom-2 left-1/4 right-1/4 h-px bg-primary/40"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
