export type EnumType = {
  value: string | number
  title: string | number
  color?: string
  [key: string]: unknown
}

export type EnumList = Array<EnumType>
