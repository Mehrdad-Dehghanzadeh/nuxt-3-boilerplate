<template>
  <article>
    <div v-if="store.isLogin" class="text-center">
      <button @click="logout">logout</button>
    </div>
  </article>
</template>

<script lang="ts" setup>
const { $api, $auth } = <any>useNuxtApp()
const store = useAppStore()
onMounted(() => {
  setTimeout(() => {
    $auth.login({ username: 'a@a.com', password: '123456' })
  }, 6000)
})

function logout() {
  $auth.logout()
}
</script>
