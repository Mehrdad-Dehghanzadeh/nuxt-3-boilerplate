import { EnumList } from '@type/Enums'

export enum Activity {
  Inactive,
  Active
}

export const activity: EnumList = [
  {
    id: Activity.Inactive,
    name: 'غیرفعال',
    color: 'error'
  },

  {
    id: Activity.Active,
    name: 'فعال',
    color: 'success'
  }
]
