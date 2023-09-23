export default function () {
  const { id, name, placeholder, label } = useAttrs()
  const { appName } = useAppConfig()

  const safeId = computed(() => {
    return `${appName}${id ? '_' + id : ''}`
  })

  const safeName = computed(() => {
    return `${appName}${name ? '_' + name : ''}`
  })

  const safePlaceholder = computed(() => {
    if (placeholder) {
      return placeholder
    }

    if (label) {
      return `لطفا ${label} را وارد کنید`
    }
  })

  return {
    safeId,
    safeName,
    safePlaceholder
  }
}
