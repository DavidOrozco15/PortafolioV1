import React, { useEffect, useRef } from 'react';
import DecoRing from './DecoRing';
import './Hero.css';

const socialLinks = [
  { label: 'GitHub',    icon: '⌥', href: 'https://github.com/DavidOrozco15' },
  { label: 'LinkedIn',  icon: 'in', href: 'https://www.linkedin.com/in/davidorozco15/' },
  { label: 'Whatsapp',  icon: '✈',  href: 'https://wa.me/573053705478' },
  { label: 'Facebook',  icon: 'f',  href: 'https://www.facebook.com/david.orozco.884769' },
  { label: 'Instagram', icon: '◎',  href: 'https://www.instagram.com/juanoo.999' },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.hero-anim');
    items.forEach((item, i) => {
      setTimeout(() => item.classList.add('visible'), 120 * i);
    });
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Decorative rings */}
      <DecoRing size={720} style={{ top: '50%', right: -260, transform: 'translateY(-50%)' }} duration={16} delay={0} />
      <DecoRing size={380} style={{ bottom: 40, left: -120 }} duration={10} delay={-5} />

      <div className="container">
        <div className="hero-content">
          {/* Top row: name + Projects button */}
          <div className="hero-top hero-anim fade-in">
            <div className="hero-name">
              {/* ✏️ REPLACE: Your first and last name */}
              <span className="name-first">David</span>
              <span className="name-last">Orozco</span>
            </div>
            <a href="#projects" className="hero-cta-btn">
              <span>Proyectos</span>
              <span className="arrow-icon">→</span>
            </a>
          </div>

          {/* Big title */}
          <div className="hero-title hero-anim fade-in anim-title">
            {/* ✏️ REPLACE: Your job title / headline */}
            <span className="title-line-1">Full–stack</span>
            <span className="title-line-2">Developer</span>
          </div>

          {/* Subtitle */}
          <p className="hero-subtitle hero-anim fade-in">
            {/* ✏️ REPLACE: Your professional tagline / goal */}
            Mi meta es desarrollar código <em>limpio, legible</em> y <em>fácil de mantener</em> logrando que el proceso de desarrollo sea gratificante.
          </p>

          {/* Social links */}
          <div className="hero-socials hero-anim fade-in">
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} className="social-pill" target="_blank" rel="noreferrer">
                <span className="social-icon">{s.icon}</span>
                <span className="social-label">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint hero-anim fade-in">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
