import path from 'path'
import translateModule from './translateModule'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const srcDir = path.resolve(__dirname, './src')

export default defineNuxtConfig({
  srcDir,
  telemetry: false,
  // ssr: false,
  imports: {
    dirs: [path.join(srcDir, 'stores')]
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl'
      }
    }
  },

  components: {
    dirs: [
      {
        path: path.resolve(srcDir, 'components/kits'),
        global: true
      }
    ]
  },

  modules: [
    '@nuxtjs/i18n',
    translateModule,
    '@pinia/nuxt',

    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config: any) => {
        config?.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],

  pinia: {
    storesDirs: ['./src/stores/**']
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    path.join(srcDir, 'assets/styles/custom/index.scss')
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: ['@use "~/assets/styles/global/index.scss" as *;']
        }
      }
    },

    postcss: {
      plugins: {
        autoprefixer: {}
      }
    },

    resolve: {
      mainFields: ['browser', 'module', 'main', 'jsnext:main', 'jsnext']
    },

    vue: {
      template: {
        transformAssetUrls
      }
    }
  },

  build: {
    transpile: ['vuetify']
  },

  // for static publish
  // experimental: {
  //   payloadExtraction: true
  // },

  sourcemap: {
    server: false,
    client: false
  },

  alias: {
    '@apis': path.join(__dirname, 'src/apis'),
    '@page-components': path.join(__dirname, 'src/components/page-components'),
    '@kits': path.join(__dirname, 'src/components/kits'),
    '@shared': path.join(__dirname, 'src/components/shared'),
    '@includes': path.join(__dirname, 'src/components/includes'),
    '@locales': path.join(__dirname, 'src/locales'),
    '@enums': path.join(__dirname, 'src/locales/enums'),
    '@data': path.join(__dirname, 'src/locales/data'),
    '@utils': path.join(__dirname, 'src/utils'),
    '@type': path.join(__dirname, 'src/ts/type'),
    '@models': path.join(__dirname, 'src/ts/models'),
    '@assets': path.join(__dirname, 'src/assets'),
    '@styles': path.join(__dirname, 'src/assets/styles/global')
  },

  devtools: {
    enabled: true
  },

  compatibilityDate: '2024-08-15'
})
