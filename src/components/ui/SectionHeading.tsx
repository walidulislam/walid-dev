'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`relative mb-14 md:mb-18 flex flex-col ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {/* Figma Pill Badge with side lines & dots */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-center gap-3 mb-4"
      >
        {/* Left connector line with dot */}
        <div className="hidden sm:flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 dark:bg-purple-400 ring-2 ring-purple-200 dark:ring-purple-900/60" />
          <span className="w-10 md:w-16 h-[1px] bg-gradient-to-r from-purple-300 dark:from-purple-800 to-purple-400 dark:to-purple-600" />
        </div>

        {/* Central Pill Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/70 dark:bg-[#1B1230]/80 border border-purple-200 dark:border-purple-500/30 shadow-sm shadow-purple-500/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" />
          <span className="text-xs uppercase tracking-wider font-semibold text-purple-800 dark:text-purple-200">
            {badge}
          </span>
        </div>

        {/* Right connector line with dot */}
        <div className="hidden sm:flex items-center">
          <span className="w-10 md:w-16 h-[1px] bg-gradient-to-r from-purple-400 dark:from-purple-600 to-purple-300 dark:to-purple-800" />
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 dark:bg-purple-400 ring-2 ring-purple-200 dark:ring-purple-900/60" />
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50"
      >
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3.5 max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-purple-200/70"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
