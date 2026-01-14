'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'pink' | 'green';
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const backgrounds = {
    white: 'bg-white',
    pink: 'bg-pink-light',
    green: 'bg-green-primary text-white',
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-32 px-6 ${backgrounds[background]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-5xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
