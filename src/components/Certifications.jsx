import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import './Certifications.css';

// ✏️ REPLACE: Your certifications
const certifications = [
  {
    id: 1,
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialId: 'XXXX-XXXX-XXXX',   // ✏️ REPLACE: Your credential ID
    credentialUrl: '#',                  // ✏️ REPLACE: Verification URL
    description: 'Brief description of what this certification covers and why it is relevant to your work.',
    tags: ['Skill 1', 'Skill 2', 'Skill 3'],
    // icon: '/certs/aws.svg',           // ✏️ REPLACE: Certification logo path
  },
  {
    id: 2,
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialId: 'XXXX-XXXX-XXXX',
    credentialUrl: '#',
    description: 'Brief description of what this certification covers and why it is relevant to your work.',
    tags: ['Skill 1', 'Skill 2'],
  },
  {
    id: 3,
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialId: 'XXXX-XXXX-XXXX',
    credentialUrl: '#',
    description: 'Brief description of what this certification covers and why it is relevant to your work.',
    tags: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  {
    id: 4,
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialId: 'XXXX-XXXX-XXXX',
    credentialUrl: '#',
    description: 'Add more certifications as needed.',
    tags: ['Skill 1'],
  },
];

function CertCard({ cert, delay, inView }) {
  return (
    <div
      className={`cert-card card fade-in ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Top: icon + number */}
      <div className="cert-top">
        <div className="cert-logo">
          {/* ✏️ REPLACE: <img src={cert.icon} alt={cert.issuer} /> */}
          <span className="cert-logo-placeholder">🏅</span>
        </div>
        <span className="cert-date">{cert.date}</span>
      </div>

      {/* Title & issuer */}
      <h3 className="cert-title">{cert.title}</h3>
      <p className="cert-issuer">{cert.issuer}</p>
      <p className="cert-desc">{cert.description}</p>

      {/* Tags */}
      <div className="cert-tags">
        {cert.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

      {/* Footer: credential id + verify link */}
      <div className="cert-footer">
        <span className="cert-id">ID: {cert.credentialId}</span>
        <a href={cert.credentialUrl} className="cert-verify" target="_blank" rel="noreferrer">
          Verify ↗
        </a>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [page, setPage] = useState(1);
  const perPage = 4;
  const totalPages = Math.ceil(certifications.length / perPage);
  const visible = certifications.slice(0, page * perPage);

  return (
    <section id="certifications" className="certs-section" ref={ref}>
      <div className="container">
        <div className="certs-header">
          <p className="section-label">Certifications</p>
          <h2 className={`section-title-large fade-in ${inView ? 'visible' : ''}`}>
            Certifications
          </h2>
        </div>

        {/* Page indicators (left side) */}
        <div className="certs-layout">
          <div className="certs-pagination-side">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`page-dot ${page === i + 1 ? 'page-dot-active' : ''}`}
                onClick={() => setPage(i + 1)}
                aria-label={`Page ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
            <button className="page-dot page-dot-arrow" onClick={() => setPage(p => Math.min(p + 1, totalPages))}>
              ↓
            </button>
          </div>

          {/* Grid */}
          <div className="certs-grid">
            {visible.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} delay={0.08 * i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
