<template>
  <client-only>
    <div v-if="isActive" :class="['k-snackbar', `${type ? `k-snackbar-${type}` : ''}`]">
      <div class="k-snackbar__wrapper">
        <span class="k-snackbar__text" v-html="text" />
      </div>
    </div>
  </client-only>
</template>
<script lang="ts">
import { snackbarIconType } from '@type/snackbarIconType'

const DEFUALT_ICON: snackbarIconType = {
  success: 'mdi-checkbox-marked-circle-outline',
  info: 'mdi-information-outline',
  error: 'mdi-close-circle-outline',
  alert: 'mdi-alert-outline'
}

export default defineComponent({
  name: 'KSnackbar',
  data() {
    return {
      isActive: true,
      type: '',
      icon: '',
      text: ''
    }
  },

  methods: {
    appear(config: { text: string; type: string }) {
      this.text = config.text
      this.type = config.type
      this.icon = DEFUALT_ICON[config.type as keyof typeof DEFUALT_ICON]
      this.isActive = true
    }
  }
})
</script>

<style lang="scss" src="./KSnackbar.scss" />
