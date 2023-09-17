<template>
  <article></article>
</template>

<script lang="ts" setup>
useHead({
  title: 'Home'
})

onMounted(() => {
  useSanck('error', 'wwwwe')
})
</script>
