import { createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  async setup(options, nuxt) {
    const { resolve } = await createResolver(import.meta.url)

    await nuxt.hook('i18n:registerModule', async(register:any) => {
     await register({
        // langDir path needs to be resolved
        langDir: resolve('./src/locales/lang'),
        defaultLocale: 'fa',
        locales: [
          {
            code: 'en',
            file: 'en'
          },
          {
            code: 'fa',
            file: 'fa'
          },
        ],
        vueI18n: './i18n.config'

      })
    })
  }
})
