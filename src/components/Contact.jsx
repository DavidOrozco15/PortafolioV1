import React from 'react';
import { useInView } from '../hooks/useInView';
import './Contact.css';

const socialLinks = [
  { label: 'Github',    icon: '⌥',  href: '#' },
  { label: 'Linkedin',  icon: 'in', href: '#' },
  { label: 'E-mail',    icon: '✉',  href: 'mailto:juanodavid94@gmail.com' },
  { label: 'Telegram',  icon: '✈',  href: '#' },
  { label: 'Facebook',  icon: 'f',  href: '#' },
  { label: 'Instagram', icon: '◎',  href: '#' },
];

const navLinks = [
  { label: 'Main',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Services',   href: '#services' },
  { label: 'Philosophy', href: '#mission' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="deco-circle" style={{ width: 760, height: 760, top: -120, left: -280 }} />
      <div className="container">

        {/* ── Top row: 3 columns ── */}
        <div className={`contact-inner fade-in ${inView ? 'visible' : ''}`}>

          {/* Col 1 — Name + role */}
          <div className="contact-name-block">
            <h2 className="contact-name">
              <span>David</span>
              <span>Orozco</span>
            </h2>
            <p className="contact-role">Full-stack developer</p>
          </div>

          {/* Col 2 — Navigation */}
          <div className="contact-col">
            <p className="contact-col-label">Navegación</p>
            <nav className="contact-nav">
              {navLinks.map(l => (
                <a key={l.label} href={l.href} className="contact-nav-link">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Site card */}
          <div className="contact-col">
            <p className="contact-col-label">... /Contacto ...</p>
            <div className="contact-site-card card">
              <p className="card-label">Site</p>
              <p className="card-line">Handcrafted by ME /</p>
              <p className="card-line">Designed by You /</p>
              <p className="card-line">Powered by React</p>
            </div>
          </div>
        </div>

        {/* ── Social buttons ── */}
        <div className={`contact-socials fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {socialLinks.map(s => (
            <a key={s.label} href={s.href} className="contact-social-btn" target="_blank" rel="noreferrer">
              <span className="social-btn-icon">{s.icon}</span>
              <span className="social-btn-label">{s.label}</span>
            </a>
          ))}
        </div>

        {/* ── Footer bar ── */}
        <div className={`contact-footer fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <span className="footer-copy">
            © {new Date().getFullYear()} David Orozco. All rights reserved.
          </span>
          <span className="footer-built">Built with React + Vite</span>
        </div>

      </div>
    </section>
  );
}
