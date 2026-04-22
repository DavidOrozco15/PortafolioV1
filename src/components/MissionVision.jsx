import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import './MissionVision.css';

const tabs = [
  {
    id: 'mision',
    num: '01',
    title: 'Misión',
    quote: 'Tecnología con propósito.',
    content:
      'Mi misión es desarrollar soluciones tecnológicas eficientes y funcionales que resuelvan problemas reales, combinando desarrollo web, automatización y soporte IT para generar valor en cada proyecto. Busco crear aplicaciones intuitivas, optimizadas y escalables, enfocadas en mejorar la experiencia del usuario y la eficiencia de los procesos.',
    type: 'text',
  },
  {
    id: 'vision',
    num: '02',
    title: 'Visión',
    quote: 'Impacto real, a escala.',
    content:
      'Convertirme en un desarrollador fullstack altamente capacitado, especializado en la creación de sistemas completos y automatizados, integrando tecnologías modernas y herramientas como n8n. Aspiro a participar en proyectos innovadores que generen impacto real, optimizando procesos y aportando soluciones tecnológicas a nivel empresarial.',
    highlights: [
      'Especialización en sistemas full-stack',
      'Integración de automatización inteligente',
      'Impacto a nivel empresarial',
    ],
    type: 'vision',
  },
  {
    id: 'valores',
    num: '03',
    title: 'Valores',
    quote: 'Lo que me define como profesional.',
    values: [
      { label: 'Calidad del código',          desc: 'Código limpio, mantenible y bien documentado.' },
      { label: 'Aprendizaje constante',        desc: 'Siempre explorando nuevas tecnologías y metodologías.' },
      { label: 'Solución de problemas',        desc: 'Enfoque analítico y creativo ante cada desafío.' },
      { label: 'Experiencia de usuario',       desc: 'El usuario final es siempre la prioridad.' },
      { label: 'Automatización',               desc: 'Optimizar procesos para liberar tiempo humano.' },
      { label: 'Colaboración',                 desc: 'El mejor código se escribe en equipo.' },
    ],
    type: 'values',
  },
  {
    id: 'objetivos',
    num: '04',
    title: 'Objetivos',
    quote: 'El camino tiene dirección.',
    content:
      'En los próximos años busco especializarme en arquitecturas de software modernas, dominar el ecosistema de automatización con n8n, y contribuir a proyectos de alto impacto que combinen desarrollo web con inteligencia artificial.',
    tags: [
      'Fullstack Senior',
      'Automatización con n8n',
      'Arquitectura de Software',
      'Proyectos con IA',
      'Open Source',
      'Liderazgo técnico',
    ],
    type: 'objectives',
  },
];

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

  return (
    <section id="mission" className="mvv-section" ref={ref}>
      <div className="deco-circle" style={{ width: 680, height: 680, top: '50%', left: -260, transform: 'translateY(-50%)' }} />

      <div className="container">
        {/* ── Heading ── */}
        <div className="mvv-heading">
          <p className="section-label">Misión, Visión &amp; Valores</p>
          <h2 className={`section-title-large fade-in ${inView ? 'visible' : ''}`}>Filosofía</h2>
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
            <Panel tab={tabs[active]} key={tabs[active].id} />
          </div>
        </div>
      </div>
    </section>
  );
}
