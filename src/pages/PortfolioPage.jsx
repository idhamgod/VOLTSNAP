import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { portfolioData } from '../data';

const PortfolioPage = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 animate-fade-in">
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
          A showcase of our recent collaborations with world-class brands.
          We build visual identities that leave a mark.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 100} className={`group relative rounded-3xl overflow-hidden bg-[#0e1012] border border-white/10 cursor-pointer ${item.size === 'large' ? 'md:col-span-2 aspect-[21/9]' : 'col-span-1 aspect-[4/3]'}`}>
            {/* GAMBAR ASLI */}
            <img
              src={item.imageSrc}
              alt={item.project}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
            />
            {/* Hover Scale Effect */}
            <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700">
              {/* Abstract Grid Pattern overlay */}
              <div className="absolute inset-0 grid grid-cols-12 opacity-10">
                {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white/20"></div>)}
              </div>
            </div>

            {/* Content */}
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
  );
};

export default PortfolioPage;
