<script setup>
import { RouterView } from 'vue-router'
import LeftSidebar from '@/views/LeftSidebar.vue'
</script>

<template>
  <header>
    <img alt="Basf logo" class="logo" src="@/assets/logo.png" />

    <h1 class="green">Team Chat</h1>

    <span class="version-badge">V1.0</span>
  </header>
  <main>
    <LeftSidebar />
    <router-view class="main-content"></router-view>
  </main>
</template>

<style lang="sass">
@import './assets/base'
:root
  --border: 1px

header
  display: grid
  grid-template-columns: repeat(3, 1fr)
  align-items: center
  justify-items: center
  border-bottom: var(--border) solid #e0e0e0
  position: static
  top: 0
  left: 0

  .logo
    justify-self: start
    height: 4rem

  .version-badge
    justify-self: end
    padding:  5px 10px
    margin-right: 20px
    font-size: 0.7rem
    background-color: #eee
    border-radius: 10px
    transition: var(--transition)
    &:hover
      background-color: hsla(160, 100%, 37%, 0.2)

main
  display: grid
  grid-template-columns: 1fr 80vw
  grid-template-rows: 1fr
  column-gap: 1rem
  height: calc( 100vh - 4rem - var(--border))

  .left-sidebar
    border: 1px solid #eee


LeftSidebar
  background: red

.main-content
  background-color: orange
</style>
