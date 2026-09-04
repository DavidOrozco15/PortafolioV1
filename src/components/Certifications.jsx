import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';
import './Certifications.css';

const certMeta = [
  { credentialId: 'XXXX-XXXX-XXXX', credentialUrl: '', image: '/src/img/Certificado Analisis de Datos_page-0001.jpg', tags: ['Data Analysis', 'Insights'] },
  { credentialId: 'XXXX-XXXX-XXXX', credentialUrl: '', image: '/src/img/Certificado Power BI_page-0001.jpg', tags: ['Power BI', 'Dashboards', 'Visualization'] },
  { credentialId: 'XXXX-XXXX-XXXX', credentialUrl: '', image: '/src/img/Certificado de SENA_page-0001.jpg', tags: ['Hardware', 'Networking', 'IT Support', 'Systems'] },
  { credentialId: 'XXXX-XXXX-XXXX', credentialUrl: '', image: '/src/img/Certificado Ciberseguridad_page-0001.jpg', tags: ['Cybersecurity', 'Networking', 'Security'] },
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

function CertModal({ cert, onClose, t }) {
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
          <button className="cert-modal-close" onClick={onClose} aria-label={t.certifications.close}>✕</button>
        </div>
        <div className="cert-modal-img-wrap">
          {cert.image ? (
            <img src={cert.image} alt={cert.title} className="cert-modal-img" />
          ) : (
            <div className="cert-modal-no-img">
              <ShieldIcon />
            </div>
          )}
        </div>
        <div className="cert-modal-footer">
          <span className="cert-id">ID: {cert.credentialId}</span>
          {cert.credentialUrl && (
            <a href={cert.credentialUrl} className="cert-verify-link" target="_blank" rel="noreferrer">
              {t.certifications.verifyOfficial}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function CertCard({ cert, meta, index, delay, inView, onVerify, t }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <article
      className={`cert-card fade-in anim-scale ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="cert-bg-num" aria-hidden="true">{num}</span>

      <div className="cert-body">
        <div className="cert-top">
          <div className="cert-badge-row">
            <ShieldIcon />
            <span className="cert-index">{num}</span>
          </div>
          <span className="cert-date">{cert.date}</span>
        </div>

        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>
        <p className="cert-desc">{cert.description}</p>

        <div className="cert-tags">
          {meta.tags.map(t => <span key={t} className="tag cert-tag">{t}</span>)}
        </div>
      </div>

      <div className="cert-footer">
        <span className="cert-id">ID: {meta.credentialId}</span>
        <button className="cert-verify-btn" onClick={() => onVerify({ ...cert, ...meta })}>
          {t.certifications.verify} <span className="cert-arrow">↗</span>
        </button>
      </div>
    </article>
  );
}

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const { t } = useLanguage();
  const perPage = 4;
  const totalPages = Math.ceil(t.certifications.items.length / perPage);
  const start = (page - 1) * perPage;
  const visible = t.certifications.items.slice(start, start + perPage);

  return (
    <section id="certifications" className="certs-section" ref={ref}>
      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} t={t} />}

      <div className="container">
        <div className="certs-header">
          <p className="section-label">{t.certifications.sectionLabel}</p>
          <div className="certs-heading-row">
            <h2 className={`certs-title fade-in anim-title ${inView ? 'visible' : ''}`}>
              {t.certifications.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
              ))}
            </h2>
            <div className="certs-counter">
              <span className="certs-counter-num">{String(t.certifications.items.length).padStart(2, '0')}</span>
              <span className="certs-counter-label">{t.certifications.credentials}</span>
            </div>
          </div>
        </div>

        <div className="certs-grid">
          {visible.map((cert, i) => (
            <CertCard
              key={i}
              cert={cert}
              meta={certMeta[start + i]}
              index={start + i}
              delay={0.07 * i}
              inView={inView}
              onVerify={setSelected}
              t={t}
            />
          ))}
        </div>

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
