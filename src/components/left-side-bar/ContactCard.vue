<template>
  <li @click="goTo">
    <img alt="Contact" class="avatar" :src="`/src/assets/${contact.photo}`" />
    <article>
      <header>
        <h3 class="green">{{ contact.contactName }}</h3>
        <span v-if="lastChat !== undefined"> {{ lastDate }} </span>
      </header>
      <p v-if="lastChat !== undefined">
        {{ lastChat }}
      </p>
    </article>
  </li>
</template>

<script setup>
import { onBeforeRouteUpdate } from 'vue-router'
import { computed, nextTick } from 'vue'
import router from '../../router'
import { useStore } from '../../stores/chatStore'

// Store
const store = useStore()

const props = defineProps({
  contact: Object
})

const lastChat = computed(() => {
  return props.contact.getLastChat().text
})
const lastDate = computed(() => {
  return new Date(props.contact.getLastChat().date).toLocaleDateString()
})

const goTo = async () => {
  // react to route changes...

  store.$patch({
    contact: props.contact
  })
  await nextTick()
  router.push({ name: 'ChatDetail', params: { id: props.contact.phone } })
}
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
    width: 100%
    display: block
    height: inherit

    header
      grid-template-columns: 1fr auto
      display: grid

      h3
        overflow: hidden
        height: 1.6rem

      span
        margin-left: 0.7rem
        color: var(--vt-c-text-light-2)

    p
      overflow: hidden
      color: var(--vt-c-text-light-2)
      max-height: 2.2rem
      line-height: 1.1
</style>
