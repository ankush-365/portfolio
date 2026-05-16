import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 py-6"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`flex items-center px-6 py-3 rounded-full border transition-all duration-500 ${
            isScrolled 
              ? theme === 'dark'
                ? 'bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                : 'bg-white/70 backdrop-blur-xl border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.1)]' 
              : 'bg-transparent border-transparent'
          }`}
        >
          <a 
            href="#home"
            className="flex items-center gap-2 group mr-8"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-colors ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}>
              <Cpu className={`${theme === 'dark' ? 'text-black' : 'text-white'} w-4 h-4`} />
            </div>
            <span className={`text-sm font-bold tracking-widest whitespace-nowrap transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              ANKUSH <span className="text-gray-500">RATNANI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all relative ${
                  activeSection === link.href.substring(1) 
                    ? theme === 'dark' ? 'text-white' : 'text-black' 
                    : 'text-gray-500 hover:text-gray-400'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div 
                    layoutId="activeNav"
                    className={`absolute -bottom-1 left-0 w-full h-[1px] rounded-full ${
                      theme === 'dark' ? 'bg-white' : 'bg-black'
                    }`}
                  />
                )}
              </a>
            ))}
            <div className="pl-4 border-l border-white/10 ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4 ml-auto">
            <ThemeToggle />
            <button 
              className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 md:hidden"
          >
            <div className={`${
              theme === 'dark' ? 'bg-black/90 border-white/10' : 'bg-white/90 border-black/10'
            } backdrop-blur-2xl border p-6 rounded-3xl flex flex-col gap-4 shadow-2xl`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                    activeSection === link.href.substring(1) 
                      ? theme === 'dark' ? 'text-white' : 'text-black' 
                      : 'text-gray-500'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
