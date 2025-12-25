import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ArrowLeft,
  ArrowRight,
  Check,
  Zap,
  FileText,
  Globe,
  Edit2,
  Video,
  MessageCircle,
  Layers,
  Star
} from 'lucide-react';

// =========================================
// 1. DATA & MOCK DATA
// =========================================

// --- PORTFOLIO DATA ---
const portfolioData = [
  {
    id: 1,
    client: "CJN Bali Creative",
    project: "Brand Guidebook",
    category: "Illustration",
    year: "2025",
    description: "We provide brand guidelines and illustration systems.",
    imageSrc: "/portofolio/cjn/foto-guidebook-contoh-3.jpg",
    size: "large"
  },
  {
    id: 2,
    client: "CJN Bali Creative",
    project: "MK FEST 2025",
    category: "Video Production",
    year: "2025",
    description: "Logo usage in real environments, outside of staged scenarios.",
    imageSrc: "/portofolio/cjn/foto-cjn-vertical.jpg",
    size: "small"
  },
  {
    id: 3,
    client: "CJN Bali Creative",
    project: "MK FEST 2025",
    category: "Video Production",
    year: "2025",
    description: "Logo usage in real environments, outside of staged scenarios.",
    imageSrc: "/portofolio/cjn/foto-cjn-vertical-tiga.jpg",
    size: "small"
  },
];

// --- SERVICES DATA ---
const servicesData = [
  {
    id: 'video-editing',
    title: "Video Editing",
    tagline: "Turn raw footage into energizing stories.",
    description: "From TikToks to cinematic commercials, we edit to retain attention.",
    icon: <Video className="w-6 h-6" />,
    gradient: "from-pink-500/20 to-rose-500/5",
    imageColor: "bg-pink-500/10",
    tiers: [
      {
        name: "STARTER",
        alias: "The Quick Cut",
        price: "$49",
        bestFor: "Daily TikToks, simple Reels, or testing the waters.",
        features: [
          "Up to 60 Sec Duration (Vertical/9:16)",
          "Basic Cuts & Trimming (Rapih & on beat)",
          "Standard Captions (No fancy animation)",
          "Background Music (Royalty Free)",
          "1x Revision",
          "Delivery: 2 Days"
        ]
      },
      {
        name: "PRO",
        alias: "The Viral Pack",
        price: "$129",
        originalPrice: "$199",
        bestFor: "Content Creators, YouTubers, & Brand Reels.",
        isPopular: true,
        features: [
          "Up to 3 Mins Duration (Vertical/Horizontal)",
          "Dynamic Motion Graphics",
          "Engaging Subtitles",
          "Sound Design & SFX",
          "Basic Color Grading",
          "3x Revisions",

        ]
      },
      {
        name: "ENTERPRISE",
        alias: "The Cinema Grade",
        price: "Starts from $299",
        bestFor: "Company Profiles, Event Aftermovies, Ads.",
        features: [
          "Unlimited Duration (Custom scope)",
          "Cinematic Color Grading",
          "Advanced Visual Effects (VFX)",
          "Storyboarding & Script Assist",
          "Project File Included (.prproj)",
          "Unlimited Revisions during draft"
        ]
      }
    ]
  },
  {
    id: 'logo-design',
    title: "Logo Design",
    tagline: "Visual identity that commands the stage.",
    description: "Logos that work on a business card and a billboard.",
    icon: <Edit2 className="w-6 h-6" />,
    gradient: "from-purple-500/20 to-indigo-500/5",
    imageColor: "bg-purple-500/10",
    tiers: [
      {
        name: "STARTER",
        alias: "The Identity Spark",
        price: "$99",
        bestFor: "Small startups, personal projects, streamers.",
        features: [
          "1 High-Impact Logo Concept",
          "High-Res Export (JPG & Transparent PNG)",
          "Black & White Variation",
          "Web-Ready Files Only",
          "2x Minor Revisions.",
          "Delivery: 2 Days"
        ]
      },
      {
        name: "PRO",
        alias: "The Brand Voltage",
        price: "$299",
        originalPrice: "$399",
        bestFor: "Serious Businesses, Event Organizers, Clothing Brands.",
        isPopular: true,
        features: [
          "3 Unique Custom Concepts",
          "Full Source Files (AI, EPS, SVG)",
          "Real-World 3D Mockup (Merch/Signage)",
          "Social Media Kit (Profile Pic & Header)",
          "Typography & Color Palette Guide",
          "5x Revisions",
        ]
      },
      {
        name: "ENTERPRISE",
        alias: "The Full Ecosystem",
        price: "Ask for Quote",
        bestFor: "Corporate Rebranding, Large Scale Events.",
        features: [
          "5 Premium Concepts + Brand Philosophy",
          "Complete Brand Guidelines Book",
          "Stationery Design (Business Card, etc)",
          "Exclusive Copyright Transfer Agreement",
          "Priority Delivery (Skip the queue)",
          "Unlimited Revisions"
        ]
      }
    ]
  },
  {
    id: 'web-design',
    title: "Web Design",
    tagline: "No bloat code, just pure aesthetic impact.",
    description: "Stunning websites built with next-gen visual tools.",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-blue-500/20 to-cyan-500/5",
    imageColor: "bg-blue-500/10",
    tiers: [
      {
        name: "STARTER",
        alias: "The Landing Point",
        price: "$199",
        bestFor: "Perfect for personal brands & simple intros.",
        features: [
          "Single Page High-Impact Site",
          "100% Mobile Responsive",
          "Hero Section + Bio + Contact Form",
          "Social Media & Link Integration",
          "Lightning Fast Loading (Optimized Assets)",
          "1 Month Free Maintenance"
        ]
      },
      {
        name: "PRO",
        alias: "The Business Hub",
        price: "$499",
        originalPrice: "$599",
        bestFor: "Complete website to grow your business.",
        isPopular: true,
        features: [
          "Multi-Page Website (Home, Services, About)",
          "Visual CMS Integration (Easy Edit)",
          "Interactive Scroll Animations",
          "Basic SEO Setup (Google Indexing)",
          "WhatsApp /Call Widget",
          "3 Months Free Maintenance"
        ]
      },
      {
        name: "ENTERPRISE",
        alias: "The Brand Dominance",
        price: "Ask for Quote",
        bestFor: "For those who need world-class visuals & scale.",
        features: [
          "Enterprise-Grade Visual Architecture",
          "Advanced CMS for Large Catalogs",
          "E-Commerce / Store Integration",
          "Cinematic Motion Effects",
          "Custom Design System & Assets",
          "VIP Priority Support"
        ]
      }
    ]
  }
];

