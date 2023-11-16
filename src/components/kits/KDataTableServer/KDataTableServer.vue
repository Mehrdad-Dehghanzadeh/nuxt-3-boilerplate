<template>
  <v-data-table-server
    class="k-data-table-server"
    v-bind="$attrs"
    :items="items"
    :items-length="count"
    :loading="loading"
  >
    <template v-for="(key, index) in slots" :key="`${key}-${index}`" #[key]="{ item }">
      <slot v-bind="{ item }" :name="key" />
    </template>
  </v-data-table-server>
</template>

<script lang="ts" setup>
const { $api, $snack } = <any>useNuxtApp()
const slots = computed(() => Object.keys(useSlots()))

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
  },
  dataProp: {
    type: String,
    default: 'data'
  },
  countProp: {
    type: String,
    default: 'count'
  }
})

let items: any[] = []
const loading = ref(false)
const count = ref(0)

function setFilters<T>(filters: T) {
  return { ...props.defaultFilters, ...filters }
}

function clearFilters() {
  return { ...props.defaultFilters }
}

function setItems(data: any) {
  items = Array.isArray(data[props.dataProp])
    ? deepClone(data[props.dataProp])
    : deepClone([])
  count.value = data?.[props.countProp] ?? data?.[props.dataProp]?.length
}

function read() {
  loading.value = true

  const filters = setFilters<object>({})
  $api[props.resource]
    [props.method](filters)
    .then((res: { data: any; key?: any }) => {
      if (res?.data) {
        setItems(res.data)
      }
    })
    .catch((err: unknown) => {
      $snack.show('error', err)
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(() => {
  read()
})

defineExpose({
  read,
  setFilters,
  clearFilters
})
</script>

<style lang="scss" src="./KDataTableServer.scss" />
