import React from 'react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';
import './Services.css';

/* ── SVG illustration per service ── */

function AnimFrontend() {
  return (
    <svg viewBox="0 0 100 76" className="svc-svg" aria-hidden="true" fill="none">
      <rect x="4" y="4" width="92" height="68" rx="6"
        stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="rgba(255,255,255,0.04)"/>
      <rect x="4" y="4" width="92" height="17" rx="6" fill="rgba(255,255,255,0.07)"/>
      <rect x="4" y="17" width="92" height="4" fill="rgba(255,255,255,0.04)"/>
      <circle cx="16" cy="12.5" r="3" fill="rgba(255,255,255,0.28)"/>
      <circle cx="25" cy="12.5" r="3" fill="rgba(255,255,255,0.18)"/>
      <circle cx="34" cy="12.5" r="3" fill="rgba(255,255,255,0.1)"/>
      <rect x="14" y="30" width="44" height="2.5" rx="1.25" className="svc-fe-l1"/>
      <rect x="20" y="37" width="30" height="2.5" rx="1.25" className="svc-fe-l2"/>
      <rect x="20" y="44" width="48" height="2.5" rx="1.25" className="svc-fe-l3"/>
      <rect x="14" y="51" width="36" height="2.5" rx="1.25" className="svc-fe-l4"/>
      <rect x="20" y="58" width="22" height="2.5" rx="1.25" className="svc-fe-l5"/>
      <rect x="68" y="44" width="1.5" height="9" rx="0.75" className="svc-fe-cursor"/>
    </svg>
  );
}

function AnimBackend() {
  return (
    <svg viewBox="0 0 100 76" className="svc-svg" aria-hidden="true" fill="none">
      {[6, 28, 50].map((y, i) => (
        <g key={i}>
          <rect x="8" y={y} width="84" height="18" rx="4"
            stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" fill="rgba(255,255,255,0.04)"/>
          <circle cx="22" cy={y + 9} r="4.5"
            fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
          <circle cx="22" cy={y + 9} r="2.5" className={`svc-be-led svc-be-led-${i}`}/>
          <rect x="34" y={y + 6} width="38" height="2" rx="1" fill="rgba(255,255,255,0.12)"/>
          <rect x="34" y={y + 10} width="26" height="2" rx="1" fill="rgba(255,255,255,0.08)"/>
          <rect x="79" y={y + 5} width="7" height="8" rx="1.5" fill="rgba(255,255,255,0.07)"/>
        </g>
      ))}
    </svg>
  );
}

function AnimFullstack() {
  return (
    <svg viewBox="0 0 100 76" className="svc-svg" aria-hidden="true" fill="none">
      <rect x="22" y="4" width="56" height="16" rx="4"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.06)"/>
      <rect x="30" y="9" width="24" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
      <rect x="30" y="14" width="16" height="2" rx="1" fill="rgba(255,255,255,0.15)"/>
      <line x1="50" y1="20" x2="50" y2="30"
        stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="3,2"/>
      <rect x="14" y="30" width="72" height="16" rx="4"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/>
      <rect x="22" y="35" width="32" height="2" rx="1" fill="rgba(255,255,255,0.22)"/>
      <rect x="22" y="40" width="22" height="2" rx="1" fill="rgba(255,255,255,0.12)"/>
      <line x1="50" y1="46" x2="50" y2="56"
        stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="3,2"/>
      <rect x="22" y="56" width="56" height="16" rx="4"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.06)"/>
      <rect x="30" y="61" width="20" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="30" y="66" width="28" height="2" rx="1" fill="rgba(255,255,255,0.12)"/>
      <circle cx="50" cy="20" r="2.5" fill="rgba(255,255,255,0.9)" className="svc-fs-dot"/>
    </svg>
  );
}

function AnimUIUX() {
  return (
    <svg viewBox="0 0 100 76" className="svc-svg" aria-hidden="true" fill="none">
      <rect x="6" y="6" width="62" height="64" rx="3"
        stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
      <rect x="6" y="6" width="62" height="5" fill="rgba(255,255,255,0.06)"/>
      <rect x="6" y="6" width="5" height="64" fill="rgba(255,255,255,0.06)"/>
      <line x1="37" y1="15" x2="37" y2="61"
        stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="2,3"/>
      <line x1="14" y1="38" x2="62" y2="38"
        stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="2,3"/>
      <circle cx="37" cy="38" r="18"
        stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" className="svc-uiux-circle"/>
      <g className="svc-uiux-cursor">
        <path d="M78 20 L86 38 L81 36.5 L79 44 L75 36.5 L70 38 Z"
          fill="rgba(255,255,255,0.82)" stroke="rgba(0,0,0,0.22)" strokeWidth="0.8"/>
      </g>
    </svg>
  );
}

