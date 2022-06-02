<template>
  <section>
    <ContactCard
      v-for="(contact, index) in startedChats"
      :key="index"
      :contact="contact"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ContactCard from '../components/left-side-bar/ContactCard.vue'
import { contacts as Contacts } from '../services/serializeData'

const contacts = ref(Contacts)

const startedChats = computed(() => {
  return contacts.value.filter(contact => {
    return contact.chats.length > 0
  })
})
</script>

<style lang="sass" scoped></style>
