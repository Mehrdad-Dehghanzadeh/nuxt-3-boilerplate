<template>
  <v-app>
    <nuxt-layout>
      <nuxt-loading-indicator />

      <nuxt-page />
    </nuxt-layout>
  </v-app>

  <k-snackbar />
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Nuxt 3 Boilerplate` : 'Nuxt 3 Boilerplate'
  }
})
</script>
