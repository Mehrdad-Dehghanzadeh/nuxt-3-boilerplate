<template>
  <v-app>
    <nuxt-layout />
  </v-app>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: '%s | nuxt 3 boilerplate',

  htmlAttrs: {
    lang: 'fa',
    dir: 'rtl'
  }
})
</script>
