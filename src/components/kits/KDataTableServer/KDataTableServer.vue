<template>
  <div class="k-data-table-server" v-bind="htmlAttr">
    <v-data-table-server
      v-bind="attrs$"
      :items="items"
      :items-length="count"
      :items-per-page="pagination.pageSize"
      :page="pagination.pageNumber"
      :loading="loading"
      @update:page="updatePage"
      @update:items-per-page="updateItemsPerPage"
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
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})
const { htmlAttr, attrs$ } = useExcludeAttrs()

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
        pageNumber: 1,
        pageSize: 5
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

let items: unknown[] = reactive([])
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
  const dataItems = getValueObject(data, props.dataProp)
  items = Array.isArray(dataItems) ? deepClone(dataItems) : deepClone([])
  count.value = getValueObject(data, props.countProp) ?? dataItems?.length
}

function read() {
  loading.value = true

  const filters = setFilters<object>({})
  $api[props.resource]
    [props.method](filters)
    .then((res: any) => {
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

function updatePage(val: number | string) {
  pagination.pageNumber = val
  read()
}

function updateItemsPerPage(val: number | string) {
  pagination.pageSize = val
  if (pagination.pageNumber === 1) {
    read()
  } else {
    pagination.pageNumber = 1
  }
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
