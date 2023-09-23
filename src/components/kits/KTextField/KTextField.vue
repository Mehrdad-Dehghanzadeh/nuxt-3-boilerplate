<template>
  <div class="k-text-field">
    <v-text-field
      v-bind="$attrs"
      :id="safeId"
      :name="safeName"
      :placeholder="safePlaceholder"
    />
  </div>
</template>

<script setup>
const { safeId, safeName, safePlaceholder } = useControl()
</script>
