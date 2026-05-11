'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const MotionLink = motion.create(Link);
const MotionButton = motion.create('button');

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
}: {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}) {
  const baseClasses = 'relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium tracking-wide rounded-full text-sm group';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-neutral-200 transition-colors',
    secondary: 'bg-white/[0.05] text-white border border-white/[0.1] hover:bg-white/[0.1] transition-colors',
    outline: 'text-white border border-white/[0.2] hover:bg-white/[0.05] transition-colors',
  };

  if (href) {
    return (
      <MotionLink
        // @ts-ignore
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {variant === 'primary' && (
          <span className="absolute inset-0 w-full h-full rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </MotionLink>
    );
  }

  return (
    <MotionButton
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </MotionButton>
  );
}
