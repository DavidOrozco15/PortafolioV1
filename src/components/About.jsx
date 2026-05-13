import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import './About.css';

// ✏️ REPLACE: Your skill categories and items
const skillGroups = [
  { title: 'Frontend', items: 'React / TypeScript / JavaScript / Tailwind CSS / Next.js' },
  { title: 'UI/UX Design',   items: 'Figma / Framer Motion / CSS3 / SCSS / Responsive Design' },
  { title: 'Backend & Automation',  items: 'Python / Node.js / n8n / SQL / MySQL / Java' },
  { title: 'Workflow & Tools',   items: 'Git / GitHub / Scrum / Telegram Bot API / WhatsApp Business API' },
];

// ✏️ REPLACE: Your key stats
const stats = [
  { value: '24/7',  label: 'Innovación\ncontinua' },
  { value: '10+', label: 'Proyectos\ncompletados' },
  { value: '4+',   label: 'Áreas de\ntecnología' },
  { value: '∞',   label: 'Líneas de\ncódigo' },
];

// ✏️ REPLACE: Your work experience — fill in functions, achievements and projects for each entry
const workExperience = [
  {
    period: '2025 – Presente', duration: '1 año',
    company: 'CampusLands', role: 'Full-stack Developer', tech: 'Python, JavaScript, Java, MYSQL, Scrum, Springboot, React, n8n, Git, Github, Html y Css',
    active: true,
    functions: [
      'Desarrollo y estructuración de proyectos escalables de software.',
      'Integración con APIs REST y servicios backend',
      'Aplicación de Inteligencia Artificial para la optimización del desarrollo y código.',
      'Participación en code reviews y metodologías ágiles (Scrum)',
      'Gestión de bases de datos relacionales mediante SQL y MySQL para el soporte de lógica de negocio compleja.',
    ],
    achievements: [
      'Ejecución exitosa de proyectos bajo el marco de trabajo Scrum, garantizando la entrega continua de valor y la adaptabilidad del equipo.',
      'Optimización del tiempo de desarrollo en un 30% mediante la implementación de prompts avanzados y herramientas de IA aplicadas al código.',
      'Liderazgo en procesos de revisión de código y control de versiones utilizando Git y GitHub para asegurar la integridad de los repositorios colaborativos.',
    ],
    projects: [
      { name: 'Ecosistema de Automatización IT', desc: 'Diseño de flujos de trabajo que conectan múltiples servicios (APIs) para la gestión automática de incidentes y soporte técnico.', tags: ['Json', 'n8n', 'SQL'] },
      { name: 'Landing Pages de Alto Impacto', desc: 'Creación de sitios web optimizados desde el prototipado en Figma hasta el despliegue final, asegurando adaptabilidad total en dispositivos móviles.', tags: ['React', 'Tailwind CSS', 'Figma'] },
    ],
  },
  {
    period: '2024 – Presente', duration: '2+ años',
    company: 'Freelance', role: 'Full-stack Developer', tech: 'HTML, CSS, JavaScript, React y Figma.',
    active: false,
    functions: [
      'Diseño de interfaces, prototipado de landing pages y estructuración de sitios web modernos utilizando Figma.',
      'Desarrollo de aplicaciones web en el Front-End usando HTML, CSS, JavaScript y React.',
      'Creación de flujos de automatización e integración de bases de datos mediante n8n y Python.',
      'Configuración de bots conversacionales para la optimización de procesos de atención al cliente.',
    ],
    achievements: [
      'Publicación exitosa de una extensión propia de gestión de credenciales (CredEasy) en el Marketplace.',
      'Automatización de pedidos y soporte técnico mediante la integración de la API de WhatsApp y Telegram.',
      'Entrega de Diseños de sitios web con un diseño profesional, elegante y enfocado en una excelente experiencia de usuario (UX).',
    ],
    projects: [
      { name: 'Herramientas de Automatización', desc: 'Desarrollo de HelpDeskBot para automatizar PQRS', tags: ['n8n', 'JavaScript', 'Telegram API'] },
      { name: 'Neon Bucaramanga & Web Apps', desc: 'Landing pages responsivas con efectos visuales avanzados y estructuración de portafolio web interactivo.', tags: ['React', 'JavaScript', 'Figma'] },
    ],
  },
  {
    period: '2024 – 2024', duration: '6 Meses',
    company: 'Accedo Technologies', role: 'Helpdesk IT | Hardware & Soporte | Practicante', tech: 'Hardware',
    active: false,
    functions: [
      'Diagnóstico y solución de problemas de hardware, software y conectividad.',
      'Administración de cuentas de usuario en Active Directory y sistemas similares.',
    ],
    achievements: [
      'Ejecución de mantenimiento preventivo y correctivo en computadoras y periféricos corporativos.',
      'Implementación y refuerzo de medidas de seguridad informática.',
    ],
    projects: [
      { name: 'Soporte Corporativo', desc: 'Configuración, instalación y actualización continua de sistemas operativos para múltiples usuarios.', tags: ['Windows'] },
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
              <p className="section-label">Quien soy?</p>
              <h2 className={`section-title-large fade-in anim-title ${inView ? 'visible' : ''}`}>Sobre mi</h2>
            </div>

            <div className={`about-bio fade-in anim-left ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.12s' }}>
              <p className="about-intro">
                {/* ✏️ REPLACE */}
                ¡Hola! Soy <strong>David Orozco</strong>, Soy <em>Desarrollador Junior Full Stack.</em>.
                
              </p>
              <p className="about-text">
                {/* ✏️ REPLACE */}
                Me especializo en crear soluciones digitales integrales que fusionan un diseño elegante con arquitecturas escalables. Mi enfoque combina sólidos conocimientos en hardware con el desarrollo de aplicaciones modernas, utilizando <strong><em>JavaScript, React y Tailwind CSS</em></strong> para construir interfaces dinámicas y de alto rendimiento.

En el backend, gestiono la lógica de negocio y bases de datos con <strong><em>Python, SQL y Java</em></strong>. Además, potencio la eficiencia operativa mediante automatizaciones avanzadas con n8n y bots de soporte.

Mi trabajo se basa en la resolución de problemas, el liderazgo bajo metodología Scrum y la creación de tecnología con un alto nivel de innovación.
              </p>
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
                <img src="../src/img/FotoPerfil.jpg" alt="David Orozco" />
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
            <h2 className="section-title-large">Trayectoria</h2>
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
            Experiencia: <strong>1+ año</strong>
          </div>
        </div>

      </div>
    </section>
  );
}
