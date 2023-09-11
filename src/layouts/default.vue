<template>
  <v-layout class="default-layout">
    <default-header />
    <main>
      <nuxt-page />
    </main>
    <default-footer />
  </v-layout>
</template>

<script>
import DefaultFooter from '@includes/DefaultFooter/DefaultFooter'
import DefaultHeader from '@includes/DefaultHeader/DefaultHeader'

export default {
  name: 'DefaultLayout',
  components: { DefaultFooter, DefaultHeader }
}
</script>
