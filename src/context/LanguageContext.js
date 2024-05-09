import React, { createContext, useContext, useState } from 'react';
import enTranslations from '../lang/en.json';
import faTranslations from '../lang/fa.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const translations = {
    en: enTranslations,
    fa: faTranslations,
  };

  const t = (key) => translations[language][key] || key;

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ t, changeLanguage ,language}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
