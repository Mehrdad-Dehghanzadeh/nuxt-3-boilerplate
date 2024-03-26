import { type PromptConfig } from '@type/Prompt'

export default function (config: PromptConfig) {
  if (process.client) {
    const { $prompt } = <any>useNuxtApp()
    return $prompt.open(config)
  }
}
