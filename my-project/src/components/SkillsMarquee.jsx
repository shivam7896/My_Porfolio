import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, Layout, Smartphone, PenTool, Database, 
  Terminal, Server, Cpu, Sparkles, GitBranch, ShieldCheck, Zap
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsMarquee() {
  const sectionRef = useRef(null);

  const marqueeSkills = [
    { name: 'React', category: 'Frontend', icon: <Layout className="w-5 h-5 text-sky-400" /> },
    { name: 'Node.js', category: 'Backend', icon: <Server className="w-5 h-5 text-emerald-400" /> },
    { name: 'MongoDB', category: 'Database', icon: <Database className="w-5 h-5 text-green-500" /> },
    { name: 'Tailwind CSS', category: 'Styling', icon: <PenTool className="w-5 h-5 text-cyan-400" /> },
    { name: 'JavaScript ES6+', category: 'Core', icon: <Code className="w-5 h-5 text-amber-400" /> },
    { name: 'Python', category: 'AI & Data', icon: <Terminal className="w-5 h-5 text-yellow-400" /> },
    { name: 'Streamlit', category: 'Web App', icon: <Zap className="w-5 h-5 text-red-400" /> },
    { name: 'Express.js', category: 'Backend', icon: <Cpu className="w-5 h-5 text-gray-300" /> },
    { name: 'Razorpay API', category: 'Payments', icon: <ShieldCheck className="w-5 h-5 text-blue-400" /> },
    { name: 'Figma', category: 'Design', icon: <Sparkles className="w-5 h-5 text-purple-400" /> },
    { name: 'Git & GitHub', category: 'DevOps', icon: <GitBranch className="w-5 h-5 text-orange-400" /> },
  ];

  const skillDomains = [
    {
      domain: '01 // Frontend Engineering',
      description: 'Building responsive, reactive, and fluid user interfaces with state preservation and high frame-rates.',
      skills: [
        { name: 'React 19 & Hooks', level: 'Advanced', highlight: 'Component Lifecycle & Custom Hooks' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: 'Async/Await, Closures, DOM APIs' },
        { name: 'Tailwind CSS v4', level: 'Advanced', highlight: 'Modern Token Architecture & Flex/Grid' },
        { name: 'HTML5 Semantic Web', level: 'Advanced', highlight: 'SEO, Accessibility, Meta Protocols' },
        { name: 'Vite & Modern Tooling', level: 'Advanced', highlight: 'Fast HMR, Bundling & Assets' },
      ],
    },
    {
      domain: '02 // Backend & APIs',
      description: 'Architecting scalable server-side endpoints, business logic, secure authentication, and database models.',
      skills: [
        { name: 'Node.js Runtime', level: 'Intermediate', highlight: 'Event-driven I/O & Microservices' },
        { name: 'Express.js Framework', level: 'Intermediate', highlight: 'RESTful API Routing & Middleware' },
        { name: 'MongoDB & Mongoose', level: 'Intermediate', highlight: 'Schema Design, Aggregations & CRUD' },
        { name: 'Razorpay Gateway', level: 'Intermediate', highlight: 'Order creation, webhooks & verification' },
        { name: 'Authentication / JWT', level: 'Intermediate', highlight: 'Route guards & secure sessions' },
      ],
    },
    {
      domain: '03 // Specialized & Creative',
      description: 'Bridging intelligent computational models with visual prototyping and version collaboration.',
      skills: [
        { name: 'Python & Data Viz', level: 'Intermediate', highlight: 'Data simulation & script automation' },
        { name: 'Streamlit Cloud', level: 'Intermediate', highlight: 'Interactive ML & AI web deployments' },
        { name: 'Figma UI/UX Design', level: 'Intermediate', highlight: 'Design systems, wireframing & assets' },
        { name: 'GSAP 3 & ScrollTrigger', level: 'Advanced', highlight: 'Kinetic choreography & smooth scroll' },
        { name: 'Git & Version Control', level: 'Advanced', highlight: 'Branching, PRs, CI/CD deployment' },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Right-to-Left scroll reveal for header
      gsap.fromTo(
        '.skills-header-item',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-header-trigger',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Right-to-Left scroll reveal for skill domain cards
      gsap.fromTo(
        '.skill-domain-card',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skill-domains-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#08090D] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[14vw] font-display font-black text-white/[0.012] select-none pointer-events-none uppercase">
        CAPABILITY
      </div>

      <div className="skills-header-trigger max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="skills-header-item inline-flex items-center gap-2 text-xs font-mono-tech text-[#FF5E1E] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5E1E]" />
              <span>[ 03. CAPABILITIES // TECH MATRIX ]</span>
            </div>
            <h2 className="skills-header-item text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
              Technical Stack<span className="text-[#FF5E1E]">.</span>
            </h2>
          </div>
          <p className="skills-header-item text-gray-400 font-body text-base max-w-md">
            Production-grade frameworks, backend architectures, and tooling I use daily to turn ambitious ideas into fast, resilient software.
          </p>
        </div>
      </div>

      {/* Infinite Seamless Marquee Ticker */}
      <div className="relative overflow-hidden py-6 mb-20 border-y border-white/[0.06] bg-[#0E1017]">
        {/* Vignette Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#08090D] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#08090D] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {[...marqueeSkills, ...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 mx-4 px-6 py-3.5 rounded-2xl bg-[#141722] border border-white/[0.08] hover:border-[#FF5E1E]/50 hover:bg-[#1A1E2C] transition-all duration-300 group cursor-default shadow-sm"
            >
              <div className="p-1.5 rounded-lg bg-white/[0.05] group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-display font-bold text-white group-hover:text-[#FF5E1E] transition-colors whitespace-nowrap">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-wider">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Architectural Domains (Right-to-Left Entrance) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="skill-domains-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillDomains.map((domain, index) => (
            <div
              key={index}
              className="skill-domain-card rounded-3xl p-8 bg-[#11131C] border border-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="text-xs font-mono-tech text-[#FF5E1E] uppercase tracking-wider mb-2">
                  {domain.domain}
                </div>
                <p className="text-xs text-gray-400 font-body mb-8 leading-relaxed">
                  {domain.description}
                </p>

                <div className="space-y-4">
                  {domain.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-display font-bold text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded-full bg-white/[0.05] text-[#FF5E1E] border border-[#FF5E1E]/20">
                          {skill.level}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono-tech text-gray-500 block">
                        {skill.highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono-tech text-gray-500">
                <span>STATUS: VERIFIED</span>
                <span className="text-emerald-400">ACTIVE PRACTICE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
