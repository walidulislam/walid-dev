'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/sections/ProjectCard';
import Button from '@/components/ui/Button';
import { FEATURED_PROJECTS } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" aria-label="Featured Projects" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-600/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full bg-pink-500/10 dark:bg-indigo-600/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Figma Pill */}
        <SectionHeading
          badge="Featured Projects"
          title="Curated Work &amp;"
          highlight="Key Applications"
          subtitle="Some of the projects I've worked on and built during my development journey."
        />

        {/* Project Cards List */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom Callout Pill (from Figma) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/70 dark:bg-[#1B1230]/80 border border-purple-200 dark:border-purple-500/30 shadow-md shadow-purple-500/10 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-300" />
            <span className="text-xs sm:text-sm font-semibold text-purple-900 dark:text-purple-200">
              Transforming complex logic into seamless digital experiences
            </span>
          </div>

          <Button
            href="https://github.com/walidulislam"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="secondary"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore More on GitHub
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
