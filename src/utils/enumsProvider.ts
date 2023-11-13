import { type EnumType } from '@type'

type EnumProvider = EnumType | object
const enumsList: any = {}

export function importAllEnums() {
  const enumModules: any = import.meta.glob(`../locales/enums/*.(ts|js)`, { eager: true })

  for (const enumFile in enumModules) {
    const fileName: string = enumFile
      .replace('../locales/enums', '')
      .replaceAll('/', '')
      .replace('.js', '')
      .replace('.ts', '')
    enumsList[fileName] = enumModules[enumFile as keyof typeof enumModules]?.default
  }
}

export default function enumsProvider(
  type: string,
  value: string | number | boolean,
  prop: string = 'id'
): EnumProvider {
  const item = enumsList[type as keyof typeof enumsList].find(
    (i: EnumType) => i[prop as keyof typeof i] === value
  )

  return typeof item !== 'undefined' ? item : {}
}
