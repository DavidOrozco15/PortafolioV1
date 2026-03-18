import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import './Projects.css';

// ✏️ REPLACE: Your projects data
const projects = [
  {
    id: 1,
    title: 'Project Name 1',
    description:
      'Brief description of your project. What problem does it solve? What was your role? What impact did it have?',
    longDescription:
      'Full description of your project. Describe the architecture, challenges you overcame, technologies used, and results achieved.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    githubUrl: '#',   // ✏️ REPLACE: GitHub URL
    liveUrl: '#',     // ✏️ REPLACE: Live demo URL
    // image: '/projects/project1.png',  // ✏️ REPLACE: Uncomment and add your image
    year: '2024',
  },
  {
    id: 2,
    title: 'Project Name 2',
    description:
      'Brief description of your second project. Highlight key features and technologies used.',
    longDescription:
      'Full description of your second project. Describe the architecture, challenges you overcame, and results achieved.',
    tags: ['Golang', 'TypeScript', 'Redis', 'Kubernetes'],
    githubUrl: '#',
    liveUrl: '#',
    // image: '/projects/project2.png',
    year: '2024',
  },
  {
    id: 3,
    title: 'Project Name 3',
    description:
      'Brief description of your third project. What makes it interesting or challenging?',
    longDescription:
      'Full description of your third project.',
    tags: ['React Native', 'TypeScript', 'iOS', 'Redux'],
    githubUrl: '#',
    liveUrl: null,
    // image: '/projects/project3.png',
    year: '2023',
  },
];

function ProjectCard({ project, delay }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`project-card fade-in ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Image area */}
      <div className="project-image">
        {/* ✏️ REPLACE: Uncomment and add your project image
        <img src={project.image} alt={project.title} />
        */}
        <div className="project-image-placeholder">
          <div className="placeholder-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="placeholder-cell" />
            ))}
          </div>
          <span className="placeholder-label">Add project screenshot</span>
        </div>

        {/* Action buttons overlay */}
        <div className="project-actions">
          <a href={project.githubUrl} className="project-action-btn" target="_blank" rel="noreferrer" title="GitHub">
            <span className="gh-icon">⌥</span>
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} className="project-action-btn project-action-arrow" target="_blank" rel="noreferrer" title="Live Demo">
              ↗
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="project-content">
        {/* Left: info */}
        <div className="project-info">
          <span className="project-year">{project.year}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="project-tags">
            {project.tags.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="deco-circle" style={{ width: 600, height: 600, top: '20%', right: -250 }} />
      <div className="container">
        <div className="projects-header">
          <p className="section-label">Projects</p>
          <h2 className={`section-title-large fade-in ${inView ? 'visible' : ''}`}>
            Projects
          </h2>
        </div>

        <div className="projects-list">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={0.1 * i} />
          ))}
        </div>

        {/* Add more projects hint */}
        <div className={`projects-more fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
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
