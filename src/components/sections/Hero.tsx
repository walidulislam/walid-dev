'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Sparkles,
  Code2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '@/components/ui/Icons';
import Button from '@/components/ui/Button';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/navigation';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const socialIconMap: Record<string, React.ReactNode> = {
    GitHub: <GithubIcon className="w-4 h-4" />,
    LinkedIn: <LinkedinIcon className="w-4 h-4" />,
    Facebook: <FacebookIcon className="w-4 h-4" />,
  };

  const techBadges = [
    { name: 'React', bg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
    { name: 'Next.js', bg: 'bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 border-zinc-500/20' },
    { name: 'TypeScript', bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
    { name: 'Tailwind', bg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20' },
    { name: 'Node.js', bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
    { name: 'MongoDB', bg: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
  ];

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Background Ambient Lighting Blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-purple-400/20 dark:bg-purple-600/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-pink-400/15 dark:bg-indigo-600/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-purple-200/20 via-pink-200/15 to-blue-200/20 dark:from-purple-900/10 dark:via-pink-900/5 dark:to-indigo-900/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Bio */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            
            {/* Availability Pill */}
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 dark:bg-[#1B1230]/80 border border-purple-200/70 dark:border-purple-500/30 shadow-sm backdrop-blur-md mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-zinc-700 dark:text-purple-200">
                {PERSONAL_INFO.availability}
              </span>
            </motion.div>

            {/* Sub-heading */}
            <motion.p
              {...fadeUp(0.1)}
              className="text-base sm:text-lg font-semibold tracking-wider uppercase text-purple-700 dark:text-purple-300 mb-2"
            >
              HELLO, I&apos;M
            </motion.p>

            {/* Main Name */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 mb-3"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Animated Rotating Role */}
            <motion.div
              {...fadeUp(0.3)}
              className="h-10 sm:h-12 flex items-center justify-center lg:justify-start gap-2 mb-4 text-xl sm:text-2xl md:text-3xl font-bold"
            >
              <span className="text-zinc-800 dark:text-zinc-300">I&apos;m a</span>
              <div className="relative inline-block overflow-hidden min-w-[240px] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 25, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -25, opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                    className="inline-block bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm font-extrabold"
                  >
                    {PERSONAL_INFO.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.4)}
              className="max-w-xl text-sm sm:text-base text-zinc-600 dark:text-purple-200/70 leading-relaxed mb-6"
            >
              {PERSONAL_INFO.description}
            </motion.p>

            {/* Technology Pill Badges Strip */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
            >
              {techBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`text-xs font-semibold px-3 py-1 rounded-full border shadow-sm backdrop-blur-sm hover:scale-105 transition-transform duration-200 ${badge.bg}`}
                >
                  {badge.name}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8"
            >
              <Button
                href="#projects"
                size="md"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore My Work
              </Button>

              <Button
                href={PERSONAL_INFO.resumeUrl}
                download="Md_Walidul_Islam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                variant="secondary"
                icon={<Download className="w-4 h-4" />}
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex items-center gap-4 text-xs text-zinc-500 dark:text-purple-300/60 font-medium"
            >
              <span>Follow me:</span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Walid's ${link.name}`}
                    className="p-2 rounded-full bg-white/70 dark:bg-[#1B1230]/80 border border-purple-200/70 dark:border-purple-500/20 text-zinc-700 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-300 hover:border-purple-400 dark:hover:border-purple-400 transition-all hover:scale-110 shadow-sm"
                  >
                    {socialIconMap[link.name] || <Sparkles className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Avatar & Floating Interactive Badges */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Concentric Decorative Rings */}
              <div className="absolute inset-0 rounded-full border border-purple-300/30 dark:border-purple-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-dashed border-purple-400/25 dark:border-purple-500/15 pointer-events-none" />
              
              {/* Animated Glowing Ring behind Avatar */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                className="absolute inset-2 sm:inset-3 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 p-[3px] shadow-[0_0_40px_rgba(168,85,247,0.4)]"
              >
                <div className="w-full h-full rounded-full bg-[var(--background)]" />
              </motion.div>

              {/* Avatar Image Frame */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-full overflow-hidden shadow-2xl z-10 border-4 border-white dark:border-[#1B1230]"
              >
                <Image
                  src="/assets/avatar.jpg"
                  alt="Md. Walidul Islam"
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 340px"
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Floating Code Card (Top-Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -12, 2, 0],
                  x: [0, 6, -2, 0],
                  rotate: [0, 2, -1.5, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.4 },
                  scale: { duration: 0.6, delay: 0.4 },
                  y: { repeat: Infinity, duration: 5.5, ease: 'easeInOut' },
                  x: { repeat: Infinity, duration: 6.5, ease: 'easeInOut' },
                  rotate: { repeat: Infinity, duration: 7, ease: 'easeInOut' },
                }}
                className="hidden sm:block absolute -top-9 -right-12 sm:-right-16 md:-right-20 lg:-right-24 z-20 p-3.5 rounded-2xl bg-white/70 dark:bg-[#150C2A]/75 border border-white/80 dark:border-purple-400/30 backdrop-blur-2xl shadow-xl shadow-purple-900/15 font-mono text-[11px] leading-relaxed text-zinc-800 dark:text-purple-200 w-52 select-none overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                {/* Liquid Glass Fluid Aurora Layer */}
                <motion.div
                  aria-hidden="true"
                  className="absolute -inset-full pointer-events-none"
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 0.9, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: 'easeInOut',
                  }}
                  style={{
                    background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.35), rgba(236, 72, 153, 0.25) 35%, rgba(6, 182, 212, 0.2) 65%, transparent 75%)',
                    filter: 'blur(20px)',
                  }}
                />

                {/* Flowing Liquid Glass Specular Wave */}
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    opacity: [0.15, 0.55, 0.15],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: 'easeInOut',
                  }}
                  style={{
                    backgroundImage: 'linear-gradient(125deg, transparent 20%, rgba(255, 255, 255, 0.4) 45%, rgba(192, 132, 252, 0.35) 55%, transparent 75%)',
                    backgroundSize: '250% 250%',
                  }}
                />

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-purple-100/80 dark:border-purple-900/50">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-sm shadow-rose-500/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-500/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-500/30" />
                    <span className="ml-2 text-[10px] font-semibold text-purple-900/60 dark:text-purple-300/70">developer.ts</span>
                  </div>
                  <div>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span> developer = &#123;
                  </div>
                  <div className="pl-3 text-zinc-600 dark:text-zinc-300">
                    name: <span className="text-emerald-600 dark:text-emerald-400 font-medium">&quot;Walid&quot;</span>,
                  </div>
                  <div className="pl-3 text-zinc-600 dark:text-zinc-300">
                    focus: <span className="text-pink-600 dark:text-pink-400 font-medium">&quot;MERN&quot;</span>,
                  </div>
                  <div>&#125;;</div>
                </div>
              </motion.div>

              {/* Floating Badge (Top-Left Star) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-8 -left-4 z-20 p-2.5 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>

              {/* Floating Badge (Bottom-Left Spark) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-10 -left-6 z-20 p-2.5 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30"
              >
                <Code2 className="w-4 h-4" />
              </motion.div>

              {/* Floating Stats Card 1 (Bottom-Left: 10+ Projects) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-5 left-2 sm:-left-4 z-20 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-[#1B1230]/90 border border-purple-200/80 dark:border-purple-500/30 backdrop-blur-xl shadow-xl shadow-purple-900/10 text-center"
              >
                <div className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-[10px] font-semibold text-zinc-500 dark:text-purple-300">
                  Projects Built
                </div>
              </motion.div>

              {/* Floating Stats Card 2 (Bottom-Right: 1+ Year Experience) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-4 right-2 sm:-right-4 z-20 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-[#1B1230]/90 border border-purple-200/80 dark:border-purple-500/30 backdrop-blur-xl shadow-xl shadow-purple-900/10 text-center"
              >
                <div className="text-xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  1+
                </div>
                <div className="text-[10px] font-semibold text-zinc-500 dark:text-purple-300">
                  Year Hands-On
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
