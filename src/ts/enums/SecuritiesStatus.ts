export enum SecuritiesStatus {
  Inactive = 'INACTIVE',
  Active = 'ACTIVE',
  Matured = 'MATURED'
}

const enumList: EnumList = [
  {
    id: SecuritiesStatus.Inactive,
    name: 'غیرفعال',
    color: 'error'
  },
  {
    id: SecuritiesStatus.Active,
    name: 'فعال',
    color: 'success'
  },
  {
    id: SecuritiesStatus.Matured,
    name: 'سررسید شده',
    color: 'warning'
  }
]

export default { enumList, enum: SecuritiesStatus }
