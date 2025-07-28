enum LockStatus {
  Wait = 'wait',
  Resolve = 'Resolve',
  Reject = 'Reject',
  Created = 'Created'
}

interface ICustomLock {
  name: string
  readonly status: LockStatus
  readonly createdAt: number
  wait(): Promise<unknown> | undefined
}

export class CustomLock implements ICustomLock {
  name = ''
  createdAt = 0
  status = LockStatus.Created
  #resolve: ((value?: any) => void) | undefined
  #reject: ((reason?: any) => void) | undefined

  constructor(name: string) {
    this.name = name
    this.createdAt = Date.now()
  }

  wait() {
    if (this.status != LockStatus.Wait) {
      this.status = LockStatus.Wait

      return new Promise((res, rej) => {
        this.#resolve = res
        this.#reject = rej
      })
    }
  }

  resolve<T = any>(value?: T) {
    if (this.#resolve) {
      this.#resolve(value)
      this.status = LockStatus.Resolve
    }
  }

  reject<T = any>(reason?: T) {
    if (this.#reject) {
      this.#reject(reason)
      this.status = LockStatus.Reject
    }
  }
}
