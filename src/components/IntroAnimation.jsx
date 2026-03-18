import React, { useEffect, useState } from 'react';
import './IntroAnimation.css';

const helloWords = [
  { lang: 'Java',       code: 'System.out.println("Hello, World!");' },
  { lang: 'Python',     code: 'print("Hola, Mundo!")' },
  { lang: 'JavaScript', code: 'console.log("مرحبا بالعالم");' },
  { lang: 'Golang',     code: 'fmt.Println("Bonjour, Monde!")' },
  { lang: 'Rust',       code: 'println!("Ciao, Mondo!");' },
  { lang: 'C++',        code: 'cout << "Hallo, Welt!" << endl;' },
  { lang: 'Ruby',       code: 'puts "こんにちは世界"' },
  { lang: 'Swift',      code: 'print("Olá, Mundo!")' },
  { lang: 'Kotlin',     code: 'println("Привет, Мир!")' },
  { lang: 'TypeScript', code: 'console.log("안녕하세요 세계");' },
  { lang: 'PHP',        code: 'echo "Hei, Verden!";' },
  { lang: 'Java',       code: 'System.out.println("Hello, World!");' },
];

export default function IntroAnimation({ onDone }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing | flash | fadeout
  const [typed, setTyped] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blink cursor
  useEffect(() => {
    const id = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(id);
  }, []);

  // Type out first line character by character, then flash through the rest
  useEffect(() => {
    if (phase === 'typing') {
      const full = helloWords[0].code;
      let i = 0;
      const id = setInterval(() => {
        i++;
        setTyped(full.slice(0, i));
        if (i >= full.length) {
          clearInterval(id);
          setTimeout(() => setPhase('flash'), 600);
        }
      }, 45);
      return () => clearInterval(id);
    }
  }, [phase]);

  // Flash through languages
  useEffect(() => {
    if (phase !== 'flash') return;
    let i = 1;
    let delay = 200;
    const step = () => {
      setIndex(i);
      setTyped(helloWords[i].code);
      i++;
      if (i < helloWords.length) {
        delay = Math.max(60, delay - 10);
        setTimeout(step, delay);
      } else {
        setTimeout(() => setPhase('fadeout'), 400);
      }
    };
    setTimeout(step, delay);
  }, [phase]);

  // Trigger done callback
  useEffect(() => {
    if (phase === 'fadeout') {
      const id = setTimeout(onDone, 900);
      return () => clearTimeout(id);
    }
  }, [phase, onDone]);

  const current = helloWords[index];

  return (
    <div className={`intro-overlay ${phase === 'fadeout' ? 'intro-fadeout' : ''}`}>
      <div className="intro-window">
        {/* Window chrome */}
        <div className="intro-titlebar">
          <div className="intro-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="intro-filename">HelloWorld.java</span>
          <span />
        </div>

        {/* Line numbers + code */}
        <div className="intro-body">
          <div className="intro-line line-dim">
            <span className="ln">1</span>
            <span className="code-text"><span className="kw">public class</span> HelloWorld {'{'}</span>
          </div>
          <div className="intro-line line-dim">
            <span className="ln">2</span>
            <span className="code-text indent"><span className="kw">public static void</span> main(String[] args) {'{'}</span>
          </div>
          <div className="intro-line line-active">
            <span className="ln">3</span>
            <span className="code-text indent2">
              <span className="method">{typed}</span>
              <span className={`cursor ${cursorVisible ? 'visible' : ''}`}>|</span>
            </span>
          </div>
          <div className="intro-line line-dim">
            <span className="ln">4</span>
            <span className="code-text indent">{'}'}</span>
          </div>
          <div className="intro-line line-dim">
            <span className="ln">5</span>
            <span className="code-text">{'}'}</span>
          </div>

          {/* Lang badge */}
          <div className="lang-badge">
            <span className="lang-label">// lang:</span>
            <span className="lang-name">{current.lang}</span>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="intro-statusbar">
          <span>UTF-8</span>
          <span>{current.lang}</span>
          <span>Ln 3, Col {typed.length + 1}</span>
        </div>
      </div>
    </div>
  );
}
