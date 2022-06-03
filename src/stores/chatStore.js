import { defineStore } from 'pinia'

export const useStore = defineStore('chatStore', {
  state: () => (
    {
      contact: {}
    })
  })