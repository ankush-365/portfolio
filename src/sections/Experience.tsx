import { experience } from '../data/portfolio';
import { SectionTitle, FadeIn } from '../components/Common';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';

export const Experience = () => {
  const { theme } = useTheme();

  return (
    <section id="experience" className={`py-24 transition-colors ${
      theme === 'dark' ? 'bg-white/[0.01]' : 'bg-black/[0.01]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Professional Journey" 
          subtitle="A timeline of my professional contributions and leadership roles." 
        />

        <div className={`relative border-l ml-4 md:ml-8 pl-8 md:pl-12 space-y-16 py-8 transition-colors ${
          theme === 'dark' ? 'border-white/5' : 'border-black/5'
        }`}>
          {experience.map((item, idx) => (
            <FadeIn key={`${item.company}-${idx}`} delay={idx * 0.2}>
              <div className="relative">
                {/* Timeline dot */}
                <div className={`absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 rounded-full border z-10 transition-colors ${
                  theme === 'dark' ? 'bg-black border-white/20' : 'bg-white border-black/20'
                }`} />
                
                <div className={`glass-card p-10 group transition-colors ${
                   theme === 'dark' ? 'hover:border-white/10' : 'hover:border-black/10'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                      <h3 className={`text-2xl font-bold transition-colors tracking-tight ${
                        theme === 'dark' ? 'text-white group-hover:text-gray-300' : 'text-black group-hover:text-gray-700'
                      }`}>{item.position}</h3>
                      <div className="flex items-center gap-2 text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">
                        <Briefcase size={14} />
                        {item.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-[10px] whitespace-nowrap uppercase tracking-[0.2em] font-bold">
                       <span className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                         theme === 'dark' ? 'bg-white/5 border-white/5 text-gray-400' : 'bg-black/5 border-black/5 text-gray-500'
                       }`}>
                        <Calendar size={12} /> {item.period}
                       </span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-4 text-gray-500 text-sm leading-relaxed font-light max-w-4xl">
                        <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${
                          theme === 'dark' ? 'bg-white/20' : 'bg-black/20'
                        }`} />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
