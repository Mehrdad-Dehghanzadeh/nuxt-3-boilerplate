import { type AxiosResponse as Response } from 'axios'

export interface ResponseApi extends Response {
  statusMessage: string
}

export {
  type AxiosInstance,
  AxiosError,
  type AxiosResponse,
  type AxiosRequestConfig
} from 'axios'
