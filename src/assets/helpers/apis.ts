import { AxiosResponse } from 'axios'
import { ResponseApi } from '@interfaces/apis'

export function statusMessageMapping(response: AxiosResponse, i18n: any) {
  if (response) {
    const { status } = response

    return <ResponseApi>{
      ...response,
      statusMessage: i18n?.messages[i18n.locale]?.errors?.statusMessage[status] || ''
    }
  }
}

export function configInterceptorsResponse($axios: any) {
  $axios.interceptors.response.use((res: AxiosResponse) => {})
}
