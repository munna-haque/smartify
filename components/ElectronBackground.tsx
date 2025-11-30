
import React, { useEffect, useRef } from 'react';

const ElectronBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let animationFrameId: number;
    
    // Vibrant neon colors for particles
    const colors = ['#0ea5e9', '#ec4899', '#22c55e', '#8b5cf6'];
    
    interface Particle {
      x: number;
      y: number;
      vx: number;
      amplitude: number;
      frequency: number;
      phase: number;
      color: string;
      size: number;
    }

    const particles: Particle[] = [];
    
    // Reduce count for mobile
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0.2 + Math.random() * 0.8, // Speed
        amplitude: 20 + Math.random() * 60, // Wave height
        frequency: 0.001 + Math.random() * 0.003, // Wave frequency
        phase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 1.5 + Math.random() * 2.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // --- Draw Particles (Ambient Layer) ---
      particles.forEach(p => {
        // Move horizontally
        p.x += p.vx;
        
        // Sine wave vertical movement
        const waveY = Math.sin(p.x * p.frequency + p.phase) * p.amplitude;
        
        // Wrap around screen
        if (p.x > width + 50) {
          p.x = -50;
          p.y = Math.random() * height;
        }

        const currentY = p.y + waveY;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, currentY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        
        // Subtle glow for particles
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        
        ctx.fill();

        ctx.shadowBlur = 0; // Reset for lines
      });

      // --- Draw Connections ---
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        const y1 = p1.y + Math.sin(p1.x * p1.frequency + p1.phase) * p1.amplitude;

        // Check against next few particles to optimize loop
        for (let j = i + 1; j < particles.length; j++) {
           const p2 = particles[j];
           const y2 = p2.y + Math.sin(p2.x * p2.frequency + p2.phase) * p2.amplitude;
           
           const dx = p1.x - p2.x;
           const dy = y1 - y2;
           const dist = Math.sqrt(dx * dx + dy * dy);

           if (dist < 120) {
             ctx.beginPath();
             // Fade line based on distance
             ctx.strokeStyle = `rgba(160, 174, 192, ${0.15 * (1 - dist / 120)})`; 
             ctx.moveTo(p1.x, y1);
             ctx.lineTo(p2.x, y2);
             ctx.stroke();
           }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
};

export default ElectronBackground;
