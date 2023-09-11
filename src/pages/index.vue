<template>
  <article>
    <div v-if="store.isLogin" class="text-center">
      <button @click="logout">logout</button>
    </div>
  </article>
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
