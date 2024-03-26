import { type PromptType } from '@enums/Prompt'

export type PromptConfig = {
  title?: string
  type?: PromptType
  message?: string
  loading?: boolean
  cancelLoading?: boolean
  okButtonText?: string
  callBackOK?: () => any
  cancelButtonText?: string
  callBackCancel?: () => any
  noCancelButton?: boolean
}
