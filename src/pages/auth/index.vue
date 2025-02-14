<template>
  <article class="auth-page" id="auth-page">
    <v-container class="mt-10">
      <v-card class="mx-auto px-2 pa-5" max-width="380px">
        <h1 class="h1 text-center">ورود سامانه</h1>
        <k-form id="login-form" class="mt-10">
          <k-text-field
            class="mb-4"
            v-model="model.username"
            label="نام کاربری"
            variant="outlined"
            id="username"
            name="username"
          />

          <k-password-field
            v-model="model.password"
            class="mb-4"
            label="رمز عبور"
            variant="outlined"
            id="password"
            name="password"
            innerIcon
          />

          <k-uploader label="شناسنامه" placeholder="لطفا تصویر شناسنامه را وارد کنید" />

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
import { type LoginDto } from '@models/Auth'

const DEFAULT_MODEL: LoginDto = {
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

const loading = ref<boolean>(false)
const model = reactive<LoginDto>({ ...DEFAULT_MODEL })

onMounted(() => {
  if (window) {
    addEventListener('getName', async (event: any) => {
      const data = event.detail
      model.password = data.lastName
      model.username = data.firstName
    })
  }
})
</script>
