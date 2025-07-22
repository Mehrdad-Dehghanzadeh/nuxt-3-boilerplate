export let isPending: boolean = false

export function dispatchResolve<T = any>(detail: T): void {
  const event = new CustomEvent('resolveLock', { detail })
  dispatchEvent(event)
}

export function dispatchReject<T = any>(detail: T): void {
  const event = new CustomEvent('rejectLock', { detail })
  dispatchEvent(event)
}

export function LockRequest<T = any>(): Promise<CustomEvent<T>> {
  isPending = true

  return new Promise((resolve, reject) => {
    addEventListener('resolveLock', (e) => {
      isPending = false
      resolve(<CustomEvent<T>>e)
    })

    addEventListener('rejectLock', (e) => {
      isPending = false
      reject(<CustomEvent<T>>e)
    })
  })
}
