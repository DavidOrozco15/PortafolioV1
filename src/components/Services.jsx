import React from 'react';
import { useInView } from '../hooks/useInView';
import './Services.css';

// ✏️ REPLACE: Your services
const services = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'Desarrollo interfaces web modernas, responsivas y centradas en el usuario utilizando HTML, CSS y JavaScript.',
    tags: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    number: '02',
    title: 'Backend Development',
    description:
      'Desarrollo lógica del lado del servidor, manejo de datos y creación de APIs básicas para aplicaciones web.',
    tags: ['Node.js', 'APIs', 'JSON', 'Python'],
  },
  {
    number: '03',
    title: 'Desarrollo Fullstack',
    description:
      'Construcción de aplicaciones web completas integrando frontend y backend, aplicando buenas prácticas y estructura escalable.',
    tags: ['Fullstack', 'CRUD', 'Web Apps'],
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description:
      'Diseño interfaces atractivas y prototipos en Figma, priorizando la usabilidad y la experiencia del usuario.',
    tags: ['Figma', 'UX', 'Prototyping'],
  },
  {
    number: '05',
    title: 'Automatización de Procesos (n8n)',
    description:
      'Automatización de flujos de trabajo utilizando n8n, integrando APIs, bases de datos y servicios para optimizar procesos y reducir tareas manuales.',
    tags: ['n8n', 'Automation', 'APIs'],
  },
  {
    number: '06',
    title: 'Soporte Técnico IT',
    description:
      'Diagnóstico y solución de problemas en hardware, software y redes, garantizando el correcto funcionamiento de sistemas.',
    tags: ['Hardware', 'Software', 'Networking'],
  },
];

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="services-section" ref={ref}>
      <div className="container">
        <div className="services-header">
          <p className="section-label">Servicios</p>
          <h2 className={`section-title-large fade-in ${inView ? 'visible' : ''}`}>
            Servicios
          </h2>
        </div>

        <div className={`services-grid fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          {services.map((s, i) => (
            <div
              key={s.number}
              className="service-card card"
              style={{ transitionDelay: `${0.05 * i}s` }}
            >
              <span className="service-number">{s.number}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
              <div className="service-tags">
                {s.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
