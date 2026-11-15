'use client';

import React, { useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!isMounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-purple-200/50 dark:border-purple-800/40 bg-white/60 dark:bg-purple-950/40 backdrop-blur-md" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-[#1B1230]/80 border border-purple-200/60 dark:border-purple-500/30 text-purple-900 dark:text-purple-200 shadow-sm shadow-purple-500/10 backdrop-blur-md transition-colors hover:border-purple-400 dark:hover:border-purple-400 hover:shadow-purple-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-purple-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
        ) : (
          <Sun className="w-4 h-4 text-purple-700 drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
        )}
      </motion.div>
    </motion.button>
  );
}
