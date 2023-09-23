import { createVuetify } from 'vuetify'
import { fa } from 'vuetify/locale'


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    locale: {
      locale: 'fa',
      messages: { fa },
      rtl: { fa: true }
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
