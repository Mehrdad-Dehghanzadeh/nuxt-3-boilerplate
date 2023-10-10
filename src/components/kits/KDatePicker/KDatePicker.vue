<template>
  <div class="k-date-picker">
    <client-only>
      <v-text-field
        v-model="localValue"
        v-bind="$attrs"
        :id="`${safeId}_date_picker`"
        :name="`${safeName}_date_picker`"
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
import { WritableComputedRef } from 'vue'
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
  }
})
const emit = defineEmits(['update:modelValue'])

const date = ref('')
let localValue: WritableComputedRef<string> = computed({
  get() {
    return utcToJalaalie(props.modelValue)
  },

  set(value) {
    emit('update:modelValue', value)
  }
})

let show = ref<boolean>(false)
function close() {
  show.value = false
  localValue.value = date.value
}
</script>
