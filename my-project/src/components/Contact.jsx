import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, Phone, MapPin, Send, ArrowUpRight, 
  CheckCircle2, Clock, Globe, MessageSquare 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Right-to-Left reveal for contact form and info cards
      gsap.fromTo(
        '.contact-reveal-item',
        { x: 90, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare mailto link with pre-filled content
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:shivamsharma789654@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Open default email client with details
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section
      id="contactme"
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[13vw] font-display font-black text-white/[0.015] select-none pointer-events-none uppercase">
        CONNECT
      </div>

      {/* Header */}
      <div className="mb-16 border-b border-white/[0.08] pb-10">
        <div className="contact-reveal-item inline-flex items-center gap-2 text-xs font-mono-tech text-[#FF5E1E] uppercase tracking-widest mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FF5E1E]" />
          <span>[ 05. TRANSMISSION // CONTACT & COLLABORATION ]</span>
        </div>
        <h2 className="contact-reveal-item text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
          Let’s Build Something<br />
          <span className="text-[#FF5E1E]">Extraordinary</span> Together.
        </h2>
        <p className="contact-reveal-item text-gray-400 font-body text-base mt-4 max-w-2xl">
          “Open to internships, full-time engineering roles, freelance contracts, and collaboration opportunities.”
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Direct Info Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="contact-reveal-item p-6 rounded-2xl bg-[#11131C] border border-white/[0.08] space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF5E1E]/10 border border-[#FF5E1E]/30 flex items-center justify-center text-[#FF5E1E]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-tech text-gray-500 uppercase tracking-wider block">
                  Direct Email
                </span>
                <a
                  href="mailto:shivamsharma789654@gmail.com"
                  className="text-sm font-display font-bold text-white hover:text-[#FF5E1E] transition-colors"
                >
                  shivamsharma789654@gmail.com
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-body">
              Response time: typically within 12–24 hours on business days.
            </p>
          </div>

          <div className="contact-reveal-item p-6 rounded-2xl bg-[#11131C] border border-white/[0.08] space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-tech text-gray-500 uppercase tracking-wider block">
                  Base Location
                </span>
                <span className="text-sm font-display font-bold text-white">
                  New Delhi, India
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-body">
              Available for hybrid/on-site in India and remote opportunities worldwide across all timezones.
            </p>
          </div>

          <div className="contact-reveal-item p-6 rounded-2xl bg-[#11131C] border border-white/[0.08] space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-tech text-gray-500 uppercase tracking-wider block">
                  Current Availability
                </span>
                <span className="text-sm font-display font-bold text-emerald-400">
                  Immediate Joining / Available
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-body">
              Fresher with verified project portfolio ready to step into dynamic engineering teams.
            </p>
          </div>

        </div>

        {/* Right Column: Interactive Form (7 cols) */}
        <div className="lg:col-span-7 contact-reveal-item">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#11131C] border border-white/[0.08] shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Message Dispatched!
                </h3>
                <p className="text-gray-400 font-body text-sm max-w-md mx-auto">
                  Your mail client has been opened with your inquiry. I will review and reply promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono-tech text-gray-300 hover:text-white hover:border-[#FF5E1E]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <label className="text-xs font-mono-tech text-gray-400 uppercase tracking-wider block">
                      Your Name <span className="text-[#FF5E1E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-[#FF5E1E] focus:ring-1 focus:ring-[#FF5E1E] text-sm font-body transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono-tech text-gray-400 uppercase tracking-wider block">
                      Email Address <span className="text-[#FF5E1E]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-[#FF5E1E] focus:ring-1 focus:ring-[#FF5E1E] text-sm font-body transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono-tech text-gray-400 uppercase tracking-wider block">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-[#FF5E1E] focus:ring-1 focus:ring-[#FF5E1E] text-sm font-body transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono-tech text-gray-400 uppercase tracking-wider block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="e.g. Full-time Role / Freelance Project"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-[#FF5E1E] focus:ring-1 focus:ring-[#FF5E1E] text-sm font-body transition-colors"
                    />
                  </div>

                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono-tech text-gray-400 uppercase tracking-wider block">
                    Message Details <span className="text-[#FF5E1E]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-[#FF5E1E] focus:ring-1 focus:ring-[#FF5E1E] text-sm font-body transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#FF5E1E] text-white font-mono-tech text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#ff7238] transition-all duration-300 shadow-[0_0_25px_rgba(255,94,30,0.35)] hover:shadow-[0_0_35px_rgba(255,94,30,0.55)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Preparing Transmission...' : 'Transmit Message'}</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
