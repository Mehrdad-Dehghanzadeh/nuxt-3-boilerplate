<template>
  <v-data-table
    class="k-data-table"
    v-bind="$attrs"
    :items="items"
    :loading="loading"
  ></v-data-table>
</template>

<script lang="ts" setup>
const { $api } = <any>useNuxtApp()

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
    }
  }
})

const items = reactive([])
const loading = ref(false)

function setFilters() {
  return { ...props.defaultFilters }
}

function read() {
  loading.value = true

  const filters = setFilters()
  $api[props.resource]
    [props.method](filters)
    .then((res) => {})
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<style lang="scss" src="./KDataTable.scss" />
