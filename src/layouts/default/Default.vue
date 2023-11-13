<template>
  <v-layout class="default-layout">
    <default-header />
    <default-main />
    <default-footer />
  </v-layout>
</template>

<script>
import DefaultFooter from './DefaultFooter/DefaultFooter'
import DefaultHeader from './DefaultHeader/DefaultHeader'
import DefaultMain from './DefaultMain/DefaultMain'
export default {
  name: 'DefaultLayout',
  components: { DefaultFooter, DefaultHeader, DefaultMain }
}
</script>
