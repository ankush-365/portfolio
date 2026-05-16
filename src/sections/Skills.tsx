import { skills } from '../data/portfolio';
import { SectionTitle, FadeIn } from '../components/Common';
import { motion } from 'motion/react';
import { useTheme } from '../components/ThemeProvider';

export const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className={`py-24 transition-colors ${
      theme === 'dark' ? 'bg-white/[0.01]' : 'bg-black/[0.01]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="A specialized toolkit for developing robust AI and Machine Learning solutions." 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <FadeIn key={category.category} delay={idx * 0.1} fullWidth>
              <div className={`glass-card p-10 h-full group border-transparent transition-all ${
                theme === 'dark' 
                  ? 'hover:bg-white/[0.04] border-white/5 hover:border-white/10' 
                  : 'hover:bg-black/[0.04] border-black/5 hover:border-black/10'
              }`}>
                <div className="flex items-center justify-between mb-8">
                   <h3 className={`text-xl font-bold tracking-tight transition-colors ${
                     theme === 'dark' ? 'text-white' : 'text-black'
                   }`}>
                    {category.category}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
                  }`}>
                    <span className="text-[10px] font-bold text-gray-500">{idx + 1}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <motion.span 
                      key={skill}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' 
                      }}
                      className={`px-5 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-colors ${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/5 text-gray-400 hover:text-white' 
                          : 'bg-black/5 border-black/5 text-gray-600 hover:text-black'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
