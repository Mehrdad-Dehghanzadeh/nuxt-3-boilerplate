export default function () {
  const attrs = useAttrs()

  const id = computed(() => <string>attrs?.id || '')
  const style = computed(() => attrs?.style)
  const className = computed(() => <string>attrs?.class || '')
  const htmlAttr = computed(() => {
    return {
      class: attrs?.class || '',
      style: attrs?.style,
      id: attrs?.id || ''
    }
  })
  const attrs$ = computed(() => {
    const val = { ...attrs }
    omit(val, ['class', 'id', 'style'])
    return val
  })

  return {
    attrs,
    attrs$,
    id,
    style,
    className,
    htmlAttr
  }
}
