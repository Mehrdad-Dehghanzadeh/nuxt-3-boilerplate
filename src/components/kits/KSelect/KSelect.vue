<template>
  <div class="k-select">
    <v-select
      v-bind="$attrs"
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
</script>
