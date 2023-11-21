<template>
  <article>
    <v-card class="mx-auto" max-width="380px">
      <v-card-text class="mt-10">
        <k-form ref="f" id="2">
          <k-date-picker
            v-model="model.date"
            label="date"
            id="mehrdad-date"
            name="mehrdad"
          />
          <k-password-field
            v-model="model.password"
            label="password"
            id="password"
            name="password"
          />
          <k-text-field
            v-model="model.username"
            label="username"
            id="username"
            name="username"
          />
          <k-select
            v-model="model.type"
            :items="items"
            name="type"
            id="type"
            label="type"
          />

          <k-textarea
            class="mt-10"
            v-model="model.description"
            name="description"
            id="description"
            label="description"
          />
          <v-btn type="submit" block>ثبت</v-btn>
          <v-btn @click="clear" class="mt-4" color="error" block>پاک</v-btn>
        </k-form>
      </v-card-text>
    </v-card>
  </article>
</template>

<script lang="ts" setup>
useHead({
  title: 'Home'
})
const { maxValue, required } = useValidations()
const items = ['p', 'c']
const model = reactive({
  date: '2022-11-03 00:00:00',
  username: 'mehrdad',
  password: '123456',
  description: 'aaaaasd asd as',
  type: 'c'
})
const f = <any>ref(null)

function clear() {
  f.value.clear()
}
</script>
