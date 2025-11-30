
import React from 'react';
import { Target, Users, Zap, Cpu, Globe } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Bg FX */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-pastel-blue/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-purple-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Identity</span>
          <h1 className="text-5xl md:text-6xl font-tech font-bold text-slate-800 mb-8">ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">SMARTIFY</span></h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            We are architects of the future. Smartify isn't just a store; it's a gateway to a smarter, more connected existence powered by artificial intelligence.
          </p>
        </div>

        {/* Mission */}
        <RevealOnScroll>
          <div className="glass-panel p-10 mb-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl shadow-blue-50">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pastel-blue to-pastel-purple p-1 shrink-0 animate-pulse-soft">
               <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Target className="w-12 h-12 text-slate-700" />
               </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4 font-heading">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To democratize access to advanced technology. We believe in a world where <span className="text-blue-500 font-bold">Making Life Smarter</span> is accessible to everyone. We bridge the gap between human potential and machine intelligence.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RevealOnScroll delay={100}>
            <div className="glass-card p-8 h-full">
              <div className="w-14 h-14 rounded-2xl bg-pastel-blue/30 flex items-center justify-center mb-6 text-blue-700">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 font-tech">AI Integration</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every product we curate is vetted for intelligent capabilities and seamless ecosystem integration.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="glass-card p-8 h-full">
              <div className="w-14 h-14 rounded-2xl bg-pastel-purple/30 flex items-center justify-center mb-6 text-purple-700">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 font-tech">Human Centric</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Technology should serve humanity. We prioritize intuitive design and user-friendly interfaces.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <div className="glass-card p-8 h-full">
              <div className="w-14 h-14 rounded-2xl bg-pastel-green/30 flex items-center justify-center mb-6 text-green-700">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 font-tech">Sustainability</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We are committed to a greener future with eco-friendly packaging and energy-efficient devices.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default About;
