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
  private _resolve: ((value?: any) => void) | undefined
  private _reject: ((reason?: any) => void) | undefined

  constructor(name: string) {
    this.name = name
    this.createdAt = Date.now()
  }

  wait() {
    if (this.status != LockStatus.Wait) {
      this.status = LockStatus.Wait

      return new Promise((res, rej) => {
        this._resolve = res
        this._reject = rej
      })
    }
  }

  resolve<T = any>(value?: T) {
    if (this._resolve) {
      this._resolve(value)
      this.status = LockStatus.Resolve
    }
  }

  reject<T = any>(reason?: T) {
    if (this._reject) {
      this._reject(reason)
      this.status = LockStatus.Reject
    }
  }
}
