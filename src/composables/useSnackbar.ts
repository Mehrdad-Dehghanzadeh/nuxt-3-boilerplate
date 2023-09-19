import { State } from '@types/Snackbar'

export default function (state: State, res: unknown) {
  if (process.client) {
    const { $snack } = <any>useNuxtApp()
    $snack.show(state, res)
  }
}
