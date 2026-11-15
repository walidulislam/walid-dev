'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ThemeToggle from '@/components/layout/ThemeToggle';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4 sm:py-5 bg-transparent transition-all duration-300 pointer-events-none">
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

        {/* Right Area: Theme Toggle & Let's Talk Button */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

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
      </div>
    </header>
  );
}
