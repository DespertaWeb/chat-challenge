<template>
  <main>
    {{ contact.id }}
    <TransitionGroup name="list" tag="ul">
      <MsgBubble
        :msg="message"
        v-for="(message, index) in contact.chats"
        :key="index"
      />
    </TransitionGroup>
  </main>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '../stores/chatStore'
import MsgBubble from '../components/main/MsgBubble.vue'

// Store
const store = useStore()
const { contact } = storeToRefs(store)
</script>

<style lang="sass" scoped>
main
  padding-top: var(--padding-xxl)
  padding-bottom: var(--padding-xxl)
  display: block
  background: lighten(#d8bc8c, 25%)

  ul
    padding: 0
</style>
