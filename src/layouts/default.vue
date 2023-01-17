<template>
  <div class="default-layout">
    <default-header/>
    <main>
      <nuxt-page/>
    </main>
    <default-footer/>
  </div>
</template>

<script>
import DefaultFooter from "@includes/DefaultFooter/DefaultFooter.vue";
import DefaultHeader from "@includes/DefaultHeader/DefaultHeader.vue";

export default {
  name: 'DefaultLayout',
  components: {DefaultFooter, DefaultHeader}
}
</script>
