<template>
  <v-theme-provider>
    <v-app>
      <v-layout class="error-page flex-column" full-height>
        <div class="text-center">
          <h2 class="mt-10">{{ error?.statusCode }}</h2>
          <h2 class="mt-4">{{ error }}</h2>
        </div>
      </v-layout>
    </v-app>
  </v-theme-provider>
</template>

<script lang="ts" setup>
const error = useError()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Nuxt 3 Boilerplate` : 'Nuxt 3 Boilerplate'
  },

  title: 'Error'
})
</script>
