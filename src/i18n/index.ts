// src/i18n/index.ts
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

// 1. Define y exporta los idiomas y tipos. ¡Exportar es clave!
export const supportedLocales = ['en', 'es'] as const;
export type SupportedLocale = typeof supportedLocales[number]; // Tipo: 'en' | 'es'

// 2. Define y EXPORTA la función de validación.
export function isSupportedLocale(locale: any): locale is SupportedLocale {
  return supportedLocales.includes(locale);
}

// 3. Define y EXPORTA la función para obtener el locale inicial.
export function getInitialLocale(): SupportedLocale {
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale && isSupportedLocale(savedLocale)) {
    return savedLocale;
  }
  return 'es'; // Idioma por defecto.
}

// 4. Crea la instancia de i18n
export const i18n = createI18n({
  legacy: false, // Importante para Composition API
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
  globalInjection: true,
});

// 5. Función para cambiar el idioma.
export function setLocale(locale: SupportedLocale) {
  // Ahora i18n.global.locale es un `Ref<SupportedLocale>`
  // y TypeScript está feliz.
  i18n.global.locale.value = locale;
  localStorage.setItem('locale', locale);
}