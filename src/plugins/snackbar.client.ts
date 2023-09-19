import { State, AppearOptions } from '@types/Snackbar'

const snack = reactive({
  text: '',
  state: '',
  isActive: false,
  icon: '',

  appear(options: AppearOptions) {
    this.text = options.text
    this.state = options.state
    this.isActive = true

    setTimeout(() => {
      this.text = ''
      this.state = ''
      this.isActive = false
    }, 10000)
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
