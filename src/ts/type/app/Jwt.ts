import type { User } from './User'

export type JwtType = {
  exp: number
  data: User
  iat: number
  [key: string]: unknown
}
