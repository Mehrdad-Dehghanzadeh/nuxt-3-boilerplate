<template>
  <article></article>
</template>

<script lang="ts" setup>
useHead({
  title: 'Home'
})

onMounted(() => {
  setTimeout(() => {
    const { $snack } = <any>useNuxtApp()
    $snack.show('error', 'asdasdasd')
  }, 5000)
})
</script>
