import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Overview', id: 'home', num: '01' },
    { label: 'Projects', id: 'projects', num: '02' },
    { label: 'Stack', id: 'skills', num: '03' },
    { label: 'About', id: 'aboutme', num: '04' },
    { label: 'Contact', id: 'contactme', num: '05' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track active section for indicator
      const sections = ['home', 'projects', 'skills', 'aboutme', 'contactme'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    if (scrollTo) {
      scrollTo(`#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-[#08090D]/85 backdrop-blur-md border-b border-white/[0.07] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="group flex items-center gap-3 text-white text-lg font-bold tracking-tight"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1F2330] to-[#12141C] border border-white/10 flex items-center justify-center font-display font-extrabold text-[#FF5E1E] group-hover:border-[#FF5E1E]/50 group-hover:scale-105 transition-all duration-300">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-wider text-sm md:text-base group-hover:text-[#FF5E1E] transition-colors">
                SHIVAM<span className="text-[#FF5E1E]">.</span>SHARMA
              </span>
              <span className="text-[10px] font-mono-tech tracking-widest text-gray-500 uppercase">
                Creative Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#12141C]/80 px-4 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-4 py-2 text-xs font-mono-tech font-medium uppercase tracking-wider transition-all duration-300 rounded-full flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-white/[0.08] shadow-[0_0_12px_rgba(255,255,255,0.05)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-[#FF5E1E]' : 'text-gray-600'}`}>
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E1E] inline-block animate-pulse ml-0.5" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Status Pill + CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono-tech text-gray-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>AVAILABLE FOR WORK</span>
            </div>

            <a
              href="#contactme"
              onClick={(e) => handleNavClick(e, 'contactme')}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-[#FF5E1E] text-white text-xs font-bold font-mono-tech tracking-wider uppercase flex items-center gap-2 hover:bg-[#ff7238] transition-all duration-300 shadow-[0_0_20px_rgba(255,94,30,0.35)] hover:shadow-[0_0_30px_rgba(255,94,30,0.55)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg bg-white/[0.05] border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Cinematic Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#08090D]/98 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-6">
          <div className="text-[11px] font-mono-tech text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2">
            Navigation Index
          </div>
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="group flex items-baseline justify-between text-3xl font-display font-bold text-white hover:text-[#FF5E1E] transition-colors py-2 border-b border-white/[0.04]"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono-tech text-gray-500 group-hover:text-[#FF5E1E]">
                  {item.num} //
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>OPEN FOR NEW ROLES & FREELANCE</span>
          </div>
          <a
            href="#contactme"
            onClick={(e) => handleNavClick(e, 'contactme')}
            className="w-full py-3.5 rounded-xl bg-[#FF5E1E] text-white font-mono-tech font-bold text-center block text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(255,94,30,0.4)]"
          >
            START A CONVERSATION
          </a>
        </div>
      </div>
    </>
  );
}