import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  Star,
  Layers,
  Sparkles,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { servicesData } from '../data';

const HomePage = ({ onOpenContact }) => {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] bg-[#08090A] text-white overflow-clip pt-32 pb-16 px-6 flex flex-col items-center text-center">
        {/* Background Blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] animate-pulse" />
          <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center z-10 mb-10">
          {/* Badge */}
          <div className="animate-pop-in opacity-0 mb-8" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/5 border border-purple-500/20 text-sm font-medium text-purple-200 shadow-[0_0_20px_rgba(147,51,234,0.15)] backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              Bali-Based Creative Studio
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-tight flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-0 md:mb-2">
              <span className="inline-block animate-pop-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                VISUALS
              </span>
              <span className="inline-block animate-pop-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                THAT
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 animate-pop-in opacity-0" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
                COMMAND
              </span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 animate-pop-in opacity-0" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
                THE
              </span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white animate-pop-in opacity-0" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
                STAGE.
              </span>
            </div>
          </h1>

          {/* Subhead */}
          <div className="overflow-hidden mb-10 max-w-2xl px-4">
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed animate-pop-in opacity-0" style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}>
              We transform abstract visions into powerful visual identities. High-impact <span className="text-white font-semibold">brand identity</span>, <span className="text-white font-semibold">video production</span>, and <span className="text-white font-semibold">web design</span> — tailored to your vision.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 mb-12 animate-pop-in opacity-0" style={{ animationDelay: '2.8s', animationFillMode: 'forwards' }}>
            <button
              onClick={() => onOpenContact?.()}
              className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_60px_rgba(147,51,234,0.5)] active:scale-95 flex items-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Zap className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Start Your Project</span>
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="group text-slate-400 hover:text-white px-6 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
            >
              See Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#08090A] to-transparent z-40 pointer-events-none"></div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ABOUT US PREVIEW */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pt-16 pb-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 space-y-8">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-2">
                <div className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Who We Are</div>
                <div className="h-px w-12 bg-white/10"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
                Studio Standards. <br className="hidden lg:block" /> Founder Focus<span className="text-purple-500">.</span>
              </h2>

              <div className="space-y-6 text-slate-400 text-lg leading-relaxed relative pl-6 mb-10">
                <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
                <p>We combine modern web aesthetics with the artistic eye of a stage designer. The result? A Founder-Led Operation. This means you don't talk to a junior account manager; you get direct access to the creative mind handling your brand.</p>
                <p>From massive LED stages in Bali to immersive digital layouts—we stack wins for brands that are ready to move fast.</p>
              </div>

              <Link
                to="/about-us"
                className="group inline-flex items-center gap-2 text-white font-bold hover:text-purple-400 transition-colors"
              >
                Read Our Full Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform border border-white/10 rounded-full p-1 bg-white/5 group-hover:bg-purple-500/20 group-hover:border-purple-500/50" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="w-full lg:w-5/12 relative">
            <ScrollReveal delay={200} className="w-full h-full">
              <div className="relative rounded-2xl overflow-hidden bg-[#0E1012]/40 backdrop-blur-md border border-white/5 group flex flex-row gap-0 min-h-[300px] h-full shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none"></div>

                {/* STUDIO STATS HALF */}
                <div className="relative z-10 w-[55%] p-3 sm:p-5 lg:p-6 flex flex-col justify-center border-r border-white/5">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase text-center mb-6">Studio Stats</div>

                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center border-b border-white/5 pb-2 sm:pb-3 gap-1.5">
                      <span className="text-slate-400 text-[10px] sm:text-xs font-medium">Experience</span>
                      <span className="w-fit px-2 py-0.5 bg-white/5 rounded-md text-slate-300 text-[10px] sm:text-xs font-bold">2+ Years</span>
                    </div>
                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center border-b border-white/5 pb-2 sm:pb-3 gap-1.5">
                      <span className="text-slate-400 text-[10px] sm:text-xs font-medium">Location</span>
                      <span className="w-fit px-2 py-0.5 bg-white/5 rounded-md text-slate-300 text-[10px] sm:text-xs font-bold font-mono tracking-wider">Bali, ID</span>
                    </div>
                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-1.5">
                      <span className="text-slate-400 text-[10px] sm:text-xs font-medium">Established</span>
                      <span className="w-fit px-2 py-0.5 bg-white/5 rounded-md text-slate-300 text-[10px] sm:text-xs font-bold font-mono tracking-wider">2025</span>
                    </div>
                  </div>
                </div>

                {/* LOGO HALF */}
                <div className="relative z-20 w-[45%] flex flex-col items-center justify-center p-3 sm:p-4">
                  <div className="text-white/40 group-hover:text-white/80 transition-colors duration-500 flex flex-col items-center gap-3 md:gap-4 group-hover:-translate-y-2 transform transition-transform">
                    <img
                      src={`${import.meta.env.BASE_URL}VOLTSNAP/4x/voltsnap.png`}
                      alt="Voltsnap Built"
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    />
                    <span className="font-mokoto-style text-[10px] sm:text-sm tracking-widest uppercase mt-2">Voltsnap</span>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-purple-500/20 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SERVICES SECTION */}
      {/* ═══════════════════════════════════════════════════ */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">What We Build</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Elite creative solutions for brands that dare to stand out. No templates, no shortcuts.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 150} className="h-full">
              <Link
                to={`/services/${service.id}`}
                className="group relative overflow-hidden rounded-3xl bg-[#0e1012] border border-white/10 p-8 min-h-[400px] flex flex-col justify-end cursor-pointer hover:border-white/20 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-300 block"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/5 blur-3xl group-hover:bg-white/10 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center -translate-y-12">
                  {React.cloneElement(service.icon, {
                    className: `w-24 h-24 text-white/10 group-hover:text-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12`
                  })}
                </div>

                <div className="relative z-10 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight font-sans tracking-wide">{service.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-3 mb-6">{service.description}</p>
                  <div className="flex items-center text-white font-bold text-sm gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* WHY VOLTSNAP */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-0"></div>
        <div className="absolute -top-[10vh] left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-[radial-gradient(ellipse,rgba(147,51,234,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-bold text-yellow-500 uppercase tracking-widest mb-6">
                <Star className="w-3 h-3" /> Why Us
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Speed Meets Soul.
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">The anti-boring agency. Here's why brands choose us.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Direct Velocity", desc: "No middle management. You work directly with the creator, ensuring feedback loops are instant and drafts are delivered in record time.", color: "from-yellow-500", icon: <Zap className="w-6 h-6 text-yellow-500" /> },
              { title: "Engineered Retention", desc: "We engineer attention. We study the algorithms so you don't have to. Every motion graphic and cut is calculated to keep eyes glued.", color: "from-orange-500", icon: <Star className="w-6 h-6 text-orange-500" /> },
              { title: "Bespoke Identity", desc: "Templates are for amateurs. We build visual assets from scratch—ensuring your brand looks like you, not everyone else.", color: "from-red-500", icon: <Layers className="w-6 h-6 text-red-500" /> }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="group p-8 bg-[#0E1012] border border-white/5 hover:border-white/15 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-black/20 relative overflow-hidden h-full">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="h-14 w-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* HOW WE WORK */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#08090A] via-[#0A0C0E] to-[#08090A] relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-500 uppercase tracking-widest mb-6">
                <Layers className="w-3 h-3" /> Process
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Simple Inputs. <span className="text-blue-500">Volcanic Outputs.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Three steps. Zero headaches. Here's how it works.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {[
              { step: "01", title: "The Brain Dump", desc: "You send us a messy doc, raw ideas, or a voice note. We turn chaos into a clear plan.", icon: <MessageCircle className="w-5 h-5" /> },
              { step: "02", title: "The Voltage Injection", desc: "We create it with the VOLTSNAP style—bold, dynamic, and impossible to ignore.", icon: <Zap className="w-5 h-5" /> },
              { step: "03", title: "Refine & Launch", desc: "We fine-tune together until it's perfect, then deliver all final files ready to deploy.", icon: <ChevronRight className="w-5 h-5" /> }
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="relative flex flex-col items-center text-center group pt-4">
                  <div className="w-[120px] h-[120px] bg-[#08090A] border-2 border-white/10 group-hover:border-blue-500/50 rounded-2xl flex flex-col items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 relative z-10">
                    <span className="text-3xl font-black text-white/20 group-hover:text-blue-500 font-mono transition-colors">{s.step}</span>
                    <div className="text-white/20 group-hover:text-blue-400 transition-colors mt-1">{s.icon}</div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
                  <p className="text-slate-400 text-sm max-w-xs">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* TRUSTED BY */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%)]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h3 className="text-xl md:text-3xl font-bold text-white mb-3">DESIGNED TO BE SEEN.</h3>
            <p className="text-slate-500 mb-16 text-lg">We help brands command attention where it matters most.</p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col items-center justify-center mb-16">
              <p className="text-gray-500 text-sm uppercase tracking-[0.2em] font-bold">Trusted By</p>
              <div className="group cursor-default">
                <img
                  src={`${import.meta.env.BASE_URL}portofolio/cjn/logo-cjn.webp`}
                  alt="CJN Creative Bali"
                  className="w-48 md:w-96 w-auto object-contain opacity-75 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-125"
                />
              </div>
              <p className="text-white/40 text-sm font-medium -mt-4 relative z-10">
                Powering the visual identity for <span className="text-white">CJN Creative Bali</span> events.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Link
              to="/portfolio"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#0A0C0E] border border-white/10 text-white font-bold transition-all duration-500 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 transition-colors duration-500">See the Case Study</span>
              <ArrowRight className="w-4 h-4 transition-all duration-500 group-hover:translate-x-1 relative z-10" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* FINAL CTA */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-32 px-6 relative bg-gradient-to-b from-[#08090A] via-[#0A0C0E] to-[#08090A]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-[radial-gradient(ellipse,rgba(147,51,234,0.08)_0%,transparent_70%)]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              READY TO COMMAND <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-white">THE STAGE?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Tell us about your project and we'll craft a custom plan. No commitments, no pricing games — just a real conversation about your vision.
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
    </>
  );
};

export default HomePage;
