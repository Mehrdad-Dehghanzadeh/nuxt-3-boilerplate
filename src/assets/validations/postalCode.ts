export function isPostalCode(code: number | string): boolean {
  const txt = String(code)
  return /^\d{10}$/.test(txt)
}
