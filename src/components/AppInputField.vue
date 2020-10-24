<template>
  <div class="text-left overflow-hidden">  
    <label :for="title">
      {{ title }}
    </label>
    <input
      spellcheck="false"
      :id="title" 
      :name="title" 
      :type="type"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: "AppInputField",
  props: {
    title: String,
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number, Boolean],
      default: null,
    },
  },
}
</script>

<style lang="sass" scoped>
label
  display: block
  white-space: nowrap
  overflow: hidden

input, select
  font-size: $font-md
  border: $border
  width: 100%
  margin: 0.25rem 0
  padding: 0.5rem
  border-radius: 0.25rem
  transition: border 0.1s
  &:focus
    border: $border-blue
</style>