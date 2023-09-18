<template>
  <v-app>
    <nuxt-layout />
  </v-app>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Nuxt 3 Boilerplate` : 'Nuxt 3 Boilerplate';
  }
})
</script>
