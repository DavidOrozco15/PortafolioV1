import React, { useEffect, useRef } from 'react';
import './Background.css';

const COUNT = 72;
const LINK_DIST = 145;
const CURSOR_DIST = 210;
const SPEED = 0.45;

// Code symbols rendered on ~20% of nodes
const CODE_SYMBOLS = ['{', '}', '//', '=>', '<>', '[]', '&&', '++', '()', '01'];

export default function Background({ visible }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    const mouse = { x: -9999, y: -9999 };
    let particles = [];

    const setSize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x:      Math.random() * canvas.width,
        y:      Math.random() * canvas.height,
        vx:     (Math.random() - 0.5) * SPEED,
        vy:     (Math.random() - 0.5) * SPEED,
        symbol: Math.random() < 0.22
                  ? CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)]
                  : null,
      }));
    };

    setSize();
    init();

    const onResize = () => { setSize(); init(); };
    const onMove   = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave  = () => { mouse.x = -9999;      mouse.y = -9999; };

    window.addEventListener('resize',      onResize);
    window.addEventListener('mousemove',   onMove);
    window.addEventListener('mouseleave',  onLeave);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      // Particle–particle links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / LINK_DIST) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Cursor links
        const dm = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
        if (dm < CURSOR_DIST) {
          const t = 1 - dm / CURSOR_DIST;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255,255,255,${t * 0.3})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // Draw cursor node
      if (mouse.x > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.fill();
      }

      // Draw particles
      ctx.font = '9px "Fira Code", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (const p of particles) {
        const dm   = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        const near = dm < CURSOR_DIST;
        const t    = near ? 1 - dm / CURSOR_DIST : 0;

        if (p.symbol) {
          // Code symbol node
          const alpha = 0.12 + t * 0.4;
          ctx.fillStyle = `rgba(166,166,166,${alpha})`;
          ctx.fillText(p.symbol, p.x, p.y);
        } else {
          // Plain dot node
          const radius = 1.5 + t * 2;
          const alpha  = 0.18 + t * 0.55;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize',     onResize);
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={`bg-canvas ${visible ? 'bg-visible' : ''}`} />;
}
