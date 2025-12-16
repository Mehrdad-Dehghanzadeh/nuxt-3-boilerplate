export class CustomError<T = any> extends Error implements ICustomError {
  data: T | undefined

  constructor(message: string, data?: T) {
    super(message)
    this.data = data
  }
}
