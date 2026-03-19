import React from 'react';
import { useInView } from '../hooks/useInView';
import './Contact.css';

// ✏️ REPLACE: Your social links and contact info
const socialLinks = [
  { label: 'Github',    icon: '⌥',  href: '#' },   // ✏️ REPLACE href with your GitHub URL
  { label: 'Linkedin',  icon: 'in', href: '#' },   // ✏️ REPLACE
  { label: 'E-mail',    icon: '✉',  href: 'mailto:your@email.com' }, // ✏️ REPLACE email
  { label: 'Telegram',  icon: '✈',  href: '#' },   // ✏️ REPLACE
  { label: 'Facebook',  icon: 'f',  href: '#' },   // ✏️ REPLACE
  { label: 'Instagram', icon: '◎',  href: '#' },   // ✏️ REPLACE
];

const navLinks = [
  { label: 'Main',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Articles', href: '#certifications' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="deco-circle" style={{ width: 560, height: 560, top: -80, left: -200 }} />
      <div className="container">
        <div className={`contact-inner fade-in ${inView ? 'visible' : ''}`}>

          {/* Left: Big name */}
          <div className="contact-name-block">
            {/* ✏️ REPLACE: Your full name */}
            <h2 className="contact-name">
              <span>David</span>
              <span>Orozco</span>
            </h2>
            <p className="contact-role">
              {/* ✏️ REPLACE: Your job title */}
              Full-stack<br />developer
            </p>
          </div>

          {/* Right: Contacts */}
          <div className="contact-info">
            <p className="section-label">Contacts</p>

            {/* Nav links */}
            <nav className="contact-nav">
              {navLinks.map(l => (
                <a key={l.label} href={l.href} className="contact-nav-link">
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Site info card */}
            <div className="contact-site-card card">
              <p className="card-label">Site</p>
              {/* ✏️ REPLACE: Adjust these credits */}
              <p className="card-line">Handcrafted by ME /</p>
              <p className="card-line">Designed by You /</p>
              <p className="card-line">Powered by React</p>
            </div>
          </div>
        </div>

        {/* Social buttons row */}
        <div className={`contact-socials fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {socialLinks.map(s => (
            <a key={s.label} href={s.href} className="contact-social-btn" target="_blank" rel="noreferrer">
              <span className="social-btn-icon">{s.icon}</span>
              <span className="social-btn-label">{s.label}</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className={`contact-footer fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <span className="footer-copy">
            {/* ✏️ REPLACE: Your name */}
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </span>
          <span className="footer-built">
            Built with React + Vite
          </span>
        </div>
      </div>
    </section>
  );
}
