<template>
  <input 
    type="submit"
    :value="value" 
    :class="type"
  >
</template>

<script>
export default {
  name: "InputButton",
  props: {
    value: String,
    type: {
      type: String,
      default: 'default',
    },
  },
}
</script>

<style lang="sass" scoped>
input
  color: $color-lightest
  font-size: $font-sm
  box-shadow: $shadow
  border-radius: 0.25rem
  cursor: pointer
  padding: 0.5rem 1rem
  transition: background 0.1s

.default
  background: $bg-blue
  &:hover
    background: $bg-bluer

.error
  background: $bg-red
  &:hover
    background: $bg-redder
</style>