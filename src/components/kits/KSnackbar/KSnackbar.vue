<template>
  <client-only>
    <div :class="['k-snackbar', `${type ? `k-snackbar-${type}` : ''}`]" v-if="isActive">
      <span v-html="text" />
    </div>
  </client-only>
</template>

<script lang="ts" setup>
import { snackbarIconType } from '@type/snackbarIconType'

const DEFUALT_ICON: snackbarIconType = {
  success: 'mdi-checkbox-marked-circle-outline',
  info: 'mdi-information-outline',
  error: 'mdi-close-circle-outline',
  alert: 'mdi-alert-outline'
}

let text = ref('')
let isActive = ref(false)
let type = ref('')
let icon = ref('')

async function appear(config: { text: string; type: string }) {
  text.value = config.text
  type.value = config.type
  icon.value = DEFUALT_ICON[config.type as keyof typeof DEFUALT_ICON]
  await nextTick()
  isActive.value = true
}
</script>

<style lang="scss" src="./KSnackbar.scss" />
