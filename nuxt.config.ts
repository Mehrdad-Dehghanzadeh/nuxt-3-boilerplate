import path from 'path'
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
    baseURL: '/',

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
    '@pinia/nuxt',

    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config: any) => {
        config?.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],

  i18n: {
    strategy: 'no_prefix',

    locales: [
      {
        code: 'fa',
        name: 'fa-IR',
        files: ['fa-IR/errors.json', 'fa-IR/control.json'],
        dir: 'rtl'
      },

      { code: 'en', name: 'en-US', files: ['en-US/us.json'], dir: 'ltr' }
    ],
    lazy: true,
    detectBrowserLanguage: false,

    vueI18n: 'i18n.config.ts'
  },

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
          additionalData: '@use "~/assets/styles/global/index.scss" as *;'
        }
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

  postcss: {
    plugins: {
      autoprefixer: {}
    }
  },

  build: {
    transpile: ['vuetify']
  },

  // for static publish
  // experimental: {
  //   payloadExtraction: true
  // },

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
    '@type-apis': path.join(__dirname, 'src/ts/type/apis'),
    '@models': path.join(__dirname, 'src/ts/models'),
    '@assets': path.join(__dirname, 'src/assets'),
    '@styles': path.join(__dirname, 'src/assets/styles/global')
  },

  devtools: {
    enabled: true,
    componentInspector: false
  },

  compatibilityDate: '2025-01-27'
})
