import React from 'react';
import { useInView } from '../hooks/useInView';
import './MissionVision.css';

export default function MissionVision() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="mission" className="mvv-section" ref={ref}>
      <div className="deco-circle" style={{ width: 500, height: 500, top: '50%', left: -200, transform: 'translateY(-50%)' }} />
      <div className="container">
        <p className="section-label">Mission, Vision & Values</p>

        <div className={`mvv-grid fade-in ${inView ? 'visible' : ''}`}>
          {/* Mission */}
          <div className="mvv-card card">
            <div className="mvv-icon">🎯</div>
            <h3 className="mvv-title">Mission</h3>
            <p className="mvv-text">
              {/* ✏️ REPLACE: Your professional mission statement */}
              Write your mission statement here. Describe what you aim to accomplish in your professional career and how you create value for clients and organizations through your work as a developer.
            </p>
          </div>

          {/* Vision */}
          <div className="mvv-card card" style={{ transitionDelay: '0.1s' }}>
            <div className="mvv-icon">🔭</div>
            <h3 className="mvv-title">Vision</h3>
            <p className="mvv-text">
              {/* ✏️ REPLACE: Your professional vision statement */}
              Write your vision statement here. Describe where you see yourself in the future, what kind of developer you aspire to be, and the impact you want to have on technology and the world.
            </p>
          </div>

          {/* Values */}
          <div className="mvv-card card" style={{ transitionDelay: '0.2s' }}>
            <div className="mvv-icon">💎</div>
            <h3 className="mvv-title">Values</h3>
            <ul className="mvv-values-list">
              {/* ✏️ REPLACE: Your core professional values */}
              <li><span className="value-dot" />Clean & maintainable code</li>
              <li><span className="value-dot" />Continuous learning</li>
              <li><span className="value-dot" />User-centric development</li>
              <li><span className="value-dot" />Collaboration & teamwork</li>
              <li><span className="value-dot" />Add your value here</li>
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
