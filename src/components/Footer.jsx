const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#08090A] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}VOLTSNAP/4x/voltsnap.png`}
            alt="Voltsnap Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-white font-bold tracking-tight font-mokoto-style">VOLTSNAP.XYZ</span>
        </div>
        <div className="text-slate-500 text-sm">© 2025 VOLTSNAP Creative Studio. Bali, Indonesia.</div>
      </div>
    </footer>
  );
};

export default Footer;
