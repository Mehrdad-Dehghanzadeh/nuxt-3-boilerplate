import { type PromptConfig } from '@type/Prompt'
import prompt from '../ts/enums/Prompt'
import promptEvents from '../ts/enums/PromptEvents'

const Prompt = prompt.enum
const PromptEvents = promptEvents.enum
const DEFAULT_MODEL: PromptConfig = {
  title: '',
  type: Prompt.Warning,
  message: '',
  okButtonText: 'قبول',
  loading: false,
  cancelLoading: false,
  cancelButtonText: 'لغو',
  noCancelButton: false
}

let ref = reactive({
  show: false,
  model: { ...DEFAULT_MODEL }
})

function clearConfig() {
  ref.show = false
  setTimeout(() => {
    ref.model = { ...DEFAULT_MODEL }
  }, 500)
}

type EventHandler = {
  event: Event
  error?: any
  res?: any
}

const eventHandler = new Promise<EventHandler>((resolve, reject) => {
  addEventListener(PromptEvents.Ok, async (event) => {
    if (ref.model.callBackOK) {
      ref.model.loading = true
      try {
        const callBackResponse = await ref.model.callBackOK()
        resolve({ event, res: callBackResponse })
        clearConfig()
      } catch (error) {
        reject({ event, error })
      } finally {
        ref.model.loading = false
      }
    } else {
      resolve({ event })
      clearConfig()
    }
  })

  addEventListener(PromptEvents.Cancel, async (event) => {
    if (ref.model.callBackCancel) {
      ref.model.cancelLoading = true
      try {
        const callBackResponse = await ref.model.callBackCancel()
        resolve({ event, res: callBackResponse })
        clearConfig()
      } catch (error) {
        reject({ event, error })
      } finally {
        ref.model.cancelLoading = false
      }
    } else {
      resolve({ event })
      clearConfig()
    }
  })
})

function open(config: PromptConfig) {
  ref.model = { ...DEFAULT_MODEL, ...config }
  nextTick(() => {
    ref.show = true
  })
  return eventHandler
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      prompt: {
        open,
        ref
      }
    }
  }
})
