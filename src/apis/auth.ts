import { type AxiosInstance } from 'axios'
import type LoginDto from '@dtos/LoginDto'

export default ($axios: AxiosInstance) => ({
  login(payload: LoginDto): any {
    return $axios.post('/auth/login', payload)
  },

  tickets() {
    const payload = { pageNumber: 1, pageSize: 10 }
    return $axios.post('/securities/allocated', payload)
  }
})
