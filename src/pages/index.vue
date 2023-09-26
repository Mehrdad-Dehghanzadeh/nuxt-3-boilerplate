<template>
  <article>
    <v-card class="mx-auto" max-width="380px">
      <v-card-text class="mt-10">
        <k-text-field
          v-model="val"
          id="1"
          label="test"
          variant="outlined"
          :rules="[legalNationalCode]"
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
const { legalNationalCode } = useValidations()
</script>
