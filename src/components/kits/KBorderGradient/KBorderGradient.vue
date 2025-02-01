<template>
  <component class="k-border-gradient" :is="props.tag">
    <slot name="default" />
  </component>
</template>

<script setup lang="ts">
import type { Props } from './types'
const props = withDefaults(defineProps<Props>(), {
  borderSize: '1px',
  tag: 'div'
})
</script>

<style lang="sass" src="./style.scss" />
