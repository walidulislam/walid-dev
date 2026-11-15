'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-500 origin-left z-[100] shadow-[0_0_10px_rgba(168,85,247,0.5)]"
      style={{ scaleX }}
    />
  );
}
