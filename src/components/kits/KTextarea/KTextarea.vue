<template>
  <div ref="el" class="k-textarea">
    <v-textarea
      v-bind="$attrs"
      :id="safeId"
      :name="safeName"
      :placeholder="safePlaceholder"
    />
  </div>
</template>

<script lang="ts" setup>
const el = <any>ref(null)
const uid = computed(() => el.value?.__vueParentComponent?.uid)
const { safeId, safeName, safePlaceholder } = useControl(uid)
</script>
