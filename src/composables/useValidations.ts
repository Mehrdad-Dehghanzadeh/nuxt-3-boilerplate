import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import isFloat from 'validator/lib/isFloat'
import isStrongPassword from 'validator/lib/isStrongPassword'
import {
  isRealNationalCode,
  isLegalNationalCode,
  isNationalCode,
  isIban,
  isPersainDate
} from '@assets/validations'

type validated = boolean | string
type validatedFunc = (val: any) => string | boolean

export default function () {
  const { t } = useI18n()

  function email(val: string): validated {
    return !val || isEmail(val) || t('errors.validations.email')
  }

  function required(val: string | null): validated {
    return (!!val && !isEmpty(val)) || t('errors.validations.required')
  }

  function maxValue(max: number | undefined): validatedFunc {
    return (val: string) =>
      !val || isFloat(val, { max }) || t('errors.validations.max_value', { max })
  }

  function minValue(min: number | undefined): validatedFunc {
    return (val: string) =>
      !val || isFloat(val, { min }) || t('errors.validations.min_value', { min })
  }

  function realNationalCode(val: string): validated {
    return !val || isRealNationalCode(val) || t('errors.validations.realNationalCode')
  }

  function legalNationalCode(val: string): validated {
    return !val || isLegalNationalCode(val) || t('errors.validations.legalNationalCode')
  }

  function nationalCode(val: string): validated {
    return !val || isNationalCode(val) || t('errors.validations.nationalCode')
  }

  function iban(val: string): validated {
    return !val || isIban(val) || t('errors.validations.iban')
  }

  function password(val: string): validated {
    return !val || isStrongPassword(val) || t('errors.validations.password')
  }

  function persainDate(val: string): validated {
    return !val || isPersainDate(val) || t('errors.validations.persainDate')
  }

  return {
    email,
    required,
    maxValue,
    minValue,
    realNationalCode,
    legalNationalCode,
    nationalCode,
    iban,
    password,
    persainDate
  }
}
