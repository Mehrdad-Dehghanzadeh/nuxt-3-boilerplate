import { enumListType } from '@type/enums'

export enum Activity {
  Inactive,
  Active
}

export const activity: enumListType = [
  {
    id: Activity.Inactive,
    name: 'غیرفعال',
    color: 'error',
  },

  {
    id: Activity.Active,
    name: 'فعال',
    color: 'success'
  }
]
