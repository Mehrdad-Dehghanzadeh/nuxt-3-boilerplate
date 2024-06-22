/**
 * Download  Base 64
 ***********************************/
export function dowloadBase64(name: string, base64: string, type: string = ''): void {
  let a: HTMLAnchorElement = document.createElement('a')
  const header: string = type ? `data:${type};base64,` : ''
  a.href = `${header}${base64}`
  a.download = name
  a.click()
}

/**
 * open file object from link
 ***********************************/
export function objectFileToLink(file: File) {
  const fileURL = window?.URL?.createObjectURL
    ? window.URL.createObjectURL(file)
    : window.webkitURL.createObjectURL(file)

  const tempLink = document.createElement('a')
  tempLink.style.display = 'none'
  tempLink.href = fileURL
  tempLink.setAttribute('target', '_blank')
  tempLink.setAttribute('rel', 'nofollow')

  document.body.appendChild(tempLink)
  tempLink.click()

  // Fixes "webkit blob resource error 1"
  setTimeout(function () {
    document.body.removeChild(tempLink)
    if (fileURL) window.URL.revokeObjectURL(fileURL)
  }, 200)
}
