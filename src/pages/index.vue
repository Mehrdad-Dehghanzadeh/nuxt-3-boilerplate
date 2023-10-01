<template>
  <article>
    <v-card class="mx-auto" max-width="380px">
      <v-card-text class="mt-10">
        <k-password-field
          v-model="val"
          id="1"
          label="test"
          variant="outlined"
          inner-icon
        />
      </v-card-text>
    </v-card>
  </article>
</template>

<script lang="ts" setup>
useHead({
  title: 'Home'
})
const val = ref('')
</script>
