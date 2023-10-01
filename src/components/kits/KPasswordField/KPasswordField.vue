<template>
  <div ref="el" class="k-password-field">
    <v-text-field
      v-bind="{ ...$attrs, ...icon }"
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
const el = <any>ref(null)
const uid = computed(() => el.value?.__vueParentComponent?.uid)
const { safeId, safeName, safePlaceholder } = useControl(uid)
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
