export default function (uid: any) {
  const { id, name, placeholder, label } = <
    { id: string; placeholder: string; label: string; name: string }
  >useAttrs()

  const { appName } = useAppConfig()

  const safeId = computed(() => {
    return `${appName}${id ? '_' + id : '_' + uid.value}`
  })

  const safeName = computed(() => {
    return `${appName}${name ? '_' + name : '_' + uid.value}`
  })

  const safePlaceholder = computed(() => {
    let val: string = ''
    if (label) {
      val = `لطفا ${label} را وارد کنید`
    }
    if (placeholder) {
      val = placeholder
    }

    return val
  })

  return {
    safeId,
    safeName,
    safePlaceholder
  }
}
