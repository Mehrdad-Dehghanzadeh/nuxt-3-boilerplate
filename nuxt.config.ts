import path from 'path'
import translateModule from './translateModule'

const srcDir = path.resolve(__dirname, './src')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir,
  telemetry: false,

  modules: [translateModule, '@nuxtjs/i18n', '@pinia/nuxt'],

  css: [path.join(srcDir, 'assets/style/custom/index.scss')],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/global/index.scss";'
        }
      }
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
