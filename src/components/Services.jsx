import React from 'react';
import { useInView } from '../hooks/useInView';
import './Services.css';

// ✏️ REPLACE: Your services
const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Description of your web development service. Explain what you build, the technologies you use, and the value you deliver.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    number: '02',
    title: 'Backend Development',
    description:
      'Description of your backend development service. APIs, databases, microservices — describe what you offer.',
    tags: ['Node.js', 'Golang', 'PostgreSQL'],
  },
  {
    number: '03',
    title: 'Mobile Development',
    description:
      'Description of your mobile development service. Cross-platform or native, describe your mobile capabilities.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description:
      'Description of your design service. Wireframing, prototyping, design systems — describe your design skills.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
  },
  {
    number: '05',
    title: 'Consulting & Code Review',
    description:
      'Description of your consulting service. Architecture reviews, code audits, technical consulting.',
    tags: ['Architecture', 'Code Review', 'Mentoring'],
  },
  {
    number: '06',
    title: 'Add Your Service',
    description:
      '✏️ Replace this with your own service offering. Describe what you do and what value you provide to clients.',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
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
            Services
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
