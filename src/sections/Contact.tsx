import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { SectionTitle, FadeIn, GlowingBlob } from '../components/Common';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../components/ThemeProvider';

export const Contact = () => {
  const { theme } = useTheme();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Let's discuss how we can build something extraordinary together." 
        />

        <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-16">
          <div className="space-y-10">
            <FadeIn direction="right">
              <p className={`text-xl font-light leading-relaxed transition-colors ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                I'm currently seeking <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-bold`}>New Opportunities</span> in AI/ML. If you have a project in mind or just want to connect, feel free to reach out.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: MapPin, label: 'Location', value: (personalInfo as any).location || 'Ahmedabad, Gujarat, India', href: '#' },
              ].map((item, idx) => (
                <FadeIn key={item.label} delay={idx * 0.1} direction="right">
                  <a 
                    href={item.href}
                    className={`flex items-center gap-6 p-8 glass-card border-transparent transition-all group ${
                      theme === 'dark' ? 'hover:bg-white/[0.04]' : 'hover:bg-black/[0.04]'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-all border ${
                      theme === 'dark' ? 'bg-white/5 text-white border-white/10' : 'bg-black/5 text-black border-black/10'
                    }`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className={`text-lg font-medium tracking-tight transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      }`}>{item.value}</p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3} direction="right">
              <div className="flex gap-4 pt-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    whileHover={{ 
                      y: -5, 
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' 
                    }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all border ${
                      theme === 'dark' ? 'bg-white/5 text-gray-400 hover:text-white border-white/5' : 'bg-black/5 text-gray-500 hover:text-black border-black/5'
                    }`}
                  >
                    <link.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.2}>
            <form onSubmit={handleSubmit} className={`glass-card p-12 space-y-8 border-transparent transition-colors ${
              theme === 'dark' ? 'border-white/5' : 'border-black/5'
            }`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className={`w-full px-8 py-5 rounded-3xl border focus:outline-none transition-all text-sm font-medium ${
                      theme === 'dark' ? 'bg-white/5 border-white/5 focus:border-white/20' : 'bg-black/5 border-black/5 focus:border-black/20'
                    }`}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className={`w-full px-8 py-5 rounded-3xl border focus:outline-none transition-all text-sm font-medium ${
                      theme === 'dark' ? 'bg-white/5 border-white/5 focus:border-white/20' : 'bg-black/5 border-black/5 focus:border-black/20'
                    }`}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Hey, I'd love to chat about..."
                  className={`w-full px-8 py-5 rounded-[2.5rem] border focus:outline-none transition-all resize-none text-sm font-medium ${
                    theme === 'dark' ? 'bg-white/5 border-white/5 focus:border-white/20' : 'bg-black/5 border-black/5 focus:border-black/20'
                  }`}
                />
              </div>
              <button 
                type="submit"
                className={`w-full py-5 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg ${
                  theme === 'dark' 
                    ? 'bg-white text-black hover:bg-white/90 shadow-white/5' 
                    : 'bg-black text-white hover:bg-black/90 shadow-black/5'
                }`}
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`py-20 border-t transition-colors ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}>
              <span className={`font-bold text-[10px] ${theme === 'dark' ? 'text-black' : 'text-white'}`}>AR</span>
            </div>
            <span className={`text-sm font-bold tracking-widest uppercase transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>Ankush Ratnani</span>
          </div>
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
        
      </div>
    </footer>
  );
};
