import { projects } from '../data/portfolio';
import { SectionTitle, FadeIn } from '../components/Common';
import { Github, ExternalLink, Sparkles, ChevronDown, ChevronRight, Zap, Target, BookOpen, Rocket, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../components/ThemeProvider';

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { theme } = useTheme();

  const toggleProject = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Engineering intelligent systems through data and advanced LLM workflows." 
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={project.title} delay={idx * 0.1} fullWidth>
              <div 
                className={`glass-card p-8 md:p-10 transition-all duration-500 flex flex-col h-full border-transparent ${
                  theme === 'dark'
                    ? expandedProject === project.title ? 'bg-white/[0.04] border-white/10' : 'hover:bg-white/[0.02] border-white/5'
                    : expandedProject === project.title ? 'bg-black/[0.04] border-black/10' : 'hover:bg-black/[0.02] border-black/5'
                }`}
              >
                <div className="flex-1 space-y-8">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tag) => (
                        <span key={tag} className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border transition-colors ${
                          theme === 'dark' ? 'text-gray-500 bg-white/5 border-white/5' : 'text-gray-600 bg-black/5 border-black/5'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[9px] font-bold uppercase tracking-[0.2em] transition-colors ${
                        theme === 'dark' ? 'bg-white/[0.03] border-white/5 text-white' : 'bg-black/[0.03] border-black/5 text-black'
                      }`}>
                        <Sparkles size={10} className="text-gray-500" />
                        Project {idx + 1}
                      </div>
                      
                      <h3 className={`text-3xl font-bold tracking-tight transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      }`}>
                        {project.title}
                      </h3>
                      
                      <p className={`text-base leading-relaxed font-light transition-colors ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </p>

                      <div className="flex flex-col gap-3">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-3 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                            <div className={`w-1 h-1 rounded-full shrink-0 ${
                              theme === 'dark' ? 'bg-white/40' : 'bg-black/40'
                            }`} />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-10 mt-auto">
                  {project.demo !== '#' && (
                    <a 
                      href={project.demo} 
                      target="_blank"
                      rel="noreferrer"
                      className={`px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg ${
                        theme === 'dark' 
                          ? 'bg-white text-black hover:bg-white/90 shadow-white/5' 
                          : 'bg-black text-white hover:bg-black/90 shadow-black/5'
                      }`}
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    className={`p-3 rounded-full border transition-all active:scale-95 ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 hover:border-white/30 text-white'
                        : 'bg-black/5 border-black/10 hover:border-black/30 text-black'
                    }`}
                    title="View GitHub"
                  >
                    <Github size={18} />
                  </a>
                  
                  {project.details && (
                    <button
                      onClick={() => toggleProject(project.title)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${
                        theme === 'dark'
                          ? expandedProject === project.title 
                            ? 'bg-white/10 border-white/20 text-white' 
                            : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                          : expandedProject === project.title
                            ? 'bg-black/10 border-black/20 text-black'
                            : 'border-black/10 text-gray-500 hover:text-black hover:border-black/20'
                      }`}
                    >
                      {expandedProject === project.title ? 'Hide' : 'Details'}
                      <motion.div
                        animate={{ rotate: expandedProject === project.title ? 180 : 0 }}
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    </button>
                  )}
                </div>

                {/* Detailed Section (Simplified for Grid) */}
                <AnimatePresence>
                  {expandedProject === project.title && project.details && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`mt-8 pt-8 border-t space-y-8 ${
                        theme === 'dark' ? 'border-white/5' : 'border-black/5'
                      }`}
                    >
                      <div className="space-y-4">
                        <div className={`flex items-center gap-3 transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                          <Target size={16} className="text-gray-500" />
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Challenge</h4>
                        </div>
                        <p className={`text-xs leading-relaxed font-medium transition-colors ${
                          theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                        }`}>
                          {project.details.problem}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className={`flex items-center gap-3 transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                          <Zap size={16} className="text-gray-500" />
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Process</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {project.details.architecture.map((item: any, i: number) => (
                            <div key={item.step} className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                              theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-black/[0.02] border-black/5'
                            }`}>
                              <span className="text-[9px] font-bold text-gray-600">0{i + 1}</span>
                              <span className={`text-[9px] font-bold uppercase tracking-widest transition-colors ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                              }`}>{item.step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
