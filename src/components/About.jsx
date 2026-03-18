import React from 'react';
import { useInView } from '../hooks/useInView';
import './About.css';

// ✏️ REPLACE: Your skill categories and items
const skillGroups = [
  {
    title: 'Frontend',
    items: 'React / Vue / Angular / TypeScript / Next.js / Tailwind / Redux',
  },
  {
    title: 'Styles',
    items: 'CSS3 / SCSS / Styled-Components / Material UI / Framer Motion',
  },
  {
    title: 'Backend',
    items: 'Node.js / Golang / Python / PostgreSQL / MongoDB / Redis / Docker',
  },
  {
    title: 'DevOps',
    items: 'Git / CI/CD / Docker / Kubernetes / AWS / Linux',
  },
];

// ✏️ REPLACE: Your work experience
const workExperience = [
  {
    period: '2024 – Present',
    duration: '1 yr+',
    company: 'Company Name',
    role: 'Frontend Developer',
    tech: 'React & TypeScript',
    active: true,
  },
  {
    period: '2022 – 2024',
    duration: '2 yrs',
    company: 'Company Name',
    role: 'Full-stack Developer',
    tech: 'React & Node.js',
    active: false,
  },
  {
    period: '2021 – 2022',
    duration: '1 yr',
    company: 'Company Name',
    role: 'Frontend Developer',
    tech: 'JavaScript & Python',
    active: false,
  },
  {
    period: '2020 – 2021',
    duration: '1 yr',
    company: 'Company Name',
    role: 'Junior Developer',
    tech: 'JavaScript & HTML/CSS',
    active: false,
  },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <p className="section-label">About me</p>

        <div className={`about-grid fade-in ${inView ? 'visible' : ''}`}>
          {/* Left: Bio text */}
          <div className="about-bio">
            <p className="about-intro">
              {/* ✏️ REPLACE: Your intro paragraph */}
              Hello! I'm <strong>Your Name</strong>, I'm a <em>full-stack developer</em>.<br />
              More than <strong>X years</strong> of experience.
            </p>
            <p className="about-text">
              {/* ✏️ REPLACE: Your about paragraph */}
              Passionate about building clean, scalable applications. I love solving complex problems and turning ideas into reality through code. Write your detailed bio here, including your background, passion, and what makes you unique as a developer.
            </p>

            {/* Skills grid */}
            <div className="skills-grid">
              {skillGroups.map(g => (
                <div key={g.title} className="skill-card card">
                  <h4 className="skill-title">{g.title}</h4>
                  <p className="skill-items">{g.items}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo placeholder */}
          <div className="about-photo-wrap">
            <div className="about-photo">
              {/* ✏️ REPLACE: <img src="/your-photo.jpg" alt="Your Name" /> */}
              <div className="photo-placeholder">
                <span className="photo-icon">👤</span>
                <span className="photo-hint">Replace with your photo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className={`work-section fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="work-header">
            <h2 className="section-title-large">Work</h2>
          </div>

          <div className="work-list">
            {workExperience.map((job, i) => (
              <div
                key={i}
                className={`work-row ${job.active ? 'work-row-active' : ''}`}
              >
                <div className="work-period">
                  <span className="work-year">{job.period}</span>
                  <span className="work-duration">{job.duration}</span>
                </div>
                <div className="work-company">{job.company}</div>
                <div className="work-role">
                  {job.role} <span className="work-tech">| {job.tech}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="work-total">
            {/* ✏️ REPLACE: Total work experience */}
            Work experience: <strong>X years Y months</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
