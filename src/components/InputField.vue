<template>
  <div class="text-left">  
    <label :for="title" class="nowrap">
      <template v-if="title">
        {{ title }}
      </template>
      <slot v-else/>
    </label>
    <br>
    <input 
      spellcheck="false"
      :size="size"
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
    size: {
      type: Number,
      default: 20,
    },
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
  font-size: $font-md
  margin: 0.25rem 0
  padding: 0.5rem
  border-radius: 0.25rem
  &:active,
  &:focus
    border: $border-lighter
  &::-ms-reveal,
  &::-ms-clear
    display: none
</style>