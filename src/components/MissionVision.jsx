import React from 'react';
import { useInView } from '../hooks/useInView';
import './MissionVision.css';

export default function MissionVision() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="mission" className="mvv-section" ref={ref}>
      <div className="deco-circle" style={{ width: 500, height: 500, top: '50%', left: -200, transform: 'translateY(-50%)' }} />
      <div className="container">
        <p className="section-label">Mision, Vision & Valores</p>

        <div className={`mvv-grid fade-in ${inView ? 'visible' : ''}`}>
          {/* Mission */}
          <div className="mvv-card card">
            <div className="mvv-icon">🎯</div>
            <h3 className="mvv-title">Mision</h3>
            <p className="mvv-text">
              {/* ✏️ REPLACE: Your professional mission statement */}
              Mi misión es desarrollar soluciones tecnológicas eficientes y funcionales que resuelvan problemas reales, combinando desarrollo web, automatización y soporte IT para generar valor en cada proyecto.
              Busco crear aplicaciones intuitivas, optimizadas y escalables, enfocadas en mejorar la experiencia del usuario y la eficiencia de los procesos.
            </p>
          </div>

          {/* Vision */}
          <div className="mvv-card card" style={{ transitionDelay: '0.1s' }}>
            <div className="mvv-icon">🔭</div>
            <h3 className="mvv-title">Vision</h3>
            <p className="mvv-text">
              {/* ✏️ REPLACE: Your professional vision statement */}
              Convertirme en un desarrollador fullstack altamente capacitado, especializado en la creación de sistemas completos y automatizados, integrando tecnologías modernas y herramientas como n8n.
              Aspiro a participar en proyectos innovadores que generen impacto real, optimizando procesos y aportando soluciones tecnológicas a nivel empresarial.
            </p>
          </div>

          {/* Values */}
          <div className="mvv-card card" style={{ transitionDelay: '0.2s' }}>
            <div className="mvv-icon">💎</div>
            <h3 className="mvv-title">Values</h3>
            <ul className="mvv-values-list">
              {/* ✏️ REPLACE: Your core professional values */}
              <li><span className="value-dot" />Calidad y mantenibilidad del código</li>
              <li><span className="value-dot" />Aprendizaje constante</li>
              <li><span className="value-dot" />Enfoque en la solución de problemas</li>
              <li><span className="value-dot" />Experiencia centrada en el usuario</li>
              <li><span className="value-dot" />Optimización y automatización de procesos</li>
              <li><span className="value-dot" />Colaboración y trabajo en equipo</li>
            </ul>
          </div>

          {/* Professional Objectives */}
          <div className="mvv-card card mvv-objectives" style={{ transitionDelay: '0.3s' }}>
            <div className="mvv-icon">🚀</div>
            <h3 className="mvv-title">Professional Objectives</h3>
            <p className="mvv-text">
              {/* ✏️ REPLACE: Your short-term and long-term professional objectives */}
              Describe your professional objectives here. What do you want to achieve in the next 1-3 years? What technologies do you want to master? What roles or positions are you targeting?
            </p>
            <div className="objectives-tags">
              {/* ✏️ REPLACE: Add relevant objective tags */}
              <span className="tag">Objective 1</span>
              <span className="tag">Objective 2</span>
              <span className="tag">Objective 3</span>
              <span className="tag">Add more...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
