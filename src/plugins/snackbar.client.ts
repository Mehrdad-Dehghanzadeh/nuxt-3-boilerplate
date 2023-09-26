import { State, AppearOptions } from '@type/Snackbar'

const snack = reactive({
  text: '',
  state: '',
  isActive: false,
  icon: '',

  appear(options: AppearOptions) {
    this.text = options.text
    this.state = options.state
    this.isActive = true
    const time: number = options?.time ?? 10000

    setTimeout(() => {
      this.text = ''
      this.state = ''
      this.isActive = false
    }, time)
  }
})

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

function show(state: State, res: any) {
  const text = setMessage(res)
  snack.appear({ text, state })
}

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      snack: {
        show,
        refs: snack
      }
    }
  }
})
