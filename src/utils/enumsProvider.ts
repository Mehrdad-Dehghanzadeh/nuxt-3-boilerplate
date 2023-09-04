import { enumListType } from '@locales/enums'
import { EnumType } from '@type/enums'

type EnumProvider = EnumType | object

export default function enumsProvider(
  type: string,
  value: string | number,
  prop: string = 'id'
): EnumProvider {
  const item = enumListType[type as keyof typeof enumListType].find(
    (i) => i[prop as keyof typeof i] === value
  )

  return typeof item !== 'undefined' ? item : {}
}
