<template>
  <div class="text-left m-1">  
    <label :for="title">{{title}}</label>
    <br>
    <input 
      spellcheck="false"
      :id="title" 
      :name="title" 
      :placeholder="hint"
      :type="type"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
    <br>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    title: String,
    hint: {
      type: String,
      default: '',
    },
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
input
  color: $color-lighter
  background: $bg-input
  border: $border
  font-size: $font-md
  margin: 0.25rem 0
  padding: 0.5rem
  border-radius: 0.25rem
  &:active,
  &:focus
    border: $border-active
  &::-ms-reveal,
  &::-ms-clear
    display: none
</style>