import { type AxiosRequestConfig, type AxiosInstance, type AppConfig } from '@type'

export default function ($axios: AxiosInstance) {
  const { cookieAuhtName } = <Pick<AppConfig, 'cookieAuhtName'>>useAppConfig()

  $axios.interceptors.request.use(
    function (config: AxiosRequestConfig): any {
      const cookie = useCookie(cookieAuhtName)
      const store = useAppStore()
      if (store.isLogin && config.headers) {
      config.headers.Authorization = `Bearer ${cookie.value}`
      }

      return config
    },

    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )
}
