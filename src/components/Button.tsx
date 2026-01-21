'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  trackClick?: boolean; // CTA 클릭 추적 여부
  trackMemo?: string;   // 추적 시 메모
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  trackClick = false,
  trackMemo,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 tracking-wide';

  const variants = {
    primary: 'bg-green-primary text-white hover:bg-green-primary/90',
    secondary: 'bg-pink-primary text-white hover:bg-pink-primary/90',
    outline: 'border border-green-primary text-green-primary hover:bg-green-primary hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion.create(Link) : motion.button;

  const handleClick = () => {
    if (trackClick) {
      const 페이지 = typeof window !== 'undefined' ? window.location.pathname : '';
      trackCTAClick(페이지, trackMemo);
    }
    onClick?.();
  };

  return (
    <MotionComponent
      href={href || ''}
      onClick={handleClick}
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
