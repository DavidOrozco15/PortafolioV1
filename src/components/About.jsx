import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import './About.css';

// ✏️ REPLACE: Your skill categories and items
const skillGroups = [
  { title: 'Frontend', items: 'React / Vue / Angular / TypeScript / Next.js / Tailwind / Redux' },
  { title: 'Styles',   items: 'CSS3 / SCSS / Styled-Components / Material UI / Framer Motion' },
  { title: 'Backend',  items: 'Node.js / Golang / Python / PostgreSQL / MongoDB / Redis / Docker' },
  { title: 'DevOps',   items: 'Git / CI/CD / Docker / Kubernetes / AWS / Linux' },
];

// ✏️ REPLACE: Your key stats
const stats = [
  { value: '5+',  label: 'Años de\nexperiencia' },
  { value: '10+', label: 'Proyectos\ncompletados' },
  { value: '4',   label: 'Áreas de\ntecnología' },
  { value: '∞',   label: 'Líneas de\ncódigo' },
];

// ✏️ REPLACE: Your work experience — fill in functions, achievements and projects for each entry
const workExperience = [
  {
    period: '2025 – Present', duration: '1 yr+',
    company: 'CampusLands', role: 'Full-stack Developer', tech: 'React & TypeScript',
    active: true,
    functions: [
      'Desarrollo de interfaces responsivas con React y TypeScript',
      'Integración con APIs REST y servicios backend',
      'Implementación de componentes reutilizables y design systems',
      'Participación en code reviews y metodologías ágiles (Scrum)',
    ],
    achievements: [
      'Mejora del 30% en rendimiento de carga de la aplicación',
      'Implementación de sistema de autenticación con JWT',
      'Reducción del 40% en bugs reportados en producción',
    ],
    projects: [
      { name: 'Plataforma E-learning', desc: 'Sistema de gestión de cursos y estudiantes', tags: ['React', 'TypeScript', 'Node.js'] },
      { name: 'Dashboard Analytics', desc: 'Panel de métricas y reportes en tiempo real', tags: ['React', 'Charts.js', 'REST API'] },
    ],
  },
  {
    period: '2022 – 2024', duration: '2 yrs',
    company: 'Company Name', role: 'Full-stack Developer', tech: 'React & Node.js',
    active: false,
    functions: [
      'Desarrollo y mantenimiento de aplicaciones web full-stack',
      'Diseño e implementación de APIs RESTful con Node.js',
      'Gestión de bases de datos relacionales y no relacionales',
      'Optimización de consultas y rendimiento del servidor',
    ],
    achievements: [
      'Migración exitosa de arquitectura monolítica a microservicios',
      'Reducción del tiempo de respuesta de APIs en un 50%',
      'Liderazgo técnico en equipo de 4 desarrolladores',
    ],
    projects: [
      { name: 'E-commerce Platform', desc: 'Tienda en línea con carrito y pasarela de pagos', tags: ['React', 'Node.js', 'MongoDB'] },
      { name: 'CRM Interno', desc: 'Gestión de clientes y seguimiento de ventas', tags: ['React', 'PostgreSQL', 'Express'] },
    ],
  },
  {
    period: '2021 – 2022', duration: '1 yr',
    company: 'Company Name', role: 'Frontend Developer', tech: 'JavaScript & Python',
    active: false,
    functions: [
      'Maquetación de interfaces a partir de diseños en Figma',
      'Desarrollo de scripts de automatización con Python',
      'Integración de servicios de terceros vía API',
      'Mantenimiento y mejora de código existente',
    ],
    achievements: [
      'Automatización de procesos que redujo tiempos manuales en 60%',
      'Implementación de diseño responsive para 3 productos principales',
    ],
    projects: [
      { name: 'Landing Pages', desc: 'Páginas de aterrizaje optimizadas para conversión', tags: ['HTML', 'CSS', 'JavaScript'] },
      { name: 'Bot de Reportes', desc: 'Automatización de generación de reportes con Python', tags: ['Python', 'Pandas', 'API'] },
    ],
  },
  {
    period: '2020 – 2021', duration: '1 yr',
    company: 'Company Name', role: 'Junior Developer', tech: 'JavaScript & HTML/CSS',
    active: false,
    functions: [
      'Desarrollo de componentes UI en JavaScript vanilla',
      'Corrección de bugs y mejoras en código existente',
      'Soporte técnico IT y mantenimiento de equipos',
      'Documentación de procesos internos',
    ],
    achievements: [
      'Primer despliegue a producción sin incidencias',
      'Implementación de mejoras de accesibilidad en sitio web',
    ],
    projects: [
      { name: 'Sitio Corporativo', desc: 'Rediseño del sitio web institucional de la empresa', tags: ['HTML', 'CSS', 'JavaScript'] },
    ],
  },
];

