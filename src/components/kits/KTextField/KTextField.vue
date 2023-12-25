<template>
  <div :class="['k-text-field', className]" :style="style">
    <v-text-field
      v-bind="attrs$"
      :id="safeId"
      :name="safeName"
      :placeholder="safePlaceholder"
      v-on="{ wheel: props.blockWheel && blockWheel }"
    />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

const { safeId, safeName, safePlaceholder } = useControl()
const { className, attrs$, style } = useExcludeAttrs()

const props = defineProps({
  blockWheel: {
    type: Boolean,
    default: false
  }
})

function blockWheel($event: Event) {
  $event.preventDefault()
}
</script>
