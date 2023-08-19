import { createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.hook('i18n:registerModule', (register: any) => {
      register({
        // langDir path needs to be resolved
        langDir: resolve('./src/locales/lang'),
        locales: [
          {
            code: 'en',
            file: 'en'
          },
          {
            code: 'fa',
            file: 'fa'
          }
        ],
        vueI18n: './i18n.config'
      })
    })
  }
})
