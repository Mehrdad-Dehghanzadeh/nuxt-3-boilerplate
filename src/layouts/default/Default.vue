<template>
  <v-layout class="default-layout" full-height>
    <default-header />
    <default-main />
    <default-footer />
  </v-layout>
</template>

<script>
import DefaultFooter from './DefaultFooter/DefaultFooter.vue'
import DefaultHeader from './DefaultHeader/DefaultHeader.vue'
import DefaultMain from './DefaultMain/DefaultMain.vue'

export default {
  name: 'DefaultLayout',
  components: { DefaultFooter, DefaultHeader, DefaultMain }
}
</script>

<style lang="scss" src="./Default.scss" />
