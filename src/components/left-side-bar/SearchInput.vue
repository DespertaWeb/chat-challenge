<template>
  <label for="searchInput">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<style lang="sass" scoped>
label
  display: flex
  align-items: center
  border-bottom: var(--border)
  height: 5rem
  &::after
    content: ''
    display: block
    background: url('@/assets/icons/search.svg')
    width: 24px
    height: 24px
    position: absolute
    right: 2rem

  input
    padding: var(--padding-sm) var(--padding-md)
    margin: var(--padding-md)
    margin-right: var(--padding-xl)
    width: 100%
</style>
