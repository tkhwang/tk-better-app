import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import enTranslations from "../const/locale/en.json";
import koTranslations from "../const/locale/ko.json";

// Translation resources
const resources = {
  en: {
    translation: enTranslations,
  },
  ko: {
    translation: koTranslations,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // fallback language when current language translation is missing

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
