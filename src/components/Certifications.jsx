import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'Análisis de Datos Básico',
    issuer: 'TalentoTech',
    date: 'dic. 2024',
    credentialId: 'XXXX-XXXX-XXXX',
    credentialUrl: '',
    image: '/certs/cert1.png',
    description: 'Introducción al análisis de datos y toma de decisiones basada en información.',
    tags: ['Data Analysis', 'Insights'],
  },
  {
    id: 2,
    title: 'Introducción y Manejo de Power BI',
    issuer: 'MinTIC',
    date: 'abr. 2025',
    credentialId: 'XXXX-XXXX-XXXX',
    credentialUrl: '',
    image: '/certs/cert1.png',
    description: 'Creación de dashboards interactivos y visualización de datos.',
    tags: ['Power BI', 'Dashboards', 'Visualization'],
  },
  {
    id: 3,
    title: 'Técnico en Sistemas',
    issuer: 'SENA',
    date: 'nov. 2019',
    credentialId: 'XXXX-XXXX-XXXX',
    credentialUrl: '',
    image: '/certs/cert1.png',
    description: 'Formación técnica en soporte, mantenimiento de equipos, redes y sistemas informáticos, con enfoque en diagnóstico y solución de problemas.',
    tags: ['Hardware', 'Networking', 'IT Support', 'Systems'],
  },
  {
    id: 4,
    title: 'Network Security',
    issuer: 'Cisco · SENATIC',
    date: 'oct. 2024',
    credentialId: 'XXXX-XXXX-XXXX',
    credentialUrl: '',
    image: '/certs/cert1.png',
    description: 'Fundamentos de ciberseguridad, protección de redes y buenas prácticas en seguridad informática.',
    tags: ['Cybersecurity', 'Networking', 'Security'],
  },
];

function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path
        d="M13 2L3 6V12.5C3 18.3 7.48 23.74 13 25C18.52 23.74 23 18.3 23 12.5V6L13 2Z"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M9 13L11.5 15.5L17 10"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CertModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal" onClick={e => e.stopPropagation()}>
        <div className="cert-modal-header">
          <div className="cert-modal-header-left">
            <ShieldIcon />
            <div>
              <h3 className="cert-modal-title">{cert.title}</h3>
              <p className="cert-modal-issuer">{cert.issuer} · {cert.date}</p>
            </div>
          </div>
          <button className="cert-modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>
        <div className="cert-modal-img-wrap">
          {cert.image ? (
            <img src={cert.image} alt={cert.title} className="cert-modal-img" />
          ) : (
            <div className="cert-modal-no-img">
              <ShieldIcon />
              <p>Agrega la imagen en <code>public/certs/</code> y actualiza el campo <code>image</code></p>
            </div>
          )}
        </div>
        <div className="cert-modal-footer">
          <span className="cert-id">ID: {cert.credentialId}</span>
          {cert.credentialUrl && (
            <a href={cert.credentialUrl} className="cert-verify-link" target="_blank" rel="noreferrer">
              Ver credencial oficial ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function CertCard({ cert, index, delay, inView, onVerify }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <article
      className={`cert-card fade-in ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Large decorative background number */}
      <span className="cert-bg-num" aria-hidden="true">{num}</span>

      <div className="cert-body">
        {/* Top row */}
        <div className="cert-top">
          <div className="cert-badge-row">
            <ShieldIcon />
            <span className="cert-index">{num}</span>
          </div>
          <span className="cert-date">{cert.date}</span>
        </div>

        {/* Title & issuer */}
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>

        {/* Description */}
        <p className="cert-desc">{cert.description}</p>

        {/* Tags */}
        <div className="cert-tags">
          {cert.tags.map(t => <span key={t} className="tag cert-tag">{t}</span>)}
        </div>
      </div>

      {/* Footer */}
      <div className="cert-footer">
        <span className="cert-id">ID: {cert.credentialId}</span>
        <button className="cert-verify-btn" onClick={() => onVerify(cert)}>
          Verify <span className="cert-arrow">↗</span>
        </button>
      </div>
    </article>
  );
}

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const perPage = 4;
  const totalPages = Math.ceil(certifications.length / perPage);
  const start = (page - 1) * perPage;
  const visible = certifications.slice(start, start + perPage);

  return (
    <section id="certifications" className="certs-section" ref={ref}>
      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}

      <div className="container">
        {/* Header */}
        <div className="certs-header">
          <p className="section-label">Certifications</p>
          <div className="certs-heading-row">
            <h2 className={`certs-title fade-in ${inView ? 'visible' : ''}`}>
              Formación y<br />Certificaciones
            </h2>
            <div className="certs-counter">
              <span className="certs-counter-num">{String(certifications.length).padStart(2, '0')}</span>
              <span className="certs-counter-label">credenciales</span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="certs-grid">
          {visible.map((cert, i) => (
            <CertCard
              key={cert.id}
              cert={cert}
              index={start + i}
              delay={0.07 * i}
              inView={inView}
              onVerify={setSelected}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="certs-pagination">
            <button
              className="cert-page-nav"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              ←
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`cert-page-btn ${page === i + 1 ? 'cert-page-btn--active' : ''}`}
                onClick={() => setPage(i + 1)}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
            <button
              className="cert-page-nav"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
