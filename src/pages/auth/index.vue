<template>
  <article class="auth-page" id="auth-page">
    <v-container class="mt-10">
      <v-card class="mx-auto px-2 pa-5" max-width="380px">
        <h1 class="h1 text-center">ورود سامانه</h1>
        <k-form id="login-form" class="mt-10" @onValid="submit">
          <k-text-field
            class="mb-4"
            v-model="model.username"
            label="نام کاربری"
            variant="outlined"
            :rules="[required]"
            id="username"
            name="username"
          />

          <k-password-field
            v-model="model.password"
            class="mb-4"
            label="رمز عبور"
            :rules="[required]"
            variant="outlined"
            id="password"
            name="password"
            innerIcon
          />

          <v-btn :loading="loading" type="submit" color="primary" size="large" block>
            <v-icon>mdi-lock</v-icon>
            ورود به سامانه
          </v-btn>
        </k-form>
      </v-card>
    </v-container>
  </article>
</template>

<script lang="ts" setup>
import type LoginDTO from '@dtos/LoginDTO'
import useSnackbar from '~/composables/useSnackbar'
const { required } = useValidations()
const { $auth } = useNuxtApp()
const router = useRouter()

const DEFAULT_MODEL: LoginDTO = {
  username: '',
  password: ''
}
useHead({
  title: 'ورود به سامانه'
})

definePageMeta({
  middleware: ['no-auth'],
  layout: 'empty'
})

const loading = <boolean>ref(false)
const model = <LoginDTO>reactive({ ...DEFAULT_MODEL })

function submit() {
  loading.value = true

  $auth
    .login(model)
    .then((res) => {
      router.push('/')
    })
    .catch((err) => {
      useSnackbar('error', err)
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(() => {
  setTimeout(() => {
    useSnackbar('error', 'sssssss')
  }, 500)
})
</script>
