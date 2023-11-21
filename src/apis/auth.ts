import { type AxiosInstance } from 'axios'
import type LoginDto from '@dtos/LoginDto'

export default ($axios: AxiosInstance) => ({
  login(payload: LoginDto): any {
    return $axios.post('/auth/login', payload)
  },

  tickets(payload:any) {
    return $axios.post('/securities/allocated', payload)
  }
})
