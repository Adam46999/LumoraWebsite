import { createContext, useContext, useState } from "react";
import ar from "../lang/ar";
import en from "../lang/en";
import he from "../lang/he";

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
