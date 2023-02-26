import { enumListType } from '@locales/enums'

export default function enumsProvider(
  type: string,
  value: string | number,
  prop: string = 'id'
): object {
  const item = enumListType[type as keyof typeof enumListType].find(
    (i) => i[prop as keyof typeof i] === value
  )

  return typeof item !== 'undefined' ? item : {}
}
