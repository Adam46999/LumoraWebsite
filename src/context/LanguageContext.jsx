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
    vars[k] === undefined || vars[k] === null ? "" : String(vars[k])
  );
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ar");

  const value = useMemo(() => {
    const dict = DICTS[lang] || DICTS.ar;
    const fallback = DICTS.ar;

    /**
     * t("hero.title") -> string
     * t("common.hello", {name:"x"}) -> interpolation
     */
    const tFn = (key, vars) => {
      const raw = getByPath(dict, key) ?? getByPath(fallback, key) ?? undefined;

      // لو ما لقينا المفتاح: رجّع نفس الـ key (مفيد للتشخيص بدون كسر UI)
      if (raw === undefined) return key;

      // لو القيمة object بالغلط (مش نص) رجّع key لتفادي كسر render
      if (typeof raw === "object") return key;

      return interpolate(raw, vars);
    };

    return {
      lang,
      setLang,

      // ✅ تظل موجودة للتوافق مع كودك الحالي (t.someKey)
      // وبتضيف كمان t("a.b.c")
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
