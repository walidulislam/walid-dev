'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import {
  ArrowUp,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '@/components/ui/Icons';
import { SOCIAL_LINKS, NAV_ITEMS } from '@/data/navigation';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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

  const socialIconMap = {
    GitHub: <GithubIcon className="w-4 h-4" />,
    LinkedIn: <LinkedinIcon className="w-4 h-4" />,
    Facebook: <FacebookIcon className="w-4 h-4" />,
  };

  return (
    <footer
      aria-label="Footer"
      className="relative pt-20 pb-12 bg-[#0A0516] text-white border-t border-purple-900/30 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section: Logo, Name, Tagline & Social Icons */}
        <div className="flex flex-col items-center text-center mb-10">

          {/* Logo & Name */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xl font-bold tracking-tight text-white">
              Md. Walidul Islam
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm sm:text-base font-medium text-purple-200/80 max-w-md">
            Thoughtful design. Carefully crafted code.
          </p>

          {/* Social Icons Strip */}
          <div className="flex items-center gap-3 mt-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Walid's ${link.name}`}
                className="p-2.5 rounded-full bg-white/5 border border-purple-500/20 text-purple-200 hover:text-white hover:bg-purple-600/30 hover:border-purple-400 transition-all hover:scale-110 shadow-sm"
              >
                {socialIconMap[link.name] || <Sparkles className="w-4 h-4" />}
              </a>
            ))}
          </div>

        </div>

        {/* Quick Navigation Links (Home, About, Tech Stack, Projects, Education, Contact) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-6 border-y border-purple-900/40 text-xs sm:text-sm font-semibold tracking-wider uppercase text-purple-300/80">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="hover:text-white hover:underline underline-offset-8 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

      </div>

      {/* Big <WALID /> Marquee positioned right below Name & Nav Links in the middle */}
      <div className="w-full overflow-hidden select-none pointer-events-none py-6 sm:py-10 my-4 opacity-[0.06] dark:opacity-[0.09]">
        <Marquee speed={40} autoFill={true} gradient={false}>
          <div className="flex items-center gap-12 sm:gap-20 mx-6 sm:mx-10">
            <span className="text-[14vw] sm:text-[11vw] font-black tracking-tighter text-white whitespace-nowrap">
              &lt;WALID /&gt;
            </span>
            <svg
              viewBox="0 0 100 100"
              className="w-[7vw] h-[7vw] animate-spin-slow text-purple-400 fill-current shrink-0"
            >
              {Array.from({ length: 16 }).map((_, i) => (
                <rect
                  key={i}
                  x="47"
                  y="5"
                  width="6"
                  height="32"
                  rx="3"
                  transform={`rotate(${i * 22.5} 50 50)`}
                />
              ))}
            </svg>
          </div>
        </Marquee>
      </div>

      {/* Bottom Bar: Copyright, Back to Top, Let's Make Something Good */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-6 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-purple-300/60 font-mono">

          {/* Copyright */}
          <div>
            &copy; 2026 Md. Walidul Islam. All rights reserved.
          </div>

          {/* Back to Top Button */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to Top"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-purple-500/30 text-purple-200 hover:text-white hover:bg-purple-600/40 hover:border-purple-400 shadow-lg shadow-purple-950/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>

          {/* Callout */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="inline-flex items-center gap-1.5 text-purple-200 hover:text-white transition-colors font-sans font-semibold"
          >
            <span>Let&apos;s make something good</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

        </div>
      </div>
    </footer>
  );
}
