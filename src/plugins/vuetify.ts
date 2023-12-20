import { createVuetify } from 'vuetify'
import { fa } from 'vuetify/locale'
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    locale: {
      locale: 'fa',
      messages: { fa },
      rtl: { fa: true }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
