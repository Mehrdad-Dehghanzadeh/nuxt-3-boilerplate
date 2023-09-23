<template>
  <v-layout class="default-layout">
    <default-header />
    <default-main />
    <default-footer />
  </v-layout>
</template>

<script>
import DefaultFooter from '@includes/DefaultFooter/DefaultFooter'
import DefaultHeader from '@includes/DefaultHeader/DefaultHeader'
import DefaultMain from '@includes/DefaultMain/DefaultMain'
export default {
  name: 'DefaultLayout',
  components: { DefaultFooter, DefaultHeader, DefaultMain }
}
</script>
