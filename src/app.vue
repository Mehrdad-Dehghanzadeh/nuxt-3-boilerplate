<template>
  <v-theme-provider>
    <v-app>
      <nuxt-layout>
        <nuxt-loading-indicator />
        <nuxt-page />
      </nuxt-layout>
    </v-app>

    <snackbar />
    <prompt />
  </v-theme-provider>
</template>

<script lang="ts" setup>
import Snackbar from '@includes/Snackbar/Snackbar.client.vue'
import Prompt from '@includes/Propmt/Prompt.client.vue'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Nuxt 3 Boilerplate` : 'Nuxt 3 Boilerplate'
  }
})
</script>
