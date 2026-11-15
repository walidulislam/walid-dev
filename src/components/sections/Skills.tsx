'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Server, Wrench } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { BrandIcon } from '@/components/ui/BrandIcons';
import { SKILLS } from '@/data/skills';
import { Skill } from '@/types';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Sparkles },
    { id: 'frontend', label: 'Frontend', icon: Layers },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
  ];

  return (
    <section id="skills" aria-label="Skills & Technologies" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-purple-400/10 dark:bg-purple-600/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-400/10 dark:bg-pink-600/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Figma Pill */}
        <SectionHeading
          badge="Tech Stack"
          title="Technologies and"
          highlight="Tools I Use"
          subtitle="A battle-tested technology stack for building scalable, high-performance web applications."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as 'all' | 'frontend' | 'backend' | 'tools')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                    : 'bg-white/70 dark:bg-[#1B1230]/70 text-zinc-700 dark:text-purple-200/80 border border-purple-200/70 dark:border-purple-500/20 hover:border-purple-400 hover:bg-white dark:hover:bg-[#23173F]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Stack Responsive Grid (matching Figma Cards) */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill: Skill, idx: number) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-white/75 dark:bg-[#1B1230]/80 border border-purple-200/80 dark:border-purple-500/20 backdrop-blur-xl shadow-lg shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-400 dark:hover:border-purple-400/60 transition-all duration-300 cursor-pointer text-center"
              >
                {/* Subtle card glow overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Tech Icon Container */}
                <div className="relative mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <BrandIcon type={skill.icon || skill.name} className="w-10 h-10" />
                </div>

                {/* Tech Name */}
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h3>

                {/* Subtext description (matching Figma) */}
                <p className="mt-1 text-[11px] sm:text-xs text-zinc-500 dark:text-purple-300/60 font-medium line-clamp-1">
                  {skill.subtext}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Floating Pill Badge (directly from Figma design) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/70 dark:bg-[#1B1230]/80 border border-purple-200 dark:border-purple-500/30 shadow-md shadow-purple-500/10 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-300" />
            <span className="text-xs sm:text-sm font-semibold text-purple-900 dark:text-purple-200">
              Always Learning &amp; Building Scalable Solutions
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
