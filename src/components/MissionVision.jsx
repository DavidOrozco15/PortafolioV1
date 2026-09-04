import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';
import DecoRing from './DecoRing';
import './MissionVision.css';

function MisionVisual() {
  return (
    <svg viewBox="0 0 200 200" className="mvv-svg" aria-hidden="true">
      <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="30s" repeatCount="indefinite"/>
        <circle cx="100" cy="100" r="68" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1" strokeDasharray="8 5"/>
      </g>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="20s" repeatCount="indefinite"/>
        <circle cx="100" cy="100" r="44" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="5 7"/>
      </g>
      <circle cx="100" cy="100" r="22" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="12s" repeatCount="indefinite"/>
        <circle cx="168" cy="100" r="4" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      </g>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="180 100 100" to="-180 100 100" dur="8s" repeatCount="indefinite"/>
        <circle cx="144" cy="100" r="3" fill="rgba(255,255,255,0.3)"/>
      </g>
      <circle cx="100" cy="100" r="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" strokeWidth="1"/>
      <circle cx="100" cy="100" r="4.5" fill="rgba(255,255,255,0.7)">
        <animate attributeName="r" values="3.5;5.5;3.5" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
      </circle>
      <text x="100" y="105" textAnchor="middle" fontFamily="'Fira Code',monospace" fontSize="12" fill="rgba(255,255,255,0.13)" fontWeight="500">{'</>'}</text>
      <text x="13" y="36" fontFamily="'Fira Code',monospace" fontSize="15" fill="rgba(255,255,255,0.07)">{'{'}</text>
      <text x="174" y="178" fontFamily="'Fira Code',monospace" fontSize="15" fill="rgba(255,255,255,0.07)">{'}'}</text>
      <circle cx="100" cy="12" r="2.5" fill="rgba(255,255,255,0.18)">
        <animate attributeName="opacity" values="0.18;0.55;0.18" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="188" cy="100" r="2" fill="rgba(255,255,255,0.12)">
        <animate attributeName="opacity" values="0.12;0.42;0.12" dur="3.5s" begin="1s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="188" r="2" fill="rgba(255,255,255,0.1)">
        <animate attributeName="opacity" values="0.1;0.38;0.1" dur="5s" begin="2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}

function VisionVisual() {
  return (
    <svg viewBox="0 0 200 200" className="mvv-svg" aria-hidden="true">
      <line x1="100" y1="100" x2="44" y2="54" stroke="rgba(255,255,255,0.09)" strokeWidth="1">
        <animate attributeName="stroke-opacity" values="0.09;0.24;0.09" dur="4s" repeatCount="indefinite"/>
      </line>
      <line x1="100" y1="100" x2="160" y2="56" stroke="rgba(255,255,255,0.09)" strokeWidth="1">
        <animate attributeName="stroke-opacity" values="0.09;0.24;0.09" dur="3.5s" begin="0.6s" repeatCount="indefinite"/>
      </line>
      <line x1="100" y1="100" x2="166" y2="150" stroke="rgba(255,255,255,0.09)" strokeWidth="1">
        <animate attributeName="stroke-opacity" values="0.09;0.24;0.09" dur="5s" begin="1.2s" repeatCount="indefinite"/>
      </line>
      <line x1="100" y1="100" x2="40" y2="150" stroke="rgba(255,255,255,0.09)" strokeWidth="1">
        <animate attributeName="stroke-opacity" values="0.09;0.24;0.09" dur="4.2s" begin="1.8s" repeatCount="indefinite"/>
      </line>
      <line x1="100" y1="100" x2="100" y2="30" stroke="rgba(255,255,255,0.06)" strokeWidth="1">
        <animate attributeName="stroke-opacity" values="0.06;0.18;0.06" dur="3.8s" begin="0.4s" repeatCount="indefinite"/>
      </line>
      <line x1="100" y1="100" x2="175" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="1">
        <animate attributeName="stroke-opacity" values="0.06;0.18;0.06" dur="4.5s" begin="2s" repeatCount="indefinite"/>
      </line>
      <circle cx="100" cy="100" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1">
        <animate attributeName="r" values="16;86;16" dur="7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.45;0;0.45" dur="7s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1">
        <animate attributeName="r" values="16;80;16" dur="7s" begin="2.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0;0.3" dur="7s" begin="2.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="44" cy="54" r="5.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="160" cy="56" r="5.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" begin="0.6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="166" cy="150" r="5.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" begin="1.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="40" cy="150" r="5.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="4.2s" begin="1.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="30" r="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.13)" strokeWidth="1">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.8s" begin="0.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="175" cy="100" r="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.13)" strokeWidth="1">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4.5s" begin="2s" repeatCount="indefinite"/>
      </circle>
      <circle r="2.5" fill="rgba(255,255,255,0.6)">
        <animateMotion dur="2.8s" repeatCount="indefinite"><mpath href="#mvv-vl1"/></animateMotion>
      </circle>
      <path id="mvv-vl1" d="M 100,100 L 44,54" fill="none"/>
      <circle r="2.5" fill="rgba(255,255,255,0.5)">
        <animateMotion dur="3.2s" begin="0.9s" repeatCount="indefinite"><mpath href="#mvv-vl2"/></animateMotion>
      </circle>
      <path id="mvv-vl2" d="M 100,100 L 160,56" fill="none"/>
      <circle r="2.5" fill="rgba(255,255,255,0.5)">
        <animateMotion dur="3.6s" begin="1.8s" repeatCount="indefinite"><mpath href="#mvv-vl3"/></animateMotion>
      </circle>
      <path id="mvv-vl3" d="M 100,100 L 166,150" fill="none"/>
      <circle r="2" fill="rgba(255,255,255,0.4)">
        <animateMotion dur="2.5s" begin="0.5s" repeatCount="indefinite"><mpath href="#mvv-vl4"/></animateMotion>
      </circle>
      <path id="mvv-vl4" d="M 100,100 L 40,150" fill="none"/>
      <circle cx="100" cy="100" r="9" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5">
        <animate attributeName="r" values="9;11;9" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="100" r="4" fill="rgba(255,255,255,0.75)">
        <animate attributeName="r" values="3.5;5;3.5" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}

function Panel({ tab }) {
  return (
    <div className="mvv-panel" key={tab.id}>
      <p className="mvv-panel-quote">"{tab.quote}"</p>

      {tab.type === 'text' && (
        <p className="mvv-panel-text">{tab.content}</p>
      )}

      {tab.type === 'vision' && (
        <>
          <p className="mvv-panel-text">{tab.content}</p>
          <ul className="mvv-highlights">
            {tab.highlights.map((h, i) => (
              <li key={i} className="mvv-highlight-item" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
                <span className="mvv-highlight-line" />
                {h}
              </li>
            ))}
          </ul>
        </>
      )}

      {tab.type === 'values' && (
        <ul className="mvv-values-grid">
          {tab.values.map((v, i) => (
            <li key={i} className="mvv-value-item" style={{ animationDelay: `${0.06 * i}s` }}>
              <span className="mvv-value-num">0{i + 1}</span>
              <div>
                <p className="mvv-value-label">{v.label}</p>
                <p className="mvv-value-desc">{v.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {tab.type === 'objectives' && (
        <>
          <p className="mvv-panel-text">{tab.content}</p>
          <div className="mvv-tags">
            {tab.tags.map((t, i) => (
              <span key={i} className="tag mvv-tag" style={{ animationDelay: `${0.08 * i}s` }}>{t}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function MissionVision() {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const [active, setActive] = useState(0);
  const { t } = useLanguage();

  const tabs = t.mission.tabs.map((tab, i) => {
    const originals = [
      { type: 'text' },
      { type: 'vision', highlights: tab.highlights },
      { type: 'values', values: tab.values },
      { type: 'objectives', tags: tab.tags },
    ];
    return { ...tab, ...originals[i] };
  });

  return (
    <section id="mission" className="mvv-section" ref={ref}>
      <DecoRing size={680} style={{ top: '50%', left: -260, transform: 'translateY(-50%)' }} duration={14} delay={-2} />

      <div className="container">
        {/* ── Heading ── */}
        <div className="mvv-heading">
          <p className="section-label">{t.mission.sectionLabel}</p>
          <h2 className={`section-title-large fade-in anim-title ${inView ? 'visible' : ''}`}>{t.mission.title}</h2>
        </div>

        {/* ── Tabs layout ── */}
        <div className={`mvv-layout fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>

          {/* Left: tab list */}
          <nav className="mvv-tab-list">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                className={`mvv-tab${active === i ? ' mvv-tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="mvv-tab-num">{tab.num}</span>
                <span className="mvv-tab-label">{tab.title}</span>
                <span className="mvv-tab-arrow">→</span>
              </button>
            ))}
          </nav>

          {/* Right: content panel */}
          <div className="mvv-panel-wrap">
            <div className="mvv-panel-header">
              <span className="mvv-panel-num">{tabs[active].num}</span>
              <h3 className="mvv-panel-title">{tabs[active].title}</h3>
            </div>
            <div className="mvv-panel-body">
              <div className="mvv-panel-content">
                <Panel tab={tabs[active]} key={tabs[active].id} />
              </div>
              {tabs[active].id === 'mision' && (
                <div className="mvv-visual" key="mision-visual">
                  <MisionVisual />
                </div>
              )}
              {tabs[active].id === 'vision' && (
                <div className="mvv-visual" key="vision-visual">
                  <VisionVisual />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
