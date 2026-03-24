import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Zap } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { portfolioData } from '../data';

const PortfolioPage = ({ onOpenContact }) => {
  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-12 group transition-colors"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Selected Works</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            A showcase of our recent collaborations with local brands.
            We build visual identities that leave a mark.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {portfolioData.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100} className={`group relative rounded-3xl overflow-hidden bg-[#0e1012] border border-white/10 cursor-pointer ${item.size === 'large' ? 'md:col-span-2 aspect-[21/9]' : 'col-span-1 aspect-[4/3]'}`}>
              <img
                src={item.imageSrc}
                alt={item.project}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 grid grid-cols-12 opacity-10">
                  {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white/20"></div>)}
                </div>
              </div>
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white/60 uppercase tracking-widest bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {item.client}
                    </span>
                    <span className="text-white/60 font-mono text-sm">{item.year}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">{item.project}</h2>
                  <p className="text-slate-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-[#08090A] via-[#0A0C0E] to-[#08090A]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Want Results Like These?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Tell us about your brand and we'll create visuals that command attention.
            </p>
            <button
              onClick={() => onOpenContact?.()}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(147,51,234,0.3)] hover:shadow-[0_0_60px_rgba(147,51,234,0.5)] active:scale-95 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Zap className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
