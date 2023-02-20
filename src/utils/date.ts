/**
 * currentDate formate yyyy-mm-dd
 * ****************************************/
export function currentDate(): string {
  let currentDate = new Date(new Date().getTime())
  let day = currentDate.getDate()
  let month = currentDate.getMonth() + 1
  let year = currentDate.getFullYear()

  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
}

/**
 * tomorrow formate yyyy-mm-dd
 * ****************************************/
export function tomorrowDate(): string {
  let currentDate = new Date(new Date().getTime() + 60 * 60 * 24 * 1000)
  let day = currentDate.getDate()
  let month = currentDate.getMonth() + 1
  let year = currentDate.getFullYear()

  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
}
