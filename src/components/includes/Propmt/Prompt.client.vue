<template>
  <client-only>
    <div class="prompt">
      <v-dialog
        v-model="$prompt.ref.show"
        class="prompt-dialog"
        max-width="480"
        content-class="prompt-dialog__content"
        v-bind="$attrs"
        transition="dialog-bottom-transition"
        persistent
      >
        <v-sheet class="prompt-sheet">
          <div class="prompt-sheet__content">
            <v-icon
              class="mx-auto"
              :color="enumsProvider('Prompt', $prompt.ref.model.type)?.color"
              size="48px"
            >
              {{ enumsProvider('Prompt', $prompt.ref.model.type)?.icon }}
            </v-icon>

            <div class="prompt-sheet__text">
              <p v-if="$prompt.ref.model.title" class="prompt-sheet__title">
                {{ $prompt.ref.model.title }}
              </p>
              <p v-if="$prompt.ref.model.message" class="prompt-sheet__message">
                {{ $prompt.ref.model.message }}
              </p>
            </div>
          </div>

          <div class="prompt-sheet__actions">
            <v-btn
              v-if="!$prompt.ref.model.noCancelButton"
              :loading="$prompt.ref.model.cancelLoading"
              :disabled="$prompt.ref.model.loading"
              class="ml-2"
              @click="close"
              size="large"
              color="error"
            >
              {{ $prompt.ref.model.cancelButtonText }}
            </v-btn>

            <v-btn
              :loading="$prompt.ref.model.loading"
              :disabled="$prompt.ref.model.cancelLoading"
              @click="OK"
              size="large"
              color="#333"
            >
              {{ $prompt.ref.model.okButtonText }}
            </v-btn>
          </div>
        </v-sheet>
      </v-dialog>
    </div>
  </client-only>
</template>

<script lang="ts" setup>
const { $prompt } = <any>useNuxtApp()
const PromptEvents = getEnum('PromptEvents')

function close() {
  const cancelPrompt = new CustomEvent(PromptEvents.Cancel)
  dispatchEvent(cancelPrompt)
}

function OK() {
  const OKPrompt = new CustomEvent(PromptEvents.Ok, { detail: 'Ok' })
  dispatchEvent(OKPrompt)
}
</script>

<style lang="scss" src="./Prompt.scss" />
