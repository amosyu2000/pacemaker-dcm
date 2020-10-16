<template>
  <div class="mt-2">
    <input 
      type="submit"
      :value="value" 
    >
    <br>
  </div>
</template>

<script>
export default {
  name: "InputButton",
  props: {
    value: String,
  },
}
</script>

<style lang="sass" scoped>
input
  background: $bg-blue
  color: $color-lightest
  font-size: $font-sm
  box-shadow: $shadow
  border-radius: 0.25rem
  cursor: pointer
  padding: 0.5rem 1rem
  transition: all 0.1s
  &:hover,
  &:active,
  &:focus
    background: $bg-bluer
</style>