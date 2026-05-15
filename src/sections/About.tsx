import { personalInfo } from '../data/portfolio';
import { SectionTitle, FadeIn, GlowingBlob } from '../components/Common';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="A specialist in building the next generation of AI-driven systems." 
        />

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative glass-card p-1 overflow-hidden group-hover:border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Tech" 
                  className="rounded-xl w-full aspect-square object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700" 
                />
              </div>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn direction="left" delay={0.2}>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                {personalInfo.about}
              </p>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.3}>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-white font-bold text-3xl mb-1 tracking-tighter">AIML</h4>
                  <p className="text-gray-600 uppercase tracking-widest text-[10px] font-bold">Engineering Specialist</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-3xl mb-1 tracking-tighter">RAG</h4>
                  <p className="text-gray-600 uppercase tracking-widest text-[10px] font-bold">Architecture Design</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-3xl mb-1 tracking-tighter">LLM</h4>
                  <p className="text-gray-600 uppercase tracking-widest text-[10px] font-bold">Advanced Integration</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-3xl mb-1 tracking-tighter">GenAI</h4>
                  <p className="text-gray-600 uppercase tracking-widest text-[10px] font-bold">Research & Dev</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
