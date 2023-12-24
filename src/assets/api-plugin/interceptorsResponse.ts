import type { AxiosInstance } from '@type'

export default function ($axios: AxiosInstance) {
  $axios.interceptors.response.use(
    function (response): any {
      return response
    },

    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )
}
