import { skills } from '../data/portfolio';
import { SectionTitle, FadeIn } from '../components/Common';
import { motion } from 'motion/react';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="A specialized toolkit for developing robust AI and Machine Learning solutions." 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <FadeIn key={category.category} delay={idx * 0.1} fullWidth>
              <div className="glass-card p-10 h-full hover:bg-white/[0.04] group border-white/5 hover:border-white/10">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-xl font-bold tracking-tight text-white">
                    {category.category}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gray-500">{idx + 1}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <motion.span 
                      key={skill}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      className="px-5 py-2 rounded-full bg-white/5 border border-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-white transition-colors"
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
