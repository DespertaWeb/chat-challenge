<script setup>
import { RouterView } from 'vue-router'
import LeftSidebar from '@/views/LeftSidebar.vue'
</script>

<template>
  <nav class="main-nav">
    <img alt="Basf logo" class="logo" src="@/assets/logo-min.png" />

    <h1 class="green">Team Chat</h1>

    <span class="version-badge">V1.0</span>
  </nav>
  <main>
    <LeftSidebar />
    <router-view class="main-content"></router-view>
  </main>
</template>

<style lang="sass">
@import './assets/base'

.main-nav
  display: grid
  grid-template-columns: repeat(3, 1fr)
  align-items: center
  justify-items: center
  border-bottom: var(--border)
  position: static
  top: 0
  left: 0

  .logo
    justify-self: start
    height: 50px

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
  grid-template-columns: 1fr 70vw
  grid-template-rows: 1fr
  height: calc( 100vh - 4rem - var(--border-width))

.main-content
  border-left: var(--border)
  padding-left: var(--padding-lg)
  padding-right: var(--padding-lg)
  padding-bottom: var(--padding-lg)
  overflow: auto
</style>
