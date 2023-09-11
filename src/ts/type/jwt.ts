import User from './User'

type JwtType = {
  exp: number
  data: User
  iat: number
  [key: string]: unknown
}

export default JwtType
