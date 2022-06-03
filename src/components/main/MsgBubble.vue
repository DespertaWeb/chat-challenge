<template>
  <article class="list-move speechbubble" :class="`msg${type}`">
    <div class="avatar-wrapper">
      <img alt="Contact" class="avatar" :src="profilePic" />
      <p>
        {{ msgDate }}
      </p>
    </div>

    <div class="body">
      <p>
        {{ msg.text }}
      </p>
    </div>
  </article>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useStore } from '../../stores/chatStore'
const TODAY = new Date().toLocaleDateString()

// Store
const store = useStore()
const { contact } = storeToRefs(store)

const props = defineProps(['msg'])

const isMsgSent = computed(() => {
  return props.msg.hasOwnProperty('sent')
})

const type = computed(() => {
  return isMsgSent.value ? 'Sent' : 'Received'
})
const profilePic = computed(() => {
  return isMsgSent.value
    ? 'src/assets/images/user-profile-pic.jpg'
    : `src/assets/${contact.value.photo}`
})

const msgDate = computed(() => {
  const date = new Date(props.msg.date).toLocaleDateString([], {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit'
  })
  const time = new Date(props.msg.date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })
  return date < TODAY ? date : time
})
</script>

<style lang="sass" scoped>
.speechbubble
  width: 70%
  display: flex
  border: var(--border-width) solid #fff
  margin-bottom: 75px
  cursor: default

  .body
    display: flex
    align-items: center

    p
    text-align: justify
    align-items: center
    line-height: 1.75
    width: 100%
    padding: var(--padding-sm) var(--padding-md)

  .avatar-wrapper
    text-align: center
    font-size: .8em

    .avatar
      position: relative
      top: -1.5rem
      z-index: 1
      height: 3rem
      width: 3rem

.msgSent
  color: #fff
  background-color: #8cced8
  text-align: right
  float: right
  justify-content: end
  flex-direction: row-reverse

  border-top-left-radius: 2rem
  border-top-right-radius: 2rem
  border-bottom-left-radius: 2rem

  .avatar
    border-top-left-radius: 1rem
    border-top-right-radius: 1rem
    border-bottom-right-radius: 1rem



.msgReceived
  color: #fff
  background-color: rgba(140, 168, 216, 1)
  text-align: left
  justify-content: start
  border-top-right-radius: 2rem
  border-top-left-radius: 2rem
  border-bottom-right-radius: 2rem
  .avatar
    border-top-left-radius: 1rem
    border-top-right-radius: 1rem
    border-bottom-left-radius: 1rem


.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active
  transition: all 0.5s ease

.list-enter-from,
.list-leave-to
  opacity: 0
  transform: translateY(30px)

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active
  position: absolute
</style>
