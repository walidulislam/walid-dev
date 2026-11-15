'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Code2,
  User,
  Briefcase,
  GraduationCap,
  Mail,
} from 'lucide-react';
import { NAV_ITEMS } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';

const iconMap = {
  home: Home,
  skills: Code2,
  about: User,
  projects: Briefcase,
  education: GraduationCap,
  contact: Mail,
};

export default function Sidebar() {
  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds, 'home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 30;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside
      aria-label="Section Navigation"
      className="hidden lg:flex fixed left-5 xl:left-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center"
    >
      <div className="relative flex flex-col items-center py-5 px-2.5 rounded-full bg-white/70 dark:bg-[#120B24]/80 border border-purple-200/70 dark:border-purple-500/20 backdrop-blur-xl shadow-xl shadow-purple-900/10">
        <div className="flex flex-col items-center gap-3">
          {NAV_ITEMS.map((item) => {
            const Icon = iconMap[item.iconName] || Home;
            const isActive = activeSection === item.id;
            const isContact = item.id === 'contact';

            return (
              <React.Fragment key={item.id}>
                {/* Divider before Contact, matching Figma */}
                {isContact && (
                  <div className="w-5 h-[1px] my-1 bg-purple-200 dark:bg-purple-800/60" />
                )}

                <div className="relative flex items-center">
                  {/* Active Blue/Purple dot on the left edge (from Figma) */}
                  {isActive && (
                    <motion.span
                      layoutId="sidebarActiveDot"
                      className="absolute -left-3.5 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 shadow-[0_0_8px_#8B5CF6]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    aria-label={item.label}
                    className={`relative p-2.5 rounded-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                      isActive
                        ? 'text-purple-700 dark:text-purple-200'
                        : 'text-zinc-500 dark:text-purple-300/60 hover:text-purple-600 dark:hover:text-purple-200'
                    }`}
                  >
                    {/* Active highlight squircle pill (matching Figma) */}
                    {isActive && (
                      <motion.span
                        layoutId="sidebarActivePill"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100/90 dark:from-purple-900/60 dark:to-indigo-950/60 border border-purple-300/60 dark:border-purple-500/40 -z-10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}

                    <Icon className="w-5 h-5 transition-transform duration-200 hover:scale-110" />

                    {/* Tooltip on hover */}
                    <AnimatePresence>
                      {hoveredItem === item.id && (
                        <motion.div
                          initial={{ opacity: 0, x: 8, scale: 0.95 }}
                          animate={{ opacity: 1, x: 16, scale: 1 }}
                          exit={{ opacity: 0, x: 8, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-1/2 -translate-y-1/2 ml-1 px-3 py-1 rounded-lg bg-zinc-900/90 dark:bg-purple-950/90 text-white text-xs font-medium whitespace-nowrap shadow-lg border border-purple-500/30 backdrop-blur-md pointer-events-none z-50"
                        >
                          {item.label}
                          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-zinc-900/90 dark:border-r-purple-950/90" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </a>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
