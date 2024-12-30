<template>
  <div :class="['k-uploader', className]">
    <v-input ref="vNode" :model-value="modelValue" :rules="props.rules" v-bind="attrs$">
      <div v-if="hasFile && vNode?.isValid" class="k-uploader-has-file"></div>

      <div v-else :class="['k-uploader__wrapper', {}]" @click="open">
        <v-icon class="k-uploader__icon" color="primary" size="64">
          mdi-cloud-upload
        </v-icon>
        <small class="k-uploader__placeholder">{{ safePlaceholder }}</small>
      </div>

      <client-only>
        <input
          class="k-uploader__input"
          :name="safeName"
          :id="safeId"
          type="file"
          ref="input"
          @change="change"
        />
      </client-only>
    </v-input>
  </div>
</template>

<script lang="ts" setup>
import type { Props } from './types'

const props = withDefaults(defineProps<Props>(), {
  rules: () => []
})
const { className, attrs$ } = useExcludeAttrs()
const { safeId, safeName, safePlaceholder } = useControl()

const input = ref<HTMLInputElement>()
const hasFile = ref<boolean>()
let modelValue = ref<any>(null)
const model = defineModel<any>()
const vNode = ref()

function open() {
  input.value?.click()
}

function updateValue() {
  modelValue.value = input.value?.files?.[0]
  hasFile.value = !!input.value?.files?.[0]
}

function isValid() {
  return vNode.value
    ?.validate()
    .then((res: string[]) =>
      Array.isArray(res) && !res?.length
        ? Promise.resolve()
        : Promise.reject(new Error('is not Valid'))
    )
}

async function saveBase64() {
  try {
    await isValid()
    await toBase64(input.value?.files?.[0]).then((data) => {
      model.value = data
      return data
    })
  } catch (error: any) {
    console.log(error)
  }
}

async function change() {
  updateValue()
  await nextTick()
}

defineExpose({
  saveBase64
})
</script>

<style src="./KUploader.scss" lang="scss" />
