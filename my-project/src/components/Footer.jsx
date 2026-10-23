import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, Github, Linkedin, Twitter, 
  Instagram, Facebook, Heart, Terminal, Globe 
} from 'lucide-react';

export default function Footer({ scrollTo }) {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBackToTop = (e) => {
    e.preventDefault();
    if (scrollTo) {
      scrollTo('#home', { offset: 0, duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Overview', id: 'home' },
    { label: 'Case Studies', id: 'projects' },
    { label: 'Tech Stack', id: 'skills' },
    { label: 'Biography', id: 'aboutme' },
    { label: 'Contact', id: 'contactme' },
  ];

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: 'https://github.com/shivam7896', label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/shivam-sharma-25666724a/', label: 'LinkedIn' },
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="relative bg-[#06070B] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-[#FF5E1E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.06] items-start">
          
          {/* Brand & Monogram (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1E212D] to-[#11131B] border border-white/10 flex items-center justify-center font-display font-extrabold text-[#FF5E1E]">
                S
              </div>
              <span className="font-display font-bold text-xl text-white tracking-wider">
                SHIVAM<span className="text-[#FF5E1E]">.</span>SHARMA
              </span>
            </div>
            <p className="text-gray-400 font-body text-xs leading-relaxed max-w-sm">
              Full Stack Web Developer & Creative Engineer. Architecting modern web applications, high-performance backends, and fluid interaction physics.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono-tech text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LOCAL TIME: {istTime || '11:34 AM IST'} (DELHI, IN)</span>
            </div>
          </div>

          {/* Quick Nav Anchors (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-gray-500 block">
              Navigation Index
            </span>
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (scrollTo) scrollTo(`#${item.id}`);
                  }}
                  className="text-xs font-mono-tech text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"
                >
                  <span className="text-gray-600">//</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-start md:items-end">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-gray-500">
              Back to Surface
            </span>
            <button
              onClick={handleBackToTop}
              className="group px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-[#FF5E1E] border border-white/10 hover:border-[#FF5E1E] text-white font-mono-tech text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(255,94,30,0.5)]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF5E1E]/50 hover:bg-[#FF5E1E]/10 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Sub-Footer Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-gray-500">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-bold">Shivam Sharma</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered with React 19, GSAP 3 & Lenis</span>
            <span className="text-gray-700">•</span>
            <span className="text-[#FF5E1E]">Obsessive Craft</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
