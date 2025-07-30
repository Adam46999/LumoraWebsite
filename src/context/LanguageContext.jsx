import { createContext, useContext, useState } from "react";
import ar from "../translations/ar";
import en from "../translations/en";
import he from "../translations/he";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ar");

  const langs = { ar, en, he };

  return (
    <LanguageContext.Provider value={{ t: langs[lang], lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
