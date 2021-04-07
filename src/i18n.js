import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json';
import translationJA from './locales/ja.json';

document.addEventListener('DOMContentLoaded', () => {

  const dataI18n = document.querySelectorAll('[data-i18n]');
  
  const detectorOptions = {
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    caches: ['localStorage'],
    excludeCacheFor: ['cimode', 'cookie'],
    cookieMinutes: 10,
    cookieDomain: 'https://jpyc.jp',
  };
  
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(
        {
            fallbackLng: () => {
              const lang = window.navigator.language;
              if (lang == 'ja') {
                return ['ja'];
              } else {
                return ['en'];
              }
            },
            resources: {
              en: {
                translation: translationEN
              },
              ja: {
                translation: translationJA
              }
            },
            react: {
              wait: true,
            }
        },
        (e, t) => {
            if (e) return console.log('something went wrong loading', e);
            dataI18n.forEach((elem) => {
                elem.textContent = t(elem.dataset.i18n);
            });
        }
    );

});

export default i18n;