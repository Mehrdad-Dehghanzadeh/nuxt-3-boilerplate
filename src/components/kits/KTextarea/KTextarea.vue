<template>
  <div class="k-textarea">
    <v-textarea
      v-bind="$attrs"
      :id="safeId"
      :name="safeName"
      :placeholder="safePlaceholder"
    />
  </div>
</template>

<script lang="ts" setup>
const { safeId, safeName, safePlaceholder } = useControl()
</script>
