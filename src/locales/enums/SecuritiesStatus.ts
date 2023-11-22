import { type EnumList } from '@type'

export enum SecuritiesStatus {
  Inactive = 'INACTIVE',
  Active = 'ACTIVE',
  Matured = 'MATURED'
}

const enumsList: EnumList = [
  {
    id: 'INACTIVE',
    name: 'غیرفعال',
    color: 'error'
  },
  {
    id: 'ACTIVE',
    name: 'فعال',
    color: 'success'
  },
  {
    id: 'MATURED',
    name: 'سررسید شده',
    color: 'warning'
  }
]

export default enumsList
