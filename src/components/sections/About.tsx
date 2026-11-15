'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import {
  Code2,
  Rocket,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Layers,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { BrandIcon } from '@/components/ui/BrandIcons';
import { PERSONAL_INFO } from '@/data/navigation';

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

interface TechCardItem {
  name: string;
  category: string;
  type: string;
  borderGlow: string;
}

const row1Techs: TechCardItem[] = [
  { name: 'React.js', category: 'Frontend', type: 'react', borderGlow: 'hover:border-cyan-400' },
  { name: 'Next.js', category: 'Fullstack', type: 'nextjs', borderGlow: 'hover:border-purple-400' },
  { name: 'TypeScript', category: 'Language', type: 'typescript', borderGlow: 'hover:border-blue-500' },
  { name: 'JavaScript', category: 'Language', type: 'javascript', borderGlow: 'hover:border-amber-400' },
  { name: 'Tailwind CSS', category: 'Styling', type: 'tailwind', borderGlow: 'hover:border-sky-400' },
  { name: 'HTML5', category: 'Markup', type: 'html', borderGlow: 'hover:border-orange-500' },
  { name: 'CSS3', category: 'Styling', type: 'css', borderGlow: 'hover:border-blue-600' },
  { name: 'Figma', category: 'Design', type: 'figma', borderGlow: 'hover:border-pink-500' },
  { name: 'Postman', category: 'API Testing', type: 'postman', borderGlow: 'hover:border-orange-400' },
];

const row2Techs: TechCardItem[] = [
  { name: 'Node.js', category: 'Backend', type: 'nodejs', borderGlow: 'hover:border-emerald-500' },
  { name: 'Express.js', category: 'Backend', type: 'express', borderGlow: 'hover:border-zinc-400' },
  { name: 'MongoDB', category: 'Database', type: 'mongodb', borderGlow: 'hover:border-green-500' },
  { name: 'REST API', category: 'Backend', type: 'api', borderGlow: 'hover:border-purple-500' },
  { name: 'JWT Auth', category: 'Security', type: 'jwt', borderGlow: 'hover:border-pink-500' },
  { name: 'Firebase', category: 'Cloud Auth', type: 'firebase', borderGlow: 'hover:border-amber-500' },
  { name: 'Git & GitHub', category: 'VCS', type: 'git', borderGlow: 'hover:border-orange-500' },
  { name: 'Netlify', category: 'Deployment', type: 'netlify', borderGlow: 'hover:border-teal-400' },
  { name: 'Vercel', category: 'Deployment', type: 'vercel', borderGlow: 'hover:border-indigo-400' },
];

