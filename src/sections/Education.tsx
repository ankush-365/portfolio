import { education } from '../data/portfolio';
import { SectionTitle, FadeIn } from '../components/Common';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Academic Foundation" 
          subtitle="My formal training and academic background in technology and engineering." 
        />

        <div className="grid gap-8">
          {education.map((item, idx) => (
            <FadeIn key={item.institution} delay={idx * 0.1}>
              <div className="glass-card p-8 md:p-12 border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all group">
                <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap size={32} />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-3xl font-bold tracking-tight text-white">{item.institution}</h3>
                        <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                          {item.degree}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                        <Calendar size={12} />
                        {item.period}
                      </div>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed font-light max-w-4xl">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-6 pt-4">
                      {item.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-3 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                          <Award size={14} className="text-white/20" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
