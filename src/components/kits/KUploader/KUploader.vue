<template>
  <div :class="['k-uploader', className]">
    <v-input ref="vNode" :model-value="modelValue" :rules="props.rules" v-bind="attrs$">
      <template #default="{}">
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
      </template>
    </v-input>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  rules?: any[]
  acceptedType?: string[]
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  rules: () => []
})
const { className, attrs$ } = useExcludeAttrs()
const { safeId, safeName, safePlaceholder } = useControl()

const input = ref<HTMLInputElement>()
const hasFile = ref<boolean>()
let modelValue = ref<any>(null)
const vNode = ref()

function open() {
  input.value?.click()
}

function updateValue() {
  modelValue.value = input.value?.files?.[0]
  hasFile.value = !!input.value?.files?.[0]
}

function readFile() {
  toBase64(input.value?.files?.[0]).then((data) => {
    console.log(data)
  })
}

async function change() {
  updateValue()
  await nextTick()
  readFile()
}
</script>

<style src="./KUploader.scss" lang="scss" />
