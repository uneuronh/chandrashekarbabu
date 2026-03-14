'use client';

import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    const stars: { x: number; y: number; radius: number; opacity: number; speed: number; twinkleSpeed: number; color: string }[] = [];
    const numStars = window.innerWidth < 768 ? 200 : 500;
    
    // Core colors from the premium palette (mostly white/blue with occasional amber)
    const colors = [
      'rgba(255, 255, 255,', // white
      'rgba(255, 255, 255,', // white
      'rgba(255, 255, 255,', // white
      'rgba(200, 220, 255,', // pale blue
      'rgba(255, 230, 200,', // pale amber
    ];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.1,
        opacity: Math.random(),
        speed: (Math.random() * 0.05) + 0.01,
        twinkleSpeed: (Math.random() * 0.02) + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient (very dark blue/black to simulate space)
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#02040a'); // deep dark blue-black
      gradient.addColorStop(1, '#0a0a0a'); // almost black
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle nebula clouds (optional, adds to the premium feel)
      // This is simplified for performance
      ctx.globalCompositeOperation = 'screen';

      for (const star of stars) {
        // Move star upwards very slowly to simulate gentle floating/falling through space
        star.y -= star.speed;
        
        // Wrap around
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        // Twinkle effect
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color} ${Math.max(0.1, Math.min(1, star.opacity))})`;
        ctx.fill();
        
        // Add glow to larger stars
        if (star.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color} ${Math.max(0, star.opacity * 0.2)})`;
          ctx.fill();
        }
      }
      
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: '#02040a' }}
    />
  );
}
