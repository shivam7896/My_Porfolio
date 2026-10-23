import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useVelocityBlur
 * Highly performant, hardware-accelerated motion response.
 * Uses ScrollTrigger velocity to apply a subtle scale/tilt and mild motion blur
 * only during rapid scroll, immediately clearing it without burning GPU cycles.
 */
export function useVelocityBlur() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    const elements = document.querySelectorAll('.velocity-blur-target');
    if (!elements.length) return;

    let timeoutId = null;

    const onUpdate = (self) => {
      const velocity = Math.abs(self.getVelocity());
      
      // Only engage if scrolling very fast (> 1000px/s)
      if (velocity > 1200) {
        const blurAmount = Math.min((velocity - 1200) / 1000, 3).toFixed(1);
        elements.forEach((el) => {
          el.style.filter = `blur(${blurAmount}px)`;
        });

        // Clear filter after scroll settles
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          elements.forEach((el) => {
            el.style.filter = 'none';
          });
        }, 120);
      }
    };

    const trigger = ScrollTrigger.create({
      onUpdate,
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      trigger.kill();
      elements.forEach((el) => {
        el.style.filter = 'none';
      });
    };
  }, []);
}
