import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NetworkBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.15';
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    container.appendChild(canvas);
    
    // Generate particles
    const particlesArray: {x: number, y: number, size: number}[] = [];
    const particleCount = Math.min(Math.floor(width * height / 12000), 100);
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * width;
      const y = Math.random() * height;
      
      particlesArray.push({
        x,
        y,
        size
      });
    }
    
    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw particles
      ctx.fillStyle = '#6d28d9';
      ctx.beginPath();
      
      for (const particle of particlesArray) {
        ctx.moveTo(particle.x, particle.y);
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      }
      
      ctx.fill();
      
      // Draw connections
      ctx.strokeStyle = 'rgba(109, 40, 217, 0.1)';
      ctx.lineWidth = 1;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      container.removeChild(canvas);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full z-[-2]" 
      style={{
        backgroundImage: 'radial-gradient(rgba(109, 40, 217, 0.1) 2px, transparent 2px), radial-gradient(rgba(109, 40, 217, 0.1) 2px, transparent 2px)',
        backgroundSize: '50px 50px',
        backgroundPosition: '0 0, 25px 25px',
        animation: 'networkMove 120s linear infinite'
      }}
    >
      <motion.div 
        className="absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-primary opacity-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-primary opacity-10"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 12, delay: 2 }}
      />
    </div>
  );
};

export default NetworkBackground;
