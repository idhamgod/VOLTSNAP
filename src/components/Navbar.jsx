import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = ({ isScrolled, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navTo = useCallback((path, id) => {
    setMobileMenuOpen(false);
    navigate(path);
    
    if (id) {
      let attempts = 0;
      const checkExist = setInterval(() => {
        const el = document.getElementById(id);
        if (el) {
          clearInterval(checkExist);
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts >= 20) {
          clearInterval(checkExist);
        }
        attempts++;
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [navigate]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#08090A]/90 backdrop-blur-md border-white/5' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src={`${import.meta.env.BASE_URL}VOLTSNAP/4x/voltsnap.png`}
            alt="Voltsnap Logo"
            className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
          />
          <span className="text-white font-black text-md md:text-2xl font-mokoto-style tracking-wider">
            VOLTSNAP.XYZ
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/about-us" className="text-sm font-medium hover:text-white transition-colors text-slate-400 focus:outline-none">
            About
          </Link>

          <button onClick={() => navTo('/', 'services')} className="text-sm font-medium hover:text-white transition-colors text-slate-400 focus:outline-none">
            Services
          </button>

          <Link to="/portfolio" className="text-sm font-medium hover:text-white transition-colors text-slate-400 focus:outline-none">
            Portfolio
          </Link>

          {/* CTA Button */}
          <button
            onClick={onOpenContact}
            className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
            <span className="relative z-10">Get a Quote</span>
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#08090A] border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in-fast shadow-2xl">
          <Link to="/about-us" onClick={() => setMobileMenuOpen(false)} className="text-left text-lg font-medium text-slate-300">About</Link>
          <button onClick={() => navTo('/', 'services')} className="text-left text-lg font-medium text-slate-300">Services</button>
          <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-left text-lg font-medium text-slate-300">Portfolio</Link>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenContact?.(); }}
            className="mt-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Zap className="w-4 h-4 text-purple-400" /> Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
