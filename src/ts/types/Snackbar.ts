export type IconType = {
  success: string
  info: string
  error: string
  alert: string
}

export type AppearOptions = {
  text: string
  state: string
}

export type State = keyof IconType | ''
