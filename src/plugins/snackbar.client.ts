const defaults = {
  type: ''
}
let snack: any

const types = ['success', 'info', 'error', 'alert']

function setMessage(res: any) {
  let val = ''
  switch (typeof res) {
    case 'string':
      val = res
      break

    case 'number':
      val = res.toString()
      break

    case 'object':
      val = res?.data?.message || res?.statusMessage
      break
  }

  return val
}

function show(res: any, options: object) {
  const text = setMessage(res)
  snack.appear({ text, ...defaults, ...options })
}

function registerTypes() {
  const methods = {}

  types.forEach((type) => {
    methods[type] = (text: string, options: object) => show(text, { type, ...options })
  })

  return methods
}

export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp } = nuxtApp
  return {
    provide: {
      snack: Object.assign(show, {
        ...registerTypes()
      })
    }
  }
})
