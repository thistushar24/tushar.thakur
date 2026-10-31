import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Terminal, Menu, X, Download, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Explorations', path: '/explorations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0C10]/90 backdrop-blur-md border-b border-[#1E2333] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Pixel Terminal symbol / Dossier Identifier */}
        <NavLink
          to="/"
          className="group flex items-center gap-2.5 text-white hover:text-[#F59E0B] transition-colors"
          title="Tushar Thakur Dossier System"
        >
          <div className="w-8 h-8 rounded-xs border border-[#2D3346] group-hover:border-[#F59E0B]/80 bg-[#141724] flex items-center justify-center transition-all group-hover:shadow-[0_0_10px_#F59E0B]">
            <Terminal className="w-4 h-4 text-[#F59E0B]" />
          </div>
          <div className="flex flex-col">
            <span className="font-pixel text-xs tracking-wider text-white group-hover:text-[#FBBF24] transition-colors">
              TT_DOSSIER
            </span>
            <span className="font-mono text-[9px] text-[#06B6D4]">
              {isHome ? 'NODE_ROOT' : location.pathname.toUpperCase().replace('/', '') + '_MODULE'}
            </span>
          </div>
        </NavLink>

        {/* Center / Right: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
              (link.path === '/projects' && location.pathname.startsWith('/projects'));
            
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={`relative px-3.5 py-1.5 rounded-sm text-xs font-mono tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#FBBF24] bg-[#1A1E2E] border border-[#F59E0B]/50 font-bold shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                    : 'text-neutral-400 hover:text-white hover:bg-[#141724] border border-transparent'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#F59E0B] shadow-[0_0_6px_#F59E0B]" />
                )}
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Right Action: Direct Resume Download Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/Tushar_Thakur_Resume.pdf"
            download="Tushar_Thakur_Resume.pdf"
            className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm border border-[#F59E0B]/60 bg-[#161926] text-xs font-pixel text-[#FBBF24] hover:bg-[#F59E0B] hover:text-black transition-all duration-200 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-sm border border-[#2D3346] text-neutral-300 hover:text-[#F59E0B] hover:bg-[#141724]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1E2333] bg-[#0E1018] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-2 py-1 text-[10px] font-pixel text-neutral-400 uppercase tracking-widest border-b border-[#1E2333] mb-2 flex items-center justify-between">
            <span>NAV MODULES</span>
            <span className="text-[#06B6D4]">ONLINE</span>
          </div>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
              (link.path === '/projects' && location.pathname.startsWith('/projects'));
            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-mono transition-all ${
                  isActive
                    ? 'text-[#FBBF24] bg-[#1A1E2E] border border-[#F59E0B]/50 font-bold'
                    : 'text-neutral-300 hover:bg-[#141724]'
                }`}
              >
                <span className="flex items-center gap-2">
                  {isActive && <span className="w-2 h-2 bg-[#F59E0B]" />}
                  {link.name}
                </span>
                <span className="font-pixel text-[10px] text-neutral-500">
                  {link.path === '/' ? '00' : link.path.replace('/', '')}
                </span>
              </NavLink>
            );
          })}
          <div className="pt-2">
            <a
              href="/Tushar_Thakur_Resume.pdf"
              download="Tushar_Thakur_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F59E0B] text-black rounded-sm text-sm font-mono font-bold hover:bg-[#FBBF24] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
