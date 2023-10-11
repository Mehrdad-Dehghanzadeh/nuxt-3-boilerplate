<template>
  <article>
    <v-card class="mx-auto" max-width="380px">
      <v-card-text class="mt-10">
        <k-form ref="f" id="2">
          <k-date-picker v-model="val" label="date" />
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
const val = ref('2022-11-03 00:00:00')
const f = <any>ref(null)

function clear() {
  f.value.clear()
}
</script>
