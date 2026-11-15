'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowUpRight,
  Home,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  Mail,
} from 'lucide-react';
import ThemeToggle from '@/components/layout/ThemeToggle';
import Button from '@/components/ui/Button';
import { NAV_ITEMS } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';

const iconMap = {
  home: Home,
  about: User,
  skills: Code2,
  projects: Briefcase,
  education: GraduationCap,
  contact: Mail,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds, 'home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none ${
          isScrolled
            ? 'py-3 sm:py-3.5 bg-white/80 dark:bg-[#0B0618]/85 backdrop-blur-xl border-b border-purple-200/50 dark:border-purple-900/30 shadow-sm shadow-purple-950/5'
            : 'py-4 sm:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-auto">
          {/* Brand Text: <WALID> */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group relative inline-flex items-center py-1.5 px-3 rounded-full hover:bg-white/50 dark:hover:bg-[#1B1230]/50 border border-transparent hover:border-purple-200/50 dark:hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer"
            aria-label="Walid Portfolio Home"
          >
            <span className="font-mono text-xl sm:text-2xl font-black tracking-tight text-zinc-900 dark:text-white transition-all duration-300">
              <span className="text-purple-600 dark:text-purple-400 font-bold mr-0.5">&lt;</span>
              <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 dark:from-purple-300 dark:via-purple-100 dark:to-pink-300 bg-clip-text text-transparent font-black tracking-wide">
                WALID
              </span>
              <span className="text-purple-600 dark:text-purple-400 font-bold ml-0.5">&gt;</span>
            </span>
          </a>

          {/* Right Area: Theme Toggle, Let's Talk Button & Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />

            {/* Let's Talk Button (Desktop / Tablet) */}
            <div className="hidden sm:block">
              <Button
                href="#contact"
                size="sm"
                variant="primary"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile / Tablet Menu Hamburger (Visible on screens where sidebar is hidden) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 dark:bg-[#1B1230]/85 border border-purple-200/80 dark:border-purple-500/30 text-zinc-800 dark:text-zinc-200 backdrop-blur-md shadow-xs hover:border-purple-400 dark:hover:border-purple-400 transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              ) : (
                <Menu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Sliding Drawer Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden fixed top-18 inset-x-4 z-50 rounded-3xl overflow-hidden bg-white/95 dark:bg-[#120B24]/95 backdrop-blur-2xl border border-purple-200/80 dark:border-purple-500/30 p-5 shadow-2xl shadow-purple-950/25 max-h-[calc(100vh-5.5rem)] overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-100 dark:border-purple-900/40">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-purple-600 dark:text-purple-400">
                  NAVIGATION MENU
                </span>
                <span className="text-[11px] font-mono text-zinc-400 dark:text-purple-300/60">
                  SELECT A SECTION
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
                {NAV_ITEMS.map((item) => {
                  const Icon = iconMap[item.iconName] || Home;
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-purple-100/90 dark:bg-purple-900/50 text-purple-900 dark:text-purple-100 border border-purple-300/60 dark:border-purple-500/40 shadow-xs'
                          : 'text-zinc-700 dark:text-purple-200/80 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-xl transition-colors ${
                            isActive
                              ? 'bg-purple-600 text-white shadow-xs shadow-purple-600/30'
                              : 'bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200/50 dark:border-purple-800/40'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>

                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform ${
                          isActive
                            ? 'text-purple-600 dark:text-purple-400 scale-110'
                            : 'opacity-30'
                        }`}
                      />
                    </a>
                  );
                })}

                {/* Let's Talk CTA Button inside Mobile Menu */}
                <div className="pt-3 mt-2 border-t border-purple-100 dark:border-purple-900/40">
                  <Button
                    href="#contact"
                    size="md"
                    variant="primary"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                    className="w-full justify-center shadow-lg shadow-purple-600/20 py-3"
                    onClick={(e) => scrollToSection(e, '#contact')}
                  >
                    Let&apos;s Talk
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
