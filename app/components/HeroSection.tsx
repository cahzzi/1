"use client";

import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center px-5 text-center pt-20 pb-12 md:pt-16 md:pb-8">
      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs md:text-sm text-gray-600 mb-6 font-medium shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          可接单中
        </span>
      </div>

      <h1 className="text-[2.25rem] leading-[1.15] sm:text-5xl md:text-7xl font-bold tracking-tight mb-5 md:mb-6 max-w-4xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <span className="text-gray-900 block">做个网站</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 block mt-2 pb-1">
          简单又省钱
        </span>
      </h1>

      <p className="text-base md:text-2xl text-gray-500 max-w-xs md:max-w-lg mb-8 md:mb-10 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        不用买服务器，不用年年续费。
        <span className="text-gray-400 text-sm md:text-lg mt-2 block">一次付款，网站永久归你。</span>
      </p>

      <div className="w-full sm:w-auto flex justify-center animate-fade-in-up relative z-10" style={{ animationDelay: '0.4s' }}>
        <button 
          onClick={scrollToContact}
          className="w-full max-w-xs sm:w-auto group px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-base md:text-lg active:scale-95 transition-transform duration-150 shadow-lg shadow-gray-900/20 inline-flex items-center justify-center"
        >
          免费咨询 <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 md:group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
