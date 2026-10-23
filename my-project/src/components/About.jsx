import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, ArrowUpRight, CheckCircle2, Shield, Layers, Award, Terminal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line mask entrance for editorial statement
      gsap.fromTo(
        '.about-reveal-text',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-statement-trigger',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Right-to-Left reveal for image and stats
      gsap.fromTo(
        '.about-image-card',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-image-card',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Right-to-Left staggered slide reveal for right column narrative & principles
      gsap.fromTo(
        '.about-slide-item',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-content-trigger',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Subtle parallax on the image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const corePrinciples = [
    {
      title: 'Architectural Cleanliness',
      desc: 'Writing modular, self-documenting code with predictable state flow and zero technical debt.',
    },
    {
      title: 'Sub-Millisecond Responsiveness',
      desc: 'Optimizing rendering pipelines, lazy loading, and asset delivery for instant user feedback.',
    },
    {
      title: 'Creative Interaction Physics',
      desc: 'Fusing fluid inertia, kinetic micro-animations, and spatial design to craft memorable products.',
    },
  ];

  return (
    <section
      id="aboutme"
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-1/3 -left-10 text-[13vw] font-display font-black text-white/[0.015] select-none pointer-events-none uppercase">
        BIOGRAPHY
      </div>

      {/* Header Badge */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#FF5E1E] uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#FF5E1E]" />
          <span>[ 04. DOSSIER // BIOGRAPHY & PHILOSOPHY ]</span>
        </div>
      </div>

      {/* Editorial Statement */}
      <div className="about-statement-trigger mb-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.15] max-w-5xl">
          <span className="about-reveal-text block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            TURNING AMBITIOUS IDEAS
          </span>
          <span className="about-reveal-text block text-white">
            INTO SCALABLE, HIGH-PERFORMANCE
          </span>
          <span className="about-reveal-text block text-[#FF5E1E]">
            DIGITAL EXPERIENCES.
          </span>
        </h2>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Visual Showcase Frame (5 cols) */}
        <div className="lg:col-span-5 about-image-card">
          <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-xl shadow-2xl">
            
            {/* Architectural Tags */}
            <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-gray-500">
              #DEV.PROFILE.02
            </div>
            <div className="absolute top-3 right-3 text-[10px] font-mono-tech text-emerald-400">
              ● READY FOR HIRE
            </div>

            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0F1118]">
              <img
                ref={imageRef}
                src="/my2.jpg"
                alt="Shivam Sharma Biography"
                className="w-full h-[120%] -mt-[10%] object-cover object-top grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent opacity-80" />
            </div>

            {/* Quick Stat Pill */}
            <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono-tech text-gray-400 block">CURRENT FOCUS</span>
                <span className="text-sm font-display font-bold text-white">Full-Stack & Interactive Web</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono-tech text-gray-400 block">LOCATION</span>
                <span className="text-sm font-mono-tech text-[#FF5E1E]">Delhi / Remote</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Core Principles (7 cols) */}
        <div className="about-content-trigger lg:col-span-7 space-y-8">
          
          <div className="about-slide-item space-y-5 text-base sm:text-lg text-gray-300 font-body leading-relaxed">
            <p>
              I’m a <strong className="text-white font-semibold">Full Stack Developer</strong> who 
              specializes in building fast, scalable, and user-centric web applications. I work 
              primarily with <span className="text-[#FF5E1E] font-medium">React, Node.js, Express, MongoDB, and modern web technologies</span> to 
              create clean, dependable, and efficient digital products.
            </p>
            <p className="text-gray-400">
              I’m constantly refining my engineering skills through relentless practice and 
              real-world deployments. From full-scale e-commerce logistics with payment gateways 
              to machine-learning diagnostic portals, I bridge clean architecture with polished, 
              delightful user interactions.
            </p>
          </div>

          {/* Three Engineering Pillars */}
          <div className="space-y-4 pt-4 border-t border-white/[0.08]">
            <span className="about-slide-item text-xs font-mono-tech uppercase tracking-widest text-gray-500 block">
              Core Engineering Pillars:
            </span>
            <div className="grid grid-cols-1 gap-4">
              {corePrinciples.map((item, idx) => (
                <div
                  key={idx}
                  className="about-slide-item p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF5E1E]/40 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#FF5E1E]" />
                    <h4 className="text-sm font-display font-bold text-white group-hover:text-[#FF5E1E] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs font-body text-gray-400 pl-5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="about-slide-item flex flex-wrap items-center gap-4 pt-4">
            <a
              href="/cv.pdf"
              download
              className="px-8 py-4 rounded-xl bg-[#FF5E1E] text-white font-mono-tech text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 hover:bg-[#ff7238] transition-all shadow-[0_0_25px_rgba(255,94,30,0.35)] hover:shadow-[0_0_35px_rgba(255,94,30,0.55)] hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume</span>
            </a>

            <a
              href="#contactme"
              className="px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-mono-tech text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <span>Discuss An Opportunity</span>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
