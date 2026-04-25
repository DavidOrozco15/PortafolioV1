import React from 'react';
import { useInView } from '../hooks/useInView';
import DecoRing from './DecoRing';
import './Projects.css';

// ✏️ REPLACE: Your projects data
const projects = [
  {
    id: 1,
    title: 'Project Name 1',
    description:
      'Brief description of your project. What problem does it solve? What was your role? What impact did it have?',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    githubUrl: '#',
    liveUrl: '#',
    year: '2024',
    // image: '/projects/project1.png',
  },
  {
    id: 2,
    title: 'Project Name 2',
    description:
      'Brief description of your second project. Highlight key features and technologies used.',
    tags: ['Golang', 'TypeScript', 'Redis', 'Kubernetes'],
    githubUrl: '#',
    liveUrl: '#',
    year: '2024',
    // image: '/projects/project2.png',
  },
  {
    id: 3,
    title: 'Project Name 3',
    description:
      'Brief description of your third project. What makes it interesting or challenging?',
    tags: ['React Native', 'TypeScript', 'iOS', 'Redux'],
    githubUrl: '#',
    liveUrl: null,
    year: '2023',
    // image: '/projects/project3.png',
  },
];

function Visuals({ project }) {
  if (project.image) {
    return (
      <div className="proj-visuals">
        <div className="fcard fcard-a"><img src={project.image} alt={project.title} /></div>
        <div className="fcard fcard-b" />
        <div className="fcard fcard-c" />
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
      className={`proj-entry fade-in${inView ? ' visible' : ''}${reversed ? ' proj-entry--rev' : ''}`}
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
          <p className="section-label">Projects</p>
          <h2 className={`section-title-large fade-in${inView ? ' visible' : ''}`}>
            Projects
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
          <a href="#" className="view-all-btn" target="_blank" rel="noreferrer">
            <span>View all on GitHub</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
