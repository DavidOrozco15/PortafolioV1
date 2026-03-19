import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'Curso en Creación y Diseño de Páginas Web',          // ✏️ Nombre del certificado
    issuer: 'Tecnologico de Monterrey VEC',        // ✏️ Quien lo emite
    date: 'Expedición: abr. 2025',                    // ✏️ Fecha
    credentialId: 'XXXX-XXXX-XXXX',       // ✏️ ID de la credencial
    credentialUrl: '',                     // ✏️ URL externa (opcional)
    image: '/certs/cert1.png',             // ✏️ Imagen en public/certs/
    description: 'Descripción breve.',
    tags: ['Skill 1', 'Skill 2'],
  },
  
  // ✏️ Copia este bloque para agregar más certificados
];

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
          <div>
            <h3 className="cert-modal-title">{cert.title}</h3>
            <p className="cert-modal-issuer">{cert.issuer} · {cert.date}</p>
          </div>
          <button className="cert-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="cert-modal-img-wrap">
          {cert.image ? (
            <img src={cert.image} alt={cert.title} className="cert-modal-img" />
          ) : (
            <div className="cert-modal-no-img">
              <span>🏅</span>
              <p>Pon la imagen en <code>public/certs/</code> y actualiza el campo <code>image</code></p>
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

function CertCard({ cert, delay, inView, onVerify }) {
  return (
    <div className={`cert-card card fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="cert-top">
        <div className="cert-logo">
          {cert.icon ? <img src={cert.icon} alt={cert.issuer} /> : <span className="cert-logo-placeholder">🏅</span>}
        </div>
        <span className="cert-date">{cert.date}</span>
      </div>
      <h3 className="cert-title">{cert.title}</h3>
      <p className="cert-issuer">{cert.issuer}</p>
      <p className="cert-desc">{cert.description}</p>
      <div className="cert-tags">
        {cert.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <div className="cert-footer">
        <span className="cert-id">ID: {cert.credentialId}</span>
        <button className="cert-verify" onClick={() => onVerify(cert)}>Verify ↗</button>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const perPage = 4;
  const totalPages = Math.ceil(certifications.length / perPage);
  const visible = certifications.slice(0, page * perPage);

  return (
    <section id="certifications" className="certs-section" ref={ref}>
      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
      <div className="container">
        <div className="certs-header">
          <p className="section-label">Certifications</p>
          <h2 className={`section-title-large fade-in ${inView ? 'visible' : ''}`}>Certifications</h2>
        </div>
        <div className="certs-layout">
          <div className="certs-pagination-side">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} className={`page-dot ${page === i + 1 ? 'page-dot-active' : ''}`} onClick={() => setPage(i + 1)}>{i + 1}</button>
            ))}
            <button className="page-dot page-dot-arrow" onClick={() => setPage(p => Math.min(p + 1, totalPages))}>↓</button>
          </div>
          <div className="certs-grid">
            {visible.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} delay={0.08 * i} inView={inView} onVerify={setSelected} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
