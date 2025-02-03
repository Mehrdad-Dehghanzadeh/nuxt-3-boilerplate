<template>
  <component
    class="k-border-gradient"
    :is="props.tag"
    :style="{
      padding: props.borderSize,
      backgroundImage: props.gradinet,
      borderRadius: props.borderRadius
    }"
  >
    <div
      class="k-border-gradient__container"
      :style="{
        backgroundColor: props.backgroundColor,
        borderRadius: containerRadius
      }"
    >
      <slot name="default" />
    </div>
  </component>
</template>

<script setup lang="ts">
import type { Props } from './types'

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
  borderSize: '1px'
})

const containerRadius = computed<string>(() => {
  let val = 'none'
  if (props.borderRadius) {
    const numberRadius = Number(props.borderRadius.replace('px', ''))
    const numberPadding = Number(props.borderSize.replace('px', ''))

    val =
      numberRadius > numberPadding
        ? `${numberRadius - numberPadding}px`
        : props.borderSize
  }

  return val
})
</script>

<style lang="sass" src="./style.scss" />
