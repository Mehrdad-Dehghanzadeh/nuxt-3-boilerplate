import user from './user'

type jwtType = {
  exp: number
  data: user
  iat: number
  [key: string]: unknown
}

export default jwtType
