<template>
  <div class="k-date-picker">
    <client-only>
      <v-text-field
        v-model="localValue"
        v-bind="$attrs"
        :id="`${safeId}_date_picker`"
        :name="`${safeName}_date_picker`"
        :rules="localRules"
        :placeholder="safePlaceholder"
        :append-inner-icon="props.appendIcon"
        @click:append-inner="show = true"
      />

      <persain-date
        v-model="date"
        type="date"
        :format="props.format"
        :range="props.range"
        :max="props.max"
        :show="show"
        :min="props.min"
        :element="`${safeId}_date_picker`"
        @close="close()"
        editable
      />
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { isPersainDate } from '@assets/validations/date'

const { safeId, safeName, safePlaceholder } = useControl()
defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  modelValue: {
    type: [String],
    default: ''
  },
  max: {
    type: String,
    default: ''
  },
  min: {
    type: String,
    default: ''
  },
  range: {
    type: Boolean,
    default: false
  },
  appendIcon: {
    type: String,
    default: 'mdi-calendar-search'
  },
  format: {
    type: String,
    default: 'YYYY-MM-DD HH:mm:ss'
  },
  rules: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['update:modelValue'])

const localRules: any = computed(() => {
  const { persainDate } = useValidations()
  return Array.isArray(props.rules) ? [...props.rules, persainDate] : [persainDate]
})

let date = ref<string>(props.modelValue)
let localValue = ref<string>(utcToJalaalie(props.modelValue))

watch(localValue, (val) => {
  if (!val || isPersainDate(val)) {
    date.value = jalaaliToUtc(val, props.format)
    emit('update:modelValue', date.value)
  }
})

let show = ref<boolean>(false)
function close() {
  show.value = false
  localValue.value = utcToJalaalie(date.value)
}
</script>
