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

    <k-data-table-server
      class="pa-10"
      :headers="headers"
      resource="auth"
      method="tickets"
      count-prop="total"
    >
      <template v-slot:item.message="{ item }">
        {{ item?.message + '1' }}
      </template>
    </k-data-table-server>
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
  { title: 'message', key: 'message', align: 'end' },
  { title: 'title', key: 'title', align: 'end' },
  { title: 'received', key: 'received', align: 'end' },
  { title: 'status', key: 'status', align: 'end' }
]
const { maxValue, required } = useValidations()
const val = ref('2022-11-03 00:00:00')
const f = <any>ref(null)

function clear() {
  f.value.clear()
}
</script>
