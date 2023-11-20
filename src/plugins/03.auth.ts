import type LoginDto from '@dtos/LoginDto'
import jwt_decode from 'jwt-decode'
import { type JwtType, type AppConfig } from '@type'

export default defineNuxtPlugin(({ $api }) => {
  const store = useAppStore()
  const { cookieAuhtName } = <Pick<AppConfig, 'cookieAuhtName'>>useAppConfig()

  function login(payload: LoginDto): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await $api.auth.login(payload)

        if (res?.data?.access_token) {
          await setCookie(res?.data?.access_token)
          await init()
          resolve(res)
        } else {
          reject({ message: 'res.data.access_token is null' })
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
    store.setUser(jwtObject.profile)
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
      const { exp, profile }: JwtType = jwt_decode(cookie.value)
      const isExpired: boolean = exp * 1000 > Date.now()

      if (isExpired && profile) {
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
