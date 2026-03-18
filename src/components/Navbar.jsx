import React, { useEffect, useState } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo / Name */}
        <a href="#hero" className="navbar-logo">
          {/* ✏️ REPLACE: Your name or logo here */}
          <span className="logo-first">Your</span>
          <span className="logo-last">Name</span>
        </a>

        {/* Desktop nav */}
        <ul className="navbar-links">
          {navLinks.map(l => (
            <li key={l.label}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Language toggle */}
        <div className="navbar-right">
          <button className="lang-toggle">En</button>
          <span className="lang-sep">/</span>
          <button className="lang-toggle lang-inactive">Es</button>
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
            key={l.label}
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
