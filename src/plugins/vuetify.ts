import { createVuetify } from 'vuetify'
import { fa } from 'vuetify/locale'
import { type ThemesColors } from '@type'

const colors: ThemesColors = {
  primary: '#8A2245',
  success: '#009900',
  secondary: '#A36943',
  error: '#CC0000',
  info: '#3497FD',
  warning: '#DB7A35'
}

const myCustomLightTheme = {
  dark: false,
  colors
}

const globalConfigInputElements = {
  VSelect: {
    variant: 'outlined',
    density: 'comfortable',
    menuIcon: 'mdi-chevron-down',
    color: 'secondary'
  },

  VTextField: {
    variant: 'outlined',
    density: 'comfortable',
    color: 'secondary'
  },

  VTextarea: {
    variant: 'outlined',
    density: 'comfortable',
    color: 'secondary'
  },

  VInfiniteScroll: {
    emptyText: ''
  }
}

const globalConfigBtns = {
  VBtn: {
    flat: true
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,

    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    },

    locale: {
      locale: 'fa',
      messages: { fa },
      rtl: { fa: true }
    },

    defaults: {
      ...globalConfigInputElements,
      ...globalConfigBtns
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
