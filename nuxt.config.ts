import path from 'path'
import translateModule from './translateModule'

const srcDir = path.resolve(__dirname, './src')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir,
  telemetry: false,

  modules: [translateModule, '@nuxtjs/i18n', '@pinia/nuxt'],

  css: [path.join(srcDir, 'assets/styles/custom/index.scss')],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/global/index.scss";'
        }
      }
    }
  },

  alias: {
    '@apis': path.join(__dirname, 'src/apis'),
    '@page-components': path.join(__dirname, 'src/components/page-components'),
    '@shared': path.join(__dirname, 'src/components/shared'),
    '@includes': path.join(__dirname, 'src/components/includes'),
    '@locales': path.join(__dirname, 'src/locales'),
    '@data': path.join(__dirname, 'src/locales/data'),
    '@utils': path.join(__dirname, 'src/utils'),
    '@type': path.join(__dirname, './src/ts/types'),
    '@interfaces': path.join(__dirname, './src/ts/interfaces'),
    '@helpers': path.join(__dirname, './src/assets/helpers')
  }
})
