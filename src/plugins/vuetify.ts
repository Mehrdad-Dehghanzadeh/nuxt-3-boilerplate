import { createVuetify, ThemeDefinition } from 'vuetify'
import { fa } from 'vuetify/locale'
import { BaseColors } from '@types/Colors'

const lightColors: Readonly<BaseColors> = {
  background: '#fff',
  surface: '#fff',
  primary: '#fff',
  secondary: '#fff',
  success: '#fff',
  warning: '#fff',
  error: '#fff',
  info: '#fff'
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    locale: {
      locale: 'fa',
      messages: { fa },
      rtl: { fa: true }
    },

    theme: {
      themes: {
        light: {
          colors: lightColors
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
