"use client";

import { useEffect, useRef, useCallback, memo, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

// 白色主题背景装饰 - 柔和粒子效果
const BackgroundDecorationsInner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const particles = particlesRef.current;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      else if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      else if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(120, 140, 170, ${p.opacity})`;
      ctx.fill();
    }

    // 桌面端绘制连线
    const len = particles.length;
    for (let i = 0; i < len - 1; i++) {
      const p1 = particles[i];
      for (let j = i + 1; j < len; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < 14400) { // 120^2
          const dist = Math.sqrt(distSq);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(120, 140, 170, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationIdRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // 检测移动端 - 移动端完全不启动 canvas 动画
    const checkMobile = window.innerWidth < 768;
    setIsMobile(checkMobile);
    
    if (checkMobile) return; // 移动端直接返回，不初始化 canvas

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // 初始化粒子
    particlesRef.current = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1.5,
      opacity: Math.random() * 0.25 + 0.15,
    }));

    // 页面可见性控制 - 不可见时暂停动画
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationIdRef.current);
      } else {
        animationIdRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', handleVisibility);
    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationIdRef.current);
    };
  }, [animate]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: 0, willChange: isMobile ? 'auto' : 'transform' }}
    >
      {/* 基础白色背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50/30" />
      
      {/* 粒子画布 - 仅桌面端渲染 */}
      {!isMobile && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}
      
      {/* 光晕效果 - 仅桌面端，使用 GPU 加速 */}
      <div 
        className="hidden md:block absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[128px]" 
        style={{ transform: 'translateZ(0)' }}
      />
      <div 
        className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[128px]" 
        style={{ transform: 'translateZ(0)' }}
      />
    </div>
  );
};

export const BackgroundDecorations = memo(BackgroundDecorationsInner);
