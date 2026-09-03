import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Systems", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const CoreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="2.5" fill="#35F2B0" />
    <circle cx="12" cy="12" r="5" stroke="#35F2B0" strokeWidth="0.5" strokeOpacity="0.5" />
    <circle cx="12" cy="12" r="8" stroke="#35F2B0" strokeWidth="0.3" strokeOpacity="0.25" />
    <circle cx="12" cy="4" r="1" fill="#35F2B0" fillOpacity="0.6" />
    <circle cx="20" cy="12" r="1" fill="#35F2B0" fillOpacity="0.6" />
    <circle cx="12" cy="20" r="1" fill="#35F2B0" fillOpacity="0.6" />
    <circle cx="4" cy="12" r="1" fill="#35F2B0" fillOpacity="0.6" />
    <line x1="12" y1="7" x2="12" y2="9.5" stroke="#35F2B0" strokeWidth="0.4" strokeOpacity="0.4" />
    <line x1="17" y1="12" x2="14.5" y2="12" stroke="#35F2B0" strokeWidth="0.4" strokeOpacity="0.4" />
    <line x1="12" y1="17" x2="12" y2="14.5" stroke="#35F2B0" strokeWidth="0.4" strokeOpacity="0.4" />
    <line x1="7" y1="12" x2="9.5" y2="12" stroke="#35F2B0" strokeWidth="0.4" strokeOpacity="0.4" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(2,8,7,0.92)] backdrop-blur-md border-b border-[rgba(70,150,125,0.1)]"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] rounded"
            aria-label="Onechip.ai - Home"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <CoreIcon />
            </motion.div>
            <span className="font-semibold text-[#F0F7F4] tracking-wider text-sm">
              ONECHIP<span className="text-[#35F2B0]">.AI</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8EA8A0] hover:text-[#35F2B0] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="font-mono text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 border border-[rgba(53,242,176,0.3)] text-[#35F2B0] hover:bg-[#35F2B0] hover:text-[#020807] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] rounded-sm"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-[#F0F7F4]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px bg-[#F0F7F4]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-[#F0F7F4]"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#020807] flex flex-col"
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <svg className="w-full h-full opacity-30">
                <defs>
                  <pattern id="m-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(53,242,176,0.06)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#m-grid)" />
              </svg>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 pt-20">
              <div className="mb-8">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#35F2B0] uppercase">
                  ● SYSTEM / NAVIGATION
                </span>
              </div>
              <nav className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      to={link.href}
                      className="block text-4xl font-light text-[#F0F7F4] hover:text-[#35F2B0] transition-colors duration-300 tracking-tight"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.15em] uppercase px-6 py-3 border border-[rgba(53,242,176,0.3)] text-[#35F2B0] hover:bg-[#35F2B0] hover:text-[#020807] transition-all duration-300"
                >
                  Start a Project →
                </Link>
              </motion.div>

              <div className="mt-12 font-mono text-[9px] text-[#49655D] tracking-widest uppercase">
                onechipai@gmail.com
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
