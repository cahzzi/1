"use client";

import { useRef, useState, ReactNode, memo, useCallback, useEffect } from 'react';

// 共享的 IntersectionObserver 实例
let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, (isVisible: boolean) => void>();

const getSharedObserver = () => {
  if (!sharedObserver && typeof window !== 'undefined') {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = observerCallbacks.get(entry.target);
          if (callback && entry.isIntersecting) {
            callback(true);
            sharedObserver?.unobserve(entry.target);
            observerCallbacks.delete(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
  }
  return sharedObserver;
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

const GlassCardInner = ({ children, className = "", delay = 0, onClick }: GlassCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInteractive = !!onClick;

  const handleVisibility = useCallback((visible: boolean) => {
    setIsVisible(visible);
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }
    
    const observer = getSharedObserver();
    if (observer) {
      observerCallbacks.set(el, handleVisibility);
      observer.observe(el);
      return () => {
        observer.unobserve(el);
        observerCallbacks.delete(el);
      };
    }
  }, [handleVisibility]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      style={{ 
        transitionDelay: isVisible ? '0ms' : `${delay}ms`,
        WebkitTapHighlightColor: 'transparent',
        transform: 'translateZ(0)', // 强制 GPU 加速
      }}
      className={`
        relative overflow-hidden
        bg-white border border-gray-100 shadow-sm
        rounded-xl md:rounded-2xl p-4 md:p-6
        md:transition-[opacity,transform] md:duration-500 md:ease-out
        ${isInteractive 
          ? 'cursor-pointer md:hover:-translate-y-1 active:scale-[0.98] md:active:scale-100' 
          : 'cursor-default'
        }
        ${isVisible ? 'opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-4'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const GlassCard = memo(GlassCardInner);
