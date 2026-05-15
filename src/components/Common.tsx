import { motion } from 'motion/react';
import React, { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
  key?: React.Key;
}

export const FadeIn = ({ children, delay = 0, direction = 'up', fullWidth = false }: FadeInProps) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className={fullWidth ? 'w-full' : ''}
    >
      {children}
    </motion.div>
  );
};

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="mb-16 md:mb-24">
      <FadeIn direction="left">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
          <span className="text-white">{title}</span>
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn direction="left" delay={0.2}>
          <p className="text-gray-500 max-w-2xl text-lg font-light tracking-wide leading-relaxed">
            {subtitle}
          </p>
        </FadeIn>
      )}
      <FadeIn direction="none" delay={0.3}>
        <div className="w-24 h-[1px] bg-gradient-to-r from-white/20 to-transparent mt-8" />
      </FadeIn>
    </div>
  );
};

export const GlowingBlob = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full blur-[120px] mix-blend-screen opacity-20 pointer-events-none ${className}`} />
);
