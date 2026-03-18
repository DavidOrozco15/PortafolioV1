import React, { useState, useCallback } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './styles/app.css';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  const handleIntroDone = useCallback(() => {
    setIntroDone(true);
  }, []);

  return (
    <>
      {/* Animación de intro */}
      {!introDone && <IntroAnimation onDone={handleIntroDone} />}

      {/* Portfolio principal */}
      <div className={`portfolio-root ${introDone ? 'portfolio-visible' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <MissionVision />
          <Services />
          <Projects />
          <Certifications />
          <Contact />
        </main>
      </div>
    </>
  );
}
