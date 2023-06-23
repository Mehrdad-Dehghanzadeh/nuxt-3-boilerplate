import { AxiosInstance } from 'axios'
import LoginDto from '@dtos/LoginDto'

export default ($axios: AxiosInstance) => ({
  login(payload: LoginDto):any {
    return $axios.post('/auth/login', payload)
  }
})
