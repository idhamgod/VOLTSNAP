import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  FileText,
  Layers,
  Star
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { servicesData, portfolioData } from '../data';

// --- TRUSTED BY SECTION ---
const TrustedBySection = () => {
  const navigate = useNavigate();

  return (
    <section className="pb-32 pt-10 -mt-48 px-6 bg-[#08090A] relative z-50 overflow-hidden">
      {/* Fluid Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)] opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h3 className="text-xl md:text-3xl font-bold text-white mb-3 tracking-tight">DESIGNED TO BE SEEN.</h3>
          <p className="text-slate-500 mb-16 text-lg">We help brands command attention where it matters most. From concept to the main stage.</p>
        </ScrollReveal>

        {/* Static Logos Container - SPECIAL SINGLE CLIENT MODE */}
        <ScrollReveal delay={200}>
          <div className="flex flex-col items-center justify-center mb-16">

            {/* Headline Kecil */}
            <p className="text-gray-500 text-sm uppercase tracking-[0.2em] font-bold">
              Trusted By
            </p>

            {/* LOGO BESAR (Tanpa Kotak/Border) */}
            <div className="group cursor-default">
              <img
                src={`${import.meta.env.BASE_URL}portofolio/cjn/logo-cjn.webp`}
                alt="CJN Creative Bali"
                className="w-48 md:w-96 w-auto object-contain opacity-75 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-125"
              />
            </div>

            {/* Caption/Subtext */}
            <p className="text-white/40 text-sm font-medium -mt-4 relative z-10">
              Powering the visual identity for <span className="text-white/100">CJN Creative Bali</span> events.
            </p>

          </div>
        </ScrollReveal>

        {/* CTA Button with Glow Effect */}
        <ScrollReveal delay={300}>
          <Link
            to="/portfolio"
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold overflow-hidden transition-all duration-300 hover:border-white/20 hover:scale-105 active:scale-95"
          >
            {/* Button Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

            <span className="relative z-10">See the Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-purple-400 relative z-10" />
          </Link>
        </ScrollReveal>
      </div>

      {/* Seamless Gradient Blurry Background Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#08090A] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-600/15 blur-[100px] rounded-full pointer-events-none z-10"></div>
    </section>
  );
};

const HomePage = () => {
  const dashboardRef = useRef(null);
  const [activeTab, setActiveTab] = useState('about');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!dashboardRef.current) return;

      const scrollY = window.scrollY;

      requestAnimationFrame(() => {
        if (dashboardRef.current) {
          const rotate = Math.max(0, 25 - scrollY * 0.03);
          const scale = Math.min(1.05, 0.9 + scrollY * 0.0002);
          const translateY = scrollY * 0.15;

          dashboardRef.current.style.transform = `rotateX(${rotate}deg) scale(${scale}) translateY(${translateY}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-[#08090A] text-white overflow-hidden pt-32 px-6 flex flex-col items-center text-center">

        {/* Background Blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] animate-pulse" />
          <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
        </div>

        {/* Main Content with Staggered Reveals */}
        <div className="max-w-7xl mx-auto flex flex-col items-center z-10 mb-20">

          {/* Headline - Word by Word Animation */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-tight flex flex-col items-center">
            {/* Line 1: VISUALS THAT */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-0 md:mb-2">
              <span className="inline-block animate-pop-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                VISUALS
              </span>
              <span className="inline-block animate-pop-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                THAT
              </span>
            </div>

            {/* Line 2: COMMAND THE STAGE */}
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
              We transform abstract visions into powerful visual identities. A Bali-based digital studio specializing in <span className="text-white font-semibold">High-Impact Brand Identity</span> and <span className="text-white font-semibold">Dynamic Visual Production</span>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 animate-pop-in opacity-0" style={{ animationDelay: '2.8s', animationFillMode: 'forwards' }}>
            <button
              onClick={() => scrollTo('services')}
              className="group relative bg-[#161618] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] active:scale-95 flex items-center gap-3"
            >
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* BIGGER, LAYERED 3D DESIGN */}
        <div
          className="relative w-full max-w-[95%] xl:max-w-[120rem] -mb-40 z-0 animate-smooth-reveal opacity-0"
          style={{ perspective: '2500px', animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          {/* Container that holds the stack and handles the SCROLL tilt */}
          <div
            id="about-section"
            ref={dashboardRef}
            className="relative group will-change-transform"
            style={{
              transform: `rotateX(25deg) scale(0.9)`
            }}
          >

            {/* LAYER 1 (Bottom/Back) */}
            <div className="absolute inset-0 bg-[#0E0E10] rounded-t-xl transform translate-y-32 scale-[0.9] opacity-20 border border-white/5 shadow-2xl z-0 transition-transform duration-700 group-hover:translate-y-36"></div>

            {/* LAYER 2 (Middle Back) */}
            <div className="absolute inset-0 bg-[#121214] rounded-t-xl transform translate-y-20 scale-[0.95] opacity-40 border border-white/5 shadow-2xl z-10 transition-transform duration-700 group-hover:translate-y-24"></div>

            {/* LAYER 3 (Middle Front) */}
            <div className="absolute inset-0 bg-[#161618] rounded-t-xl transform translate-y-10 scale-[0.98] opacity-70 border border-white/10 shadow-2xl z-20 transition-transform duration-700 group-hover:translate-y-12"></div>

            {/* MAIN LAYER (Front - The Dashboard Interface) */}
            <div
              className="relative z-30 rounded-t-xl overflow-hidden border border-white/20 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.9)] bg-[#050505] min-h-[1200px] group/dashboard transition-all duration-500 hover:border-white/30"
            >
              {/* Top Bar / Toolbar */}
              <div className="h-16 bg-[#0A0A0A] border-b border-white/5 flex items-center justify-between px-8 relative z-40">
                <div className="flex items-center gap-6">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#2C2C2E] group-hover/dashboard:bg-[#FF5F57]/80 transition-all duration-300"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#2C2C2E] group-hover/dashboard:bg-[#FEBC2E]/80 transition-all duration-300"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#2C2C2E] group-hover/dashboard:bg-[#28C840]/80 transition-all duration-300"></div>
                  </div>
                  <div className="h-6 w-px bg-white/10 mx-2"></div>
                  <div className="flex gap-4 text-sm font-mono text-slate-500">
                    <span className="text-white font-bold">voltsnap.xyz</span>
                    <span>/</span>
                    <span className={`uppercase font-bold tracking-wider ${activeTab === 'about' ? 'text-purple-500' : activeTab === 'why' ? 'text-yellow-500' : 'text-blue-500'}`}>
                      {activeTab === 'why' ? 'WHY VOLTSNAP' : activeTab === 'how' ? 'HOW WE WORK' : 'ABOUT'}
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  {/* Removed the profile circle and action button placeholders */}
                </div>
              </div>

              {/* Dashboard Layout */}
              <div className="flex relative bg-[#050505] min-h-[1150px]">

                {/* Sidebar */}
                <div className="w-80 border-r border-white/5 bg-[#080808] p-6 flex flex-col gap-8 hidden md:flex">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-white/30 tracking-widest mb-6 font-mono pl-3 pt-2">
                      voltsnap.xyz
                    </div>

                    {/* First layer: About */}
                    <div
                      onClick={() => setActiveTab('about')}
                      className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer group/item transition-colors ${activeTab === 'about' ? 'bg-white/10' : 'hover:bg-white/5'}`}
                    >
                      <div className={`w-5 h-5 rounded transition-colors ${activeTab === 'about' ? 'bg-purple-500' : 'bg-white/10 group-hover/item:bg-white/20'}`}></div>
                      <span className={`text-sm font-bold ${activeTab === 'about' ? 'text-white' : 'text-slate-500 group-hover/item:text-slate-300'}`}>About</span>
                    </div>

                    {/* Second layer: Why Voltsnap */}
                    <div
                      onClick={() => setActiveTab('why')}
                      className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer group/item transition-colors ${activeTab === 'why' ? 'bg-white/10' : 'hover:bg-white/5'}`}
                    >
                      <div className={`w-5 h-5 rounded transition-colors ${activeTab === 'why' ? 'bg-yellow-500' : 'bg-white/10 group-hover/item:bg-white/20'}`}></div>
                      <span className={`text-sm font-bold ${activeTab === 'why' ? 'text-white' : 'text-slate-500 group-hover/item:text-slate-300'}`}>Why VOLTSNAP</span>
                    </div>

                    {/* Third layer: How we work */}
                    <div
                      onClick={() => setActiveTab('how')}
                      className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer group/item transition-colors ${activeTab === 'how' ? 'bg-white/10' : 'hover:bg-white/5'}`}
                    >
                      <div className={`w-5 h-5 rounded transition-colors ${activeTab === 'how' ? 'bg-blue-500' : 'bg-white/10 group-hover/item:bg-white/20'}`}></div>
                      <span className={`text-sm font-bold ${activeTab === 'how' ? 'text-white' : 'text-slate-500 group-hover/item:text-slate-300'}`}>How We Work</span>
                    </div>

                    {/* Remaining placeholders */}
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
                        <div className="w-5 h-5 rounded bg-white/10 group-hover/item:bg-white/20 transition-colors"></div>
                        <div className="h-3 w-16 bg-white/5 rounded group-hover/item:bg-white/10 transition-colors"></div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mt-4 pt-6 border-t border-white/5">
                    <div className="h-3 w-24 bg-white/10 rounded mb-6"></div>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
                        <div className="w-5 h-5 rounded bg-white/10 group-hover/item:bg-white/20 transition-colors"></div>
                        <div className="h-3 w-2/3 bg-white/5 rounded group-hover/item:bg-white/10 transition-colors"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Canvas Area */}
                <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-[#080808] to-[#000000]">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

                  <div className="p-10 md:p-16 h-full">

                    {/* UNIFIED ANIMATION WRAPPER */}
                    <div key={activeTab} className="animate-soft-enter">

                      {/* TAB CONTENT: ABOUT */}
                      {activeTab === 'about' && (
                        <div className="flex flex-col xl:flex-row gap-16 items-start">
                          {/* Left Text Content */}
                          <div className="flex-1 space-y-10 pb-10">
                            <div>
                              <h2 className="text-purple-500 font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                                <FileText className="w-4 h-4" /> README.md
                              </h2>
                              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                                Studio Standards. Founder Focus.
                              </h3>
                            </div>
                            <div className="space-y-8 text-slate-400 text-base md:text-lg leading-relaxed font-mono border-l-2 border-white/10 pl-8">
                              <p>
                                We combine modern web aesthetics with the artistic eye of a stage designer. The result? A Founder-Led Operation. This means you don't talk to a junior account manager; you get direct access to the creative mind handling your brand.
                              </p>
                              <p>
                                From massive LED stages in Bali to immersive digital layouts—we stack wins for brands that are ready to move fast.
                              </p>
                              <div className="pt-4 flex items-center gap-3">
                                <div className="h-px w-12 bg-white/20"></div>
                                <p className="text-white font-bold tracking-wide">Your Vision. Our Voltage. ⚡</p>
                              </div>
                            </div>
                          </div>

                          {/* Right Visual Stats Element */}
                          <div className="w-full xl:w-96 shrink-0 bg-[#0E0E10] border border-white/10 rounded-2xl p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden group/stats">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>

                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Studio Stats</div>

                            <div className="flex items-center justify-between py-2">
                              <span className="text-slate-400 text-base">Years of Experience</span>
                              <span className="text-white text-base font-mono bg-white/5 px-2 py-1 rounded">2+</span>
                            </div>
                            <div className="h-px bg-white/5"></div>
                            <div className="flex items-center justify-between py-2">
                              <span className="text-slate-400 text-base">Base Location</span>
                              <span className="text-white text-base font-mono bg-white/5 px-2 py-1 rounded">Bali, ID</span>
                            </div>
                            <div className="h-px bg-white/5"></div>
                            <div className="flex items-center justify-between py-2">
                              <span className="text-slate-400 text-base">Established</span>
                              <span className="text-white text-base font-mono bg-white/5 px-2 py-1 rounded">2025</span>
                            </div>

                            <div className=" relative overflow-hidden flex items-center justify-center border border-white/5">
                              {[...Array(64)].map((_, i) => <div key={i} className="border border-white/5"></div>)}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover/stats:opacity-100 transition-opacity duration-500"></div>
                            <img
                              src={`${import.meta.env.BASE_URL}VOLTSNAP/1x/voltsnap-title.png`}
                              alt="Voltsnap Logo"
                              className="w-30 h-30 text-white/20 animate-spin-slow duration-[15s] relative z-10" />
                          </div>
                        </div>
                      )}

                      {/* TAB CONTENT: WHY VOLTSNAP */}
                      {activeTab === 'why' && (
                        <div className="flex flex-col gap-10 pb-10">
                          <div>
                            <h2 className="text-yellow-500 font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                              <Star className="w-4 h-4" /> Why_Us.txt
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl">
                              Speed Meets Soul. <br /> <span className="text-white/40">The Anti-Boring Agency.</span>
                            </h3>
                          </div>

                          <div className="grid md:grid-cols-3 gap-6">
                            {[
                              { title: "Direct Velocity", desc: "No middle management. You work directly with the creator, ensuring feedback loops are instant and select drafts are delivered in record time.", color: "bg-yellow-500" },
                              { title: "Engineered Retention", desc: "We engineer attention. We study the algorithms so you don't have to. Every motion graphic and cut is calculated to keep eyes glued to the screen.", color: "bg-orange-500" },
                              { title: "Bespoke Identity", desc: "Templates are for amateurs. We build visual assets from scratch—whether it's a unique brand logo or a custom web layout—ensuring your brand looks like you, not everyone else.", color: "bg-red-500" }
                            ].map((item, i) => (
                              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group/card">
                                <div className={`w-2 h-2 rounded-full ${item.color} mb-4 shadow-[0_0_10px_currentColor]`}></div>
                                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                              </div>
                            ))}
                          </div>

                          <div className="p-6 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 flex items-center gap-6">
                            <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                              <Zap className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div>
                              <div className="text-white font-bold text-lg">The Voltage Commitment</div>
                              <div className="text-slate-400 text-sm">We treat your deadline like a showtime. We don't ghost, we communicate daily, and we don't sign off until the asset is stage-ready.</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TAB CONTENT: HOW WE WORK */}
                      {activeTab === 'how' && (
                        <div className="flex flex-col gap-10 pb-10">
                          <div>
                            <h2 className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                              <Layers className="w-4 h-4" /> Process.json
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                              Simple inputs. <br /> <span className="text-blue-500">Volcanic outputs.</span>
                            </h3>
                          </div>

                          <div className="space-y-4">
                            {[
                              { step: "01", title: "The Brain Dump", desc: "You send us the raw ideas and a messy doc. We make sense of it." },
                              { step: "02", title: "The Voltage Injection", desc: "We create it with the 'Voltsnap' style." },
                              { step: "03", title: "Refine & Launch", desc: "We review and tweak it until it's perfect, then send you the final file." }
                            ].map((s, i) => (
                              <div key={i} className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group/step">
                                <div className="text-4xl font-black text-white/10 group-hover/step:text-blue-500/50 transition-colors font-mono">{s.step}</div>
                                <div className="h-10 w-px bg-white/10"></div>
                                <div className="text-left flex-1">
                                  <h4 className="text-lg font-bold text-white">{s.title}</h4>
                                  <p className="text-slate-400 text-sm">{s.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A] via-15% to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Seamless transition gradient */}
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#08090A] via-[#08090A]/90 to-transparent z-40 pointer-events-none"></div>

      </section>

      {/* SEPARATE TRUSTED BY SECTION */}
      <TrustedBySection />

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">WHAT WE CRAFT</h2>
            <p className="text-slate-400 text-lg">Elite creative solutions for brands that dare to stand out.</p>
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
                    View Plans <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
