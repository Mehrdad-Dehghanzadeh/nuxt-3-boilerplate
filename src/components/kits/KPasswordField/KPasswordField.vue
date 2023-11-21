<template>
  <div :class="['k-password-field', className]" :style="style">
    <v-text-field
      v-bind="{ ...attrs$, ...icon }"
      :type="safeType"
      :id="safeId"
      :name="safeName"
      :placeholder="safePlaceholder"
      @click:append="toggleShow"
      @click:appendInner="toggleShow"
    />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

const { className, attrs$, style } = useExcludeAttrs()
const { safeId, safeName, safePlaceholder } = useControl()

const { innerIcon } = defineProps({ innerIcon: Boolean })

const show = ref(false)

const icon = computed(() => {
  let val: any = {}

  val[innerIcon ? 'append-inner-icon' : 'append-icon'] = show.value
    ? 'mdi-eye'
    : 'mdi-eye-off'

  return val
})

const safeType = computed(() => {
  return show.value ? 'text' : 'password'
})

function toggleShow() {
  show.value = !show.value
}
</script>
