<template>
  <div class="text-left overflow-hidden">
    <label :for="title" class="nowrap">
      {{ title }}
    </label>
    <br>
    <div class="input-container">
      <input
        type="number"
        ref="numberField"
        :id="title" 
        :name="title"
        :value="numericValue"
        @input="updateValue($event.target.value)"
      />
      <div class="v-flex justify-content-center">
        <button @click="updateValue(numericValue+1)"><FontAwesomeIcon icon="caret-up"/></button>
        <button @click="updateValue(numericValue-1)"><FontAwesomeIcon icon="caret-down"/></button>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: "AppInputNumber",
  components: {
    FontAwesomeIcon,
  },
  props: {
    title: String,
    value: {
      type: Number,
      default: 0,
    },
  },
  data: function() {
    // Need a data value derived from the 'value' prop so that
    // the buttons can mutate it
    return {
      numericValue: null,
    }
  },
  watch: {
    value: {
      // Runs immediately upon creation
      immediate: true,
      handler (newValue) {
        this.$emit('input', newValue)
        this.numericValue = newValue
      }
    },
  },
  methods: {
    updateValue: function (newValue) {
      this.numericValue = newValue
      this.$emit('input', newValue)
    },
  }
}
</script>

<style lang="sass" scoped>
input
  padding: 0.5rem
  flex: 1
  font-size: $font-md
  // Remove arrows/spinners
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button
    -webkit-appearance: none
    margin: 0

button
  padding: 0 0.5rem
  font-size: $font-sm
  &:hover
    color: $color-lightest

.input-container
  background: $bg-input
  border: $border
  border-radius: 0.25rem
  margin: 0.25rem 0
  display: flex
  &:focus-within
    border: $border-lighter
</style>