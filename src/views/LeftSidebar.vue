<template>
  <section>
    <p v-for="(contact, index) in startedChats" :key="index">
      <h3>{{ new Date(contact.getLastChat().date).toLocaleDateString() }}</h3>
      {{ contact.getLastChat().text }}
    </p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { contacts as Contacts } from '../services/serializeData'

const contacts = ref(Contacts)

const startedChats = computed(() => {
  return contacts.value.filter(contact => {
    return contact.chats.length > 0
  })
})
</script>

<style lang="sass" scoped>
p
  padding: 7px 10px
  border-bottom: var(--border)
</style>
