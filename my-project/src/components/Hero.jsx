import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  ArrowDown, ArrowUpRight, Download, Github, 
  Linkedin, Twitter, Instagram, Facebook, Sparkles, Terminal 
} from 'lucide-react';

export default function Hero({ scrollTo }) {
  const heroRef = useRef(null);
  const imageCardRef = useRef(null);
  const headlineRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line-by-line mask reveals for main typography
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        '.hero-badge',
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
      )
      .fromTo(
        '.hero-reveal-line',
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.1, stagger: 0.12 },
        '-=0.5'
      )
      .fromTo(
        '.hero-desc',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        '-=0.6'
      )
      .fromTo(
        '.hero-cta-group',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        '.hero-stat-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        '-=0.6'
      )
      .fromTo(
        imageCardRef.current,
        { scale: 0.9, opacity: 0, rotateY: 10 },
        { scale: 1, opacity: 1, rotateY: 0, duration: 1.2, ease: 'expo.out' },
        '-=1.1'
      )
      .fromTo(
        '.hero-social-link',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'back.out(2)' },
        '-=0.6'
      )
      .fromTo(
        '.hero-scroll-indicator',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      );

      // Subtle mouse tilt effect on desktop for hero visual card
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (!isTouch && imageCardRef.current) {
        const handleMouseMove = (e) => {
          const { left, top, width, height } = imageCardRef.current.getBoundingClientRect();
          const x = (e.clientX - (left + width / 2)) / (width / 2);
          const y = (e.clientY - (top + height / 2)) / (height / 2);
          gsap.to(imageCardRef.current, {
            rotateY: x * 6,
            rotateX: -y * 6,
            duration: 0.6,
            ease: 'power2.out',
            transformPerspective: 1000,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(imageCardRef.current, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.8,
            ease: 'power2.out',
          });
        };

        const card = imageCardRef.current;
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          card.removeEventListener('mousemove', handleMouseMove);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = (e) => {
    e.preventDefault();
    if (scrollTo) {
      scrollTo('#projects');
    } else {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: 'https://github.com/shivam7896', label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/shivam-sharma-25666724a/', label: 'LinkedIn' },
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Architectural Mesh & Parallax Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Ambient Radial Glow */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#FF5E1E]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/[0.07] rounded-full blur-[160px]" />

        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Oversized Background Editorial Typography */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[14vw] font-display font-extrabold text-white/[0.018] tracking-tighter uppercase whitespace-nowrap leading-none select-none">
          ENGINEER
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* Left Column: Editorial Headline & Actions (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Status Badge */}
          <div className="hero-badge inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#FF5E1E] animate-pulse" />
            <span className="text-[11px] font-mono-tech tracking-wider text-gray-300 uppercase">
              Full Stack Creative Developer
            </span>
            <span className="text-gray-600 font-mono-tech text-xs">|</span>
            <span className="text-[10px] font-mono-tech text-gray-400">DELHI, IN</span>
          </div>

          {/* Main Headline with Masked Reveals */}
          <div ref={headlineRef} className="space-y-1">
            <div className="overflow-hidden">
              <h1 className="hero-reveal-line text-4xl sm:text-6xl xl:text-7xl font-display font-bold tracking-[-0.03em] text-white leading-[1.1]">
                Crafting Scalable
              </h1>
            </div>
            <div className="overflow-hidden">
              <div className="hero-reveal-line text-4xl sm:text-6xl xl:text-7xl font-display font-bold tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-[1.1]">
                Full Stack Code &
              </div>
            </div>
            <div className="overflow-hidden flex items-baseline gap-4 flex-wrap">
              <div className="hero-reveal-line text-4xl sm:text-6xl xl:text-7xl font-display font-bold tracking-[-0.03em] text-[#FF5E1E] leading-[1.1] flex items-center gap-2">
                Fluid Motion
                <span className="text-white text-3xl sm:text-5xl font-mono-tech font-normal">.</span>
              </div>
            </div>
          </div>

          {/* Editorial Subtitle Narrative */}
          <p className="hero-desc text-base sm:text-lg text-gray-400 max-w-xl font-body leading-relaxed font-normal">
            I’m <span className="text-white font-semibold">Shivam Sharma</span>, an engineer focused on 
            architecting resilient web backends, responsive interfaces, and cinematic interaction physics 
            that elevate digital products into unforgettable experiences.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              onClick={handleScrollDown}
              className="px-7 py-4 rounded-xl bg-[#FF5E1E] text-white font-mono-tech text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 hover:bg-[#ff7238] transition-all duration-300 shadow-[0_0_30px_rgba(255,94,30,0.4)] hover:shadow-[0_0_40px_rgba(255,94,30,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Selected Works</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>

            <a
              href="/cv.pdf"
              download
              className="group px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-mono-tech text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-gray-400 group-hover:text-[#FF5E1E] transition-colors" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-3 pt-3">
            <span className="text-xs font-mono-tech text-gray-500 uppercase tracking-widest mr-2">
              Connect:
            </span>
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="hero-social-link w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF5E1E]/50 hover:bg-[#FF5E1E]/10 transition-all duration-300 hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Verified Stats Row */}
          <div
            ref={statsRef}
            className="pt-6 grid grid-cols-3 gap-4 max-w-lg border-t border-white/[0.08]"
          >
            <div className="hero-stat-card space-y-1">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white flex items-baseline gap-1">
                Fresher
              </div>
              <p className="text-[11px] font-mono-tech text-gray-500 uppercase tracking-wider">
                Full-Time Ready
              </p>
            </div>

            <div className="hero-stat-card space-y-1 border-l border-white/[0.08] pl-4">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#FF5E1E] flex items-baseline">
                30<span className="text-white">+</span>
              </div>
              <p className="text-[11px] font-mono-tech text-gray-500 uppercase tracking-wider">
                Projects Done
              </p>
            </div>

            <div className="hero-stat-card space-y-1 border-l border-white/[0.08] pl-4">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white flex items-baseline">
                10<span className="text-[#FF5E1E]">+</span>
              </div>
              <p className="text-[11px] font-mono-tech text-gray-500 uppercase tracking-wider">
                Core Stacks
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Cinematic Profile Visual (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            ref={imageCardRef}
            className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] group"
          >
            {/* Corner Decorative Crosshairs */}
            <div className="absolute top-2 left-2 text-[10px] font-mono-tech text-gray-600 select-none">
              + 01.HERO
            </div>
            <div className="absolute top-2 right-2 text-[10px] font-mono-tech text-[#FF5E1E] select-none">
              LIVE
            </div>
            <div className="absolute bottom-2 left-2 text-[10px] font-mono-tech text-gray-600 select-none">
              28.61° N // 77.20° E
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] font-mono-tech text-gray-600 select-none">
              PROD.2026
            </div>

            {/* Inner Image Mask Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#11131A] border border-white/[0.06]">
              <img
                src="/my.jpg"
                alt="Shivam Sharma - Full Stack Creative Developer"
                className="w-full h-full object-cover object-top grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              
              {/* Gradient Vignette over image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Bottom Glass Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090A0F]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-display font-bold text-sm tracking-wide">
                    Shivam Sharma
                  </h4>
                  <p className="text-[11px] font-mono-tech text-gray-400">
                    Full Stack Developer & Engineer
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FF5E1E]/20 border border-[#FF5E1E]/40 flex items-center justify-center text-[#FF5E1E]">
                  <Terminal className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5E1E]/20 to-amber-500/10 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 opacity-60 transition-opacity duration-500" />
          </div>
        </div>
      </div>

      {/* Hero Scroll Indicator */}
      <div className="hero-scroll-indicator relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 flex items-center justify-between text-xs font-mono-tech text-gray-400">
        <button
          type="button"
          onClick={handleScrollDown}
          className="flex items-center gap-2.5 text-gray-400 hover:text-[#FF5E1E] transition-colors cursor-pointer group py-2"
          aria-label="Scroll down to projects"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF5E1E] animate-pulse group-hover:scale-125 transition-transform" />
          <span className="font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
            SCROLL TO DISCOVER
          </span>
        </button>

        <button
          type="button"
          onClick={handleScrollDown}
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group cursor-pointer py-2"
          aria-label="Scroll down to projects index 02"
        >
          <span className="group-hover:text-[#FF5E1E] transition-colors">INDEX [02]</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1 group-hover:border-[#FF5E1E] transition-colors">
            <span className="w-1 h-2 rounded-full bg-[#FF5E1E] animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
