export default defineNuxtPlugin(() => {
  // config global enums
  importAllEnums()

  if (window) {
    //@ts-ignore
    window.bridge?.setTitle('vue Web view port 3000')
  }
})
