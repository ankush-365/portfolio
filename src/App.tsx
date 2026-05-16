import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Contact, Footer } from './sections/Contact';
import { useEffect, useState } from 'react';
import { useTheme } from './components/ThemeProvider';

export default function App() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`fixed inset-0 flex items-center justify-center z-[100] transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#050505]' : 'bg-[#f8fafc]'
      }`}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <div className={`w-12 h-12 border rounded-full animate-spin ${
            theme === 'dark' ? 'border-white/10 border-t-white' : 'border-black/10 border-t-black'
          }`} />
          <p className="text-[10px] font-bold tracking-[0.5em] text-gray-500 uppercase">
            System Initializing
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`relative transition-colors duration-300 ${
      theme === 'dark' ? 'selection:bg-white/10 selection:text-white' : 'selection:bg-black/10 selection:text-black'
    }`}>
      {/* Scroll Progress Indicator */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] ${
          theme === 'dark' ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'bg-black shadow-[0_0_10px_rgba(0,0,0,0.1)]'
        }`}
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
