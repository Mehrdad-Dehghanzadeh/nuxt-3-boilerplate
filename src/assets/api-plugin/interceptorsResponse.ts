import type { AxiosInstance } from 'axios'

export default function ($axios: AxiosInstance) {
  $axios.interceptors.response.use(
    function (response) {
      return response
    },

    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )
}
