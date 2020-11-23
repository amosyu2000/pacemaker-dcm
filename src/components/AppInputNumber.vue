<template>
  <div class="text-left">
    <label :for="title">
      {{ title }}
    </label>
    <div class="input-container">
      <input
        type="number"
        ref="numberField"
        :id="title" 
        :name="title"
        :value="numericValue"
        @input="onInput($event.target.value)"
      />
      <div class="v-flex justify-content-center">
        <button @click="incrementValue(increment)" tabindex="-1">
          <FontAwesomeIcon icon="caret-up"/>
        </button>
        <button @click="incrementValue(-increment)" tabindex="-1">
          <FontAwesomeIcon icon="caret-down"/>
        </button>
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
    value: Number,
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    increment: {
      type: Number,
      default: 1,
    }
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
        this.numericValue = this.toNumber(newValue)
      }
    },
  },
  methods: {
    updateValue: function (newValue) {
      this.numericValue = this.toNumber(newValue)
      this.$emit('input', this.numericValue)
    },
    toNumber: function(val) {
      const num = parseFloat(val)
      // Check that the number is within the bounds
      if (num >= this.max) {
        return this.max
      }
      if (num <= this.min) {
        return this.min
      }
      return num
    },
    onInput: function (newValue) {
      // Invalid input values will return an empty string "" instead of a number
      if (newValue !== '') {
        this.updateValue(newValue)
        this.$refs.numberField.value = this.numericValue
      }
      else {
        this.$refs.numberField.value = newValue
      }
    },
    incrementValue: function(increment) {
      // When incrementing, we want to preserve the decimal precision
      // Get the precision that we should round the incremented value to
      let precision = Math.max(this.precisionOf(this.numericValue), this.precisionOf(increment))
      this.updateValue((this.numericValue+increment).toFixed(precision))
    },
    // Return the decimal precision of a number
    // https://stackoverflow.com/a/17369245/12191708
    precisionOf: function(num) {
      if (Math.floor(num) === num) {
        return 0
      }
      else {
        return num.toString().split(".")[1].length || 0; 
      }
    },
  }
}
</script>

<style lang="sass" scoped>
label
  display: block
  white-space: nowrap
  overflow: hidden

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
    color: $color-lighter

.input-container
  background: $bg-input
  border: $border
  border-radius: 0.25rem
  margin: 0.25rem 0
  transition: border 0.1s
  display: flex
  &:focus-within
    border: $border-blue
</style>