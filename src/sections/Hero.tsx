import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Download, BrainCircuit } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { FadeIn, GlowingBlob } from '../components/Common';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} 
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 w-full z-10 text-center">
        <FadeIn delay={0.2} direction="down">
          <span className="px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 inline-block backdrop-blur-sm">
            Available for new opportunities
          </span>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <h1 className="text-5xl md:text-8xl lg:text-[110px] lg:leading-[100px] font-bold tracking-tighter mb-8 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 whitespace-nowrap">{personalInfo.name}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h2 className="text-xl md:text-2xl text-gray-400 font-light tracking-widest mb-8 uppercase">
            {personalInfo.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {personalInfo.shortIntro}
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="#projects" 
              className="px-10 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
            >
              View Projects <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white font-bold flex items-center gap-2 transition-all backdrop-blur-sm active:scale-95"
            >
              Contact Me <Mail size={20} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.65}>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-12 py-10 border-y border-white/5">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">0-1</div>
              <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">Year Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">Tech Stack</div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="flex items-center justify-center gap-8">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-all transform hover:scale-110"
                title={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Floating background decorative orbital rings */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full"
            style={{ 
              width: `${400 + i * 200}px`, 
              height: `${400 + i * 200}px`,
              opacity: 0.1 - i * 0.02
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-1.5 h-10 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            animate={{ y: [-10, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/4 bg-white/40 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
