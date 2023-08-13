import { AxiosResponse, AxiosInstance } from 'axios'

export default function ($axios: AxiosInstance) {
  $axios.interceptors.response.use((res: AxiosResponse) => {})
}
