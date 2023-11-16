import { type AxiosRequestConfig, type AxiosInstance } from '@type'

export default function ($axios: AxiosInstance) {
  $axios.interceptors.request.use(
    function (config: AxiosRequestConfig): any {
      const cookie = useCookie('token')
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
