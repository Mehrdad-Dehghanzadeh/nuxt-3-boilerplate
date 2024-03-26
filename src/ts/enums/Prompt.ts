import { type EnumList } from '@type/Enums'

export enum PromptType {
  Success = 'SUCCESS',
  Error = 'ERROR',
  Warning = 'WARNING',
  Info = 'INFO'
}

const enumList: EnumList = [
  {
    value: PromptType.Success,
    title: 'موفق',
    color: 'success',
    icon: 'mdi-check-circle-outline'
  },

  {
    value: PromptType.Error,
    title: 'خطا',
    color: 'error',
    icon: 'mdi-close-circle'
  },

  {
    value: PromptType.Warning,
    title: 'اخطار',
    color: 'warning',
    icon: 'mdi-alert'
  },

  {
    value: PromptType.Info,
    title: 'اطلاع',
    color: 'info',
    icon: 'mdi-information'
  }
]

export default { enumList, enum: PromptType }
