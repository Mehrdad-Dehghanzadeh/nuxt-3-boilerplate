<template>
  <v-theme-provider>
    <v-app>
      <NuxtLayout>
        <nuxt-loading-indicator />
        <NuxtPage />
      </NuxtLayout>
    </v-app>

    <snackbar />
  </v-theme-provider>
</template>

<script lang="ts" setup>
import Snackbar from '@includes/Snackbar/Snackbar.client.vue'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Nuxt 3 Boilerplate` : 'Nuxt 3 Boilerplate'
  }
})

const data = {
  name: 'mehrdad',
  age: 31
}

onMounted(() => {
  if (window) {
    try {
      throw new CustomError('hello custom error', data)
    } catch (e: unknown) {
      if (e instanceof CustomError) {
        console.log('okey')
      }
      console.log(e)
    }
  }
})
</script>
