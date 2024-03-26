import { type EnumList } from '@type/Enums'

export enum PromptEvents {
  Cancel = 'CANCEL_PROMPT',
  Ok = 'OK_PROMPT'
}

const enumList: EnumList = [
  {
    value: PromptEvents.Cancel,
    title: 'لغو',
    color: 'error'
  },

  {
    value: PromptEvents.Ok,
    title: 'تایید',
    color: 'success'
  }
]

export default { enumList, enum: PromptEvents }
