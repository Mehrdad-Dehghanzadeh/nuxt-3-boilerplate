<template>
  <article></article>
</template>

<script lang="ts" setup>
const { $snack } = useNuxtApp()
console.log($snack.error('aaa'))
</script>
