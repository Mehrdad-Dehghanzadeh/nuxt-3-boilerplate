export type enumType = {
  id: string | number
  name: string | number
  color?: string
  [key: string]: unknown
}

export type enumListType = Array<enumType>
