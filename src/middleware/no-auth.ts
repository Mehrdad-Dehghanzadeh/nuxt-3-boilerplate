export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAppStore()

  if (store.isLogin) {
    return navigateTo('/')
  } else {
    return true
  }
})
