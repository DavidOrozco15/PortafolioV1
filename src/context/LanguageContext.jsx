import React, { createContext, useState, useCallback, useEffect } from 'react';
import translations from '../i18n';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'es';
  });

  const [animPhase, setAnimPhase] = useState('idle'); // idle | fading-out | fading-in

  const toggleLanguage = useCallback(() => {
    if (animPhase !== 'idle') return;

    // Phase 1: fade out
    setAnimPhase('fading-out');

    setTimeout(() => {
      // Phase 2: switch language while invisible
      setLang(prev => {
        const next = prev === 'es' ? 'en' : 'es';
        localStorage.setItem('portfolio-lang', next);
        return next;
      });

      // Phase 3: fade in
      requestAnimationFrame(() => {
        setAnimPhase('fading-in');
        setTimeout(() => setAnimPhase('idle'), 400);
      });
    }, 350);
  }, [animPhase]);

  const setLanguage = useCallback((newLang) => {
    if (animPhase !== 'idle' || lang === newLang) return;

    setAnimPhase('fading-out');

    setTimeout(() => {
      setLang(newLang);
      localStorage.setItem('portfolio-lang', newLang);

      requestAnimationFrame(() => {
        setAnimPhase('fading-in');
        setTimeout(() => setAnimPhase('idle'), 400);
      });
    }, 350);
  }, [animPhase, lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage, setLanguage, animPhase }}>
      {children}
    </LanguageContext.Provider>
  );
}
