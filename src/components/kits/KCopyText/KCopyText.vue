<template>
  <div class="k-copy-text" @click="copy(text)">
    <slot />
  </div>
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
