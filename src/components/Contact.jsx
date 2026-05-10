import React from 'react';
import { useInView } from '../hooks/useInView';
import DecoRing from './DecoRing';
import './Contact.css';

const socialLinks = [
  { label: 'Github',    icon: '⌥',  href: 'https://github.com/DavidOrozco15' },
  { label: 'Linkedin',  icon: 'in', href: 'https://www.linkedin.com/in/davidorozco15/' },
  { label: 'E-mail',    icon: '✉',  href: 'mailto:juanodavid94@gmail.com' },
  { label: 'Whatsapp',  icon: '✈',  href: 'https://wa.me/573053705478' },
  { label: 'Facebook',  icon: 'f',  href: 'https://www.facebook.com/david.orozco.884769' },
  { label: 'Instagram', icon: '◎',  href: 'https://www.instagram.com/juanoo.999' },
];

const navLinks = [
  { label: 'Inicio',       href: '#hero' },
  { label: 'Sobre mi',      href: '#about' },
  { label: 'Proyectos',   href: '#projects' },
  { label: 'Servicios',   href: '#services' },
  { label: 'Filosofia', href: '#mission' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <DecoRing size={760} style={{ top: -120, left: -280 }} duration={18} delay={-7} />
      <div className="container">

        {/* ── Top row: 3 columns ── */}
        <div className={`contact-inner fade-in anim-left ${inView ? 'visible' : ''}`}>

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
              <p className="card-label">Mi numero de Contacto</p>
              <p className="card-line">+57 3142076728 /</p>
              <p className="card-line">+57 3053705478 /</p>
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
            © {new Date().getFullYear()} David Orozco. Todos los derechos reservados.
          </span>
          <span className="footer-built">Creado con React + Vite</span>
        </div>

      </div>
    </section>
  );
}
