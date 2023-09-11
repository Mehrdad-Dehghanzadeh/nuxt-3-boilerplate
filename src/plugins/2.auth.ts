import LoginDto from '@dtos/LoginDto'
import jwt_decode from 'jwt-decode'
import JwtType from '@types/Jwt'
import AppConfig from '@types/AppConfig'

export default defineNuxtPlugin(({ $api }) => {
  const store = useAppStore()
  const { cookieAuhtName }: AppConfig = useAppConfig()

  function login(payload: LoginDto): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await $api.auth.login(payload)
        if (res?.data?.accessToken) {
          await setCookie(res?.data?.accessToken)
          await init()
          resolve(res)
        } else {
          reject({ message: 'res.data.accessToken is null' })
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  function logout(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        removeToken()
        resolve(null)
      } catch (error) {
        reject(error)
      }
    })
  }

  function setUser(jwt: string): void {
    const jwtObject: JwtType = jwt_decode(jwt)
    store.setUser(jwtObject.data)
  }

  function setCookie(jwt: string): void {
    if (jwt) {
      const jwtObject: JwtType = jwt_decode(jwt)
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
      const { exp, data }: JwtType = jwt_decode(cookie.value)
      const isExpired: boolean = exp * 1000 > Date.now()

      if (isExpired && data) {
        setUser(cookie.value)
        store.setIslogin(true)
      } else {
        removeToken()
      }
    } else {
      store.setUser(null)
      store.setIslogin(false)
    }
  }

  function removeToken() {
    const cookie = useCookie(cookieAuhtName)
    cookie.value = null
    store.setIslogin(false)
    store.setUser(null)
  }

  init()

  const auth = {
    login,
    removeToken,
    logout,
    init
  }

  return {
    provide: {
      auth
    }
  }
})
