import path from 'path'

const srcDir = path.resolve(__dirname, './src')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir,
  components: false,
  telemetry: false,

  alias: {
    '@helpers': path.join(__dirname, 'src/assets/helpers'),
    '@mixins': path.join(__dirname, 'src/assets/mixins'),
    '@api': path.join(__dirname, 'src/api'),
    '@kits': path.join(__dirname, 'src/components/kits'),
    '@page-components': path.join(__dirname, 'src/components/page-components'),
    '@shared': path.join(__dirname, 'src/components/shared'),
    '@includes': path.join(__dirname, 'src/components/includes'),
    '@locales': path.join(__dirname, 'src/locales'),
    '@data': path.join(__dirname, 'src/locales/data')
  }
})
