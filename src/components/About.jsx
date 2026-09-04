import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';
import './About.css';
import FotoPerfil from '../img/FotoPerfil.jpg';

const techBadges = [
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'rgba(247,223,30,0.5)', bg: 'rgba(247,223,30,0.07)',
    pos: { top: '-56px', left: '10px' }, delay: '0s', dur: '3.2s',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'rgba(97,218,251,0.5)', bg: 'rgba(97,218,251,0.07)',
    pos: { top: '-28px', right: '-82px' }, delay: '0.5s', dur: '3.6s',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net//gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'rgba(49,120,198,0.5)', bg: 'rgba(49,120,198,0.07)',
    pos: { top: '72px', right: '-84px' }, delay: '0.3s', dur: '3.5s',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'rgba(51,153,51,0.5)', bg: 'rgba(51,153,51,0.07)',
    pos: { top: '185px', right: '-84px' }, delay: '0.7s', dur: '4.2s',
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    color: 'rgba(36,150,237,0.5)', bg: 'rgba(36,150,237,0.07)',
    pos: { top: '298px', right: '-80px' }, delay: '1.1s', dur: '3.4s',
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'rgba(55,118,171,0.5)', bg: 'rgba(55,118,171,0.07)',
    pos: { top: '52px', left: '-82px' }, delay: '0.9s', dur: '4.0s',
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: 'rgba(21,114,182,0.5)', bg: 'rgba(21,114,182,0.07)',
    pos: { top: '175px', left: '-80px' }, delay: '1.4s', dur: '3.8s',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: 'rgba(240,80,50,0.5)', bg: 'rgba(240,80,50,0.07)',
    pos: { bottom: '52px', left: '-82px' }, delay: '1.6s', dur: '3.9s',
  },
  {
    name: 'n8n',
    logo: 'https://cdn.simpleicons.org/n8n/ffffff',
    color: 'rgba(234,75,113,0.5)', bg: 'rgba(234,75,113,0.07)',
    pos: { bottom: '-56px', right: '10px' }, delay: '0.2s', dur: '4.1s',
  },
];

function WorkDetails({ job, t }) {
  return (
    <div className="work-details-grid">
      <div className="work-det-col">
        <p className="work-det-heading">{t.about.functions}</p>
        <ul className="work-det-list">
          {job.functions.map((fn, i) => (
            <li key={i} className="work-det-item" style={{ transitionDelay: `${0.05 * i}s` }}>
              <span className="work-det-dot" />
              {fn}
            </li>
          ))}
        </ul>
      </div>
      <div className="work-det-col">
        <p className="work-det-heading">{t.about.achievements}</p>
        <ul className="work-det-list">
          {job.achievements.map((ach, i) => (
            <li key={i} className="work-det-item" style={{ transitionDelay: `${0.05 * i + 0.1}s` }}>
              <span className="work-det-dot work-det-dot--accent" />
              {ach}
            </li>
          ))}
        </ul>
      </div>
      <div className="work-det-col">
        <p className="work-det-heading">{t.about.projects}</p>
        <div className="work-projects">
          {job.projects.map((proj, i) => (
            <div key={i} className="work-project-card" style={{ transitionDelay: `${0.06 * i + 0.18}s` }}>
              <p className="work-proj-name">{proj.name}</p>
              <p className="work-proj-desc">{proj.desc}</p>
              <div className="work-proj-tags">
                {proj.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkRow({ job, isOpen, onToggle, t }) {
  return (
    <div className={`work-entry${job.active ? ' work-entry--active' : ''}${isOpen ? ' work-entry--open' : ''}`}>
      <button className="work-row" onClick={onToggle} aria-expanded={isOpen}>
        <div className="work-period">
          <span className="work-year">{job.period}</span>
          <span className="work-duration">{job.duration}</span>
        </div>
        <div className="work-company">{job.company}</div>
        <div className="work-role">
          {job.role}<span className="work-tech"> | {job.tech}</span>
        </div>
        <span className="work-chevron">{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`work-accordion${isOpen ? ' work-accordion--open' : ''}`}>
        <div className="work-accordion-inner">
          <WorkDetails job={job} t={t} />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const [openRows, setOpenRows] = useState(new Set());
  const { t } = useLanguage();

  function toggleRow(i) {
    setOpenRows(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">

        {/* ── Heading + Bio (left) | Photo zone (right) ── */}
        <div className="about-layout">

          {/* Left column */}
          <div className="about-left">
            <div className="about-heading">
              <p className="section-label">{t.about.sectionLabel}</p>
              <h2 className={`section-title-large fade-in anim-title ${inView ? 'visible' : ''}`}>{t.about.title}</h2>
            </div>

            <div className={`about-bio fade-in anim-left ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.12s' }}>
              <p className="about-intro" dangerouslySetInnerHTML={{ __html: t.about.intro }} />
              <p className="about-text" dangerouslySetInnerHTML={{ __html: t.about.bio }} />
            </div>
          </div>

          {/* Right column — photo + floating icons */}
          <div className="about-right">
            <div className={`about-photo-zone fade-in anim-right ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.18s' }}>

              {/* Floating tech logo badges */}
              {techBadges.map((tech, i) => (
                <div
                  key={i}
                  className="tech-float"
                  style={{ ...tech.pos, animationDelay: tech.delay, animationDuration: tech.dur }}
                  title={tech.name}
                >
                  <div
                    className="tech-badge"
                    style={{ borderColor: tech.color, backgroundColor: tech.bg }}
                  >
                    <img src={tech.logo} alt={tech.name} />
                  </div>
                </div>
              ))}

              {/* Profile photo */}
              <div className="about-photo">
                <img src={FotoPerfil} alt="David Orozco" className="about-photo-img" />
                <div className="photo-placeholder">
                  <div className="photo-silhouette">
                    <div className="sil-head" />
                    <div className="sil-body" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className={`about-stats fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.28s' }}>
          {t.about.stats.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Skills rows ── */}
        <div className={`skills-rows fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.38s' }}>
          {t.about.skillGroups.map((g, i) => (
            <div key={g.title} className="skill-row" style={{ transitionDelay: `${0.42 + 0.06 * i}s` }}>
              <span className="skill-row-num">0{i + 1}</span>
              <span className="skill-row-title">{g.title}</span>
              <span className="skill-row-items">{g.items}</span>
            </div>
          ))}
        </div>

        {/* ── Work Experience ── */}
        <div className={`work-section fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.55s' }}>
          <div className="work-header">
            <h2 className="section-title-large">{t.about.trajectory}</h2>
          </div>
          <div className="work-list">
            {t.about.workExperience.map((job, i) => (
              <WorkRow
                key={i}
                job={job}
                isOpen={openRows.has(i)}
                onToggle={() => toggleRow(i)}
                t={t}
              />
            ))}
          </div>
          <div className="work-total">
            {t.about.experience} <strong>{t.about.experienceYears}</strong>
          </div>
        </div>

      </div>
    </section>
  );
}
