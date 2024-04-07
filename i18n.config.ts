import fa from './src/locales/fa'

export default defineI18nConfig(function () {
  return {
    lazy: true,
    locale: 'fa',
    locales: ['fa'],

    defaultLocale: 'fa',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'appname.lang',
      redirectOn: 'no prefix',
      alwaysRedirect: false,
      fallbackLocale: 'fa'
    },
    strategy: 'prefix_except_default',

    messages: {
      fa
    }
  }
})
