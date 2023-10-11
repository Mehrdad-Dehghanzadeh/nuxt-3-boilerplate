import path from 'path'
import translateModule from './translateModule'
import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

const srcDir = path.resolve(__dirname, './src')
const vuetifyStyleSettingPath = `${srcDir}/assets/styles/vuetify-settings.scss`

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir,
  telemetry: false,
  ssr: false,
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

    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs']
      }
    ],

    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config?.plugins?.push(vuetify())
      })
    }
  ],

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    path.join(srcDir, 'assets/styles/custom/index.scss')
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/global/index.scss";'
        }
      }
    },

    ssr: {
      noExternal: ['vuetify']
    },

    resolve: {
      mainFields: ['browser', 'module', 'main', 'jsnext:main', 'jsnext']
    }
  },

  build: {
    transpile: ['vuetify']
  },

  // for static publish
  // experimental: {
  //   payloadExtraction: true
  // },

  hooks: {
    'vite:extendConfig': (config) => {
      config?.plugins?.push(
        vuetify({
          styles: { configFile: resolve(vuetifyStyleSettingPath) }
        })
      )
    }
  },

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
    '@interfaces': path.join(__dirname, 'src/ts/interfaces'),
    '@dtos': path.join(__dirname, 'src/ts/dtos'),
    '@assets': path.join(__dirname, 'src/assets')
  }
})
