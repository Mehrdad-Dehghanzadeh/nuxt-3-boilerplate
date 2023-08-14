import { AxiosRequestConfig, AxiosInstance } from 'axios'

export default function ($axios: AxiosInstance, requestConfig: any) {
  $axios.interceptors.request.use(
    function (config: AxiosRequestConfig): any {
      return config
    },

    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )
}
