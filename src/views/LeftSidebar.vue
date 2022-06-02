<template>
  <section>
    <SearchInput v-model="search" />
    <ContactCard
      v-for="(contact, index) in listedChats"
      :key="index"
      :contact="contact"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ContactCard from '../components/left-side-bar/ContactCard.vue'
import SearchInput from '../components/left-side-bar/SearchInput.vue'
import { contacts as Contacts } from '../services/serializeData'

const contacts = ref(Contacts)
const search = ref('')

const startedChats = computed(() => {
  return contacts.value.filter(contact => {
    return contact.chats.length > 0
  })
})

const listedChats = computed(() => {
  if (search.value !== '' && search.value !== null) {
    return startedChats.value.filter(contact => {
      return (
        contact.contactName.toLowerCase().search(search.value.toLowerCase()) !==
        -1
      )
    })
  }
  console.log('contacts.value', contacts.value.length)

  return contacts.value
  // search.value
})
</script>

<style lang="sass" scoped></style>
