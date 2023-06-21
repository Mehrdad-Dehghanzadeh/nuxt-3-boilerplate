<template>
  <article></article>
</template>

<script>
export default {
  name: 'HomePage',

  mounted() {
    setTimeout(() => {
      this.$api.auth
        .login({ username: 'a@a.com', password: '123456' })
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }, 3000)
  }
}
</script>
