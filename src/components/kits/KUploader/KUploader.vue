<template>
  <div :class="['k-uploader', className]">
    <template v-if="hasFile">
      <div class="k-uploader-has-file"></div>
    </template>

    <template v-else>
      <div class="k-uploader__wrapper" @click="open">
        <v-icon class="k-uploader__icon" color="primary" size="64">
          mdi-cloud-upload
        </v-icon>
      </div>
    </template>

    <client-only>
      <input
        class="k-uploader__input"
        :name="safeName"
        :id="safeId"
        type="file"
        ref="input"
      />
    </client-only>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  rules?: any[]
  acceptedType?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  rules: () => []
})
const { className, id } = useExcludeAttrs()
const { safeId, safeName } = useControl()

const input = ref<HTMLInputElement>()

const hasFile = computed(() => !!input?.value?.value)

function open() {
  input.value?.click()
}
</script>

<style src="./KUploader.scss" lang="scss" />
