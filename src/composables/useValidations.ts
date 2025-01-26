import isEmail from 'validator/es/lib/isEmail'
import isEmpty from 'validator/es/lib/isEmpty'
import isFloat from 'validator/es/lib/isFloat'
import isStrongPassword from 'validator/es/lib/isStrongPassword'
import {
  isRealNationalCode,
  isLegalNationalCode,
  isNationalCode,
  isIban,
  isPersainDate,
  isCardNumber,
  isPostalCode
} from '@assets/validations'

type Validated = boolean | string
type ValidatedFunc = (val: any) => string | boolean

export default function () {
  const { t } = useI18n()

  function email(val: string): Validated {
    return !val || isEmail(val) || t('errors.validations.email')
  }

  function required(val: any): Validated {
    if (typeof val === 'string' || typeof val === 'number') {
      const value = String(val)
      return (!!value && !isEmpty(value)) || t('errors.validations.required')
    }

    if (typeof val === 'object') {
      return (!!val && Object.keys(val).length === 0) || t('errors.validations.required')
    } else {
      return !!val || t('errors.validations.required')
    }
  }

  function maxValue(max: number | undefined): ValidatedFunc {
    return (val: string) =>
      !val || isFloat(val, { max }) || t('errors.validations.max_value', { max })
  }

  function minValue(min: number | undefined): ValidatedFunc {
    return (val: string) =>
      !val || isFloat(val, { min }) || t('errors.validations.min_value', { min })
  }

  function realNationalCode(val: string): Validated {
    return !val || isRealNationalCode(val) || t('errors.validations.realNationalCode')
  }

  function legalNationalCode(val: string): Validated {
    return !val || isLegalNationalCode(val) || t('errors.validations.legalNationalCode')
  }

  function nationalCode(val: string): Validated {
    return !val || isNationalCode(val) || t('errors.validations.nationalCode')
  }

  function iban(val: string): Validated {
    return !val || isIban(val) || t('errors.validations.iban')
  }

  function password(val: string): Validated {
    return !val || isStrongPassword(val) || t('errors.validations.password')
  }

  function persainDate(val: string): Validated {
    return !val || isPersainDate(val) || t('errors.validations.persainDate')
  }

  function cardNumber(val: string): Validated {
    return !val || isCardNumber(val) || t('errors.validations.cardNumber')
  }

  function size(maxSize: number): ValidatedFunc {
    return (val: File) =>
      !val ||
      val?.size < maxSize * 1024 ||
      t('errors.validations.size', { size: maxSize })
  }

  function postalCode(val: string | number): Validated {
    return !val || isPostalCode(val) || t('errors.validations.postalCode')
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
    persainDate,
    cardNumber,
    size,
    postalCode
  }
}
