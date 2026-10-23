import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github, ExternalLink, Layers, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OverlappingProjects() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Web App', 'Frontend'];

  const projectsData = [
    {
      id: 1,
      num: '01',
      title: 'Food & Grocery Delivery Platform',
      tagline: 'QuickServe — High-Throughput E-Commerce & Logistics Engine',
      category: 'Full Stack',
      img: '/quickserve.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'Express', 'Tailwind'],
      live: 'https://quickserveio.netlify.app/',
      github: 'https://github.com/shivam7896',
      desc: 'A production-ready full-stack delivery platform engineered for ordering food and groceries with instant cart synchronization, secure Razorpay payment gateway integration, and responsive administrative order management.',
      accent: '#FF5E1E',
      year: '2025',
      highlights: ['Secure Razorpay Webhook Processing', 'Real-Time Cart & Menu Filtering', 'Full CRUD Backend API Architecture'],
    },
    {
      id: 2,
      num: '02',
      title: 'AI Crop Disease Detection',
      tagline: 'SmartCrop — Real-Time Vision & Agricultural Diagnostics',
      category: 'Web App',
      img: '/Smartcrop.png',
      tech: ['Python', 'Streamlit', 'Machine Learning', 'Computer Vision', 'Data Viz'],
      live: 'https://smart-crop-sim.streamlit.app/',
      github: 'https://github.com/shivam7896/CropDiseaseSimulator',
      desc: 'An AI-powered computer vision and diagnosis simulation web application that identifies agricultural leaf pathogens with instantaneous probability scores, automated remediation suggestions, and interactive environmental simulation.',
      accent: '#10B981',
      year: '2025',
      highlights: ['Instant Plant Pathology Diagnostic Engine', 'Interactive Environmental Simulation', 'Streamlit Cloud Real-Time Deployment'],
    },
    {
      id: 3,
      num: '03',
      title: 'Institute of Digital Risk (IDR)',
      tagline: 'IDR — Enterprise Cybersecurity & Threat Mitigation Portal',
      category: 'Frontend',
      img: '/idr.png',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'Accessible UX', 'Vite'],
      live: 'https://instituteofdigitalrisk5264.netlify.app/',
      github: 'https://github.com/shivam7896/IDR',
      desc: 'A sleek, educational web portal created for the Institute of Digital Risk, emphasizing modern corporate defense, risk governance curricula, interactive risk assessment guides, and responsive design systems.',
      accent: '#6366F1',
      year: '2024',
      highlights: ['High-Performance Responsive Front-End', 'Micro-Interactions & Accessible Navigation', 'Enterprise Digital Risk Framework'],
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter((p) => p.category === activeFilter);

  // Setup GSAP Stacking
  useEffect(() => {
    // Reset cards ref array length to match active list
    cardRefs.current = cardRefs.current.slice(0, filteredProjects.length);

    const isDesktop = window.innerWidth >= 1024;
    const ctx = gsap.context(() => {
      // 1. Right -> Left Staggered Slide Reveal for Section Header
      gsap.fromTo(
        '.projects-header-item',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-section-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 2. Right -> Left Staggered Slide Reveal for each Project Card
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        // Animate elements inside the card entering from right to left
        const innerItems = card.querySelectorAll('.card-slide-item');
        if (innerItems.length) {
          gsap.fromTo(
            innerItems,
            { x: 80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.08,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        // Card scale-down 3D stack on desktop
        if (isDesktop && cardRefs.current.length > 1) {
          const nextCard = cardRefs.current[index + 1];
          if (nextCard) {
            gsap.to(card, {
              scale: 0.95 - index * 0.02,
              filter: 'brightness(0.75)',
              y: -20,
              ease: 'none',
              scrollTrigger: {
                trigger: nextCard,
                start: 'top 90%',
                end: 'top 20%',
                scrub: true,
              },
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Background Watermark */}
      <div className="absolute top-6 right-0 text-[12vw] font-display font-black text-white/[0.012] select-none pointer-events-none uppercase">
        ARCHIVE
      </div>

      {/* Section Header */}
      <div className="projects-section-header mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
        <div className="space-y-2">
          <div className="projects-header-item inline-flex items-center gap-2 text-xs font-mono-tech text-[#FF5E1E] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#FF5E1E]" />
            <span>[ 02. INDEX // CASE STUDIES ]</span>
          </div>
          <h2 className="projects-header-item text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Selected Works<span className="text-[#FF5E1E]">.</span>
          </h2>
          <p className="projects-header-item text-gray-400 max-w-xl font-body text-sm sm:text-base">
            Engineered systems, client portals, and machine learning interfaces. Built with
            clean architecture, high fidelity, and real-world deployment.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-header-item flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider transition-colors duration-200 border ${
                activeFilter === cat
                  ? 'bg-white text-black border-white font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-white/[0.03] text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Overlapping Sticky Cards Deck */}
      <div className="relative space-y-10 md:space-y-16 pb-12">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{
              top: `calc(85px + ${index * 26}px)`,
              zIndex: index + 10,
            }}
            className="stacked-card sticky group w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#11131C] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          >
            {/* Top Bar inside Card */}
            <div className="px-6 sm:px-8 py-4 bg-[#161924] border-b border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono-tech font-bold text-[#FF5E1E]">
                  PROJECT // {project.num}
                </span>
                <span className="text-gray-600 font-mono-tech">/</span>
                <span className="text-xs font-mono-tech text-gray-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-tech text-gray-400">{project.year}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </div>

            {/* Card Main Body: 2-Column Asymmetric Layout */}
            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Metadata & Narrative (6 cols) */}
              <div className="lg:col-span-6 space-y-5">
                
                <div className="card-slide-item space-y-1.5">
                  <span className="text-xs font-mono-tech text-gray-400 tracking-wider uppercase block">
                    {project.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="card-slide-item text-gray-300 font-body text-sm sm:text-base leading-relaxed">
                  {project.desc}
                </p>

                {/* Architectural Highlights */}
                <div className="card-slide-item space-y-2 pt-2 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono-tech uppercase tracking-widest text-gray-400">
                    Engineered Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-mono-tech text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E1E]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="card-slide-item pt-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono-tech text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="card-slide-item flex flex-wrap items-center gap-4 pt-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="LAUNCH"
                      className="group/link px-6 py-3 rounded-xl bg-[#FF5E1E] text-white font-mono-tech text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#ff7238] transition-all shadow-[0_0_20px_rgba(255,94,30,0.3)] hover:shadow-[0_0_30px_rgba(255,94,30,0.5)] hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Launch Live Site</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}

                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-mono-tech text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:-translate-y-0.5"
                    >
                      <Github className="w-4 h-4 text-gray-400" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Immersive Media Canvas (6 cols) */}
              <div className="lg:col-span-6 card-slide-item">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="EXPLORE"
                  className="block relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-[#0A0C13] shadow-xl group/media cursor-pointer"
                >
                  <div className="w-full h-full overflow-hidden bg-[#151824]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/media:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-mono-tech font-bold text-xs uppercase tracking-wider shadow-lg">
                      <span>View Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>
              </div>

            </div>

            {/* Glowing Accent Baseline */}
            <div
              className="h-1 w-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
