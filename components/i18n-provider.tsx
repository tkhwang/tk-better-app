'use client';

import { useEffect } from 'react';
import i18n from '../lib/i18n';

/** Loads i18n and keeps <html lang> in step with the chosen language. */
export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const syncLang = (lng: string) => {
      document.documentElement.lang = lng.startsWith('ko') ? 'ko' : 'en';
    };

    syncLang(i18n.language);
    i18n.on('languageChanged', syncLang);
    return () => {
      i18n.off('languageChanged', syncLang);
    };
  }, []);

  return <>{children}</>;
}
