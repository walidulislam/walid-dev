'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import Button from '@/components/ui/Button';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="group relative rounded-3xl sm:rounded-[36px] bg-white/70 dark:bg-[#120B24]/80 border border-purple-200/80 dark:border-purple-500/20 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-purple-900/10 hover:shadow-2xl hover:shadow-purple-500/15 hover:border-purple-400 dark:hover:border-purple-400/50 transition-all duration-500"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? 'lg:grid-flow-dense' : ''}`}>
        
        {/* Browser Mockup Window with Project Screenshot (Left in odd, Right in even) */}
        <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-6' : ''}`}>
          <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-purple-200/60 dark:border-purple-800/50 shadow-2xl">
            
            {/* Browser Header Bar (matching Figma) */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100 dark:bg-[#1B1230] border-b border-purple-200/40 dark:border-purple-900/40">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
              </div>

              {/* URL address pill */}
              <div className="px-4 py-0.5 rounded-full bg-white/80 dark:bg-black/40 border border-purple-200/40 dark:border-purple-800/40 text-[10px] font-mono text-zinc-500 dark:text-purple-300/70 truncate max-w-[220px]">
                {project.liveUrl?.replace('https://', '') || 'project-preview.app'}
              </div>

              <div className="w-8" />
            </div>

            {/* Thumbnail with responsive aspect ratio matching wide screenshots */}
            <div className="relative aspect-[16/8.5] sm:aspect-[21/10] w-full overflow-hidden bg-zinc-950">
              <Image
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

          </div>
        </div>

        {/* Project Information (Right in odd, Left in even) */}
        <div className={`lg:col-span-5 flex flex-col gap-4 ${isEven ? 'lg:col-start-1' : ''}`}>
          
          {/* Project Index / Label (from Figma: 01 / PROJECT) */}
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase">
            <span>{project.id} / PROJECT</span>
            <span className="w-6 h-[1.5px] bg-purple-400 dark:bg-purple-500" />
            <span className="text-zinc-500 dark:text-purple-300/60 font-semibold">{project.category}</span>
          </div>

          {/* Project Title */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-300 mt-0.5">
              {project.technology}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-600 dark:text-purple-200/80 leading-relaxed">
            {project.description}
          </p>

          {/* Key Features Bullet points */}
          <div className="flex flex-col gap-1.5 my-1">
            {project.features.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-purple-200/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-purple-100/70 dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 border border-purple-200/60 dark:border-purple-800/40"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links & Buttons (matching Figma) */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-purple-200/60 dark:border-purple-900/40">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="primary"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Live Demo
              </Button>
            )}

            {project.clientRepo && (
              <Button
                href={project.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="secondary"
                icon={<GithubIcon className="w-3.5 h-3.5" />}
              >
                {project.serverRepo ? 'Client Repo' : 'GitHub Repo'}
              </Button>
            )}

            {project.serverRepo && (
              <Button
                href={project.serverRepo}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="secondary"
                icon={<GithubIcon className="w-3.5 h-3.5" />}
              >
                Server Repo
              </Button>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );
}
