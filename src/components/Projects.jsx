import React from 'react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';
import DecoRing from './DecoRing';
import helpdeskbot1 from '../img/Helpdeskbot 1.png';
import helpdeskbot2 from '../img/helpdeskbot2.jpg';
import logitrack1 from '../img/logitrack1.png';
import logitrack2 from '../img/logitrack2.png';
import credeasy1 from '../img/credeasy1.jpg';
import credeasy2 from '../img/credeasy2.jpg';
import './Projects.css';

const projectsMeta = [
  { tags: ['Java', 'Spring Boot', 'JWT', 'Swagger'], githubUrl: '#', liveUrl: '#', year: '2026', image: logitrack1, imageB: logitrack2 },
  { tags: ['Git', 'TypeScript', 'Node.js', 'JavaScript'], githubUrl: 'https://github.com/DavidOrozco15/CredEasy---Credenciales.git', liveUrl: '#', year: '2025', image: credeasy1, imageB: credeasy2 },
  { tags: ['n8n', 'Telegram API', 'Google Sheets', 'JavaScript'], githubUrl: 'https://github.com/DavidOrozco15/HelpDeskBot_n8n.git', liveUrl: null, year: '2026', image: helpdeskbot1, imageB: helpdeskbot2 },
];

function Visuals({ project }) {
  if (project.image || project.imageB) {
    return (
      <div className="proj-visuals">
        <div className="fcard fcard-a"><img src={project.image || project.imageB} alt={project.title} /></div>
        <div className="fcard fcard-b">
          {project.imageB ? <img src={project.imageB} alt={`${project.title} secondary`} /> : null}
        </div>
        <div className="fcard fcard-c">
          <div className="fcard-inner fcard-inner--tags">
            {project.tags.slice(0, 3).map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="proj-visuals">
      <div className="fcard fcard-a">
        <div className="fcard-inner">
          <div className="fcard-topbar">
            <span className="fcard-dot" /><span className="fcard-dot" /><span className="fcard-dot" />
          </div>
          <div className="fcard-shimmer-grid">
            {[...Array(9)].map((_, i) => <div key={i} className="fcell" />)}
          </div>
          <div className="fcard-lines">
            <div className="fline fline--long" />
            <div className="fline fline--med" />
            <div className="fline fline--short" />
          </div>
        </div>
      </div>

      <div className="fcard fcard-b">
        <div className="fcard-inner fcard-inner--dark">
          <div className="fcard-shimmer-grid fcard-shimmer-grid--sm">
            {[...Array(4)].map((_, i) => <div key={i} className="fcell" />)}
          </div>
          <div className="fcard-lines">
            <div className="fline fline--med" />
            <div className="fline fline--short" />
          </div>
        </div>
      </div>

      <div className="fcard fcard-c">
        <div className="fcard-inner fcard-inner--tags">
          {project.tags.slice(0, 3).map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectEntry({ project, meta, index }) {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const reversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`proj-entry fade-in ${reversed ? 'anim-right' : 'anim-left'}${inView ? ' visible' : ''}${reversed ? ' proj-entry--rev' : ''}`}
      style={{ transitionDelay: `${0.05 * index}s` }}
    >
      <div className="proj-text">
        <span className="proj-year">{meta.year}</span>
        <h3 className="proj-name">{project.title}</h3>
        <div className="proj-tags">
          {meta.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <p className="proj-desc">{project.description}</p>
        <div className="proj-btns">
          <a
            href={meta.githubUrl}
            className="proj-btn"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <span className="proj-btn-icon">⌥</span>
          </a>
          {meta.liveUrl && (
            <a
              href={meta.liveUrl}
              className="proj-btn proj-btn--live"
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
            >
              ↗
            </a>
          )}
        </div>
      </div>

      <Visuals project={{ ...project, ...meta }} />
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <DecoRing size={800} style={{ top: '8%', right: -320 }} duration={20} delay={-4} />
      <div className="container">
        <div className="projects-header">
          <p className="section-label">{t.projects.sectionLabel}</p>
          <h2 className={`section-title-large fade-in anim-title${inView ? ' visible' : ''}`}>
            {t.projects.title}
          </h2>
        </div>

        <div className="projects-list">
          {t.projects.items.map((project, i) => (
            <ProjectEntry key={i} project={project} meta={projectsMeta[i]} index={i} />
          ))}
        </div>

        <div
          className={`projects-more fade-in${inView ? ' visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <a href="https://github.com/DavidOrozco15" className="view-all-btn" target="_blank" rel="noreferrer">
            <span>{t.projects.viewAll}</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
