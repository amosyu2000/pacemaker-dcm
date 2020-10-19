<template>
  <label 
    :title="title" 
    @click.prevent
  >
    <input type="submit" name="image" value="image">
    <FontAwesomeIcon :icon="icon"/>
  </label>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
export default {
  name: "AppInputIcon",
  props: {
    icon: String,
    title: {
      type: String,
      default: null,
    }
  },
  components: {
    FontAwesomeIcon,
  },
}
</script>

<style lang="sass" scoped>
label
  color: $color-lighter
  font-size: $font-sm
  padding: 0.5rem
  border-radius: 0.25rem
  cursor: pointer
  transition: background 0.1s ease-in
  &:hover
    background: $bg-dark
input
  display: none
</style>