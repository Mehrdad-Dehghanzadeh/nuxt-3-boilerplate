<template>
  <article></article>
</template>

<script lang="ts" setup>
useHead({
  title: 'Home'
})

const { $api, $auth } = <any>useNuxtApp()

const store = useAppStore()

function logout() {
  $auth.logout()
}
</script>
