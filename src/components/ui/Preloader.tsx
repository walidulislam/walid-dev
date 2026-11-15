'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Pre-computed ambient particles
const ambientParticles = [
  { id: 1, left: '10%', top: '18%', size: 4, duration: 3.2, delay: 0.1 },
  { id: 2, left: '22%', top: '78%', size: 5, duration: 3.8, delay: 0.6 },
  { id: 3, left: '88%', top: '22%', size: 4, duration: 3.4, delay: 0.3 },
  { id: 4, left: '76%', top: '80%', size: 6, duration: 4.2, delay: 0.8 },
  { id: 5, left: '48%', top: '12%', size: 3, duration: 3.6, delay: 0.4 },
  { id: 6, left: '14%', top: '85%', size: 4, duration: 3.5, delay: 0.2 },
  { id: 7, left: '92%', top: '68%', size: 5, duration: 4.0, delay: 0.7 },
  { id: 8, left: '5%', top: '52%', size: 4, duration: 3.7, delay: 0.5 },
];

// Spark particles generated during tool injections
const sparkParticles = [
  { id: 'sp1', x: -40, y: -25, delay: 0.05, color: '#f97316' },
  { id: 'sp2', x: 30, y: -35, delay: 0.15, color: '#06b6d4' },
  { id: 'sp3', x: -20, y: 20, delay: 0.25, color: '#eab308' },
  { id: 'sp4', x: 45, y: 15, delay: 0.1, color: '#38bdf8' },
  { id: 'sp5', x: -50, y: -10, delay: 0.2, color: '#ec4899' },
  { id: 'sp6', x: 15, y: -15, delay: 0.12, color: '#22c55e' },
];

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  // Development stages: 0 (init), 1 (HTML + Git), 2 (CSS + Tailwind + Wrench + Screwdriver), 3 (JS + React + Node), 4 (Complete)
  const [stage, setStage] = useState(0);
  const [statusText, setStatusText] = useState('Initializing System Architecture...');
  const [progress, setProgress] = useState(0);

  // Screen ripple trigger on tool impact
  const [screenRipple, setScreenRipple] = useState<'none' | 'orange' | 'purple' | 'cyan'>('none');

  useEffect(() => {
    if (!isVisible) return;

    // Prevent body scrolling while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // STAGE 1 (at 550ms): HTML & Git badges zoom into the laptop screen
    const t1 = setTimeout(() => {
      setStage(1);
      setStatusText('Injecting HTML5 & Git Architecture...');
      setScreenRipple('orange');
    }, 550);

    const t1r = setTimeout(() => setScreenRipple('none'), 1000);

    // STAGE 2 (at 1150ms): CSS & Tailwind zoom in + Wrench & Screwdriver tighten laptop deck
    const t2 = setTimeout(() => {
      setStage(2);
      setStatusText('Applying Tailwind CSS & Assembling Hardware...');
      setScreenRipple('purple');
    }, 1150);

    const t2r = setTimeout(() => setScreenRipple('none'), 1600);

    // STAGE 3 (at 1750ms): React, JS, Node & </> dive into editor, Gears spin fast
    const t3 = setTimeout(() => {
      setStage(3);
      setStatusText('Executing React, Next.js & Node.js Engine...');
      setScreenRipple('cyan');
    }, 1750);

    const t3r = setTimeout(() => setScreenRipple('none'), 2200);

    // STAGE 4 (at 2400ms): Full build complete!
    const t4 = setTimeout(() => {
      setStage(4);
      setStatusText('Build Complete! Portfolio Ready.');
    }, 2400);

    // Smooth progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(100, prev + 2);
      });
    }, 45);

    // Exactly 3000ms: Smooth exit transition
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      try {
        sessionStorage.removeItem('hasSeenPreloader');
        document.documentElement.setAttribute('data-preloader-done', 'true');
      } catch {
        // ignore
      }
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t1r);
      clearTimeout(t2);
      clearTimeout(t2r);
      clearTimeout(t3);
      clearTimeout(t3r);
      clearTimeout(t4);
      clearTimeout(exitTimer);
      clearInterval(progressInterval);
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.aside
          id="global-preloader"
          key="preloader-overlay"
          role="status"
          aria-live="polite"
          aria-label="Website Preloader: Building Portfolio"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-between overflow-hidden select-none"
          style={{
            background: 'linear-gradient(145deg, #7b5ee6 0%, #6336cb 35%, #4f25b9 70%, #3e1b9b 100%)',
          }}
          initial={false}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          {/* Ambient Lighting & Glow Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Center glow behind laptop */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(124, 58, 237, 0.25) 45%, transparent 70%)',
                filter: 'blur(50px)',
              }}
            />
            {/* Top-right soft light */}
            <div
              className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-30"
              style={{
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, transparent 65%)',
                filter: 'blur(50px)',
              }}
            />
            {/* Ambient floating dust particles */}
            {ambientParticles.map((pt) => (
              <motion.div
                key={pt.id}
                className="absolute rounded-full bg-white/30 shadow-sm"
                style={{
                  left: pt.left,
                  top: pt.top,
                  width: pt.size,
                  height: pt.size,
                }}
                animate={{
                  y: [0, -16, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: pt.duration,
                  delay: pt.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Top Branding Section */}
          <motion.div
            className="relative z-10 pt-4 sm:pt-6 flex flex-col items-center text-center px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <p className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-purple-100 uppercase">
                MD. WALIDUL ISLAM
              </p>
            </div>
            <p className="text-[10px] sm:text-xs font-mono tracking-widest text-purple-300/80 uppercase">
              DEV WORKSPACE COMPILING &amp; BUILDING...
            </p>
          </motion.div>

          {/* Center 3D Development Stage */}
          <div className="relative z-10 flex-1 flex items-center justify-center w-full max-w-4xl px-3 py-2 sm:py-4">
            <div className="relative w-full max-w-[420px] sm:max-w-[580px] md:max-w-[660px] aspect-[16/11] flex items-center justify-center">

              {/* 1. White Fluffy 3D Cloud (Top-Left) */}
              <motion.div
                className="absolute -top-1 left-2 sm:left-6 md:left-8 z-0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.svg
                  width="72"
                  height="44"
                  viewBox="0 0 72 44"
                  fill="none"
                  className="w-10 h-6 sm:w-16 sm:h-10 md:w-18 md:h-11 drop-shadow-md"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path
                    d="M18 36H56C62.6274 36 68 30.6274 68 24C68 17.5817 62.9644 12.3396 56.619 12.0223C54.8967 5.16335 48.6946 0 41.25 0C33.4027 0 26.969 5.76228 25.7538 13.2505C24.5517 12.7712 23.2384 12.5 21.8571 12.5C15.861 12.5 11 17.361 11 23.3571C11 24.1685 11.089 24.9592 11.2573 25.7208C6.67139 26.8377 3.25 30.9859 3.25 36"
                    fill="url(#cloudGrad)"
                  />
                  <defs>
                    <linearGradient id="cloudGrad" x1="35" y1="0" x2="35" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFFFFF" />
                      <stop offset="1" stopColor="#E5DCFF" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </motion.div>

              {/* NEW TOOL 1: ⚛️ React Atom 3D Badge (Top-Left near Cloud -> Injects at Stage 3) */}
              <motion.div
                className="absolute top-2 sm:top-3 left-[18%] sm:left-[20%] z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  stage >= 3
                    ? {
                        x: 80,
                        y: 70,
                        scale: 0.15,
                        opacity: 0,
                        transition: { duration: 0.5, ease: 'easeIn' },
                      }
                    : {
                        opacity: 1,
                        scale: 1,
                        y: [0, -6, 0],
                        transition: {
                          scale: { duration: 0.4 },
                          y: { duration: 3.0, repeat: Infinity, ease: 'easeInOut' },
                        },
                      }
                }
              >
                <div
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl flex items-center gap-1 shadow-xl cursor-default"
                  style={{
                    background: 'linear-gradient(135deg, #002b49 0%, #083344 100%)',
                    boxShadow: '0 8px 20px rgba(0, 216, 255, 0.35), inset 0 1px 1px rgba(255,255,255,0.3)',
                    border: '1px solid rgba(0, 216, 255, 0.4)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400 animate-spin" style={{ animationDuration: '6s' }}>
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.6" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 12 12)" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                  <span className="text-cyan-300 font-mono font-bold text-[10px] sm:text-xs">
                    React
                  </span>
                </div>
              </motion.div>

              {/* 2. Floating </> Code Badge (Top-Center -> Dives into Laptop at Stage 3) */}
              <motion.div
                className="absolute top-1 sm:top-2 left-[36%] sm:left-[38%] -translate-x-1/2 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  stage >= 3
                    ? {
                        x: 40,
                        y: 70,
                        scale: 0.15,
                        opacity: 0,
                        transition: { duration: 0.5, ease: 'easeIn' },
                      }
                    : {
                        opacity: 1,
                        scale: 1,
                        y: [0, -5, 0],
                        transition: {
                          scale: { duration: 0.4 },
                          y: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
                        },
                      }
                }
              >
                <div
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #ff944d 0%, #ff6622 100%)',
                    boxShadow: '0 8px 18px rgba(255, 102, 34, 0.45), inset 0 1px 1px rgba(255,255,255,0.6)',
                  }}
                >
                  <span className="text-white font-mono font-bold text-xs sm:text-sm tracking-wider">
                    {'</>'}
                  </span>
                </div>
              </motion.div>

              {/* 3. Floating 3D "Js" Badge (Top-Right -> Flies into Laptop Screen at Stage 3) */}
              <motion.div
                className="absolute top-1 sm:top-2 right-[27%] sm:right-[30%] z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  stage >= 3
                    ? {
                        x: -50,
                        y: 85,
                        scale: 0.18,
                        opacity: 0,
                        transition: { duration: 0.5, ease: 'easeIn' },
                      }
                    : {
                        opacity: 1,
                        scale: 1,
                        y: [0, -6, 0],
                        rotate: [-1, 2, -1],
                        transition: {
                          scale: { duration: 0.45 },
                          y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                          rotate: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                        },
                      }
                }
              >
                <div
                  className="w-10 h-7 sm:w-13 sm:h-8 rounded-xl flex items-center justify-center shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #ece5ff 100%)',
                    boxShadow: '0 10px 20px rgba(79, 37, 185, 0.28), inset 0 2px 2px rgba(255,255,255,0.9)',
                  }}
                >
                  <span className="font-sans font-black text-xs sm:text-sm text-amber-500 tracking-tight">
                    Js
                  </span>
                </div>
              </motion.div>

              {/* NEW TOOL 2: 🍃 Node.js / Server 3D Badge (Top-Center-Right -> Injects at Stage 3) */}
              <motion.div
                className="absolute top-1 sm:top-3 right-[14%] sm:right-[17%] z-30 hidden xs:block"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  stage >= 3
                    ? {
                        x: -70,
                        y: 65,
                        scale: 0.15,
                        opacity: 0,
                        transition: { duration: 0.5, ease: 'easeIn' },
                      }
                    : {
                        opacity: 1,
                        scale: 1,
                        y: [0, -5, 0],
                        transition: {
                          scale: { duration: 0.45 },
                          y: { duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
                        },
                      }
                }
              >
                <div
                  className="px-2 py-1 sm:px-2.5 sm:py-1 rounded-xl flex items-center gap-1 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #052e16 0%, #14532d 100%)',
                    boxShadow: '0 8px 18px rgba(34, 197, 94, 0.35)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-emerald-300 font-mono font-bold text-[9px] sm:text-[11px]">
                    Node
                  </span>
                </div>
              </motion.div>

              {/* 4. Floating 3D "HTML" Badge (Upper Right -> INJECTS into Laptop Screen at Stage 1) */}
              <motion.div
                className="absolute top-9 sm:top-12 -right-1 sm:right-2 md:right-4 z-30"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  stage >= 1
                    ? {
                        x: -120,
                        y: 50,
                        scale: 0.15,
                        opacity: 0,
                        transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
                      }
                    : {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        y: [0, -7, 0],
                        transition: {
                          x: { duration: 0.4 },
                          y: { duration: 3.0, repeat: Infinity, ease: 'easeInOut' },
                        },
                      }
                }
              >
                <div
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl flex items-center justify-center shadow-2xl relative"
                  style={{
                    background: 'linear-gradient(135deg, #ff8142 0%, #f95716 100%)',
                    boxShadow: '0 12px 24px rgba(249, 87, 22, 0.5), inset 0 2px 3px rgba(255,255,255,0.5)',
                  }}
                >
                  <span className="font-mono font-extrabold text-[11px] sm:text-xs text-white tracking-wider">
                    HTML
                  </span>
                  {stage === 0 && (
                    <motion.div
                      className="absolute -inset-1 rounded-2xl border border-orange-300"
                      animate={{ scale: [1, 1.25], opacity: [0.8, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  )}
                </div>
              </motion.div>

              {/* NEW TOOL 3: 🌿 Git Branch 3D Badge (Mid-Right -> Injects at Stage 1) */}
              <motion.div
                className="absolute top-22 sm:top-28 right-0 sm:right-3 md:right-5 z-30"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  stage >= 1
                    ? {
                        x: -110,
                        y: 20,
                        scale: 0.15,
                        opacity: 0,
                        transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1], delay: 0.1 },
                      }
                    : {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        y: [0, -6, 0],
                        transition: {
                          x: { duration: 0.45 },
                          y: { duration: 3.1, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
                        },
                      }
                }
              >
                <div
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl flex items-center gap-1 shadow-xl cursor-default"
                  style={{
                    background: 'linear-gradient(135deg, #ff4e32 0%, #d83418 100%)',
                    boxShadow: '0 10px 22px rgba(240, 80, 50, 0.45), inset 0 1px 1px rgba(255,255,255,0.4)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
                    <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="2.5" />
                    <circle cx="18" cy="9" r="3" stroke="currentColor" strokeWidth="2.5" />
                    <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M6 9V15M18 12V13C18 14.6569 16.6569 16 15 16H6" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
                  <span className="text-white font-mono font-bold text-[10px] sm:text-xs">
                    Git
                  </span>
                </div>
              </motion.div>

              {/* 5. Floating 3D "CSS" Badge (Mid-Left -> INJECTS into Laptop Screen at Stage 2) */}
              <motion.div
                className="absolute top-18 sm:top-24 -left-2 sm:left-1 md:left-3 z-30"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  stage >= 2
                    ? {
                        x: 130,
                        y: -10,
                        scale: 0.15,
                        opacity: 0,
                        transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
                      }
                    : {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        y: [0, -8, 0],
                        transition: {
                          x: { duration: 0.4 },
                          y: { duration: 3.4, repeat: Infinity, ease: 'easeInOut' },
                        },
                      }
                }
              >
                <div
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl flex items-center justify-center shadow-2xl relative"
                  style={{
                    background: 'linear-gradient(135deg, #ff9e42 0%, #ff6f1b 100%)',
                    boxShadow: '0 12px 24px rgba(255, 111, 27, 0.5), inset 0 2px 3px rgba(255,255,255,0.5)',
                  }}
                >
                  <span className="font-mono font-extrabold text-[11px] sm:text-xs text-white tracking-wider">
                    CSS
                  </span>
                </div>
              </motion.div>

              {/* NEW TOOL 4: 🌊 Tailwind CSS 3D Badge (Lower-Left -> INJECTS at Stage 2) */}
              <motion.div
                className="absolute top-30 sm:top-38 -left-1 sm:left-2 md:left-4 z-30"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  stage >= 2
                    ? {
                        x: 120,
                        y: -40,
                        scale: 0.15,
                        opacity: 0,
                        transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1], delay: 0.1 },
                      }
                    : {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        y: [0, -6, 0],
                        transition: {
                          x: { duration: 0.45 },
                          y: { duration: 3.0, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
                        },
                      }
                }
              >
                <div
                  className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-xl flex items-center gap-1 shadow-xl cursor-default"
                  style={{
                    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                    boxShadow: '0 10px 22px rgba(56, 189, 248, 0.35), inset 0 1px 1px rgba(255,255,255,0.4)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-sky-300">
                    <path
                      d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-white font-mono font-bold text-[9px] sm:text-[11px]">
                    Tailwind
                  </span>
                </div>
              </motion.div>

              {/* 6. 3D Metallic Wrench Tool (Bottom-Left -> MOVES to Laptop Deck & Tightens Bolts at Stage 2) */}
              <motion.div
                className="absolute bottom-7 sm:bottom-11 left-1 sm:left-5 md:left-7 z-30"
                initial={{ opacity: 0, y: 15 }}
                animate={
                  stage >= 2 && stage < 4
                    ? {
                        opacity: 1,
                        x: [0, 55, 60, 55, 60],
                        y: [0, -18, -22, -18, -22],
                        rotate: [-20, 25, -15, 25, -20],
                        transition: {
                          duration: 1.2,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        },
                      }
                    : {
                        opacity: 1,
                        x: 0,
                        y: [0, -4, 0],
                        rotate: [-20, -10, -20],
                        transition: {
                          y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                          rotate: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                        },
                      }
                }
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  className="w-8 h-8 sm:w-11 sm:h-11 drop-shadow-xl"
                >
                  <path
                    d="M33.5 15.5C36 13 36.5 9 35 6L29.5 11.5L25 10.5L24 6L29.5 0.5C26.5 -1 22.5 -0.5 20 2C17.5 4.5 17 8 18 11L5 24C3 26 3 29 5 31L13 39C15 41 18 41 20 39L33 26C36 27 39.5 26.5 42 24L36.5 18.5L35.5 14L33.5 15.5Z"
                    fill="url(#wrenchGrad)"
                  />
                  <circle cx="9" cy="35" r="2.5" fill="#C9BFF5" />
                  <defs>
                    <linearGradient id="wrenchGrad" x1="5" y1="5" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFFFFF" />
                      <stop offset="0.7" stopColor="#D9CEFF" />
                      <stop offset="1" stopColor="#B6A3F7" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* NEW TOOL 5: 🪛 3D Screwdriver Tool (Bottom Deck, Left-Center -> Works with Wrench at Stage 2) */}
              <motion.div
                className="absolute bottom-5 sm:bottom-8 left-[22%] sm:left-[24%] z-30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  stage >= 2 && stage < 4
                    ? {
                        opacity: 1,
                        rotate: [35, -15, 35, -10, 35],
                        y: [-2, 4, -2],
                        transition: {
                          duration: 1.1,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }
                    : {
                        opacity: 0.9,
                        y: [0, -3, 0],
                        rotate: [30, 35, 30],
                        transition: {
                          duration: 2.8,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }
                }
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 drop-shadow-lg">
                  {/* Screwdriver Handle (Amber/Orange) */}
                  <rect x="5" y="20" width="10" height="15" rx="3" transform="rotate(-45 5 20)" fill="url(#screwHandleGrad)" />
                  <rect x="7" y="22" width="6" height="2" transform="rotate(-45 7 22)" fill="#FFA64D" />
                  <rect x="11" y="26" width="6" height="2" transform="rotate(-45 11 26)" fill="#FFA64D" />
                  {/* Screwdriver Chrome Shaft & Flat Tip */}
                  <rect x="16" y="8" width="4" height="14" rx="1" transform="rotate(-45 16 8)" fill="url(#screwShaftGrad)" />
                  <polygon points="27,4 29,6 26,9 24,7" fill="#E2E8F0" />
                  <defs>
                    <linearGradient id="screwHandleGrad" x1="5" y1="20" x2="15" y2="35" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF944D" />
                      <stop offset="1" stopColor="#EA580C" />
                    </linearGradient>
                    <linearGradient id="screwShaftGrad" x1="16" y1="8" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFFFFF" />
                      <stop offset="1" stopColor="#94A3B8" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* 7. 3D Megaphone / Speaker (Mid-Right) */}
              <motion.div
                className="absolute top-34 sm:top-40 right-0 sm:right-2 md:right-5 z-30 hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, -5, 0] }}
                transition={{ y: { duration: 2.9, repeat: Infinity, ease: 'easeInOut' } }}
              >
                <svg width="38" height="38" viewBox="0 0 42 42" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 drop-shadow-lg">
                  <path d="M10 16H6C4.89543 16 4 16.8954 4 18V24C4 25.1046 4.89543 26 6 26H10L22 34V8L10 16Z" fill="#F3EFFF" />
                  <path d="M11 26L12 34C12.2 35.5 13.5 36.5 15 36.5C16.5 36.5 17.5 35.2 17.3 33.7L16 26" stroke="#D4C4FC" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M26 14C28 16.5 29 19 29 21C29 23 28 25.5 26 28" stroke="#FF8142" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </motion.div>

              {/* 8. 3D Rotating Primary Gear (Bottom-Right -> MOVES Closer & Spins Rapidly during build) */}
              <motion.div
                className="absolute bottom-5 sm:bottom-8 right-2 sm:right-7 md:right-11 z-30"
                initial={{ opacity: 0 }}
                animate={
                  stage >= 1 && stage < 4
                    ? {
                        opacity: 1,
                        x: -25,
                        y: -10,
                        scale: 1.15,
                        transition: { duration: 0.5 },
                      }
                    : {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.5 },
                      }
                }
              >
                <motion.div
                  className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center drop-shadow-xl"
                  animate={{
                    rotate: stage >= 1 && stage < 4 ? [0, 720] : [0, 360],
                  }}
                  transition={{
                    duration: stage >= 1 && stage < 4 ? 2.5 : 6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-full h-full">
                    <path
                      d="M24 16C19.58 16 16 19.58 16 24C16 28.42 19.58 32 24 32C28.42 32 32 28.42 32 24C32 19.58 28.42 16 24 16ZM43.2 21.6L39.8 19.6C39.4 18.2 38.8 16.8 38 15.6L39.4 11.8C39.8 10.6 39.4 9.2 38.4 8.4L35.6 5.6C34.8 4.6 33.4 4.2 32.2 4.6L28.4 6C27.2 5.2 25.8 4.6 24.4 4.2L22.4 0.8C21.8 -0.2 20.4 -0.3 19.4 0.3L15.6 2.5C14.6 3.1 14.1 4.4 14.3 5.6L15.3 9.4C14.3 10.4 13.5 11.5 12.9 12.8L9.1 12.2C7.9 12 6.7 12.8 6.3 14L4.3 17.8C3.9 19 4.3 20.4 5.3 21.2L8.5 23.4C8.5 24.1 8.5 24.8 8.6 25.4L5.6 27.8C4.6 28.6 4.3 30 4.8 31.2L7 34.8C7.6 35.8 8.9 36.3 10.1 36L14 34.8C15 35.8 16.1 36.6 17.3 37.2L17.7 41.2C17.9 42.4 18.9 43.4 20.1 43.6L24.1 44C25.3 44.1 26.4 43.3 26.8 42.2L28.4 38.6C29.7 38.1 30.9 37.4 32 36.5L35.6 38.1C36.8 38.6 38.1 38.2 38.8 37.1L41.2 33.3C41.8 32.2 41.6 30.8 40.7 30L37.8 27.4C38 26.7 38.1 26 38.1 25.3L41.7 23.9C42.8 23.5 43.6 22.4 43.2 21.6Z"
                      fill="url(#gearGrad)"
                    />
                    <circle cx="24" cy="24" r="5" fill="#753cd6" />
                    <defs>
                      <linearGradient id="gearGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA64D" />
                        <stop offset="1" stopColor="#F96316" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </motion.div>

              {/* NEW TOOL 6: ⚙️ Meshed Secondary Mini Gear (Counter-rotates with primary gear!) */}
              <motion.div
                className="absolute bottom-2 sm:bottom-4 right-10 sm:right-18 md:right-22 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center drop-shadow-md"
                  animate={{
                    rotate: stage >= 1 && stage < 4 ? [0, -1080] : [0, -360],
                  }}
                  transition={{
                    duration: stage >= 1 && stage < 4 ? 2.5 : 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="w-full h-full">
                    <circle cx="14" cy="14" r="10" fill="url(#miniGearGrad)" />
                    <circle cx="14" cy="14" r="3.5" fill="#5824b7" />
                    {/* Gear teeth */}
                    <rect x="12.5" y="1" width="3" height="4" rx="1" fill="#FBBF24" />
                    <rect x="12.5" y="23" width="3" height="4" rx="1" fill="#FBBF24" />
                    <rect x="1" y="12.5" width="4" height="3" rx="1" fill="#FBBF24" />
                    <rect x="23" y="12.5" width="4" height="3" rx="1" fill="#FBBF24" />
                    <defs>
                      <linearGradient id="miniGearGrad" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FDE047" />
                        <stop offset="1" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </motion.div>

              {/* 9. MAIN 3D LAPTOP & ACTIVE WORKSHOP CONTAINER */}
              <motion.div
                className="relative w-[85%] max-w-[460px] sm:max-w-[500px] flex flex-col items-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.34, 1.25, 0.64, 1] }}
              >
                {/* Contact Shadow Under Laptop Deck */}
                <div
                  className="absolute -bottom-4 w-[96%] h-7 rounded-full opacity-40 blur-md pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(19, 7, 48, 0.7) 0%, transparent 75%)',
                  }}
                />

                {/* Laptop Body & Back Bezel */}
                <div className="relative w-full aspect-[16/10] bg-[#1a142c] rounded-t-2xl sm:rounded-t-3xl border-t-[5px] sm:border-t-[7px] border-x-[5px] sm:border-x-[7px] border-[#312554] shadow-2xl overflow-hidden flex flex-col justify-end p-2 sm:p-3">
                  
                  {/* Background Code Layer on Laptop Screen (Left Side) */}
                  <div className="absolute inset-y-4 left-4 w-1/3 opacity-30 flex flex-col gap-2 pointer-events-none">
                    <div className="h-2 w-12 bg-purple-300 rounded-sm" />
                    <div className="h-1.5 w-20 bg-purple-400 rounded-sm" />
                    <div className="h-1.5 w-16 bg-purple-400 rounded-sm" />
                    <div className="h-1.5 w-24 bg-purple-300 rounded-sm" />
                    <div className="h-1.5 w-10 bg-purple-500 rounded-sm" />
                    <div className="h-2 w-14 bg-purple-300 rounded-sm mt-3" />
                  </div>

                  {/* FOREGROUND 3D CODE EDITOR WINDOW (Interactive Canvas) */}
                  <motion.div
                    className="relative ml-auto w-[82%] sm:w-[84%] h-[92%] bg-[#ffffff] rounded-xl sm:rounded-2xl shadow-[0_15px_35px_rgba(20,10,48,0.35)] border border-purple-100 flex flex-col overflow-hidden"
                    animate={
                      screenRipple !== 'none'
                        ? { scale: [1, 1.03, 1], rotate: [0, -0.8, 0] }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {/* Browser Window Header */}
                    <div className="h-7 sm:h-9 bg-[#fbf9fe] border-b border-purple-100/70 px-3 flex items-center gap-1.5 sm:gap-2">
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#27c93f]" />

                      {/* Fake URL / Active Stage display */}
                      <div className="ml-2 sm:ml-3 flex-1 max-w-[150px] sm:max-w-[200px] h-3.5 sm:h-4.5 bg-[#f0ebfa] rounded-full flex items-center px-2">
                        <span className="text-[7px] sm:text-[9px] font-mono text-purple-700/70 truncate">
                          {stage === 0 && 'walid://init'}
                          {stage === 1 && 'walid://dom/html-git'}
                          {stage === 2 && 'walid://styles/tailwind-css'}
                          {stage === 3 && 'walid://engine/react-node'}
                          {stage === 4 && 'walid://bundle/production-ready'}
                        </span>
                      </div>
                    </div>

                    {/* Editor Content Area */}
                    <div className="relative p-3 sm:p-4 flex-1 flex flex-col justify-start gap-1.5 sm:gap-2 overflow-hidden bg-white">
                      
                      {/* IMPACT RIPPLE EFFECT when tools enter */}
                      {screenRipple === 'orange' && (
                        <motion.div
                          className="absolute inset-0 bg-orange-400/25 pointer-events-none"
                          initial={{ opacity: 0.8, scale: 0.95 }}
                          animate={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.45 }}
                        />
                      )}
                      {screenRipple === 'purple' && (
                        <motion.div
                          className="absolute inset-0 bg-purple-500/25 pointer-events-none"
                          initial={{ opacity: 0.8, scale: 0.95 }}
                          animate={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.45 }}
                        />
                      )}
                      {screenRipple === 'cyan' && (
                        <motion.div
                          className="absolute inset-0 bg-sky-400/25 pointer-events-none"
                          initial={{ opacity: 0.8, scale: 0.95 }}
                          animate={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.45 }}
                        />
                      )}

                      {/* SPARK PARTICLES flying on tool injection */}
                      {screenRipple !== 'none' && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          {sparkParticles.map((sp) => (
                            <motion.span
                              key={sp.id}
                              className="absolute w-2 h-2 rounded-full"
                              style={{ backgroundColor: sp.color }}
                              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                              animate={{ x: sp.x, y: sp.y, scale: 0, opacity: 0 }}
                              transition={{ duration: 0.45, delay: sp.delay }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Code Line 1 (HTML injected) */}
                      <div className="flex items-center gap-1.5">
                        <motion.div
                          className="h-1.5 sm:h-2 rounded bg-purple-500"
                          initial={{ width: 0 }}
                          animate={{ width: stage >= 1 ? '32%' : '0%' }}
                          transition={{ duration: 0.4 }}
                        />
                        <motion.div
                          className="h-1.5 sm:h-2 rounded bg-violet-400"
                          initial={{ width: 0 }}
                          animate={{ width: stage >= 1 ? '48%' : '0%' }}
                          transition={{ duration: 0.45, delay: 0.1 }}
                        />
                      </div>

                      {/* Code Line 2 (CSS + Tailwind styled) */}
                      <div className="flex items-center gap-1.5 pl-2 sm:pl-3">
                        <motion.div
                          className="h-1.5 sm:h-2 rounded bg-indigo-500"
                          initial={{ width: 0 }}
                          animate={{ width: stage >= 2 ? '24%' : '0%' }}
                          transition={{ duration: 0.4 }}
                        />
                        <motion.div
                          className="h-1.5 sm:h-2 rounded bg-purple-400"
                          initial={{ width: 0 }}
                          animate={{ width: stage >= 2 ? '55%' : '0%' }}
                          transition={{ duration: 0.45, delay: 0.15 }}
                        />
                      </div>

                      {/* Code Line 3 (React UI components) */}
                      <div className="flex items-center gap-1.5 pl-4 sm:pl-6">
                        <motion.div
                          className="h-1.5 sm:h-2 rounded bg-amber-400"
                          initial={{ width: 0 }}
                          animate={{ width: stage >= 2 ? '38%' : '0%' }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        />
                        <motion.div
                          className="h-1.5 sm:h-2 rounded bg-purple-300"
                          initial={{ width: 0 }}
                          animate={{ width: stage >= 2 ? '32%' : '0%' }}
                          transition={{ duration: 0.45, delay: 0.25 }}
                        />
                      </div>

                      {/* Code Line 4 (TypeScript Logic - JS + Node Injected) */}
                      <div className="flex items-center gap-1.5 pl-4 sm:pl-6">
                        <motion.div
                          className="h-1.5 sm:h-2 rounded bg-purple-600"
                          initial={{ width: 0 }}
                          animate={{ width: stage >= 3 ? '45%' : '0%' }}
                          transition={{ duration: 0.4 }}
                        />
                        <motion.div
                          className="h-1.5 sm:h-2 rounded bg-blue-400"
                          initial={{ width: 0 }}
                          animate={{ width: stage >= 3 ? '28%' : '0%' }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        />
                      </div>

                      {/* Code Line 5 (Next.js Framework Optimization) */}
                      <div className="flex items-center gap-1.5 pl-2 sm:pl-3">
                        <motion.div
                          className="h-1.5 sm:h-2 rounded bg-violet-500"
                          initial={{ width: 0 }}
                          animate={{ width: stage >= 3 ? '40%' : '0%' }}
                          transition={{ duration: 0.4, delay: 0.15 }}
                        />
                        <motion.div
                          className="h-1.5 sm:h-2 rounded bg-purple-300"
                          initial={{ width: 0 }}
                          animate={{ width: stage >= 3 ? '34%' : '0%' }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        />
                      </div>

                      {/* Code Line 6: export ready */}
                      <div className="flex items-center gap-1.5">
                        <motion.div
                          className="h-1.5 sm:h-2 rounded bg-emerald-500"
                          initial={{ width: 0 }}
                          animate={{ width: stage >= 3 ? '30%' : '0%' }}
                          transition={{ duration: 0.4, delay: 0.25 }}
                        />
                        {/* Live Blinking Cursor */}
                        <motion.span
                          className="w-1.5 h-3 bg-purple-600 rounded-sm"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                        />
                      </div>
                    </div>

                    {/* Scan Line Shimmer */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(180deg, transparent 0%, rgba(168, 85, 247, 0.15) 50%, transparent 100%)',
                      }}
                      animate={{ y: ['-100%', '200%'] }}
                      transition={{ duration: 2.0, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* STAGE 4: "BUILD COMPLETE" Banner Overlay */}
                    <AnimatePresence>
                      {stage >= 4 && (
                        <motion.div
                          className="absolute inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-3 text-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                        >
                          {/* Animated Checkmark Circle */}
                          <motion.div
                            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/40 mb-1.5"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.3, 1] }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                          >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                              <path
                                d="M5 13L9 17L19 7"
                                stroke="currentColor"
                                strokeWidth="3.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>

                          <motion.h3
                            className="font-mono font-black text-xs sm:text-sm tracking-wider text-purple-950 uppercase"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            BUILD COMPLETE
                          </motion.h3>
                          <motion.p
                            className="text-[10px] sm:text-xs font-semibold text-purple-700/80"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                          >
                            Your Portfolio Is Ready
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* 3D Laptop Bottom Deck */}
                <div className="relative w-[108%] h-3.5 sm:h-5 bg-[#e4ddf7] rounded-b-xl sm:rounded-b-2xl border-t border-[#f4f0ff] shadow-[0_12px_25px_rgba(20,10,48,0.3)] flex items-center justify-center">
                  <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-[#cec3ee] rounded-b-md" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Controls: Dynamic Status Text & Progress Bar */}
          <motion.div
            className="relative z-10 pb-4 sm:pb-7 w-full max-w-sm sm:max-w-md px-6 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Dynamic Status Text */}
            <div className="flex items-center justify-between w-full text-xs font-mono">
              <span className="text-purple-100 font-medium tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {statusText}
              </span>
              <span className="text-purple-300 font-semibold">{Math.min(100, Math.round(progress))}%</span>
            </div>

            {/* Smooth Progress Bar */}
            <div className="w-full h-1.5 sm:h-2 bg-[#2d1266]/70 rounded-full overflow-hidden border border-purple-400/25 backdrop-blur-sm p-[1px]">
              <motion.div
                className="h-full rounded-full relative"
                style={{
                  background: 'linear-gradient(90deg, #ff8142 0%, #a855f7 50%, #38bdf8 100%)',
                  width: `${progress}%`,
                }}
                transition={{ ease: 'easeOut' }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </div>

            {/* Subtle Brand Watermark */}
            <p className="text-[10px] font-mono tracking-widest text-purple-300/60 uppercase">
              {'< DEVELOPER PORTFOLIO />'}
            </p>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
