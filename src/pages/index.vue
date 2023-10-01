<template>
  <article>
    <v-card class="mx-auto" max-width="380px">
      <v-card-text class="mt-10">
        <k-select
          v-model="val"
          :items="['a', 'b', 'c']"
          label="test"
          variant="outlined"
        />
      </v-card-text>
    </v-card>
  </article>
</template>

<script lang="ts" setup>
useHead({
  title: 'Home'
})
const val = ref(null)
</script>
