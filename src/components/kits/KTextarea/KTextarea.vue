<template>
  <div :class="['k-textarea', className]" :style="style">
    <v-textarea
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

const { safeId, safeName, safePlaceholder } = useControl()
const { className, attrs$, style } = useExcludeAttrs()
</script>
