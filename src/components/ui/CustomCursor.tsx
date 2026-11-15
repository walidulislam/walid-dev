'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const isTouchDevice =
    isMounted &&
    typeof window !== 'undefined' &&
    (window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics for the outer ring
  const springConfig = { damping: 26, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!isMounted || isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .interactive, .cursor-hover'
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, [mouseX, mouseY, isMounted, isTouchDevice]);

  if (!isMounted || isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Outer trailing circle with glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovered ? 52 : isClicking ? 28 : 36,
            height: isHovered ? 52 : isClicking ? 28 : 36,
            borderColor: isHovered
              ? 'rgba(167, 139, 250, 0.9)'
              : 'rgba(139, 92, 246, 0.45)',
            backgroundColor: isHovered
              ? 'rgba(139, 92, 246, 0.12)'
              : 'transparent',
            boxShadow: isHovered
              ? '0 0 24px rgba(167, 139, 250, 0.45)'
              : '0 0 10px rgba(139, 92, 246, 0.2)',
          }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="rounded-full border-2 backdrop-blur-[1px]"
        />
      </motion.div>

      {/* Center sharp dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isHovered ? 0.5 : isClicking ? 1.4 : 1,
            backgroundColor: isHovered ? '#A78BFA' : '#8B5CF6',
          }}
          transition={{ duration: 0.12 }}
          className="w-2 h-2 rounded-full shadow-[0_0_8px_#8B5CF6]"
        />
      </motion.div>
    </>
  );
}
