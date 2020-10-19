<template>
  <div class="text-left overflow-hidden">  
    <label :for="title" class="nowrap">
      {{ title }}
    </label>
    <br>
    <select
      :id="title" 
      :name="title" 
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
      <option 
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "AppInputSelect",
  props: {
    title: String,
    value: {
      type: [String, Number],
      default: null,
    },
    // Accepts an array of options as a prop
    // Each option should be an object {name: '', value: ''}
    options: Array,
  },
}
</script>

<style lang="sass" scoped>
select
  font-size: $font-md
  border: $border
  border-radius: 0.25rem
  padding: 0.5rem 0.25rem
  margin: 0.25rem 0
  width: 100%
  cursor: pointer
  &:focus
    border: $border-lighter
</style>