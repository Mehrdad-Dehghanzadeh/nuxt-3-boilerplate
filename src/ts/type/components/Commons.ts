import type { HTMLAttributes } from 'vue'

export type HtmlAttrs = {
  class: Pick<HTMLAttributes, 'class'>
  style: Pick<HTMLAttributes, 'style'>
  id: string
}
