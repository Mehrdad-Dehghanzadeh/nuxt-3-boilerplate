/**
 *  Deep Freeze Object
 ***********************/
export function deepFreeze(obj: object): object {
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
export function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0
}

/**
 *  Convert Object To Array
 ***************************/
export function objectToArray(obj: object) {
  return !isEmpty(obj)
    ? Object.entries(obj).map(([key, value]) => {
        return { [key]: value }
      })
    : []
}

/**
 * Deep Clone Object
 ************************/
export function deepClone(obj: object): object {
  return JSON.parse(JSON.stringify(obj))
}
