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
            type="number"
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

          <k-uploader
            label="شناسنامه"
            placeholder="لطفا تصویر شناسنامه را وارد کنید"
            :rules="[required, size(100)]"
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
import type { LoginModel } from '@models/Auth'
import type { AuthPlugin } from '@type'

const { required, size } = useValidations()
const $auth = <AuthPlugin>useNuxtApp().$auth
const router = useRouter()

const DEFAULT_MODEL: LoginModel = {
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
const model = reactive<LoginModel>({ ...DEFAULT_MODEL })

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
</script>
