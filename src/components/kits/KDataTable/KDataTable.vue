<template>
  <v-data-table
    class="k-data-table"
    v-bind="$attrs"
    :items="items"
    :loading="loading"
  ></v-data-table>
</template>

<script lang="ts" setup>
const { $api, $snack } = <any>useNuxtApp()

const props = defineProps({
  resource: {
    type: String,
    required: true
  },
  method: {
    type: String,
    default: 'read'
  },
  defaultFilters: {
    type: Object,
    default() {
      return {}
    },
    dataProp: {
      type: String,
      default: 'data'
    }
  }
})

let items:any[] = []
const loading = ref(false)
const count = ref(0)

function setFilters() {
  return { ...props.defaultFilters }
}

function setItems<T extends object>(data: T) {
  items = Array.isArray(data?.[props.dataProp]) ? deepClone((data?.[props.dataProp]) : []
}

function read() {
  loading.value = true

  const filters = setFilters()
  $api[props.resource]
    [props.method](filters)
    .then((res) => {})
    .catch((err) => {
      $snack.show('error', err)
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<style lang="scss" src="./KDataTable.scss" />
