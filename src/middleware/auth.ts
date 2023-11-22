export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAppStore()

  if (store.isLogin) {
    return true
  } else {
    return navigateTo('/auth')
  }
})
