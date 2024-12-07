/**
 * Copy text
 ***********************************/
export function copyText(text: string): void {
  function fallbackCopyTextToClipboard(text: string): void {
    let textArea: HTMLTextAreaElement = document.createElement('textarea')
    textArea.value = text

    // Avoid scrolling to bottom
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.position = 'fixed'

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
      let successful = document.execCommand('copy')
      let msg = successful ? 'successful' : 'unsuccessful'
      console.log('Fallback: Copying text command was ' + msg)
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err)
    }

    document.body.removeChild(textArea)
  }

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      function () {
        console.log('Async: Copying to clipboard was successful!')
      },
      function (err) {
        console.error('Async: Could not copy text: ', err)
      }
    )
  } else {
    fallbackCopyTextToClipboard(text)
  }
}

export function isJsonString(str: string): boolean {
  let val = false

  if (typeof str === 'string') {
    try {
      JSON.parse(str)
      val = true
    } catch (e) {
      val = false
    }
  }

  return val
}
