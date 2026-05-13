import React from 'react';
import { useInView } from '../hooks/useInView';
import DecoRing from './DecoRing';
import helpdeskbot1 from '../img/Helpdeskbot 1.png';
import helpdeskbot2 from '../img/helpdeskbot2.jpg';
import patitas1 from '../img/Patitas 1.png';
import patitas2 from '../img/patitas2.jpg';
import credeasy1 from '../img/credeasy1.jpg';
import credeasy2 from '../img/credeasy2.jpg';
import './Projects.css';

// ✏️ REPLACE: Your projects data
const projects = [
  {
    id: 1,
    title: 'Patitas Felices — Plataforma de Adopción.',
    description:
      'Aplicación web moderna y responsiva para una fundación de rescate animal, enfocada en la gestión de adopciones y la visibilidad de mascotas rescatadas. Digitaliza el proceso de adopción, proporcionando una interfaz amigable que facilita la conexión entre rescatistas y posibles adoptantes, mejorando la experiencia de usuario.',
    tags: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/DavidOrozco15/Patitas-Felices---Fundacion-de-Rescate-y-Adopcion-de-Animales.git',
    liveUrl: '#',
    year: '2025',
    image: patitas1,
    imageB: patitas2,
  },
  {
    id: 2,
    title: 'CredEasy — Credenciales de Git facilitadas.',
    description:
      'Extensión publicada para Visual Studio Code diseñada para simplificar y automatizar la configuración de credenciales de Git (nombre y correo) de forma global o local directamente desde el editor. Elimina la necesidad de usar comandos de terminal repetitivos para configurar la identidad del desarrollador, reduciendo errores en los commits y agilizando el inicio de nuevos proyectos.',
    tags: ['Git', 'TypeScript', 'Node.js', 'JavaScript'],
    githubUrl: 'https://github.com/DavidOrozco15/CredEasy---Credenciales.git',
    liveUrl: '#',
    year: '2025',
    image: credeasy1,
    imageB: credeasy2,
  },
  {
    id: 3,
    title: 'HelpDeskBot — Gestión Automatizada de Soporte.',
    description:
      'Sistema inteligente de mesa de ayuda que integra un bot de Telegram con n8n para la gestión, registro y seguimiento de incidentes técnicos en tiempo real. Centraliza el reporte de fallas técnicas de forma intuitiva para el usuario, automatizando el almacenamiento de datos en hojas de cálculo y notificando instantáneamente al equipo de soporte.',
    tags: ['n8n', 'Telegram API', 'Google Sheets', 'JavaScript'],
    githubUrl: 'https://github.com/DavidOrozco15/HelpDeskBot_n8n.git',
    liveUrl: null,
    year: '2026',
    image: helpdeskbot1,
    imageB: helpdeskbot2,
  },
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
      {/* Card A — main, landscape */}
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

      {/* Card B — secondary, portrait */}
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

      {/* Card C — tags */}
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

function ProjectEntry({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const reversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`proj-entry fade-in ${reversed ? 'anim-right' : 'anim-left'}${inView ? ' visible' : ''}${reversed ? ' proj-entry--rev' : ''}`}
      style={{ transitionDelay: `${0.05 * index}s` }}
    >
      <div className="proj-text">
        <span className="proj-year">{project.year}</span>
        <h3 className="proj-name">{project.title}</h3>
        <div className="proj-tags">
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <p className="proj-desc">{project.description}</p>
        <div className="proj-btns">
          <a
            href={project.githubUrl}
            className="proj-btn"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <span className="proj-btn-icon">⌥</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
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

      <Visuals project={project} />
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <DecoRing size={800} style={{ top: '8%', right: -320 }} duration={20} delay={-4} />
      <div className="container">
        <div className="projects-header">
          <p className="section-label">Desarrollos</p>
          <h2 className={`section-title-large fade-in anim-title${inView ? ' visible' : ''}`}>
            Proyectos
          </h2>
        </div>

        <div className="projects-list">
          {projects.map((project, i) => (
            <ProjectEntry key={project.id} project={project} index={i} />
          ))}
        </div>

        <div
          className={`projects-more fade-in${inView ? ' visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          {/* ✏️ REPLACE: Link to your GitHub profile */}
          <a href="https://github.com/DavidOrozco15" className="view-all-btn" target="_blank" rel="noreferrer">
            <span>Ir a Github y ver todos</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
