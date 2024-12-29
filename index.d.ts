type EmptyString = ''

type NumberString = `${number}`

type TData<T = any> = object & Record<string, T>

type TList<T = any> = T[]

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

type EnumType = {
  id: string | number
  name: string | number
  color?: string
  [key: string]: unknown
}

type EnumList = Array<EnumType>
