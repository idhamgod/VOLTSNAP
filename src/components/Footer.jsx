import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({ onOpenContact }) => {
  return (
    <footer className="border-t border-white/5 bg-[#08090A] relative z-10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}VOLTSNAP/4x/voltsnap.png`}
                alt="Voltsnap Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-white font-bold tracking-tight font-mokoto-style text-lg">VOLTSNAP.XYZ</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-6">
              A Bali-based digital studio specializing in high-impact brand identity and dynamic visual production. We turn visions into voltage.
            </p>
            <button
              onClick={onOpenContact}
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] active:scale-95 flex items-center gap-2"
            >
              <Zap className="w-4 h-4" /> Start a Project
            </button>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-500 text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-slate-500 text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-slate-500 text-sm hover:text-white transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/video-editing" className="text-slate-500 text-sm hover:text-white transition-colors">Video Editing</Link></li>
              <li><Link to="/services/logo-design" className="text-slate-500 text-sm hover:text-white transition-colors">Logo Design</Link></li>
              <li><Link to="/services/web-design" className="text-slate-500 text-sm hover:text-white transition-colors">Web Design</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-600 text-xs">© 2025 VOLTSNAP Creative Studio. Bali, Indonesia.</div>
          <div className="text-slate-600 text-xs">Built with ⚡ by VOLTSNAP</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
