'use client';

import { useCallback, useEffect, useRef } from 'react';
import { cn } from '@/app/lib/utils';

interface SparklesCoreProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore = ({
  id = 'sparkles',
  background = 'transparent',
  minSize = 0.4,
  maxSize = 1.2,
  particleDensity = 120,
  className,
  particleColor = 'rgba(96,165,250,0.6)', // bluish translucent
}: SparklesCoreProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!(ctx instanceof CanvasRenderingContext2D)) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    const numParticles = Math.floor((width * height) / (particleDensity * 100));

    const particles = Array.from({ length: numParticles }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * (maxSize - minSize) + minSize,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      });

      requestAnimationFrame(render);
    };

    render();
  }, [minSize, maxSize, particleDensity, particleColor]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <div
      className={cn(
        'absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none',
        'backdrop-blur-sm',
        className
      )}
      style={{ background }}
    >
      <canvas ref={canvasRef} className="w-full h-full" id={id} />
    </div>
  );
};
