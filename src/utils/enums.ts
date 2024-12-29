type EnumProvider = EnumType | null
type TEnumList = Record<string, EnumList>

const enumsList: TEnumList = {}
const enums: TData = {}

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
  type: keyof TEnumList,
  value: string | number | boolean,
  prop: keyof EnumType = 'id'
): EnumProvider {
  const item = enumsList[type].find((i: EnumType) => i[prop] === value)

  return typeof item !== 'undefined' ? item : null
}

export function getEnumList(type: keyof TEnumList): EnumType[] {
  return enumsList[type]
}

export function getEnum(type: keyof TData): Pick<TData, keyof TData> | undefined {
  return enums[type]
}
