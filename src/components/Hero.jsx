import React, { useEffect, useRef } from 'react';
import './Hero.css';

const socialLinks = [
  { label: 'GitHub',    icon: '⌥', href: '#' },
  { label: 'LinkedIn',  icon: 'in', href: '#' },
  { label: 'Telegram',  icon: '✈', href: '#' },
  { label: 'Facebook',  icon: 'f',  href: '#' },
  { label: 'Instagram', icon: '◎',  href: '#' },
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
      {/* Decorative circles */}
      <div className="hero-circle hero-circle-1" />
      <div className="hero-circle hero-circle-2" />

      <div className="container">
        <div className="hero-content">
          {/* Top row: name + Projects button */}
          <div className="hero-top hero-anim fade-in">
            <div className="hero-name">
              {/* ✏️ REPLACE: Your first and last name */}
              <span className="name-first">Your</span>
              <span className="name-last">Name</span>
            </div>
            <a href="#projects" className="hero-cta-btn">
              <span>Projects</span>
              <span className="arrow-icon">→</span>
            </a>
          </div>

          {/* Big title */}
          <div className="hero-title hero-anim fade-in">
            {/* ✏️ REPLACE: Your job title / headline */}
            <span className="title-line-1">Full–stack</span>
            <span className="title-line-2">Developer</span>
          </div>

          {/* Subtitle */}
          <p className="hero-subtitle hero-anim fade-in">
            {/* ✏️ REPLACE: Your professional tagline / goal */}
            My goal is to write <em>maintainable, clean</em> and <em>understandable code</em> to make development enjoyable.
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
