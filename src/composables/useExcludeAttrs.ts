import type { HtmlAttrs } from '@type'
import type { HTMLAttributes } from 'vue'

export default function () {
  const attrs = useAttrs()

  const id = computed(() => <string>attrs?.id || '')
  const style = computed(() => <Pick<HTMLAttributes, 'style'>>attrs?.style)
  const className = computed<Pick<HTMLAttributes, 'class'>>(() => attrs?.class || '')
  const htmlAttr = computed(
    () =>
      <HtmlAttrs>{
        class: attrs.class || '',
        style: attrs.style,
        id: attrs.id || ''
      }
  )
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
