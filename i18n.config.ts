import en from './src/locales/lang/en'
import fa from './src/locales/lang/fa'

export default defineI18nConfig(() => ({
  legacy: false,
  locales: ['en', 'fa'],
  messages: {
    en,
    fa
  }
}))
