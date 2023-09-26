import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import isFloat from 'validator/lib/isFloat'
import {
  isRealNationalCode,
  isLegalNationalCode,
  isNationalCode,
  iban as isIban
} from '@assets/validations'

type validated = boolean | string
type validatedFunc = (val: any) => string | boolean

export default function () {
  const { t } = useI18n()

  function email(val: string): validated {
    return isEmail(val) || t('errors.validations.email')
  }

  function required(val: string | null): validated {
    return !isEmpty(val) || t('errors.validations.required')
  }

  function maxValue(max: string | number): validatedFunc {
    return (val: string) =>
      isFloat(val, { max }) || t('errors.validations.max_value', { max })
  }

  function minValue(min: string | number): validatedFunc {
    return (val: string) =>
      isFloat(val, { min }) || t('errors.validations.min_value', { min })
  }

  function realNationalCode(val: string): validated {
    return isRealNationalCode(val) || t('errors.validations.realNationalCode')
  }

  function legalNationalCode(val: string): validated {
    return isLegalNationalCode(val) || t('errors.validations.legalNationalCode')
  }

  function nationalCode(val: string): validated {
    return isNationalCode(val) || t('errors.validations.nationalCode')
  }

  function iban(val: string): validated {
    return isIban(val) || t('errors.validations.iban')
  }

  return {
    email,
    required,
    maxValue,
    minValue,
    realNationalCode,
    legalNationalCode,
    nationalCode,
    iban
  }
}
