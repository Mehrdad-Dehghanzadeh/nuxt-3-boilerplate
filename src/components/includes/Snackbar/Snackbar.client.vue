<template>
  <client-only>
    <div
      v-if="snack.isActive"
      :class="['k-snackbar', `${snack.state && `k-snackbar--${snack.state}`}`]"
    >
      <div class="k-snackbar__wrapper">
        <v-icon class="k-snackbar__icon">{{ icon }}</v-icon>
        <span class="k-snackbar__text" v-html="snack.text" />
      </div>
    </div>
  </client-only>
</template>

<script lang="ts" setup>
import { type IconType } from '@type'

const { $snack } = <any>useNuxtApp()
const snack = $snack?.refs
const DEFAULT_ICON: IconType = {
  success: 'mdi-checkbox-marked-circle-outline',
  info: 'mdi-information-outline',
  error: 'mdi-close-circle-outline',
  alert: 'mdi-alert-outline'
}

const icon = computed(() => snack.state && DEFAULT_ICON[snack.state as keyof IconType])
</script>

<style lang="scss" src="./Snackbar.scss" />
