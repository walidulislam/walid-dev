'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Award,
  Code2,
  Sparkles,
  School,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { EDUCATION_DATA } from '@/data/projects';

export default function Education() {
  const iconList = [GraduationCap, School, Code2];
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress as the user scrolls through the Education timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 65%'],
  });

  // Smooth physics spring animation for the descending line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="education" aria-label="Educational Journey" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-80 rounded-full bg-purple-500/10 dark:bg-purple-900/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Figma Pill */}
        <SectionHeading
          badge="Academic Career"
          title="My Educational"
          highlight="Journey"
          subtitle="My academic background and learning journey in technology."
        />

        {/* Vertical Timeline Container with Scroll Ref */}
        <div ref={containerRef} className="relative mt-16 max-w-5xl mx-auto">
          
          {/* 1. Background faint guide track line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-purple-200/50 dark:bg-purple-900/30 rounded-full" />

          {/* 2. Active Glowing Line that descends smoothly from the top as you scroll */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[3px] -translate-x-1/2 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-600 rounded-full shadow-[0_0_14px_rgba(168,85,247,0.8)] z-10"
          />

          {/* Educational Entries */}
          <div className="flex flex-col gap-12 sm:gap-16">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 1;
              const Icon = iconList[index] || GraduationCap;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Circular Timeline Milestone Node (Center) */}
                  <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="relative flex h-5 w-5"
                    >
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-purple-600 border-4 border-white dark:border-[#0B0618] shadow-md shadow-purple-500/50" />
                    </motion.span>
                  </div>

                  {/* Card Content (Offset left or right) */}
                  <div className="w-full pl-14 md:pl-0 md:w-1/2 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40, y: 25 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      whileHover={{ y: -5 }}
                      className="group relative pt-6 pb-6 px-6 sm:px-7 rounded-3xl bg-white/75 dark:bg-[#1B1230]/80 border border-purple-200/80 dark:border-purple-500/20 backdrop-blur-2xl shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-500/15 hover:border-purple-400 dark:hover:border-purple-400/50 transition-all duration-300"
                    >
                      {/* Protruding Icon Badge at Top-Left */}
                      <div className="absolute -top-4 left-6 p-2.5 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-lg shadow-purple-600/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Header with Year / Period */}
                      <div className="flex items-center justify-between gap-2 pt-2 mb-3">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 dark:text-purple-300">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>

                        {/* Distinctive Achievement Badge */}
                        {item.gpa && (
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-700/50 text-xs font-bold shadow-xs">
                            <Award className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                            <span>GPA {item.gpa}</span>
                          </div>
                        )}

                        {item.semester && (
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200 border border-purple-300/60 dark:border-purple-700/50 text-xs font-bold shadow-xs">
                            <Sparkles className="w-3 h-3 text-purple-500" />
                            <span>{item.semester}</span>
                          </div>
                        )}

                        {item.status && (
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-200 border border-blue-300/60 dark:border-blue-700/50 text-xs font-bold shadow-xs">
                            <Award className="w-3 h-3 text-blue-500" />
                            <span>{item.status}</span>
                          </div>
                        )}
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 dark:text-zinc-50 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                        {item.degree}
                      </h3>

                      {/* Institution Name */}
                      <p className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-purple-200/90 mt-0.5 mb-2.5">
                        {item.institution}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-purple-200/70 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tag Badges Strip */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-purple-100 dark:border-purple-900/40">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-xl text-[10px] sm:text-[11px] font-semibold bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/40"
                          >
                            #{tag.replace(/\s+/g, '')}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
