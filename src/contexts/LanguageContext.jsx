import React, { createContext, useState, useContext, useEffect } from 'react';
import esTranslations from '@/locales/es.json';
import enTranslations from '@/locales/en.json';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  es: esTranslations,
  en: enTranslations,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const t = (key) => {
    const keys = key.split('.');
    let current = translations[language];
    for (let k of keys) {
      current = current[k];
      if (current === undefined) {
        console.warn(`Translation not found for key: ${key} in language: ${language}`);
        return key; 
      }
    }
    return current;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};