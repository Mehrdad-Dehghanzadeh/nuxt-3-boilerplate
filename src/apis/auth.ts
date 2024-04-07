import { type AxiosInstance } from 'axios'
import { type LoginDto } from '@models/Auth'

export default ($axios: AxiosInstance) => ({
  login(payload: LoginDto): any {
    return $axios.post('/auth/login', payload)
  },

  tickets(payload: any) {
    return $axios.post('/securities/allocated', payload)
  }
})
