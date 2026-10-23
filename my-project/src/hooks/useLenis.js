import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // High performance smooth inertia scroll
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Synchronize Lenis with ScrollTrigger without triggering ANY React re-renders!
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Synchronize GSAP ticker with Lenis
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback((target, options = {}) => {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (lenisRef.current && el) {
      lenisRef.current.scrollTo(el, {
        offset: options.offset ?? -70,
        duration: options.duration ?? 1.1,
        immediate: options.immediate ?? false,
      });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return { scrollTo };
}
