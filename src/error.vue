<template>
  <nuxt-layout class="error-page" name="empty">
    <div class="text-center">
      <h2 class="mt-10">{{ props?.error?.statusCode }}</h2>
      <h2 class="mt-4">{{ props?.error }}</h2>
    </div>
  </nuxt-layout>
</template>

<script lang="ts" setup>
const props = defineProps({
  error: Object
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Nuxt 3 Boilerplate` : 'Nuxt 3 Boilerplate'
  },

  title: 'Error'
})
</script>
