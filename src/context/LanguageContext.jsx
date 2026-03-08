// src/context/LanguageContext.jsx
import React, { createContext, useContext, useMemo, useState } from "react";

import ar from "../translations/ar";
import en from "../translations/en";
import he from "../translations/he";

const LanguageContext = createContext(null);

const DICTS = { ar, en, he };
const RTL = new Set(["ar", "he"]);

function getByPath(obj, path) {
  if (!obj || !path) return undefined;
  return path.split(".").reduce((acc, key) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, key)) return acc[key];
    return undefined;
  }, obj);
}

function interpolate(str, vars) {
  if (!vars) return str;
  return String(str).replace(/\{(\w+)\}/g, (_, k) =>
    vars[k] === undefined || vars[k] === null ? "" : String(vars[k]),
  );
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("he");

  const value = useMemo(() => {
    const dict = DICTS[lang] || DICTS.he;
    const fallback = DICTS.ar;

    const tFn = (key, vars) => {
      const raw = getByPath(dict, key) ?? getByPath(fallback, key) ?? undefined;

      if (raw === undefined) return key;
      if (typeof raw === "object") return key;

      return interpolate(raw, vars);
    };

    return {
      lang,
      setLang,
      t: dict,
      tFn,
      isRTL: RTL.has(lang),
      dir: RTL.has(lang) ? "rtl" : "ltr",
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
