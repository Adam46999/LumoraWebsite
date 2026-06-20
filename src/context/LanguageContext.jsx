// src/context/LanguageContext.jsx
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import ar from "../translations/ar";
import en from "../translations/en";
import he from "../translations/he";

const LanguageContext = createContext(null);

const LANGUAGE_STORAGE_KEY = "lumora-language";

const DICTS = {
  ar,
  en,
  he,
};

const SUPPORTED_LANGUAGES = new Set(["ar", "he", "en"]);
const RTL_LANGUAGES = new Set(["ar", "he"]);

function normalizeLanguage(value) {
  if (typeof value !== "string") return null;

  const normalized = value.trim().toLowerCase().split(/[-_]/)[0];

  return SUPPORTED_LANGUAGES.has(normalized) ? normalized : null;
}

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "ar";
  }

  try {
    const savedLanguage = normalizeLanguage(
      window.localStorage.getItem(LANGUAGE_STORAGE_KEY),
    );

    if (savedLanguage) {
      return savedLanguage;
    }
  } catch {
    // بعض المتصفحات قد تمنع localStorage.
  }

  const browserLanguages = Array.isArray(window.navigator?.languages)
    ? window.navigator.languages
    : [window.navigator?.language];

  for (const browserLanguage of browserLanguages) {
    const normalized = normalizeLanguage(browserLanguage);

    if (normalized) {
      return normalized;
    }
  }

  // العربية هي اللغة الافتراضية إذا لم نجد لغة مدعومة.
  return "ar";
}

function getByPath(object, path) {
  if (!object || !path) return undefined;

  return String(path)
    .split(".")
    .reduce((currentValue, key) => {
      if (
        currentValue &&
        Object.prototype.hasOwnProperty.call(currentValue, key)
      ) {
        return currentValue[key];
      }

      return undefined;
    }, object);
}

function interpolate(value, variables) {
  if (value === undefined || value === null) {
    return "";
  }

  if (!variables) {
    return String(value);
  }

  return String(value).replace(/\{(\w+)\}/g, (_, key) => {
    const replacement = variables[key];

    return replacement === undefined || replacement === null
      ? ""
      : String(replacement);
  });
}

function applyLanguageToDocument(language) {
  if (typeof document === "undefined") return;

  const direction = RTL_LANGUAGES.has(language) ? "rtl" : "ltr";

  document.documentElement.lang = language;
  document.documentElement.dir = direction;

  if (document.body) {
    document.body.lang = language;
    document.body.dir = direction;
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLanguage);

  const setLang = useCallback((nextLanguage) => {
    setLangState((currentLanguage) => {
      const requestedLanguage =
        typeof nextLanguage === "function"
          ? nextLanguage(currentLanguage)
          : nextLanguage;

      return normalizeLanguage(requestedLanguage) || currentLanguage;
    });
  }, []);

  const isRTL = RTL_LANGUAGES.has(lang);
  const dir = isRTL ? "rtl" : "ltr";

  /**
   * حفظ اللغة وتطبيقها على الصفحة كاملة.
   */
  useEffect(() => {
    applyLanguageToDocument(lang);

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // الموقع يظل يعمل حتى لو منع المتصفح التخزين.
    }
  }, [lang]);

  /**
   * مزامنة اللغة إذا تغيّرت من تبويب آخر للموقع.
   */
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key !== LANGUAGE_STORAGE_KEY) return;

      const nextLanguage = normalizeLanguage(event.newValue);

      if (nextLanguage) {
        setLangState(nextLanguage);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const value = useMemo(() => {
    const dictionary = DICTS[lang] || DICTS.ar;
    const fallbackDictionary = DICTS.ar;

    const tFn = (key, variables) => {
      const translatedValue =
        getByPath(dictionary, key) ?? getByPath(fallbackDictionary, key);

      if (
        translatedValue === undefined ||
        translatedValue === null ||
        typeof translatedValue === "object"
      ) {
        return key;
      }

      return interpolate(translatedValue, variables);
    };

    return {
      lang,
      setLang,

      // لدعم الملفات الحالية التي تستخدم t.beforeAlt مثلًا.
      t: dictionary,

      // للاستخدام المنظم مثل tFn("header.services").
      tFn,

      isRTL,
      dir,

      supportedLanguages: ["ar", "he", "en"],
    };
  }, [dir, isRTL, lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