function Tech3DCard({ tech }: { tech: TechCardItem }) {
  return (
    <div
      className={`group relative flex items-center gap-2.5 px-3.5 py-1.5 mx-1.5 sm:mx-2 rounded-xl bg-white/80 dark:bg-[#1B1230]/85 border border-purple-200/70 dark:border-purple-500/20 backdrop-blur-md shadow-xs hover:shadow-xl hover:shadow-purple-500/15 ${tech.borderGlow} transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer select-none`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* 3D Glass Light Sheen */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/5 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Brand Icon Container with 3D Pop */}
      <div className="relative p-1.5 rounded-lg bg-purple-50/80 dark:bg-purple-950/60 border border-purple-200/50 dark:border-purple-800/40 shadow-2xs transition-transform duration-300 group-hover:scale-105 shrink-0">
        <BrandIcon type={tech.type} className="w-4 h-4" />
      </div>

      {/* Name & Category Tag */}
      <div className="flex flex-col text-left leading-tight">
        <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors whitespace-nowrap">
          {tech.name}
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-wider text-purple-600/90 dark:text-purple-400/80 mt-0.5">
          {tech.category}
        </span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" aria-label="About Me" className="relative py-20 lg:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-purple-400/10 dark:bg-purple-600/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <SectionHeading
          badge="About Me"
          title="Getting to Know the"
          highlight="Developer Behind the Code"
          subtitle="A passionate frontend & MERN stack developer dedicated to building impactful digital solutions."
        />

        {/* Master Card inspired by Figma Design */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="relative mt-28 sm:mt-32 md:mt-36 pt-36 sm:pt-32 md:pt-36 pb-10 px-5 sm:px-10 lg:px-14 rounded-3xl sm:rounded-[36px] bg-white/70 dark:bg-[#120B24]/80 border border-purple-200/80 dark:border-purple-500/20 backdrop-blur-2xl shadow-2xl shadow-purple-900/10"
        >
          {/* Centered Avatar Breaking Through the Top Rim — Portfolio Style */}
          <div className="absolute -top-20 sm:-top-28 md:-top-32 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 w-full max-w-xs">
            <div className="relative">
              {/* Subtle glow behind the image */}
              <div className="absolute inset-x-4 -bottom-4 h-24 bg-gradient-to-t from-purple-500/25 via-pink-400/15 to-transparent blur-2xl rounded-full pointer-events-none" />

              {/* Professional Portrait Image — No Circle, Floating Out */}
              <motion.div
                variants={fadeIn}
                className="relative w-32 h-40 sm:w-44 sm:h-52 md:w-48 md:h-56 overflow-hidden rounded-2xl sm:rounded-3xl mx-auto shadow-xl shadow-purple-950/20"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                }}
              >
                <Image
                  src="/assets/my.jpg"
                  alt="Md. Walidul Islam"
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, 192px"
                  className="object-cover object-top"
                  priority
                />
              </motion.div>

              {/* Speech Bubble (from Figma: "♥ Hello, internet!") */}
              <motion.div
                variants={fadeIn}
                className="absolute top-2 sm:top-4 -right-8 sm:-right-24 px-2.5 sm:px-3 py-1 rounded-full bg-white dark:bg-[#1B1230] border border-purple-200 dark:border-purple-500/40 shadow-lg text-[10px] sm:text-[11px] font-semibold text-purple-900 dark:text-purple-200 whitespace-nowrap flex items-center gap-1.5 z-10"
              >
                <span className="text-pink-500">♥</span> Hello, internet!
              </motion.div>

              {/* Floating Arrow (from Figma) */}
              <div className="hidden sm:block absolute -top-4 -left-6 text-purple-400 rotate-[-20deg]">
                <ArrowUpRight className="w-7 h-7 text-purple-500/80" />
              </div>
            </div>

            {/* Label below avatar (from Figma) */}
            <div className="mt-2.5 text-center px-4">
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-purple-900 dark:text-purple-200 block">
                FULL STACK MERN DEVELOPER
              </span>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="w-5 sm:w-6 h-[1px] bg-purple-300 dark:bg-purple-700" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-500 dark:text-purple-300/70 font-medium whitespace-nowrap">
                  TURNING IDEAS INTO WEB EXPERIENCES
                </span>
                <span className="w-5 sm:w-6 h-[1px] bg-purple-300 dark:bg-purple-700" />
              </div>
            </div>
          </div>

          {/* Main Grid Content — Spacious margin on mobile to separate from top avatar label */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-20 sm:mt-16 md:mt-14 items-center">

            {/* Left Column: Heading & Biography */}
            <motion.div variants={fadeIn} className="lg:col-span-7 flex flex-col gap-4 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                <span>ABOUT ME</span>
                <span className="w-8 h-[2px] bg-purple-400 dark:bg-purple-500" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
                Frontend &amp; MERN Stack Developer
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-purple-200/80 leading-relaxed">
                I&apos;m Md. Walidul Islam, a passionate frontend and MERN Stack developer who enjoys
                building modern, responsive, and user-friendly web applications. I love exploring new
                technologies, improving my problem-solving skills, and turning creative ideas into
                functional digital experiences.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-zinc-600 dark:text-purple-300">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/40">
                  <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Based in {PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/40">
                  <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                  <span>Focus: React, Next.js &amp; MERN</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Key Focus Points & Let's Talk CTA */}
            <motion.div variants={fadeIn} className="lg:col-span-5 flex flex-col gap-4">

              {/* Feature 1: Modern Full-Stack Engineering */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group relative p-4 rounded-2xl bg-white/70 dark:bg-[#1B1230]/75 border border-purple-200/70 dark:border-purple-500/20 backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-400 dark:hover:border-purple-400/60 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle gradient hover sheen */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/25 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                        Clean Architecture &amp; UX
                      </h4>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40">
                        High Performance
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-purple-200/70 mt-1 leading-relaxed">
                      Writing scalable, type-safe code with responsive execution and smooth interactive user experiences.
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/30">
                        <Zap className="w-2.5 h-2.5 text-amber-500" /> React &amp; Next.js
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/30">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" /> REST &amp; MERN
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2: Availability & Collaboration */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group relative p-4 rounded-2xl bg-white/70 dark:bg-[#1B1230]/75 border border-purple-200/70 dark:border-purple-500/20 backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-400 dark:hover:border-indigo-400/60 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle gradient hover sheen */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md shadow-indigo-500/25 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        Available for Collaboration
                      </h4>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-800/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        Available
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-purple-200/70 mt-1 leading-relaxed">
                      Ready to join fast-moving teams, build impactful digital products, or take on freelance client work.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-2.5 text-[10px] text-zinc-500 dark:text-purple-300/70 font-medium">
                      <span>⚡ Quick Delivery</span>
                      <span>•</span>
                      <span>🌍 Remote Ready</span>
                      <span>•</span>
                      <span>🤝 Full-Time &amp; Freelance</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Let's Talk Button (from Figma) */}
              <div className="pt-1">
                <Button
                  href="#contact"
                  size="md"
                  variant="secondary"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  className="w-full justify-between px-6"
                >
                  Let&apos;s talk
                </Button>
              </div>

            </motion.div>
          </div>

          {/* 3D Animated Marquee: Core Technologies in My Arsenal */}
          <motion.div variants={fadeIn} className="mt-12 pt-8 border-t border-purple-200/60 dark:border-purple-900/40">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-zinc-700 dark:text-purple-200">
                Core Technologies in My Arsenal
              </p>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-mono font-semibold">
                3D Rotating Stack
              </span>
            </div>

            {/* 3D Perspective Stage Container with Side Fade Masks */}
            <div
              className="relative w-full overflow-hidden py-2"
              style={{
                perspective: '1200px',
                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              }}
            >
              {/* Row 1: Frontend & Languages (Moving Left) */}
              <div className="mb-2 transform-gpu" style={{ transform: 'rotateX(3deg)' }}>
                <Marquee
                  speed={38}
                  direction="left"
                  pauseOnHover={true}
                  autoFill={true}
                  gradient={false}
                >
                  {row1Techs.map((tech) => (
                    <Tech3DCard key={tech.name} tech={tech} />
                  ))}
                </Marquee>
              </div>

              {/* Row 2: Backend, DB & Tools (Moving Right) */}
              <div className="transform-gpu" style={{ transform: 'rotateX(-3deg)' }}>
                <Marquee
                  speed={32}
                  direction="right"
                  pauseOnHover={true}
                  autoFill={true}
                  gradient={false}
                >
                  {row2Techs.map((tech) => (
                    <Tech3DCard key={tech.name} tech={tech} />
                  ))}
                </Marquee>
              </div>
            </div>
          </motion.div>

          {/* Bottom Action Footer */}
          <motion.div variants={fadeIn} className="mt-8 pt-6 border-t border-purple-200/60 dark:border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              href="#projects"
              size="sm"
              variant="outline"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              View my work
            </Button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-sm font-semibold text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 transition-colors"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
