import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import en from '../translations/en';
import fr from '../translations/fr';

const translations = { en, fr };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang');
    return saved === 'fr' ? 'fr' : 'en';
  });

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'fr' : 'en'));

  const t = useCallback((key, params) => {
    let text = translations[lang][key];
    if (text === undefined) {
      console.warn(`Translation missing for key: ${key} in ${lang}`);
      text = translations.en[key] || key;
    }
    if (params) {
      Object.keys(params).forEach(p => {
        text = text.replace(`{${p}}`, params[p]);
      });
    }
    return text;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
