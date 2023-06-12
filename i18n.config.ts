import en from './src/locales/en'
import fa from './src/locales/fa'

export default defineI18nConfig(() => ({
  legacy: false,
  locales: ['en', 'fa'],
  messages: {
    en,
    fa
  },
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'app_lang'
  }
}))
