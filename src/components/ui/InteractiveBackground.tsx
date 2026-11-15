'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TechItemDef {
  id: string;
  name: string;
  symbol: string;
  x: number; // percentage from left (0 - 100)
  y: number; // percentage from top (0 - 100)
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

const TECH_ITEMS: TechItemDef[] = [
  // Top / Hero section area
  { id: '1', name: 'React', symbol: '⚛', x: 6, y: 12, color: '#00D8FE', size: 'md' },
  { id: '2', name: 'Next.js', symbol: '▲', x: 88, y: 14, color: '#A855F7', size: 'md' },
  { id: '3', name: 'TypeScript', symbol: 'TS', x: 20, y: 8, color: '#3178C6', size: 'sm' },
  { id: '4', name: 'Tailwind', symbol: '≈', x: 78, y: 8, color: '#38BDF8', size: 'sm' },
  { id: '5', name: 'JavaScript', symbol: 'JS', x: 50, y: 18, color: '#F7DF1E', size: 'md' },

  // Middle-upper area (sides & gaps)
  { id: '6', name: 'Node.js', symbol: '⬢', x: 4, y: 32, color: '#22C55E', size: 'md' },
  { id: '7', name: 'MongoDB', symbol: '🍃', x: 91, y: 30, color: '#10AA50', size: 'md' },
  { id: '8', name: 'Git', symbol: '⎇', x: 14, y: 44, color: '#F05032', size: 'sm' },
  { id: '9', name: 'Figma', symbol: '❖', x: 86, y: 46, color: '#A259FF', size: 'sm' },
  { id: '10', name: 'Redux', symbol: '◈', x: 3, y: 56, color: '#764ABC', size: 'md' },

  // Center / Lower areas
  { id: '11', name: 'Express', symbol: 'ex', x: 92, y: 60, color: '#C084FC', size: 'sm' },
  { id: '12', name: 'REST API', symbol: '{ }', x: 8, y: 70, color: '#8B5CF6', size: 'md' },
  { id: '13', name: 'Firebase', symbol: '🔥', x: 87, y: 72, color: '#FFA611', size: 'md' },
  { id: '14', name: 'Docker', symbol: '🐳', x: 5, y: 84, color: '#2496ED', size: 'sm' },
  { id: '15', name: 'Vercel', symbol: '▲', x: 90, y: 86, color: '#EC4899', size: 'sm' },

  // Gaps & accents
  { id: '16', name: 'GraphQL', symbol: '◈', x: 24, y: 64, color: '#E10098', size: 'sm' },
  { id: '17', name: 'HTML5', symbol: '</>', x: 74, y: 65, color: '#E34F26', size: 'sm' },
  { id: '18', name: 'CSS3', symbol: '🎨', x: 30, y: 88, color: '#264DE4', size: 'sm' },
  { id: '19', name: 'Terminal', symbol: '$_', x: 68, y: 88, color: '#10B981', size: 'sm' },
  { id: '20', name: 'CleanCode', symbol: '()=>', x: 50, y: 92, color: '#6366F1', size: 'sm' },
];

function FloatingBadge({
  item,
  mouseX,
  mouseY,
}: {
  item: TechItemDef;
  mouseX: React.RefObject<number>;
  mouseY: React.RefObject<number>;
}) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [isNear, setIsNear] = useState(false);

  // Smooth springs for cursor push/repulsion
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 14, mass: 0.5 };
  const smoothX = useSpring(offsetX, springConfig);
  const smoothY = useSpring(offsetY, springConfig);

  useEffect(() => {
    // Check for touch device on client
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    if (isTouch) return;

    let rafId: number;
    const updatePhysics = () => {
      if (badgeRef.current) {
        const rect = badgeRef.current.getBoundingClientRect();
        const badgeCenterX = rect.left + rect.width / 2;
        const badgeCenterY = rect.top + rect.height / 2;

        const curX = mouseX.current;
        const curY = mouseY.current;

        const dx = curX - badgeCenterX;
        const dy = curY - badgeCenterY;
        const distance = Math.hypot(dx, dy);

        const activationRadius = 200; // Activation distance around cursor

        if (distance < activationRadius && distance > 0) {
          // Strong smooth repulsion
          const strength = (1 - distance / activationRadius);
          const force = strength * 60; // Max 60px push
          const pushX = -(dx / distance) * force;
          const pushY = -(dy / distance) * force;
          offsetX.set(pushX);
          offsetY.set(pushY);
          setIsNear(true);
        } else {
          offsetX.set(0);
          offsetY.set(0);
          setIsNear(false);
        }
      }
      rafId = requestAnimationFrame(updatePhysics);
    };

    rafId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(rafId);
  }, [mouseX, mouseY, offsetX, offsetY]);

  // Organic idle float timings
  const idNum = parseInt(item.id, 10);
  const floatDuration = 6 + (idNum % 4) * 1.5;
  const floatDelay = (idNum % 5) * 0.7;

  return (
    <motion.div
      ref={badgeRef}
      className="absolute select-none pointer-events-none"
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        y: [0, -16, 0],
        x: [0, 8, -6, 0],
        rotate: [0, 3, -3, 0],
      }}
      transition={{
        duration: floatDuration,
        delay: floatDelay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border backdrop-blur-[2px] transition-all duration-300 ${
          isNear
            ? 'opacity-95 scale-120 z-50 shadow-2xl bg-white/95 dark:bg-[#1C1335]/90 text-purple-950 dark:text-white'
            : 'opacity-55 dark:opacity-35 bg-white/70 dark:bg-[#130B26]/30 text-purple-950/75 dark:text-purple-200/50 hover:opacity-80'
        }`}
        style={{
          borderColor: isNear ? item.color : `${item.color}50`,
          boxShadow: isNear
            ? `0 0 25px ${item.color}90, 0 0 10px ${item.color}40`
            : `0 2px 10px ${item.color}20`,
        }}
      >
        <span
          className="text-xs font-bold leading-none transition-opacity duration-300"
          style={{ color: item.color, opacity: isNear ? 1 : 0.9 }}
        >
          {item.symbol}
        </span>
        <span className="font-mono text-[10px] font-semibold tracking-wider">
          {item.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function InteractiveBackground() {
  const mouseX = useRef(-2000);
  const mouseY = useRef(-2000);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX.current = -2000;
      mouseY.current = -2000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
    >
      {TECH_ITEMS.map((item) => (
        <FloatingBadge
          key={item.id}
          item={item}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </div>
  );
}
