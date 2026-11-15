'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  download,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 select-none group';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:brightness-110 active:scale-[0.98]',
    secondary:
      'bg-white/80 dark:bg-[#1B1230]/90 text-purple-950 dark:text-purple-100 border border-purple-200/80 dark:border-purple-500/30 shadow-sm backdrop-blur-md hover:bg-white dark:hover:bg-[#23173F] hover:border-purple-400 dark:hover:border-purple-400/60 active:scale-[0.98]',
    outline:
      'border-2 border-purple-500 text-purple-600 dark:text-purple-300 hover:bg-purple-500/10 active:scale-[0.98]',
    ghost:
      'text-purple-900 dark:text-purple-200 hover:bg-purple-100/50 dark:hover:bg-purple-900/30 active:scale-[0.98]',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={combinedClass}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={combinedClass}
    >
      {content}
    </motion.button>
  );
}
