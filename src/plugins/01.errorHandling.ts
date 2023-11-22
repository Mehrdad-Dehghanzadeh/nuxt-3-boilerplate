export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (..._args) => {
    const isDev = process.env.NODE_ENV === 'development'
    if (isDev) {
      showError(_args[0])
    }
    console.error(..._args)
  }
})
