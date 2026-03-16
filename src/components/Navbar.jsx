import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navTo = (path, id) => {
    setMobileMenuOpen(false);
    if (path === '/') {
      navigate('/');
      setTimeout(() => {
        if (id) {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      navigate(path);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#08090A]/90 backdrop-blur-md border-white/5' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
        >
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
          <button onClick={() => navTo('/', 'about-section')} className="text-sm font-medium hover:text-white transition-colors text-slate-400">
            About
          </button>

          <button onClick={() => navTo('/', 'services')} className="text-sm font-medium hover:text-white transition-colors text-slate-400">
            Services
          </button>

          <Link to="/portfolio" className="text-sm font-medium hover:text-white transition-colors text-slate-400">
            Portfolio
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#08090A] border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in-fast shadow-2xl">
          <button onClick={() => navTo('/', 'about-section')} className="text-left text-lg font-medium text-slate-300">About</button>
          <button onClick={() => navTo('/', 'services')} className="text-left text-lg font-medium text-slate-300">Services</button>
          <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-left text-lg font-medium text-slate-300">Portfolio</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
