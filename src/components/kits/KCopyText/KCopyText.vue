<template>
  <component :is="tag" class="k-copy-text" @click="copy(text)">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'KCopyText',

  props: {
    text: {
      type: String,
      default: ''
    },

    message: {
      type: String,
      default: 'متن کپی شد'
    },

    tag: {
      type: String,
      default: 'div'
    }
  },

  methods: {
    copy() {
      copyText(this.text)
      useSnackbar('success', this.message)
    }
  }
}
</script>

<style lang="scss" src="./KCopyText.scss" />
