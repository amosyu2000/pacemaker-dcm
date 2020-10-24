<template>
  <section>
    <header><slot name="header"/></header>
    <slot/>
  </section>
</template>

<script>
export default {
  name: "AppSection",
}
</script>

<style lang="sass" scoped>
section
  background: $bg-dark
  padding: 0.5rem 0.25rem
  margin: 0.5rem
  border-radius: 0.25rem
  display: flex
  flex-direction: column
  overflow-x: hidden

header
  color: $color-lighter
  font-weight: bold
  display: flex
  align-items: center
  white-space: nowrap
  padding-bottom: 0.5rem
  margin: 0.5rem
  border-bottom: $border-light
</style>