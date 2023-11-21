/**
 *  Deep Freeze Object
 ***********************/
export function deepFreeze<T>(obj: T): T {
  Object.freeze(obj)

  Object.getOwnPropertyNames(obj).forEach(function (prop: string) {
    const objectProp: any = obj[prop as keyof typeof obj]
    if (
      objectProp !== null &&
      (typeof objectProp === 'object' || typeof objectProp === 'function') &&
      !Object.isFrozen(objectProp)
    ) {
      deepFreeze(objectProp)
    }
  })

  return obj
}

/**
 *  Check Object Is Empty
 ***************************/
export function isEmpty(obj: any): boolean {
  return Object.keys(obj).length === 0
}

/**
 *  Convert Object To Array
 ***************************/
export function objectToArray(obj: any) {
  return !isEmpty(obj)
    ? Object.entries(obj).map(([key, value]) => {
        return { [key]: value }
      })
    : []
}

/**
 * Deep Clone Object
 ************************/
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * remove keyof object
 *****************************/
export function omit<T extends object>(obj: T, arr: string[]) {
  const exclude = new Set(arr)
  exclude.forEach((e: string) => delete obj[e as keyof T])
}

/**
 * remove keyof object and clone
 *****************************************/
export function cloneOmit<T extends object>(obj: T, arr: string[]): Partial<T> {
  const value = deepClone(obj)
  omit(value, arr)
  return value
}
