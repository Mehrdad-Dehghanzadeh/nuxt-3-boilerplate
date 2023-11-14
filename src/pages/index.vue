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

    <k-data-table class="mt-10" :headers="headers" resource="app"></k-data-table>
  </article>
</template>

<script lang="ts" setup>
useHead({
  title: 'Home'
})
const headers = [
  {
    title: 'Dessert (100g serving)',
    align: 'start',
    sortable: false,
    key: 'name'
  },
  { title: 'Calories', key: 'calories', align: 'end' },
  { title: 'Fat (g)', key: 'fat', align: 'end' },
  { title: 'Carbs (g)', key: 'carbs', align: 'end' },
  { title: 'Protein (g)', key: 'protein', align: 'end' },
  { title: 'Iron (%)', key: 'iron', align: 'end' }
]
const { maxValue, required } = useValidations()
const val = ref('2022-11-03 00:00:00')
const f = <any>ref(null)

function clear() {
  f.value.clear()
}
</script>
