<template>
  <client-only>
    <div v-if="isActive" :class="['k-snackbar', `${state && `k-snackbar-${state}`}`]">
      <div class="k-snackbar__wrapper">
        <v-icon class="k-snackbar__icon">{{ icon }}</v-icon>
        <span class="k-snackbar__text" v-html="text" />
      </div>
    </div>
  </client-only>
</template>

<script lang="ts" setup>
import { IconType, State } from './Types'

const DEFUALT_ICON: IconType = {
  success: 'mdi-checkbox-marked-circle-outline',
  info: 'mdi-information-outline',
  error: 'mdi-close-circle-outline',
  alert: 'mdi-alert-outline'
}

const isActive = ref<boolean>(true)
const state = ref<State>('')
const icon = ref<string>('')
const text = ref<string>('')

function appear(config: { text: string; state: State }) {
  text.value = config.text
  state.value = config.state
  icon.value = DEFUALT_ICON[config.state as keyof typeof DEFUALT_ICON]
  isActive.value = true
}
</script>

<style lang="scss" src="./KSnackbar.scss" />
