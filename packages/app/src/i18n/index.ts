import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import it from "./locales/it.json";

export const defaultNS = "translation";

type Locale = "en" | "it";
type Resources = {
  [key in Locale]: {
    translation: typeof en & typeof it;
  };
};

export const resources: Resources = {
  en: {
    translation: en,
  },
  it: {
    translation: it,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    defaultNS,
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