// =========================================
// 2. SUB-COMPONENTS
// =========================================

// --- ANIMATION HELPER: REVEAL ON SCROLL ---
const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        }`}
    >
      {children}
    </div>
  );
};

const Navbar = ({ isScrolled, setCurrentView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navTo = (view, id) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setTimeout(() => {
      if (id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#08090A]/90 backdrop-blur-md border-white/5' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navTo('home')}
        >
          <img
            src="/VOLTSNAP/4x/voltsnap.png"
            alt="Voltsnap Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-white font-black text-2xl font-mokoto-style tracking-wider">
            VOLTSNAP.XYZ
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => navTo('home', 'about-section')} className="text-sm font-medium hover:text-white transition-colors text-slate-400">
            About
          </button>

          <button onClick={() => navTo('home', 'services')} className="text-sm font-medium hover:text-white transition-colors text-slate-400">
            Services
          </button>

          <button onClick={() => navTo('portfolio')} className="text-sm font-medium hover:text-white transition-colors text-slate-400">
            Portfolio
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#08090A] border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in-fast shadow-2xl">
          <button onClick={() => navTo('home', 'about-section')} className="text-left text-lg font-medium text-slate-300">About</button>
          <button onClick={() => navTo('home', 'services')} className="text-left text-lg font-medium text-slate-300">Services</button>
          <button onClick={() => navTo('portfolio')} className="text-left text-lg font-medium text-slate-300">Portfolio</button>
        </div>
      )}
    </nav>
  );
};

// --- PORTFOLIO VIEW ---
const PortfolioView = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white mb-12 group transition-colors"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

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
            {/* --- KODE BARU (GAMBAR ASLI) --- */}
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

const ServiceDetailView = ({ serviceId, onBack }) => {
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) return null;

  const handleBookConsultation = (tierName) => {
    const email = "idham@voltsnap.xyz";

    // SAFETY CHECK: Ensure tierName is actually a string. 
    // If you call this function like "onClick={handleBookConsultation}", 
    // tierName will be an "Event" object, which breaks the text.
    const validTierName = (typeof tierName === 'string') ? tierName : '';

    // Logic to set subject and body
    const subjectLine = validTierName
      ? `Consultation Request: ${service.title} - ${validTierName}`
      : `Consultation Request: ${service.title}`;

    const bodyMessage = validTierName
      ? `Hello, I'm interested in using the ${service.title} service, specifically the ${validTierName} package.\nI'd like to have a short consultation regarding the details and workflow.`
      : `Hello, I am interested in ${service.title}.`;

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyMessage)}`;

    // THE FIX: Create a temporary hidden link and click it.
    // This forces the browser to open a standard NEW TAB with the data intact.
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 group transition-colors"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Services
      </button>

      <div className="text-center mb-16">
        <div className={`w-16 h-16 rounded-2xl ${service.imageColor} mx-auto flex items-center justify-center mb-6`}>
          {React.cloneElement(service.icon, { className: "w-8 h-8 text-white" })}
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">{service.title}</h1>
        <p className="text-xl text-slate-400">{service.tagline}</p>
      </div>

      {/* CHANGED: items-center to items-stretch (default) so cards have equal height */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 group/tiers">
        {service.tiers.map((tier, idx) => (
          <ScrollReveal key={idx} delay={idx * 150} className="h-full">
            <div
              className={`
                relative p-8 rounded-3xl flex flex-col h-full border transition-all duration-500 ease-[cubic-bezier(0.25,0.4,0.25,1)]
                ${tier.isPopular
                  ? 'bg-[#0E0E10] border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10'
                  : 'bg-[#0E0E10]/50 border-white/5 hover:border-white/10'
                }
                /* Focus Animation */
                group-hover/tiers:opacity-40 group-hover/tiers:scale-95 group-hover/tiers:blur-[2px]
                hover:!opacity-100 hover:!scale-105 hover:!blur-none hover:!z-20 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
              `}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full border border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                  Best Value
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-2 ${tier.isPopular ? 'text-blue-400' : 'text-slate-500'}`}>
                  {tier.name}
                </h3>
                <div className="text-2xl font-bold text-white mb-2 italic font-mokoto-style">{tier.alias}</div>

                <div className="mb-4">
                  {tier.originalPrice && (
                    <span className="text-sm text-slate-500 line-through decoration-slate-500/50 block mb-1">
                      {tier.originalPrice}
                    </span>
                  )}
                  <div className={`font-bold ${tier.isPopular ? 'text-xl' : 'text-base'} ${tier.originalPrice ? 'text-blue-300 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'text-white'}`}>
                    {tier.price}
                  </div>
                </div>

                <p className="text-sm text-slate-400 h-10">{tier.bestFor}</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {tier.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${tier.isPopular ? 'text-blue-500' : 'text-slate-600'}`} />
                    <span className="text-sm text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleBookConsultation(tier?.name)}
                className={`
    group relative w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden block text-center cursor-pointer z-50
    ${((typeof tier !== 'undefined' && tier?.isPopular) || (typeof service !== 'undefined' && service?.isPopular))
                    ? 'bg-blue-600 text-white border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]'
                    : 'bg-white/5 text-white border-white/10 hover:bg-white hover:text-black hover:border-white'
                  }
  `}>{/* ANIMASI SHINE (Cek Tier dulu) */}
                {((typeof tier !== 'undefined' && tier?.isPopular) || (typeof service !== 'undefined' && service?.isPopular)) && (
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-in-out pointer-events-none"
                  />
                )}

                <span className="relative z-10 flex items-center justify-center gap-2 pointer-events-none">
                  Book Consultation
                  <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </ScrollReveal>
        ))
        }
      </div >
    </div >
  );
};

// --- UPDATED TRUSTED BY SECTION ---
const TrustedBySection = ({ onViewPortfolio }) => {
  return (
    // UPDATED: Adjusted -mt-64 to -mt-48 and pt-0 to pt-10 to lower the content (~20% adjustment)
    <section className="pb-32 pt-10 -mt-48 px-6 bg-[#08090A] relative z-50 overflow-hidden">
      {/* Fluid Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Optimized: Replaced dynamic 'animate-pulse' with simple opacity for performance */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)] opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h3 className="text-xl md:text-3xl font-bold text-white mb-3 tracking-tight">DESIGNED TO BE SEEN.</h3>
          <p className="text-slate-500 mb-16 text-lg">We help brands command attention where it matters most. From concept to the main stage.</p>
        </ScrollReveal>

        {/* Static Logos Container */}
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
                src="/portofolio/cjn/logo-cjn.png"  // ⚠️ Pastikan nama file di folder public sudah benar (tanpa spasi lebih aman)
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
          <button
            onClick={onViewPortfolio}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold overflow-hidden transition-all duration-300 hover:border-white/20 hover:scale-105 active:scale-95"
          >
            {/* Button Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

            <span className="relative z-10">See the Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-purple-400 relative z-10" />
          </button>
        </ScrollReveal>
      </div>

      {/* NEW: Seamless Gradient Blurry Background Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#08090A] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-600/15 blur-[100px] rounded-full pointer-events-none z-10"></div>
    </section>
  );
};

const HomeView = ({ onSelectService, onViewPortfolio }) => {
  const dashboardRef = useRef(null);
  // REMOVED: Refs for spotlight (innerContainerRef, spotlightRef) and hover state
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      if (!dashboardRef.current) return;

      const scrollY = window.scrollY;

      // Direct DOM manipulation for 60fps performance without re-renders
      requestAnimationFrame(() => {
        if (dashboardRef.current) {
          // Optimized formulas for smoother, less stiff movement
          // Rotates from 25deg to 0deg over 800px scroll
          const rotate = Math.max(0, 25 - scrollY * 0.03);
          // Scales slightly less aggressively
          const scale = Math.min(1.05, 0.9 + scrollY * 0.0002);
          // Moves down slower to stay in view longer without feeling disconnected
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
      {/* HERO SECTION - REPLACED WITH LINEAR STYLE ANIMATION */}
      <section className="relative min-h-screen bg-[#08090A] text-white overflow-hidden pt-32 px-6 flex flex-col items-center text-center">

        {/* Background Blobs (Keep Voltsnap's identity) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Optimized: Replaced CSS blur with static radial gradients to improve scroll performance */}
          <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] animate-pulse" />
          <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
        </div>

        {/* Main Content with Staggered Reveals */}
        {/* UPDATED: Increased max-w-5xl to max-w-7xl to prevent text wrapping to 3 lines */}
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
              {/* Manually applying segments of the gradient to each word to maintain the look */}
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

          {/* Subhead - Delayed to start after headline (approx 2.5s) */}
          <div className="overflow-hidden mb-10 max-w-2xl px-4">
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed animate-pop-in opacity-0" style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}>
              We transform abstract visions into powerful visual identities. A Bali-based digital studio specializing in <span className="text-white font-semibold">High-Impact Brand Identity</span> and <span className="text-white font-semibold">Dynamic Visual Production</span>.
            </p>
          </div>

          {/* Buttons - Delayed to start after subhead */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 animate-pop-in opacity-0" style={{ animationDelay: '2.8s', animationFillMode: 'forwards' }}>
            <button
              onClick={() => scrollTo('services')}
              // REVERTED: Restored the brighter white hover effect and stronger shadows
              className="group relative bg-[#161618] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] active:scale-95 flex items-center gap-3"
            >
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* BIGGER, LAYERED 3D DESIGN (MATCHING REFERENCE) */}
        <div
          // UPDATED: Changed -mb-20 to -mb-40 to help reduce gap
          className="relative w-full max-w-[95%] xl:max-w-[120rem] -mb-40 z-0 animate-smooth-reveal opacity-0"
          style={{ perspective: '2500px', animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          {/* Container that holds the stack and handles the SCROLL tilt - REVERSE ANIMATION */}
          <div
            id="about-section"
            ref={dashboardRef}
            className="relative group will-change-transform" // Removed transition classes to prevent conflict with JS animation
            style={{
              transform: `rotateX(25deg) scale(0.9)` // Initial state
            }}
          >

            {/* LAYER 1 (Bottom/Back - Furthest Back) */}
            <div className="absolute inset-0 bg-[#0E0E10] rounded-t-xl transform translate-y-32 scale-[0.9] opacity-20 border border-white/5 shadow-2xl z-0 transition-transform duration-700 group-hover:translate-y-36"></div>

            {/* LAYER 2 (Middle Back) */}
            <div className="absolute inset-0 bg-[#121214] rounded-t-xl transform translate-y-20 scale-[0.95] opacity-40 border border-white/5 shadow-2xl z-10 transition-transform duration-700 group-hover:translate-y-24"></div>

            {/* LAYER 3 (Middle Front) */}
            <div className="absolute inset-0 bg-[#161618] rounded-t-xl transform translate-y-10 scale-[0.98] opacity-70 border border-white/10 shadow-2xl z-20 transition-transform duration-700 group-hover:translate-y-12"></div>

            {/* MAIN LAYER (Front - The Dashboard Interface) */}
            {/* UPDATED: Increased min-h to 1200px to "extend" the dashboard */}
            <div
              // UPDATED: Increased border brightness (border-white/10 -> border-white/20)
              className="relative z-30 rounded-t-xl overflow-hidden border border-white/20 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.9)] bg-[#050505] min-h-[1200px] group/dashboard transition-all duration-500 hover:border-white/30"
            >
              {/* Top Bar / Toolbar */}
              <div className="h-16 bg-[#0A0A0A] border-b border-white/5 flex items-center justify-between px-8 relative z-40">
                <div className="flex items-center gap-6">
                  {/* UPDATED: Window controls are grey by default ("off") and light up on dashboard hover ("on") */}
                  {/* REMOVED: Shadow glow effects and added /80 opacity to make them less bright */}
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
                    {/* Grey color area: voltsnap.xyz - Removed 'uppercase' class */}
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

                    {/* Remaining placeholders to keep the list look */}
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
                    {/* We use key={activeTab} to force the animation to replay on every switch */}
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
                              src="/VOLTSNAP/1x/voltsnap-title.png"
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

                {/* Overlay gradient to blend bottom into section below */}
                {/* UPDATED: Invert bottom fade gradient to match section background (which is dark) or handle transition carefully. 
                    If the card turns white, a black fade looks like a shadow. Keeping it dark fade is safer to blend with the dark page bg. */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A] via-15% to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW: Seamless transition gradient overlay over the whole bottom area */}
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#08090A] via-[#08090A]/90 to-transparent z-40 pointer-events-none"></div>

      </section>

      {/* SEPARATE TRUSTED BY SECTION (RESTORED) */}
      <TrustedBySection onSelectService={onSelectService} onViewPortfolio={onViewPortfolio} />

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
              <div
                onClick={() => onSelectService(service.id)}
                className="group relative overflow-hidden rounded-3xl bg-[#0e1012] border border-white/10 p-8 min-h-[400px] flex flex-col justify-end cursor-pointer hover:border-white/20 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-300"
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
                  {/* Changed font-mokoto-style to font-sans to use Inter */}
                  {/* UPDATED: Removed 'uppercase' class to prevent all-caps styling */}
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight font-sans tracking-wide">{service.title}</h3>
                  {/* REVERTED: Changed line-clamp-2 back to line-clamp-3 */}
                  <p className="text-slate-400 text-sm line-clamp-3 mb-6">{service.description}</p>
                  <div className="flex items-center text-white font-bold text-sm gap-2 group-hover:gap-4 transition-all">
                    View Plans <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
};

// --- MAIN APP COMPONENT ---
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // home, service-detail, portfolio
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (id) => {
    setSelectedServiceId(id);
    setCurrentView('service-detail');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#08090A] text-slate-300 font-sans selection:bg-purple-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Orbitron:wght@600;800;900&display=swap');
         
        /* Apply Inter as the default sans font */
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mokoto-style { font-family: 'Orbitron', sans-serif; }
         
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-fast { animation: fade-in 0.4s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }

        /* REFINED PREMIUM POP-IN ANIMATION */
        @keyframes pop-in {
          0% { 
            opacity: 0; 
            transform: translateY(60px) scale(0.95); 
            filter: blur(12px); /* High blur for premium feel */
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
            filter: blur(0); 
          }
        }
         
        /* CONTINUOUS FLOAT ANIMATION */
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        /* SUBTLE FLOAT FOR LOGOS */
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        /* SOFT ENTER FOR TABS */
        @keyframes soft-enter {
          from { opacity: 0; filter: blur(4px); transform: scale(0.98); }
          to { opacity: 1; filter: blur(0); transform: scale(1); }
        }
        .animate-soft-enter {
          animation: soft-enter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-pop-in {
          /* Slower duration (2.5s) for a relaxed, expensive feel */
          animation: pop-in 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-smooth-reveal {
          animation: pop-in 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
         
        .animate-float {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-subtle {
          animation: float-subtle 6s ease-in-out infinite;
        }
         
        /* 3D Transform Utilities */
        .rotate-x-12 { transform: rotateX(12deg); }
        .hover\\:rotate-x-0:hover { transform: rotateX(0deg); }
      `}</style>

      <Navbar
        isScrolled={isScrolled}
        setCurrentView={setCurrentView}
      />

      <main className="relative z-10">
        {currentView === 'home' && (
          <HomeView
            onSelectService={handleSelectService}
            onViewPortfolio={() => { setCurrentView('portfolio'); window.scrollTo(0, 0); }}
          />
        )}
        {currentView === 'service-detail' && selectedServiceId && (
          <ServiceDetailView serviceId={selectedServiceId} onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'portfolio' && (
          <PortfolioView onBack={() => setCurrentView('home')} />
        )}
      </main>

      <footer className="border-t border-white/10 bg-[#08090A] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/VOLTSNAP/4x/voltsnap.png"
              alt="Voltsnap Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-white font-bold tracking-tight font-mokoto-style">VOLTSNAP.XYZ</span>
          </div>
          <div className="text-slate-500 text-sm">© 2025 VOLTSNAP Creative Studio. Bali, Indonesia.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;