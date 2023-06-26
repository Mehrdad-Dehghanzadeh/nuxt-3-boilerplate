<template>
  <article></article>
</template>

<script lang="ts">
import LoginDto from '@dtos/LoginDto'

export default {
  name: 'HomePage',

  mounted() {
    const payload: LoginDto = { username: 'a@a.', password: '123456' }

    setTimeout(() => {
      this.$api.auth
        .login(payload)
        .then((res:any) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }, 3000)
  }
}
</script>
