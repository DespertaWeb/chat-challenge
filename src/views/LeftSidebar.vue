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
  // Choose either full list of contacts or chats
  const lowerCasedSearch = search.value.toLowerCase()
  const list =
    search.value !== '' && search.value !== null
      ? contacts.value
      : startedChats.value

  // Filter by name
  return list.filter(contact => {
    const name = contact.contactName.toLowerCase()

    return name.search(lowerCasedSearch) !== -1
  })
})
</script>

<style lang="sass" scoped></style>
