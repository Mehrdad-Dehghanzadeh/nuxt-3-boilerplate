import LoginDto from '@dtos/LoginDto'
import jwt_decode from 'jwt-decode'

export default defineNuxtPlugin(({ $api }) => {
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
    console.log(jwt_decode(jwt))
  }

  function setCookie(jwt: string): void {}

  const auth = {
    login
  }
  return {
    provide: {
      auth
    }
  }
})
