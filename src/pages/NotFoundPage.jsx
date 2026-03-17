import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const NotFoundPage = () => {
  return (
    <section className="relative min-h-screen bg-[#08090A] text-white overflow-hidden pt-32 px-6 flex flex-col items-center justify-center text-center">
      {/* Background Blobs for Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-3xl mx-auto flex flex-col items-center z-10 relative">
        <ScrollReveal>
          <div className="flex flex-col items-center">
            {/* Pulsing Alert Icon */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full"></div>
              <AlertCircle className="w-20 h-20 text-yellow-500 relative z-10 animate-float-subtle" />
            </div>

            {/* Error Code Headline */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
              404
            </h1>

            {/* Secondary Headline */}
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Page Not Ready Yet.
            </h2>
            
            {/* Explanatory Text */}
            <p className="text-lg text-slate-400 mb-12 max-w-lg leading-relaxed">
              We're still crafting this section of the experience. It takes time to build something with high voltage. Check back soon.
            </p>

            {/* Return Home Button - Matches HomePage styling */}
            <Link
              to="/"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold overflow-hidden transition-all duration-300 hover:border-white/20 hover:scale-105 active:scale-95"
            >
              {/* Button Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-l from-purple-500/0 via-purple-500/10 to-blue-500/0 translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-1000 ease-in-out"></div>
              
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-purple-400 relative z-10" />
              <span className="relative z-10">Return to Home Stage</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay"></div>
    </section>
  );
};

export default NotFoundPage;
