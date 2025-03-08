import type { JwtType, AppConfig, AuthPlugin } from '@type'
import type { TApi } from '@apis/types'
import type { LoginPayload, LoginResponse } from '@type-apis/auth'
import jwt_decode from 'jwt-decode'

export default defineNuxtPlugin((nuxtapp) => {
  const $apis = <TApi>nuxtapp.$apis
  const store = useAppStore()
  const { cookieAuthName } = <Pick<AppConfig, 'cookieAuthName'>>useAppConfig()

  function login(payload: LoginPayload): Promise<LoginResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await $apis.auth.login(payload)

        if (res?.data?.token) {
          await setCookie(res?.data?.token)
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
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  function setUser(jwt: string): void {
    const jwtObject: JwtType = jwt_decode(jwt)
  }

  function setCookie(jwt: string): void {
    if (jwt) {
      const jwtObject: JwtType = jwt_decode(jwt)
      const cookie = useCookie(cookieAuthName, {
        sameSite: true,
        expires: new Date(jwtObject.exp * 1000),
        path: '/'
      })
      cookie.value = jwt
    }
  }

  function init() {
    const cookie = useCookie(cookieAuthName)
    if (cookie.value) {
      const { exp, profile }: JwtType = jwt_decode(cookie.value)
      const isExpired: boolean = exp * 1000 > Date.now()

      if (isExpired && profile) {
        setUser(cookie.value)
        store.setIsLogin(true)
      } else {
        removeToken()
      }
    } else {
      store.setUser(null)
      store.setIsLogin(false)
    }
  }

  function removeToken() {
    const cookie = useCookie(cookieAuthName)
    cookie.value = null
    store.setIsLogin(false)
    store.setUser(null)
  }

  init()

  const auth: AuthPlugin = {
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
