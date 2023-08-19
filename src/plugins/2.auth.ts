import LoginDto from '@dtos/LoginDto'
import jwt_decode from 'jwt-decode'
import jwtType from '@type/jwt'
import appConfig from '@type/appConfig'

export default defineNuxtPlugin(({ $api }) => {
  const store = useAppStore()
  const { cookieAuhtName }: appConfig = useAppConfig()

  function login(payload: LoginDto): Promise<any> {
    return new Promise((resolve, reject) => {
      $api.auth
        .login(payload)
        .then((res: any) => {
          if (res?.data?.accessToken) {
            setUser(res?.data?.accessToken)
            setCookie(res?.data?.accessToken)
            resolve(res)
          } else {
            reject({ message: 'res.data.accessToken is null' })
          }
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  function setUser(jwt: string): void {
    const jwtObject: jwtType = jwt_decode(jwt)
    store.setUser(jwtObject.data)
  }

  function setCookie(jwt: string): void {
    if (jwt) {
      const jwtObject: jwtType = jwt_decode(jwt)
      const cookie = useCookie(cookieAuhtName, {
        sameSite: true,
        expires: new Date(jwtObject.exp * 1000),
        path: '/'
      })
      cookie.value = jwt
    }
  }

  function init() {
    const cookie = useCookie(cookieAuhtName)
    if (cookie.value) {
      const { exp, data }: jwtType = jwt_decode(cookie.value)
      const isExpired: boolean = exp * 1000 > Date.now()

      if (isExpired && data) {
        setUser(cookie.value)
        store.setIslogin(true)
      } else {
        store.setUser(null)
        store.setIslogin(false)
      }
    }
  }

  init()

  const auth = {
    login,
    init
  }
  return {
    provide: {
      auth
    }
  }
})
