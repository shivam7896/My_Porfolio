import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OverlappingProjects from './components/OverlappingProjects';
import SkillsMarquee from './components/SkillsMarquee';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useLenis } from './hooks/useLenis';
import { useVelocityBlur } from './hooks/useVelocityBlur';

export default function App() {
  // Initialize Lenis smooth inertia scrolling
  const { scrollTo } = useLenis();

  // Attach velocity-based dynamic motion blur to showcase media
  useVelocityBlur();

  return (
    <div className="relative min-h-screen bg-[#08090D] text-[#F3F4F6] selection:bg-[#FF5E1E] selection:text-white font-body">
      
      {/* Film Grain Texture Overlay */}
      <div className="bg-grain fixed inset-0 pointer-events-none z-30" />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Primary Sticky Header */}
      <Navbar scrollTo={scrollTo} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 01. Hero - Cinematic Entrance */}
        <Hero scrollTo={scrollTo} />

        {/* 02. Overlapping Sticky Project Cards (Showpiece) */}
        <OverlappingProjects />

        {/* 03. Technical Capabilities & Infinity Marquee */}
        <SkillsMarquee />

        {/* 04. Editorial About & Engineering Pillars */}
        <About />

        {/* 05. Contact & Collaboration */}
        <Contact />
      </main>

      {/* 06. Cinematic Footer with IST Clock */}
      <Footer scrollTo={scrollTo} />
    </div>
  );
}