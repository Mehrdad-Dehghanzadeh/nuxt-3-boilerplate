import path from 'path'

const srcDir = path.resolve(__dirname, './src')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir,
  telemetry: false,

  components: {
    dirs: [
      {
        path: '~/components/kits',
        global: true
      }
    ]
  },

  modules: ['@nuxtjs/i18n', '@pinia/nuxt'],

  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'fa',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'app_lang'
    },

    vueI18n: {
      legacy: false,
      locale: 'fa'
    }
  },

  alias: {
    '@api': path.join(__dirname, 'src/api'),
    '@page-components': path.join(__dirname, 'src/components/page-components'),
    '@shared': path.join(__dirname, 'src/components/shared'),
    '@includes': path.join(__dirname, 'src/components/includes'),
    '@locales': path.join(__dirname, 'src/locales'),
    '@data': path.join(__dirname, 'src/locales/data'),
    '@utils': path.join(__dirname, 'src/utils'),
    '@type': path.join(__dirname, './src/ts/types'),
    '@interface': path.join(__dirname, './src/ts/interface')
  }
})
