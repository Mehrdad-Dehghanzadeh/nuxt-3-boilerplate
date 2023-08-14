<template>
  <article></article>
</template>

<script lang="ts" setup>
const { $api, $auth } = <any>useNuxtApp()

onMounted(() => {
  $auth.login({ username: 'a@a.com', password: '123456' })
})
</script>
