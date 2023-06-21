import axios from 'axios'
import auth from '@apis/auth'

const DEFAULT_HEADERS = {}

export default defineNuxtPlugin(() => {
  const { apiBaseUrl } = useAppConfig()
  const $axios = axios.create({
    baseURL: apiBaseUrl,
    headers: { ...DEFAULT_HEADERS }
  })

  console.log(useNuxtApp())

  const api = {
    auth: auth($axios)
  }
  return {
    provide: {
      api
    }
  }
})
