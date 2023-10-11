<template>
  <v-form
    ref="form"
    :id="safeId"
    :name="safeName"
    v-bind="$attrs"
    @submit.prevent="submit"
  >
    <slot />
  </v-form>
</template>

<script lang="ts" setup>
const form = <any>ref(null)
const { id, name } = <{ id: string; name: string }>useAttrs()
const { appName } = useAppConfig()

const emit = defineEmits(['onValid'])

function submit(e) {
  emit('onValid', e)
}

function clear() {
  form.value.reset()
}

const uid = computed(() => form?.value?.$?.uid)

const safeId = computed(() => {
  return `${appName}${id ? '_form_' + id : 'form_' + uid?.value}`
})

const safeName = computed(() => {
  return `${appName}${name ? '_form_' + name : 'form_' + uid?.value}`
})

defineExpose({
  clear
})
</script>
