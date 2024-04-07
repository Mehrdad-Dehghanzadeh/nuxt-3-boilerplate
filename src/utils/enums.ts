import type { EnumType, EnumList } from '@type'

type EnumProvider = EnumType | null
type Enums = Record<string, any>
const enumsList: Record<string, EnumList> = {}
const enums: Enums = {}

export function importAllEnums(): void {
  const enumModules: any = import.meta.glob(`../ts/enums/*.(ts|js)`, { eager: true })

  for (const enumFile in enumModules) {
    const fileName: string = enumFile
      .replace('../ts/enums', '')
      .replaceAll('/', '')
      .replace('.js', '')
      .replace('.ts', '')

    enums[fileName] = enumModules[enumFile as keyof typeof enumModules]?.default?.enum
    enumsList[fileName] =
      enumModules[enumFile as keyof typeof enumModules]?.default?.enumList
  }
}

export function enumsProvider(
  type: string,
  value: string | number | boolean,
  prop: string = 'id'
): EnumProvider {
  const item = enumsList[type as keyof typeof enumsList].find(
    (i: EnumType) => i[prop as keyof typeof i] === value
  )

  return typeof item !== 'undefined' ? item : null
}

export function getEnumList(type: keyof typeof enumsList): EnumType[] {
  return enumsList[type]
}

export function getEnum(type: keyof Enums): Pick<Enums, keyof Enums> | undefined {
  return enums[type]
}
