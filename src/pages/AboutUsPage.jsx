import React from 'react';
import { ArrowRight, Zap, Star, Layers } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const AboutUsPage = ({ onOpenContact }) => {
  return (
    <div className="bg-[#08090A] min-h-screen text-slate-300 font-sans pb-0">
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-b from-[#111318] to-[#08090A]"></div>
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[60vh] md:w-[120vw] md:h-[80vh] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)] rounded-[100%]"></div>
           <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[150vw] h-[50vh] md:w-[100vw] md:h-[70vh] border-t border-white/5 rounded-[100%]"></div>
           <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[100vw] h-[40vh] md:w-[80vw] md:h-[60vh] border-t border-white/5 rounded-[100%]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">About Us</h1>
            <div className="flex items-center gap-2 text-sm md:text-base font-medium text-slate-400">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <span className="text-white/20">/</span>
              <span className="text-white">About Us</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 space-y-8">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-2">
                <div className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Our Story</div>
                <div className="h-px w-12 bg-white/10"></div>
              </div>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                Studio Standards. <br className="hidden lg:block"/> Founder Focus<span className="text-purple-500">.</span>
              </h2>
              
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed relative pl-6">
                <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
                <p>We combine modern web aesthetics with the artistic eye of a stage designer. The result? A Founder-Led Operation. This means you don't talk to a junior account manager; you get direct access to the creative mind handling your brand.</p>
                <p>From massive LED stages in Bali to immersive digital layouts—we stack wins for brands that are ready to move fast.</p>
                <p className="text-white font-bold tracking-wide pt-2">Your Vision. Our Voltage. ⚡</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full lg:w-5/12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 relative">
            {/* STUDIO STATS BLOCK */}
            <ScrollReveal delay={200} className="w-full">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0E1012] border border-white/5 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent z-0"></div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-center">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase text-center mb-10">Studio Stats</div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-white/5 pb-6">
                      <span className="text-slate-400 text-sm font-medium">Years of Experience</span>
                      <span className="px-2.5 py-1 bg-[#1A1C20] rounded-md text-slate-300 text-xs font-bold">2+</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-6">
                      <span className="text-slate-400 text-sm font-medium">Base Location</span>
                      <span className="px-2.5 py-1 bg-[#1A1C20] rounded-md text-slate-300 text-xs font-bold font-mono tracking-wider">Bali, ID</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm font-medium">Established</span>
                      <span className="px-2.5 py-1 bg-[#1A1C20] rounded-md text-slate-300 text-xs font-bold font-mono tracking-wider">2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* LOGO BLOCK */}
            <ScrollReveal delay={400} className="w-full sm:translate-y-12">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0E1012] border border-white/5 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
                
                <div className="relative z-20 w-full h-full flex flex-col items-center justify-center translate-y-4 group-hover:-translate-y-2 transition-transform duration-700">
                  <div className="text-white/40 group-hover:text-white/80 transition-colors duration-500 flex flex-col items-center gap-4">
                    <img
                      src={`${import.meta.env.BASE_URL}VOLTSNAP/4x/voltsnap.png`}
                      alt="Voltsnap Built"
                      className="w-24 h-24 object-contain"
                    />
                    <span className="font-mokoto-style text-xl tracking-widest uppercase">Voltsnap</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-purple-500/20 group-hover:scale-150 transition-all duration-700"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY VOLTSNAP */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-32">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="text-xs font-bold tracking-[0.2em] text-yellow-500 uppercase">Why Voltsnap</div>
                <div className="h-px w-12 bg-white/10"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Speed Meets Soul. <br /> <span className="text-white/40">The Anti-Boring Agency.</span>
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6 flex items-center gap-4 max-w-md shrink-0">
               <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                 <Zap className="w-6 h-6 text-yellow-400" />
               </div>
               <div>
                 <div className="text-white font-bold">The Voltage Commitment</div>
                 <div className="text-slate-400 text-sm mt-1">We don't ghost, we communicate daily, and we don't sign off until the asset is stage-ready.</div>
               </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Direct Velocity", desc: "No middle management. You work directly with the creator, ensuring feedback loops are instant and select drafts are delivered in record time.", icon: <Zap className="w-5 h-5 text-yellow-500" /> },
            { title: "Engineered Retention", desc: "We engineer attention. We study the algorithms so you don't have to. Every motion graphic and cut is calculated to keep eyes glued to the screen.", icon: <Star className="w-5 h-5 text-orange-500" /> },
            { title: "Bespoke Identity", desc: "Templates are for amateurs. We build visual assets from scratch—whether it's a unique brand logo or a custom web layout—ensuring your brand looks like you, not everyone else.", icon: <Layers className="w-5 h-5 text-red-500" /> }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="group p-8 bg-[#0E1012] border border-white/5 hover:border-white/10 rounded-2xl hover:bg-white/[0.02] transition-colors relative overflow-hidden h-full">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative px-6 py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-px w-12 bg-white/10"></div>
                <div className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase">Our Process</div>
                <div className="h-px w-12 bg-white/10"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Simple inputs. <br/>
                <span className="text-blue-500">Volcanic outputs.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            {[
              { step: "01", title: "The Brain Dump", desc: "You send us the raw ideas and a messy doc. We make sense of it." },
              { step: "02", title: "The Voltage Injection", desc: "We create it with the 'Voltsnap' style." },
              { step: "03", title: "Refine & Launch", desc: "We review and tweak it until it's perfect, then send you the final file." }
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 200} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-[#08090A] border rounded-full flex items-center justify-center mb-6 border-white/10 group-hover:border-blue-500/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <span className="text-2xl font-black text-white/40 group-hover:text-white font-mono">{s.step}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
                <p className="text-slate-400 text-sm max-w-xs">{s.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-[radial-gradient(ellipse,rgba(147,51,234,0.1)_0%,transparent_70%)]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Let's Build Something <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Electric.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Ready to work with us? Tell us about your vision and we'll craft a plan just for you.
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

export default AboutUsPage;
