<template>
  <article></article>
</template>

<script lang="ts" setup>
const { $api } = <any>useNuxtApp()

onMounted(() => {
  $api.auth.login({})
})
</script>
