import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (touchCheck || prefersReducedMotion) {
      setIsTouch(true);
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // QuickTo for 120fps smooth cursor movement
    const setCursorX = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power3.out' });
    const setCursorY = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power3.out' });
    const setFollowerX = gsap.quickTo(follower, 'x', { duration: 0.35, ease: 'power3.out' });
    const setFollowerY = gsap.quickTo(follower, 'y', { duration: 0.35, ease: 'power3.out' });

    const onMouseMove = (e) => {
      setIsVisible(true);
      setCursorX(e.clientX);
      setCursorY(e.clientY);
      setFollowerX(e.clientX);
      setFollowerY(e.clientY);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Event delegation for hover states
    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, [data-cursor]');
      if (target) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Tiny precise dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-white rounded-full pointer-events-none z-[9999] transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${cursorText ? 'opacity-0' : ''}`}
      />

      {/* Fluid follower ring / pill */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 pointer-events-none z-[9998] rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          cursorText
            ? 'w-24 h-24 -ml-12 -mt-12 bg-[#FF5E1E] text-white font-display text-xs font-bold tracking-widest scale-100 shadow-[0_0_35px_rgba(255,94,30,0.6)]'
            : isHovered
            ? 'w-14 h-14 -ml-7 -mt-7 border-2 border-[#FF5E1E] bg-[#FF5E1E]/10 scale-100'
            : 'w-10 h-10 border border-white/30 scale-100'
        }`}
      >
        {cursorText && (
          <span className="uppercase tracking-widest select-none animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
