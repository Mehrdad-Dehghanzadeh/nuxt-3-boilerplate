import { date } from '@utils/date'

export default function () {
  /**
   * Roune number
   * ***********************************/
  const round = (num: number) => {
    if (num % 1 === 0) {
      return num
    }
    return Math.round(num * 100) / 100
  }

  /**
   * Seperate number by 3-digit format
   * ***********************************/
  function price(val: number | string | null, currency: string | null = 'ریال') {
    let value: number | string = 0
    if (val) {
      const str: string = val.toString()
      value = str.startsWith('-')
        ? `${str.substring(1).replace(/(.)(?=(.{3})+$)/g, '$1,')}-`
        : str.replace(/(.)(?=(.{3})+$)/g, '$1,')
    }

    return `${value} ${currency}`
  }

  /**
   * Determine file size
   * ***********************************/
  const fileSize = (val: number) => {
    const size = val
    const kilobyte = 1024
    const megabyte = kilobyte * kilobyte

    if (size > megabyte) {
      return round(size / megabyte) + ' مگابایت'
    } else if (size > kilobyte) {
      return round(size / kilobyte) + ' کیلوبایت'
    } else if (size >= 0) {
      return size + ' بایت'
    }

    return 'N/A'
  }

  /**
   * retrun value or havenot String
   * ***********************************/
  const haveNot = (val: unknown) => val ?? 'ندارد'

  /**
   * Format garegorian date time to jalali
   * ***********************************/
  const dateTime = (val: string) => {
    return date(val, true)
  }

  return {
    round,
    price,
    fileSize,
    haveNot,
    date,
    dateTime
  }
}
