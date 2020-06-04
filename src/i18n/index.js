import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enUS from 'i18n/locale/en-us.json'
import zhTW from 'i18n/locale/zh-tw.json'

const resources = {
  'en-US': enUS,
  'zh-TW': zhTW,
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: [ 'querystring', '0', 'navigator' ],
      lookupQuerystring: 'lng',
      lookupLocalStorage: 'i18nextLng',
    },
  })

export default i18n
