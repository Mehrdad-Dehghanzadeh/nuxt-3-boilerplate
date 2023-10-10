import moment from 'moment-jalaali'

/**
 * create date
 * ***********************************/
export function date(val: string | number | Date, isFull: boolean = false): string {
  const fullStr: string = isFull ? ' - HH:mm' : ''
  return val ? moment(val).format(`jYYYY/jMM/jDD${fullStr}`) : ''
}

/**
 * Get today
 * ***********************************/
export const today = date(new Date())

export const todayDateTime = date(new Date(), true)

/**
 * convert jalaalie to unix
 ********************************/
export function jalaaliToUnix(jalaaliDate: string): string | number {
  let val: string | number = ''
  if (jalaaliDate) {
    const utc = moment(jalaaliDate, 'jYYYY/jMM/jDD HH:mm:ss A').format()
    val = moment.utc(utc).unix()
  }

  return val
}

export function jalaaliToUtc(jalaaliDate: string, format: string = 'YYYY-MM-DD'): string {
  return jalaaliDate ? moment(jalaaliDate, 'jYYYY/jMM/jDD HH:mm:ss A').format(format) : ''
}

/**
 * convert jalaalie to unix
 ********************************/
export function utcToUnix(utc: string): string | number {
  return utc ? moment.utc(utc).unix() : ''
}

/**
 * convert utc to jalaalie
 *****************************/
export function utcToJalaalie(val: string): string {
  return val ? moment.utc(val).format('jYYYY/jMM/jDD') : ''
}
