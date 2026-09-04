import React, { useState, useCallback } from 'react';
import { LanguageProvider, LanguageContext } from './context/LanguageContext';
import IntroAnimation from './components/IntroAnimation';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './styles/app.css';

function Portfolio() {
  const [introDone, setIntroDone] = useState(false);

  const handleIntroDone = useCallback(() => {
    setIntroDone(true);
  }, []);

  return (
    <LanguageContext.Consumer>
      {({ animPhase }) => (
        <>
          {!introDone && <IntroAnimation onDone={handleIntroDone} />}

          <div className={`portfolio-root ${introDone ? 'portfolio-visible' : ''} ${animPhase === 'fading-out' ? 'lang-fade-out' : ''} ${animPhase === 'fading-in' ? 'lang-fade-in' : ''}`}>
            <Background visible={introDone} />
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
      )}
    </LanguageContext.Consumer>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}
