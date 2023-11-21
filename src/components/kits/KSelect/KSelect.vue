<template>
  <div :class="['k-select', className]" :style="style">
    <v-select
      v-bind="attrs$"
      :id="safeId"
      :name="safeName"
      :placeholder="safePlaceholder"
    />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

const { className, attrs$, style } = useExcludeAttrs()
const { safeId, safeName, safePlaceholder } = useControl()
</script>
