<template>
  <li>
    <img alt="Contact" class="avatar" :src="`/src/assets/${contact.photo}`" />
    <article>
      <h3 class="green">{{ contact.contactName }}</h3>
      <p>
        {{ lastChat }}
      </p>
    </article>
  </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  contact: Object
})

const lastChat = computed(() => {
  return props.contact.chats[props.contact.chats.length - 1].text
})
</script>

<style lang="sass" scoped>
li
  display: flex
  border-bottom: var(--border)
  height: 5rem

  .avatar
    height: 5rem
    width: 5rem

  article
    overflow: hidden
    padding: var(--padding-sm)
    width: auto
    height: inherit

    h3
      display: block
      overflow: hidden

    p
      overflow: hidden
      color: var(--vt-c-text-light-2)
      max-height: 2.2rem
      line-height: 1.1
</style>
