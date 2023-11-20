<template>
  <v-data-table-server
    class="k-data-table-server"
    v-model:items-per-page="pagination.pageSize"
    v-bind="$attrs"
    :items="items"
    :items-length="count"
    :loading="loading"
  >
    <template
      v-for="(key, index) in slots"
      :key="`${key}-${index}__${uid}`"
      #[key]="{ item, index, internalItem, isExpanded, toggleExpand }"
    >
      <v-menu v-if="key === 'item.actions'">
        <template #activator="{ props }">
          <v-btn v-bind="{ ...props, ...actionBtnProps }" />
        </template>
        <slot
          v-bind="{ item, index, internalItem, isExpanded, toggleExpand }"
          name="item.actions"
        />
      </v-menu>

      <slot
        v-else
        v-bind="{ item, index, internalItem, isExpanded, toggleExpand }"
        :name="key"
      />
    </template>
  </v-data-table-server>
</template>

<script lang="ts" setup>
const { $api, $snack } = <any>useNuxtApp()
const slots = computed(() => Object.keys(useSlots()))
const uid = computed(() => {
  const instance = getCurrentInstance()
  return instance?.uid ?? '0'
})

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
  },
  defaultPagination: {
    type: Object,
    default() {
      return {
        pageNumber: 0,
        pageSize: 10
      }
    }
  },
  pageProp: {
    type: String,
    default: 'pageNumber'
  },
  pageSizeProp: {
    type: String,
    default: 'pageSize'
  },
  actionBtnProps: {
    type: Object,
    default(val: any) {
      const defaultProps = {
        icon: 'mdi-dots-horizontal-circle-outline',
        variant: 'text',
        density: 'compact'
      }

      return {
        ...defaultProps,
        ...val
      }
    }
  }
})

let items = reactive([])
let pagination = reactive({ ...props.defaultPagination })
const loading = ref(false)
const count = ref(0)

function setFilters<T>(filters: T) {
  const paginationFilter = {
    [props.pageProp]: pagination.pageNumber,
    [props.pageSizeProp]: pagination.pageSize
  }

  return { ...props.defaultFilters, ...filters, ...paginationFilter }
}

function clearFilters() {
  return { ...props.defaultFilters }
}

function setItems(data: any) {
  items = Array.isArray(data?.[props.dataProp])
    ? deepClone(data?.[props.dataProp])
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

function refresh() {
  count.value = 0
  items = []
  clearFilters()
  read()
}

onMounted(() => {
  read()
})

defineExpose({
  read,
  refresh,
  setFilters,
  clearFilters
})
</script>

<style lang="scss" src="./KDataTableServer.scss" />
