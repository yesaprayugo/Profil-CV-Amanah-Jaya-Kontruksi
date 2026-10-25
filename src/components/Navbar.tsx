import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onQuickQuoteClick: () => void;
}

const NAV_LINKS = [
  { label: 'Katalog', href: '#katalog' },
  { label: 'Perkhidmatan', href: '#perkhidmatan' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Hubungi Kami', href: '#hubungi-kami' },
];

export const Navbar: React.FC<NavbarProps> = ({ onQuickQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
        {/* Zone 1: Logo Only (No redundant text since logo already contains AMANAH JAYA KONSTRUKSI) */}
        <a
          href="#home"
          aria-label={COMPANY_INFO.name}
          className="flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#E58A13] rounded-md group"
        >
          {!logoError ? (
            <img
              src={COMPANY_INFO.logoUrl}
              alt={COMPANY_INFO.name}
              referrerPolicy="no-referrer"
              onError={() => setLogoError(true)}
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          ) : (
            <span className="text-lg font-extrabold tracking-tight text-[#0F2942]">
              {COMPANY_INFO.shortName}
            </span>
          )}
        </a>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-slate-600 hover:text-[#0F2942] transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#E58A13] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA Button + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onQuickQuoteClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#0F2942] hover:bg-[#E58A13] rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
          >
            <MessageSquare className="w-4 h-4 shrink-0 text-[#E58A13] group-hover:text-white" />
            <span>Konsultasi &amp; RAB</span>
            <ArrowUpRight className="w-4 h-4 shrink-0 hidden sm:inline" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Buka menu navigasi"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 text-[#0F2942] hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl"
          >
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="px-3 py-3 rounded-lg text-sm font-bold text-[#1E293B] hover:bg-slate-50 hover:text-[#E58A13] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
