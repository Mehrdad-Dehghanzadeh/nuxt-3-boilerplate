import type { AppConfig, ApisPlugin } from '@type'
import axios from 'axios'
import interceptorsRequest from '@assets/api-plugin/interceptorsRequest'
import interceptorsResponse from '@assets/api-plugin/interceptorsResponse'
import defaultHeader from '@assets/api-plugin/defaultHeader'
import createApis from '@apis'

export default defineNuxtPlugin(() => {
  const { apiBaseUrl } = <Pick<AppConfig, 'apiBaseUrl'>>useAppConfig()
  const $axios = axios.create({
    baseURL: apiBaseUrl,
    headers: defaultHeader
  })

  interceptorsRequest($axios)
  interceptorsResponse($axios)

  const api: ApisPlugin = createApis($axios)

  return {
    provide: {
      api
    }
  }
})