const techBadges = [
  // Arriba del marco
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'rgba(247,223,30,0.5)', bg: 'rgba(247,223,30,0.07)',
    pos: { top: '-56px', left: '10px' }, delay: '0s', dur: '3.2s',
  },
  // Derecha del marco
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'rgba(97,218,251,0.5)', bg: 'rgba(97,218,251,0.07)',
    pos: { top: '-28px', right: '-82px' }, delay: '0.5s', dur: '3.6s',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
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
  // Izquierda del marco
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
  // Abajo del marco
  {
    name: 'n8n',
    logo: 'https://cdn.simpleicons.org/n8n/ffffff',
    color: 'rgba(234,75,113,0.5)', bg: 'rgba(234,75,113,0.07)',
    pos: { bottom: '-56px', right: '10px' }, delay: '0.2s', dur: '4.1s',
  },
];

function WorkDetails({ job }) {
  return (
    <div className="work-details-grid">
      <div className="work-det-col">
        <p className="work-det-heading">Funciones</p>
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
        <p className="work-det-heading">Logros</p>
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
        <p className="work-det-heading">Proyectos</p>
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

function WorkRow({ job, isOpen, onToggle }) {
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
          <WorkDetails job={job} />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const [openRows, setOpenRows] = useState(new Set());

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
              <p className="section-label">Sobre mi</p>
              <h2 className={`section-title-large fade-in ${inView ? 'visible' : ''}`}>About</h2>
            </div>

            <div className={`about-bio fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.12s' }}>
              <p className="about-intro">
                {/* ✏️ REPLACE */}
                Hello! I'm <strong>David Orozco</strong>, I'm a <em>full-stack developer</em>.<br />
                More than <strong>5 years</strong> of experience.
              </p>
              <p className="about-text">
                {/* ✏️ REPLACE */}
                Soy Desarrollador Full Stack con un enfoque integral que combina sólidos
                conocimientos en hardware, desarrollo de software y creación de aplicaciones
                modernas. Mi stack principal incluye JavaScript para el desarrollo de
                interfaces dinámicas y Python con SQL para la gestión eficiente de lógica
                de negocio y bases de datos.
              </p>
            </div>
          </div>

          {/* Right column — photo + floating icons */}
          <div className="about-right">
            <div className={`about-photo-zone fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.18s' }}>

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
                {/* ✏️ REPLACE: <img src="/your-photo.jpg" alt="David Orozco" /> */}
                <div className="photo-placeholder">
                  <div className="photo-silhouette">
                    <div className="sil-head" />
                    <div className="sil-body" />
                  </div>
                  <span className="photo-hint">Tu foto aquí</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className={`about-stats fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.28s' }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Skills rows ── */}
        <div className={`skills-rows fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.38s' }}>
          {skillGroups.map((g, i) => (
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
            <h2 className="section-title-large">Work</h2>
          </div>
          <div className="work-list">
            {workExperience.map((job, i) => (
              <WorkRow
                key={i}
                job={job}
                isOpen={openRows.has(i)}
                onToggle={() => toggleRow(i)}
              />
            ))}
          </div>
          <div className="work-total">
            Work experience: <strong>5+ años</strong>
          </div>
        </div>

      </div>
    </section>
  );
}
