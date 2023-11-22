<template>
  <article>
    <k-data-table-server
      class="pa-10"
      :headers="headers"
      resource="auth"
      method="tickets"
      count-prop="pagination.totalNumberOfEntries"
      data-prop="securities"
    >
      <template #item.name="{ item }"> {{ item?.securities?.securitiesName }} </template>

      <template #item.code="{ item }"> {{ item?.securities?.securitiesCode }} </template>

      <template #item.groupDescription="{ item }">
        {{ item?.securities?.securitiesGroupDescription }}
      </template>

      <template #item.sellingStartDate="{ item }">
        <time>
          {{
            item.securities?.features?.find(
              (el) => el.featureType === 'SELLING_START_DATE'
            )?.quantity?.value
          }}
        </time>
      </template>

      <template #item.sellingEndDate="{ item }">
        <time>
          {{
            item.securities?.features?.find((el) => el.featureType === 'SELLING_END_DATE')
              ?.quantity?.value
          }}
        </time>
      </template>

      <template #item.status="{ item }">
        <v-chip
          v-if="enumsProvider('SecuritiesStatus', item?.securities?.status)"
          :color="enumsProvider('SecuritiesStatus', item?.securities?.status)?.color"
          label
          small
        >
          {{ enumsProvider('SecuritiesStatus', item?.securities?.status)?.name }}
        </v-chip>
      </template>

      <template #item.actions="{ item }">
        <v-list>
          <v-list-item> <v-list-item-title>1</v-list-item-title></v-list-item>
          <v-list-item>
            <v-list-item-title>2</v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </k-data-table-server>
  </article>
</template>

<script lang="ts" setup>
useHead({
  title: 'Home'
})

definePageMeta({
  middleware: ['auth']
})

const headers = [
  { title: 'نام اوراق', key: 'name', align: 'center', minWidth: '120px' },
  { title: 'کد اوراق', key: 'code', align: 'center' },
  { title: 'گروه اوراق', key: 'groupDescription', align: 'center' },
  { title: 'روز آغاز فروش', key: 'sellingStartDate' },
  { title: 'روز پایان فروش', key: 'sellingEndDate' },
  { title: 'وضعیت', key: 'status', align: 'center' },

  {
    title: 'جزئیات',
    key: 'actions',
    align: 'center',
    sortable: false,
    width: '80'
  }
]

const f = <any>ref(null)

function clear() {
  f.value.clear()
}
</script>
