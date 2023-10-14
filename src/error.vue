<template>
  <div class="text-center">
    <h2 class="mt-10">{{ error?.statusCode }}</h2>
    <h2 class="mt-4">{{ error }}</h2>
  </div>
</template>

<script lang="ts" setup>
const error = useError()
console.log(error)

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Nuxt 3 Boilerplate` : 'Nuxt 3 Boilerplate'
  },

  title: 'Error'
})
</script>
