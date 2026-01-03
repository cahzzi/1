"use client";

import { useEffect, useState } from 'react';

export const MobileNav = () => {
  const [scrolled, setScrolled] = useState(false);
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,box-shadow] duration-300 ${scrolled ? 'py-3 bg-white/95 md:backdrop-blur-xl border-b border-gray-100 shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="px-5 flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-bold text-lg tracking-tight text-gray-900 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          Static<span className="text-gray-400">Web.</span>
        </div>
        <button 
          onClick={scrollToContact}
          className="px-5 py-2 text-xs font-bold bg-gray-900 text-white rounded-full active:scale-95 transition-transform duration-150"
        >
          聊一聊
        </button>
      </div>
    </nav>
  );
};
