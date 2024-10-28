export type Data<T = unknown> = Record<string, T>

export type HtmlAttrs = {
  class: {} | string | Data
  style: {} | unknown | string
  id: {} | unknown | string
}
