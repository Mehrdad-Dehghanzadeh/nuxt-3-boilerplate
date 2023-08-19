<template>
  <article></article>
</template>

<script lang="ts" setup>
const { $api, $auth } = <any>useNuxtApp()

onMounted(() => {
  setTimeout(() => {
    $auth.login({ username: 'a@a.com', password: '123456' })
  }, 6000)
})
</script>
