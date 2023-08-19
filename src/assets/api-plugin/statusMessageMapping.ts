import { AxiosResponse, AxiosInstance, AxiosError } from 'axios'
import { ResponseApi } from '@interfaces/apis'

export default function ($axios: AxiosInstance, i18n: any) {
  $axios.interceptors.response.use(
    (res: AxiosResponse) => {
      if (res) {
        const { status } = res

        return <ResponseApi>Promise.resolve({
          ...res,
          statusMessage: status
            ? i18n?.messages?.value?.[i18n?.locale?.value]?.errors?.statusMessage?.[
                status
              ]?.source || ''
            : ''
        })
      }
    },

    (error: AxiosError) => {
      const { status } = <AxiosResponse>error?.response
      return <ResponseApi>Promise.reject({
        ...error.response,
        statusMessage:
          i18n?.messages?.value?.[i18n?.locale?.value]?.errors?.statusMessage?.[status] ||
          ''
      })
    }
  )
}