function AnimN8N() {
  return (
    <svg viewBox="0 0 100 76" className="svc-svg" aria-hidden="true" fill="none">
      <line x1="14" y1="20" x2="14" y2="29"
        stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2,2"/>
      <circle cx="14" cy="17" r="3.5"
        stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.05)"/>
      <rect x="4" y="29" width="20" height="18" rx="5"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.06)"/>
      <rect x="8" y="35" width="10" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
      <rect x="8" y="40" width="7" height="2" rx="1" fill="rgba(255,255,255,0.15)"/>
      <line x1="24" y1="38" x2="40" y2="38"
        stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <polyline points="37,34 41,38 37,42"
        stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="none"/>
      <rect x="40" y="29" width="20" height="18" rx="5"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.06)"/>
      <rect x="44" y="35" width="10" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
      <rect x="44" y="40" width="7" height="2" rx="1" fill="rgba(255,255,255,0.15)"/>
      <line x1="60" y1="38" x2="76" y2="38"
        stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <polyline points="73,34 77,38 73,42"
        stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="none"/>
      <rect x="76" y="29" width="20" height="18" rx="5"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.06)"/>
      <rect x="80" y="35" width="10" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
      <rect x="80" y="40" width="7" height="2" rx="1" fill="rgba(255,255,255,0.15)"/>
      <line x1="86" y1="47" x2="86" y2="56"
        stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2,2"/>
      <circle cx="86" cy="59" r="3.5"
        stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.05)"/>
      <circle cx="24" cy="38" r="3" fill="rgba(255,255,255,0.85)" className="svc-n8n-dot"/>
    </svg>
  );
}

function AnimIT() {
  return (
    <svg viewBox="0 0 100 76" className="svc-svg" aria-hidden="true" fill="none">
      <circle cx="50" cy="38" r="29" className="svc-it-ring-1"/>
      <circle cx="50" cy="38" r="21" className="svc-it-ring-2"/>
      <rect x="34" y="22" width="32" height="32" rx="5"
        stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="rgba(255,255,255,0.06)"/>
      <rect x="39" y="27" width="22" height="22" rx="2"
        stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="rgba(255,255,255,0.04)"/>
      <line x1="41" y1="17" x2="41" y2="22" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="47" y1="17" x2="47" y2="22" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="53" y1="17" x2="53" y2="22" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="59" y1="17" x2="59" y2="22" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="41" y1="54" x2="41" y2="59" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="47" y1="54" x2="47" y2="59" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="53" y1="54" x2="53" y2="59" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="59" y1="54" x2="59" y2="59" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="29" y1="30" x2="34" y2="30" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="29" y1="38" x2="34" y2="38" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="29" y1="46" x2="34" y2="46" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="66" y1="30" x2="71" y2="30" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="66" y1="38" x2="71" y2="38" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="66" y1="46" x2="71" y2="46" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
      <line x1="39" y1="38" x2="61" y2="38" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <line x1="50" y1="27" x2="50" y2="49" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    </svg>
  );
}

const animMap = {
  frontend: AnimFrontend,
  backend:  AnimBackend,
  fullstack: AnimFullstack,
  uiux:     AnimUIUX,
  n8n:      AnimN8N,
  it:       AnimIT,
};

const animKeys = ['frontend', 'backend', 'fullstack', 'uiux', 'n8n', 'it'];

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section id="services" className="services-section" ref={ref}>
      <div className="container">
        <div className="services-header">
          <p className="section-label">{t.services.sectionLabel}</p>
          <h2 className={`section-title-large fade-in anim-title ${inView ? 'visible' : ''}`}>
            {t.services.title}
          </h2>
        </div>

        <div className="services-grid">
          {t.services.items.map((s, i) => {
            const Anim = animMap[animKeys[i]];
            return (
              <div
                key={s.number}
                className={`svc-wrap fade-in anim-scale ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.1 + 0.1 * i}s` }}
              >
                <div className="service-card">
                  <div className="service-front">
                    <span className="service-number">{s.number}</span>
                    <div className="svc-anim-zone">
                      <Anim />
                    </div>
                    <h3 className="service-title">{s.title}</h3>
                  </div>
                  <div className="service-back">
                    <span className="service-number">{s.number}</span>
                    <h3 className="service-title">{s.title}</h3>
                    <p className="service-desc">{s.description}</p>
                    <div className="service-tags">
                      {s.tags.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
