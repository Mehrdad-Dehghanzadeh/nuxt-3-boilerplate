import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import isFloat from 'validator/lib/isFloat'

export default function () {
  const { t } = useI18n()

  function email(val: string): boolean | string {
    return isEmail(val) || t('errors.validations.email')
  }

  function required(val: string | null): boolean | string {
    return !isEmpty(val) || t('errors.validations.required')
  }

  function maxValue(max: string | number) {
    return (val: string) =>
      isFloat(val, { max }) || t('errors.validations.max_value', { max })
  }

  return {
    email,
    required,
    maxValue
  }
}
