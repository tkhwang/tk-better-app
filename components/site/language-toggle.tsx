"use client";

import { useTranslation } from "react-i18next";

const LANGS = ["en", "ko"] as const;

/** EN | KO pill control for the i18n language. */
const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const current = i18n.language.startsWith("ko") ? "ko" : "en";

  return (
    <div className="seg" role="group" aria-label={t("nav.language")}>
      {LANGS.map((lang) => (
        <button
          key={lang}
          type="button"
          aria-pressed={current === lang}
          onClick={() => i18n.changeLanguage(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
