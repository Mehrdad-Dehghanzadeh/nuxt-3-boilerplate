import { AxiosResponse, AxiosError } from 'axios'

export interface ResponseApi extends AxiosResponse {
  statusMessage: string
}
