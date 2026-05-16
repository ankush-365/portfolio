import { motion } from 'motion/react';
import React, { ReactNode } from 'react';
import { useTheme } from './ThemeProvider';

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
  const { theme } = useTheme();
  return (
    <div className="mb-16 md:mb-24">
      <FadeIn direction="left">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
          <span className={theme === 'dark' ? 'text-white' : 'text-black'}>{title}</span>
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
        <div className={`w-24 h-[1px] mt-8 bg-gradient-to-r ${
          theme === 'dark' ? 'from-white/20 to-transparent' : 'from-black/20 to-transparent'
        }`} />
      </FadeIn>
    </div>
  );
};

export const GlowingBlob = ({ className }: { className?: string }) => {
  const { theme } = useTheme();
  return (
    <div className={`absolute rounded-full blur-[120px] pointer-events-none ${
      theme === 'dark' ? 'mix-blend-screen opacity-20' : 'mix-blend-multiply opacity-10'
    } ${className}`} />
  );
};
