<template>
  <div ref="el" class="k-select">
    <v-select
      v-bind="$attrs"
      :id="safeId"
      :name="safeName"
      :placeholder="safePlaceholder"
    />
  </div>
</template>

<script setup lang="ts">
const el = <any>ref(null)
const uid = computed(() => el.value?.__vueParentComponent?.uid)
const { safeId, safeName, safePlaceholder } = useControl(uid)
</script>
