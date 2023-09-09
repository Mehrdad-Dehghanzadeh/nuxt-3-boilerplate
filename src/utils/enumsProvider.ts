import { enumsList } from '@locales/enums'
import { EnumType } from '@type/Enums'

type EnumProvider = EnumType | object

export default function enumsProvider(
  type: string,
  value: string | number,
  prop: string = 'id'
): EnumProvider {
  const item = enumsList[type as keyof typeof enumsList].find(
    (i) => i[prop as keyof typeof i] === value
  )

  return typeof item !== 'undefined' ? item : {}
}
