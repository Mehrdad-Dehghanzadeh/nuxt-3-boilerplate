<template>
  <nuxt-layout class="error-page" name="empty">
    <div class="text-center">
      <h2 class="mt-10">{{ props?.error?.statusCode }}</h2>
      <h2 class="mt-4">{{ message || props?.error }}</h2>
    </div>
  </nuxt-layout>
</template>

<script lang="ts" setup>
type TProps = {
  error: any
}

const props = defineProps<TProps>()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Nuxt 3 Boilerplate` : 'Nuxt 3 Boilerplate'
  },

  title: 'Error'
})

const message = computed<string>(() => {
  let val: string = ''

  if (typeof props?.error === 'string') {
    val = props.error
  }

  if (typeof props.error === 'object') {
    val =
      props.error?.data?.resultMessage ||
      props.error?.data?.message ||
      props.error?.data?.statusMessage ||
      props.error?.cause?.data?.resultMessage ||
      props.error?.cause?.data?.message ||
      props.error?.cause?.data?.statusMessage
  }

  return val
})
</script>
