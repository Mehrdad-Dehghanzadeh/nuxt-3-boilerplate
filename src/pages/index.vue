<template>
  <article></article>
</template>

<script lang="ts" setup>
const { $snack } = useNuxtApp()

onMounted(() => {
  $snack.error('سلام')
})
</script>
