import axios from 'axios'
import { configAutoImportApis } from '@helpers/apis'

const DEFAULT_HEADERS = {}

export default defineNuxtPlugin(() => {
  const { apiBaseUrl } = useAppConfig()
  const $axios = axios.create({
    baseURL: apiBaseUrl,
    headers: DEFAULT_HEADERS 
  })
  
  const api:object = {}
  configAutoImportApis(api, $axios)

  return {
    provide: {
      api
    }
  }
})
