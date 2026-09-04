import React, { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import './Navbar.css';

export default function Navbar() {
  const { lang, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.certifications, href: '#certifications' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo / Name */}
        <a href="#hero" className="navbar-logo">
          <span className="logo-first">David</span>
          <span className="logo-last">Orozco</span>
        </a>

        {/* Desktop nav */}
        <ul className="navbar-links">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Language toggle */}
        <div className="navbar-right">
          <button
            className={`lang-toggle ${lang === 'es' ? '' : 'lang-inactive'}`}
            onClick={() => lang !== 'es' && toggleLanguage()}
          >
            Es
          </button>
          <span className="lang-sep">/</span>
          <button
            className={`lang-toggle ${lang === 'en' ? '' : 'lang-inactive'}`}
            onClick={() => lang !== 'en' && toggleLanguage()}
          >
            En
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        {navLinks.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
