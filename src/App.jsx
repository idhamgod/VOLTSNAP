import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// --- Scroll to top on route change ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- MAIN APP COMPONENT ---
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactService, setContactService] = useState('');

  const openContact = (serviceName = '') => {
    setContactService(serviceName);
    setIsContactOpen(true);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090A] text-slate-300 font-sans selection:bg-purple-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Orbitron:wght@600;800;900&display=swap');
         
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mokoto-style { font-family: 'Orbitron', sans-serif; }
         
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-fast { animation: fade-in 0.4s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }

        @keyframes pop-in {
          0% { opacity: 0; transform: translateY(60px) scale(0.95); filter: blur(12px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
         
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes soft-enter {
          from { opacity: 0; filter: blur(4px); transform: scale(0.98); }
          to { opacity: 1; filter: blur(0); transform: scale(1); }
        }
        .animate-soft-enter {
          animation: soft-enter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-pop-in {
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
         
        .rotate-x-12 { transform: rotateX(12deg); }
        .hover\\:rotate-x-0:hover { transform: rotateX(0deg); }
      `}</style>

      <ScrollToTop />

      <Navbar isScrolled={isScrolled} onOpenContact={() => openContact()} />

      <main className="relative z-10">
        <Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div style={{
              width: 40, height: 40,
              border: '3px solid rgba(168, 85, 247, 0.2)',
              borderTopColor: '#a855f7',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage onOpenContact={openContact} />} />
            <Route path="/about-us" element={<AboutUsPage onOpenContact={openContact} />} />
            <Route path="/portfolio" element={<PortfolioPage onOpenContact={openContact} />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage onOpenContact={openContact} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer onOpenContact={() => openContact()} />

      {/* Global Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        serviceName={contactService}
      />
    </div>
  );
};

export default App;